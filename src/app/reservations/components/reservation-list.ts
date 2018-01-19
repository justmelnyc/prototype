import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Reservation} from '../models/res'

@Component({
  selector: 'reservation-list',
  template: `
    <table *ngIf="reservations; else loading" class="table table-hover">
      <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Date</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr class="reservation-row" *ngFor="let r of reservations; let i = index">
        <th scope="row">{{i + 1}}</th>
        <td>{{r.name}}</td>
        <td>{{r.email}}</td>
        <td>{{r.reservationDate}}</td>
        <td>
          <span class="float-right">
            <button (click)="showDetails(r)" class="button is-primary">
              DETAILS
            </button>
            <button (click)="editReservation(r)" class="button is-warning">
              EDIT
            </button>
            <button (click)="deleteReservation(r)" class="button is-danger">
              DELETE
            </button>
          </span>
        </td>
      </tr>
      </tbody>
    </table>

    <ng-template #loading>
      <span>loading reservations...</span>
    </ng-template>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReservationsListComponent implements OnInit {

  @Input() reservations: Reservation[];
  @Output() onEdit = new EventEmitter<Reservation>();
  @Output() onShow = new EventEmitter<Reservation>();
  @Output() onDelete = new EventEmitter<Reservation>();

  constructor() {}

  ngOnInit() {}

  showDetails(reservation: Reservation) {
    this.onShow.emit(reservation);
  }

  editReservation(reservation: Reservation) {
    this.onEdit.emit(reservation)
  }

  deleteReservation(reservation: Reservation) {
    this.onDelete.emit(reservation)
  }

}
