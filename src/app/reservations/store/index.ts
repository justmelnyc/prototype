import * as fromReservations from './reducers/reservations-reducer'
import * as fromRootStore from '../../../store'
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface ReservationsState {
  reservations: fromReservations.State
}

// This is a lazy loaded state, so we need to extend from the App Root State
export interface State extends fromRootStore.State {
  'reservations': ReservationsState
}

export const reducers = {
  reservations: fromReservations.reducer
};

export const getReservationsRootState = createFeatureSelector<ReservationsState>('reservations');

export const getReservationsState = createSelector(
  getReservationsRootState,
  (state: ReservationsState) => state.reservations
);


export const getAllReservations = createSelector(
  getReservationsState,
  fromReservations.getAllReservations
);

export const getCurrentReservation = createSelector(
  getReservationsState,
  fromReservations.getCurrentReservation
);
