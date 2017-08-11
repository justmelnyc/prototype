import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'booking',
  template: `
    <section class="hero hero is-danger is-bold is-medium">
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


    <section class="section">
      <div class="container content" style="padding-bottom: 40em">
        <p class="has-text-centered">Skeleton template for a layout.</p>
      </div>
    </section>
  `,
  styles: []
})
export class BookingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
