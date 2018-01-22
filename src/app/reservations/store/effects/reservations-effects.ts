import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';

import * as reservationsActions from '../actions/reservations-actions';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

import {Actions, Effect} from '@ngrx/effects';

import {ReservationsService} from '../../services/reservation-service';
import {Reservation} from '../../models/res'


@Injectable()
export class ReservationsEffects {

  @Effect()
  loadAll$: Observable<Action> = this.actions$
    .ofType(reservationsActions.LOAD_ALL) /* When [Reservations] LOAD ALL action is dispatched */
    .startWith(new reservationsActions.LoadAll())
    .switchMap(() =>
      Observable.fromPromise(this.reservationsService.userIndex())
        .map((reservations: Reservation[]) => new reservationsActions.LoadAllSuccess(reservations))
    );

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(reservationsActions.LOAD)
    .map( (action: reservationsActions.Load ) => action.payload)
    .switchMap((id) =>
      this.reservationsService.show(id)
        .mergeMap( (reservation: Reservation) => {
          return [
            new reservationsActions.LoadSuccess({$key: id, ...reservation}),
            new reservationsActions.SetCurrentReservationId(id)
          ]
        })
    );

  @Effect()
  create$: Observable<Action> = this.actions$
    .ofType(reservationsActions.CREATE)
    .map((action: reservationsActions.Create) => action.payload)
    .switchMap(reservation =>
      Observable.fromPromise(this.reservationsService.createReservation(reservation))
        .map((createdReservation) => {
          const result: Reservation = {
            $key: createdReservation.id,
            email: reservation.email,
            name: reservation.name,
            reservationDate: reservation.reservationDate
          };
          return new reservationsActions.CreateSuccess(result);
        })
    );

  @Effect()
  update$: Observable<Action> = this.actions$
    .ofType(reservationsActions.UPDATE)
    .map((action: reservationsActions.Update) => action.payload)
    .switchMap(reservation =>
      Observable.fromPromise(this.reservationsService.updateReservation(reservation))
        .map((updatedReservation) => new reservationsActions.UpdateSuccess(updatedReservation))
    );

  @Effect()
  destroy$: Observable<Action> = this.actions$
    .ofType(reservationsActions.DELETE)
    .map((action: reservationsActions.Delete) => action.payload)
    .switchMap((reservation) =>
      Observable.fromPromise(this.reservationsService.destroy(reservation))
        .map(() => new reservationsActions.DeleteSuccess(reservation))
    );

  constructor(
    private actions$: Actions,
    private reservationsService: ReservationsService
  ) {}
}
