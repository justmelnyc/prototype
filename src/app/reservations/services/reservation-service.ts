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
    if (this.uid) {
      return this.db.list(`${this.basePath}/${this.uid}`).valueChanges();
    } else {
      return Observable.of([]);
    }
  }
  // showOne(): FirebaseListObservable<Reservation[]> {
  //   return this.firebase.database.list(`${this.basePath}/${this.authUid}`);
  // }

  // getItemsList(): FirebaseListObservable<Item[]> {
  //   if (!this.userId) return;
  //   this.items = this.db.list(`items/${this.userId}`);
  //   return this.items
  // }

  show(reservationId: string) {
    return this.db.list(`${this.basePath}`).valueChanges();
  }

  createReservation(reservation: Reservation) {
    delete reservation.$key;
    console.log('createReservation = ', reservation);
    const dbList = this.db.list(`${this.basePath}/${this.uid}`);
    dbList.push(reservation);
    return dbList.snapshotChanges();
  }

  // saveReservation(reservation: Reservation) {
  //   this.db.list(`${this.basePath}/${this.uid}`).push(reservation).then(
  //     (res) => {  // success
  //       this.store.dispatch(this.reservationsActions.CreateSuccess(createdReservation));
  //     },
  //     (error: Error) => {// error
  //       console.error(error);
  //     }
  //   );
  // }

  // create(reservation: Reservation) {
  //   return this.db.push(`${this.basePath}/`);
  // }

  update(reservation: Reservation) {
    return this.db.list(`${this.basePath}`);
  }

  destroy(reservation: Reservation) {
    return this.db.list(`${this.basePath}`);
  }
}
