import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActionsSubject, Store} from '@ngrx/store';
import {Subscription} from 'rxjs/Subscription';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import * as fromReservationsStore from '../store'
import * as reservationsActions from '../store/actions/reservations-actions'
import * as fromRootStore from '../../_store';
import {Reservation} from '../models/res'
import {ReservationsService} from '../services/reservation-service'

export enum EPageType {
  CreatePage,
  EditPage,
  ViewPage
}

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
    <reservation-form [reservation]="reservation$ | async" (onSubmit)="submitted($event)" [isEditable]="isEditable"></reservation-form>
  `,
  styles: [`
    .header-image {
      background-size: cover;
      background: linear-gradient(rgba(0, 0, 0, 0.29), rgba(0, 0, 0, 0.59)), url('https://images.unsplash.com/photo-1456324504439-367cee3b3c32?dpr?dpr=2&auto=format&fit=crop&w=1500&h=1011&q=80&cs=tinysrgb&crop=') center;
    }
  `]
})

export class BookingComponent implements OnInit, OnDestroy {
  createReservationSub: Subscription = new Subscription();
  loadReservationSub: Subscription = new Subscription();
  updateReservationSub: Subscription = new Subscription();
  isEditable: boolean;
  reservation$: Observable<Reservation>;
  pageType: EPageType = EPageType.CreatePage;

  constructor(
    private store: Store<fromRootStore.State>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private reservationService: ReservationsService,
    private actionsSubject: ActionsSubject
  ) {
    this.activatedRoute.params.subscribe(params => {
      if (params.method === 'edit') {
        this.isEditable = true;
        this.pageType = EPageType.EditPage;
        this.getReservation(params.id);
      } else if (params.method === 'view') {
        this.isEditable = false;
        this.pageType = EPageType.ViewPage;
        this.getReservation(params.id);
      } else {
        this.isEditable = true;
        this.pageType = EPageType.CreatePage;
      }
    });
  }

  ngOnInit() {
    this.createReservationSub = this.actionsSubject
      .asObservable()
      .filter(action => action.type === reservationsActions.CREATE_SUCCESS)
      .subscribe((action: reservationsActions.CreateSuccess) => {
        this.router.navigate(['/reservations']);
      });

    this.loadReservationSub = this.actionsSubject
      .asObservable()
      .filter(action => action.type === reservationsActions.LOAD_SUCCESS)
      .subscribe((action: reservationsActions.LoadSuccess) => {
        this.reservation$ = this.store.select(fromReservationsStore.getCurrentReservation);
      });

    this.updateReservationSub = this.actionsSubject
      .asObservable()
      .filter(action => action.type === reservationsActions.UPDATE_SUCCESS)
      .subscribe((action: reservationsActions.UpdateSuccess) => {
        this.router.navigate(['/reservations']);
      });
  }

  ngOnDestroy() {
    this.createReservationSub.unsubscribe();
    this.loadReservationSub.unsubscribe();
    this.updateReservationSub.unsubscribe();
  }

  submitted(reservation: Reservation) {
    if (this.pageType === EPageType.CreatePage) {
      this.store.dispatch(new reservationsActions.Create(reservation));
    } else if (this.pageType === EPageType.EditPage) {
      this.store.dispatch(new reservationsActions.Update(reservation))
    }
  }

  getReservation(reservationId: string) {
    this.store.dispatch(new reservationsActions.Load(reservationId));
  }
}
