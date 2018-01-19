import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';

import * as fromReservationsStore from '../store'
import * as reservationsActions from '../store/actions/reservations-actions';
import * as fromRootStore from '../../../store';
import {Reservation} from '../models/res'


@Component({
  selector: 'reservations-index',
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
    <reservation-list [reservations]="reservations$ | async"
                      (onShow)="showReservation($event)"
                      (onDelete)="deleteReservation($event)"
                      (onEdit)="editReservation($event)"
    ></reservation-list>
  `,
  styles: [`
    .header-image {
      background-size: cover;
      background: linear-gradient(rgba(0, 0, 0, 0.29), rgba(0, 0, 0, 0.59)), url('https://images.unsplash.com/photo-1456324504439-367cee3b3c32?dpr?dpr=2&auto=format&fit=crop&w=1500&h=1011&q=80&cs=tinysrgb&crop=') center;
    }
  `]
})
export class ReservationsIndexComponent implements OnInit {

  reservations$: Observable<Reservation[]>;

  constructor(public store: Store<fromRootStore.State>, private router: Router, private actR: ActivatedRoute) { }

  ngOnInit() {
    this.reservations$ = this.store.select(fromReservationsStore.getAllReservations);
    this.store.dispatch(new reservationsActions.LoadAll());
  }

  editReservation(reservation: Reservation) {
    this.store.dispatch(new reservationsActions.SetCurrentReservationId(reservation.$key));
    this.router.navigate(['/reservations', reservation.$key, 'edit'])
  }

  showReservation(reservation: Reservation) {
    this.store.dispatch(new reservationsActions.SetCurrentReservationId(reservation.$key));
    this.router.navigate(['/reservations', reservation.$key])
  }

  deleteReservation(reservation: Reservation) {
    const r = confirm('Are you sure?');
    if (r) {
      this.store.dispatch(new reservationsActions.Delete(reservation));
    }
  }

}
