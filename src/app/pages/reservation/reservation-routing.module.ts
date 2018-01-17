import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationComponent } from './reservation.component';
import { ReservationBookingComponent } from './reservation-booking/reservation-booking.component';

const routes: Routes = [
  {path: '', component: ReservationComponent, data: {title: 'Reservations'}},
  {path: 'booking', component: ReservationBookingComponent, data: {title: 'Reservations'}},
  {path: 'edit/:id', component: ReservationBookingComponent, data: {title: 'Reservations'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
