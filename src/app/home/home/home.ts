import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animations/index';

@Component({
  selector: 'home',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
  template: `
    <section class="hero hero is-primary is-bold is-large home">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            The eyes are windows to the soul
          </h1>
          <h2 class="subtitle">
            Subtitle
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container content"  style="padding-bottom: 40em">
        <p class="has-text-centered">Skeleton template for a layout.</p>
      </div>
    </section>
  `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
