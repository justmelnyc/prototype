import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Reservation } from '../models/res';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map'

@Injectable()
export class ReservationsService {
  reservations: AngularFireList<Reservation[]> = null;
  private basePath = '/reservations';
  private uid: string;

  constructor(
    private http: Http,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private afs: AngularFirestore
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) this.uid = user.uid
    });
  }

  async userIndex() {
    const reservations: Reservation[] = [];
    if (this.uid) {
      const items = await this.afs.collection('reservations').snapshotChanges().take(1).toPromise();
      await items.map(item => {
        reservations.push({
          $key: item.payload.doc.id,
          email: item.payload.doc.data().email,
          name: item.payload.doc.data().name,
          reservationDate: item.payload.doc.data().reservationDate
        });
      });
      return reservations;
    } else {
      return await Observable.of([]).toPromise();
    }
  }

  show(reservationId: string) {
    return this.afs.doc(`reservations/${reservationId}`).valueChanges().take(1);
  }

  createReservation(reservation: Reservation) {
    delete reservation.$key;
    return this.afs.collection('reservations').add(reservation)
  }

  async updateReservation(reservation: Reservation) {
    const reservationId = reservation.$key;
    delete reservation.$key;
    await this.afs.doc(`reservations/${reservationId}`).update(reservation);
    reservation.$key = reservationId;
    return reservation;
  }

  destroy(reservation: Reservation) {
    return this.afs.doc(`reservations/${reservation.$key}`).delete();
  }
}
