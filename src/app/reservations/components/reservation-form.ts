import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Reservation} from '../models/res'

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
  selector: 'reservation-form',
  template: `
    <section class="section">
      <p class="has-text-centered">Reservation Form goes here.</p>
      <div class="columns content is-centered">
        <form class="column is-half form" novalidate (submit)="submit()" [formGroup]="form">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Your full name" formControlName="name">
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <!--is-danger when invalid -->
              <input class="input" type="text" placeholder="Enter a valid email" formControlName="email">
            </div>
            <!--<p class="help is-danger">This email is invalid</p>-->
          </div>


          <div class="field">
            <day-picker formControlName="reservationDate" [parent]="form"
                        [dayModifier]="dayModifier"
                        [viewDate]="viewDate"
                        (dayClicked)="dayClicked($event.day)">
            </day-picker>
          </div>

          <div class="field" style="margin: 1em 0">
            <div class="control">
              <button class="button is-primary" type="submit" [disabled]="!form.valid">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  `,
  styles: [`
    .form {
      animation: fadeIn 600ms
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReservationFormComponent implements OnInit, OnChanges {

  dayModifier: Function;
  minDate: Date = subDays(new Date(), 1);
  maxDate: Date = addWeeks(new Date(), 2);
  viewDate: Date = new Date();

  prevBtnDisabled = false;

  nextBtnDisabled = false;

  @Input() reservation: Reservation = {
    $key: undefined,
    reservationDate: '',
    name: '',
    email: '',
    // phone: ''
  };

  @Output() onSubmit = new EventEmitter<Reservation>();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {

    this.dayModifier = function (day: Date): string {
      if (!this.dateIsValid(day)) {
        // day.cssClass = 'cal-disabled';
        return 'disabled';
      }
      return '';
    }.bind(this);
    this.dateOrViewChanged();

    this.form = this.formBuilder.group({
      '$key': [this.reservation.$key],
      'reservationDate': [this.reservation.reservationDate],
      'name': [this.reservation.name, Validators.required],
      'email': [this.reservation.email, Validators.required]
    })
  }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.reservation) {
      this.form.patchValue(this.reservation);
    }
  }

  submit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }

  }

  dayClicked(event) {
    console.log(event)
  }

  dateOrViewChanged(): void {
    // this.prevBtnDisabled = !this.dateIsValid(CalendarUtils.endOfPeriod(this.view, CalendarUtils.subPeriod(this.view, this.viewDate, 1)));
    // this.nextBtnDisabled = !this.dateIsValid(CalendarUtils.startOfPeriod(this.view, CalendarUtils.addPeriod(this.view, this.viewDate, 1)));
    // if (this.viewDate < this.minDate) {
    //   this.changeDate(this.minDate);
    // } else if (this.viewDate > this.maxDate) {
    //   this.changeDate(this.maxDate);
    // }
    // console.log('this')
  }

  changeDate(date: Date): void {
    this.viewDate = date;
    this.dateOrViewChanged();
  }

  dateIsValid(date: Date): boolean {
    return date >= this.minDate && date <= this.maxDate;
  }

}
