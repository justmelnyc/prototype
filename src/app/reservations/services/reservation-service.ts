import { Injectable } from '@angular/core'
import {Observable} from 'rxjs/Observable'
import {Reservation} from '../models/res'
import {AngularFireAuth} from 'angularfire2/auth'
import {AngularFireDatabase, AngularFireDatabaseModule, AngularFireList} from 'angularfire2/database'
import {Http} from '@angular/http'
import {Subscription} from 'rxjs/Subscription';

import 'rxjs/add/operator/map'

@Injectable()
export class ReservationsService {

  reservations: AngularFireList<Reservation[]> = null;

  private basePath = '/reservations';
  private uid: string;
  newReservation$: Subscription = new Subscription();

  constructor(private http: Http, private afAuth: AngularFireAuth,
              private db: AngularFireDatabase ) {
    this.afAuth.authState.subscribe(user => {
      if (user) this.uid = user.uid
    })
  }

  index() {
    return this.db.list(`${this.basePath}`).valueChanges();
  }

  userIndex() {
    const reservations: Reservation[] = [];
    if (this.uid) {
      return this.db.list(`${this.basePath}/${this.uid}`).snapshotChanges()
        .map(items => {
          items.map(item => {
            reservations.push({$key: item.key, ...item.payload.val()});
          });
          return reservations;
        });
    } else {
      return Observable.of([]);
    }
  }

  show(reservationId: string) {
    return this.db.object(`${this.basePath}/${this.uid}/${reservationId}`).valueChanges();
  }

  createReservation(reservation: Reservation) {
    delete reservation.$key;
    return this.db.list(`${this.basePath}/${this.uid}`).push(reservation);
  }

  updateReservation(reservation: Reservation) {
    const reservationId = reservation.$key;
    delete reservation.$key;
    return this.db.object(`${this.basePath}/${this.uid}/${reservationId}`).update(reservation);
  }

  destroy(reservation: Reservation) {
    const reservationId = reservation.$key;
    return this.db.list(`${this.basePath}/${this.uid}/${reservationId}`).remove();
  }
}
