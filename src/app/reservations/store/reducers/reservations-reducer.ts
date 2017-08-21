import * as reservationsActions from '../actions/reservations-actions';
import * as _ from 'lodash';
import {createSelector} from '@ngrx/store';
import {Reservation} from '../../models/res'

export interface State {
  reservationList: Reservation[];
  currentReservationId?: string
}

export const INIT_RESERVATIONS_STATE: State = {
  reservationList: [],
  currentReservationId: undefined
};

export function reducer(state: State = INIT_RESERVATIONS_STATE, action: reservationsActions.All) {

  switch (action.type) {

    case reservationsActions.SET_CURRENT_RESERVATION_ID : {
      return Object.assign(
        {},
        state,
        {currentReservationId: action.payload}
      )
    }

    case reservationsActions.LOAD_ALL_SUCCESS : {
      return Object.assign(
        {},
        state,
        {reservationList: action.payload}
      )
    }

    case reservationsActions.LOAD_SUCCESS : {
      return handleReservationLoad(state, action.payload)
    }

    case reservationsActions.CREATE_SUCCESS : {
      return handleReservationCreate(state, action.payload);
    }

    case reservationsActions.UPDATE_SUCCESS : {
      return handleReservationUpdate(state, action.payload);
    }

    case reservationsActions.DELETE_SUCCESS : {
      return handleReservationDelete(state, action.payload);
    }

    default: {
      return state;
    }

  }
}

// Action Handlers (all handlers must be pure functions)

function handleReservationLoad(state: State, payload: Reservation): State {

  const newState = Object.assign({}, state);
  newState.reservationList = _.unionBy([payload], newState.reservationList, 'id');

  return newState; // return new contacts state without modifying the input
}

function handleReservationCreate(state: State, payload: Reservation): State {
  const newState = Object.assign({}, state); // Clone original state
  newState.reservationList = _.unionBy([payload], newState.reservationList, 'id');
  return newState; // return new state without modifying the input
}


function handleReservationUpdate(state: State, payload: Reservation): State {

  const newState = Object.assign({}, state);
  newState.reservationList = _.unionBy([payload], newState.reservationList, 'id');

  return newState;

}


function handleReservationDelete(state: State, payload: Reservation ): State {
  const newState = Object.assign({}, state);
  newState.reservationList = newState.reservationList.filter( c => c.$key !== payload.$key);
  return newState; // return new state without the deleted contact
}


// SELECTORS (all selectors must be pure functions)

export const getCurrentReservationId = (state: State): string => state.currentReservationId;
export const getAllReservations = (state: State): Reservation[] => state.reservationList;
export const getReservationById = (reservations: Reservation[], id: string): Reservation => _.find(reservations, {id});
export const getCurrentReservation = createSelector(getAllReservations, getCurrentReservationId, getReservationById);
