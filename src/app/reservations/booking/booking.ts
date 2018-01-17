import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActionsSubject, Store} from '@ngrx/store';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';

import * as reservationsActions from '../store/actions/reservations-actions'
import * as fromRootStore from '../../_store';
import {Reservation} from '../models/res'
import {ReservationsService} from '../services/reservation-service'

@Component({
  selector: 'booking',
  template: `
    <section class="hero is-danger is-medium header-image">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            Book yall's reservation
          </h1>
          <h2 class="subtitle">
            Subtitle
          </h2>
        </div>
      </div>
    </section>
    <reservation-form (onSubmit)="submitted($event)"></reservation-form>
  `,
  styles: [`
    .header-image {
      background-size: cover;
      background: linear-gradient(rgba(0, 0, 0, 0.29), rgba(0, 0, 0, 0.59)), url('https://images.unsplash.com/photo-1456324504439-367cee3b3c32?dpr?dpr=2&auto=format&fit=crop&w=1500&h=1011&q=80&cs=tinysrgb&crop=') center;
    }
  `]
})
export class BookingComponent implements OnInit, OnDestroy {
  redirectSub: Subscription;

  constructor(private store: Store<fromRootStore.State>,
              private router: Router,
              private reservationService: ReservationsService,
              private actionsSubject: ActionsSubject) { }

  ngOnInit() {
    this.redirectSub = this.actionsSubject
      .asObservable()
      .filter(action => action.type === reservationsActions.CREATE_SUCCESS)
      .subscribe((action: reservationsActions.CreateSuccess) => this.router.navigate(['/reservations', action.payload.$key]))
  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

  submitted(reservation: Reservation) {
    console.log(reservation);
    // this.reservationService.createReservation(reservation)
    this.store.dispatch(new reservationsActions.Create(reservation));
  }

}
