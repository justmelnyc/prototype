import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationComponent } from './reservation.component';
import { ReservationBookingComponent } from './reservation-booking/reservation-booking.component';

@NgModule({
  imports: [
    CommonModule,
    ReservationRoutingModule
  ],
  declarations: [ReservationComponent, ReservationBookingComponent]
})
export class ReservationModule { }
