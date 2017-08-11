import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  template: `
    <section class="hero hero is-warning is-bold is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            contact
          </h1>
          <h2 class="subtitle">
            Subtitle
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container content"  style="padding-bottom: 40em">
        <p class="has-text-centered">Form will go here.</p>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
