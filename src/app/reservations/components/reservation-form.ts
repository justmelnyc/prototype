import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Reservation} from '../models/res'


@Component({
  selector: 'reservation-form',
  template: `
    <section class="section">
    <p class="has-text-centered">Reservation Form goes here.</p>
    <div class="columns content is-centered">
    <form class="column is-half form" novalidate (submit)="submit()" [formGroup]="form" >
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

      <!--<div class="field">-->
        <!--<label class="label">Message</label>-->
        <!--<div class="control">-->
          <!--<textarea class="textarea" placeholder="Say Hello!" formControlName="phone"></textarea>-->
        <!--</div>-->
      <!--</div>-->

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

  @Input() reservation: Reservation = {
    $key: undefined,
    name: '',
    email: '',
    // phone: ''
  };

  @Output() onSubmit = new EventEmitter<Reservation>();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      '$key': [this.reservation.$key],
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

}
