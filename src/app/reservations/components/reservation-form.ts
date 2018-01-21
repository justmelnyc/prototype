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
              <button class="button is-primary" type="submit" [disabled]="!form.valid || !isEditable">Submit</button>
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

  @Input() reservation: Reservation;
  @Input() isEditable: boolean;

  @Output() onSubmit = new EventEmitter<Reservation>();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.dayModifier = function (day: Date): string {
      if (!this.dateIsValid(day)) {
        return 'disabled';
      }
      return '';
    }.bind(this);

    this.dateOrViewChanged();
    this.reservation = {
      $key: null,
      name: '',
      email: '',
      reservationDate: ''
    };

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

      if (!this.isEditable) {
        this.form.controls['name'].disable();
        this.form.controls['email'].disable();
      }
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
  }

  changeDate(date: Date): void {
    this.viewDate = date;
    this.dateOrViewChanged();
  }

  dateIsValid(date: Date): boolean {
    return date >= this.minDate && date <= this.maxDate;
  }

}
