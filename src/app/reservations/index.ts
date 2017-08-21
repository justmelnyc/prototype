import {ModuleWithProviders, NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking';

import {StoreModule} from '@ngrx/store';
import * as fromReservations from './store'
import {EffectsModule} from '@ngrx/effects';
import {ReservationsEffects} from './store/effects/reservations-effects';

import {TitleResolver} from '../_core/resolvers/title.resolver'
import {ReservationsService} from './services/reservation-service'
import {ReservationsListComponent, ReservationFormComponent} from './components'
import {ReservationsIndexComponent} from './reservations/reservations'
import {ReactiveFormsModule} from '@angular/forms'
import {DayPickerComponent} from './components/wizard/day-picker'

const COMPONENTS = [ReservationFormComponent, BookingComponent, ReservationsIndexComponent, ReservationsListComponent, DayPickerComponent ]

const routes: Routes = [
  { path: '',
  children: [
  {
    path: '',
    component: ReservationsIndexComponent,
    data: {title: 'Reservations'},
    resolve: {title: TitleResolver}
  },
  {
    path: 'booking',
    component: BookingComponent,
    data: {title: 'New Reservation'},
    resolve: {title: TitleResolver}
  },
  {
    path: ':id',
    component: BookingComponent,
    data: {title: 'Reservation Detail'},
    resolve: {title: TitleResolver}
  },
  {
    path: ':id/edit',
    component: BookingComponent,
    data: {title: 'Reschedule'},
    resolve: {title: TitleResolver}
  }
]
}
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('reservations', fromReservations.reducers),
    EffectsModule.forFeature([ReservationsEffects])
  ],
  declarations: [COMPONENTS]
})
export class ReservationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ReservationModule,
      providers: [
        ReservationsService
      ]
    };
  }
}
