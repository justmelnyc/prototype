import {Action} from '@ngrx/store';
import {Reservation} from '../../models/res';

export const LOAD_ALL = '[Reservations] LOAD ALL';
export const LOAD_ALL_SUCCESS = '[Reservations] LOAD ALL SUCCESS';

export const LOAD = '[Reservations] LOAD';
export const LOAD_SUCCESS = '[Reservations] LOAD SUCCESS';

export const CREATE = '[Reservations] CREATE';
export const CREATE_SUCCESS = '[Reservations] CREATE SUCCESS';

export const UPDATE = '[Reservations] UPDATE';
export const UPDATE_SUCCESS = '[Reservations] UPDATE SUCCESS';

export const DELETE = '[Reservations] DELETE';
export const DELETE_SUCCESS = '[Reservations] DELETE SUCCESS';

export const SET_CURRENT_RESERVATION_ID = '[Reservations] SET CURRENT RESERVATION ID';

export class SetCurrentReservationId implements Action {
  readonly type = SET_CURRENT_RESERVATION_ID;
  constructor(public payload?: string) {}
}

export class LoadAll implements Action {
  readonly type = LOAD_ALL;
  constructor() {}
}

export class Load implements Action {
  readonly type = LOAD;
  constructor(public payload?: string) {}
}

export class Create implements Action {
  readonly type = CREATE;
  constructor(public payload?: Reservation) {}
}


export class Update implements Action {
  readonly type = UPDATE;
  constructor(public payload?: Reservation) {}
}

export class Delete implements Action {
  readonly type = DELETE;
  constructor(public payload?: Reservation) {}
}

export class LoadAllSuccess implements Action {
  readonly type = LOAD_ALL_SUCCESS;
  constructor(public payload?: Reservation[]) {}
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public payload?: Reservation) {}
}

export class CreateSuccess implements Action {
  readonly type = CREATE_SUCCESS;
  constructor(public payload?: Reservation) {
    console.log('reservation-action-createSuccess = ', payload);
  }
}

export class UpdateSuccess implements Action {
  readonly type = UPDATE_SUCCESS;
  constructor(public payload?: Reservation) {}
}

export class DeleteSuccess implements Action {
  readonly type = DELETE_SUCCESS;
  constructor(public payload?: Reservation) {}
}

export type All =
  | SetCurrentReservationId
  | LoadAll
  | Load
  | Create
  | Update
  | Delete
  | LoadAllSuccess
  | LoadSuccess
  | UpdateSuccess
  | CreateSuccess
  | DeleteSuccess
