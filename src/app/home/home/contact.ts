import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'contact',
  template: `
    <section class="hero is-primary is-medium header-image">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">contact</h1><h2 class="subtitle">Subtitle</h2>
        </div>
      </div>
    </section>
    <section class="section">
      <p class="has-text-centered">Contact Form goes here.</p>
      <div class="columns content is-centered">
        
        <form class="column is-half" autocomplete="off" novalidate [formGroup]="contactForm" (submit)="submitForm()">
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
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" placeholder="Say Hello!" formControlName="message"></textarea>
            </div>
          </div>
          
          <div class="field" style="margin: 1em 0">
            <div class="control">
              <button class="button is-primary" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  `,
  styles: [`
    .header-image {
      background-size: cover;
      background: linear-gradient(rgba(0, 0, 0, 0.29), rgba(0, 0, 0, 0.59)), url('https://images.unsplash.com/photo-1473181488821-2d23949a045a?dpr?dpr=2&auto=format&fit=crop&w=1500&h=1011&q=80&cs=tinysrgb&crop=') center;
    }
  `]
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  submitForm() {
    console.log(this.contactForm.value);

  }


}
