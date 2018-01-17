import {Component, OnChanges, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { SharedService } from '../../../_core/services/shared.service';
import { IReservation } from '../../../_core/interfaces/reservation';
import { IUser } from '../../../_core/interfaces/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  addDays,
  addHours,
  addMonths,
  addWeeks,
  endOfDay,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isSunday,
  isWeekend,
  isTuesday,
  isWednesday,
  isThursday,
  startOfDay,
  startOfMonth,
  startOfWeek,
  subDays,
  subMonths,
  subWeeks
} from 'date-fns';

@Component({
  selector: 'app-reservation-booking',
  templateUrl: './reservation-booking.component.html',
  styleUrls: ['./reservation-booking.component.scss']
})
export class ReservationBookingComponent implements OnInit, OnChanges {

  dayModifier: Function;
  minDate: Date = subDays(new Date(), 1);
  maxDate: Date = addWeeks(new Date(), 2);
  viewDate: Date = new Date();
  reservation: IReservation = {name: '', email: '', reservationDate: '', phone: ''};

  form: FormGroup;

  constructor(
    private sharedService: SharedService,
    private afAuth: AngularFireAuth,
    private afDB: AngularFireDatabase,
    private router: Router,
    public formBuilder: FormBuilder
  ) {
    this.dayModifier = function (day: Date): string {
      if (!this.dateIsValid(day)) {
        // day.cssClass = 'cal-disabled';
        return 'disabled';
      }
      return '';
    }.bind(this);
    this.dateOrViewChanged();

    this.form = this.formBuilder.group({
      'reservationDate' : [this.reservation.reservationDate],
      'name': [this.reservation.name, Validators.required],
      'email': [this.reservation.email, Validators.required]
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.reservation) {
      this.form.patchValue(this.reservation);
    }
  }

  async onSubmit() {
    try {
      const user: IUser = this.sharedService.getUser();
      let uid = '';
      if (!user.id) {
        await this.afAuth.authState.first().toPromise();
        uid = this.afAuth.auth.currentUser.uid;
      } else {
        uid = user.id;
      }
      const res = await this.afDB.list(`reservations/${uid}`).push(this.form.value);
      this.router.navigate(['/reservations']);
    } catch (e) {
      console.log(e);
    } finally {

    }
  }

  dayClicked(e) {
  }

  changeDate(date: Date): void {
    this.viewDate = date;
    this.dateOrViewChanged();
  }

  dateIsValid(date: Date): boolean {
    return date >= this.minDate && date <= this.maxDate;
  }

  dateOrViewChanged(): void {
  }

}
