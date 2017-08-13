import { Component, OnInit } from '@angular/core';

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
    
    <section class="section">
      <div class="container content" style="padding-bottom: 40em">
        <p class="has-text-centered">Skeleton template for a layout.</p>
      </div>
    </section>
  `,
  styles: [`    
    .header-image {
      background-size: cover;
      background: linear-gradient(rgba(0, 0, 0, 0.29), rgba(0, 0, 0, 0.59)), url('https://images.unsplash.com/photo-1456324504439-367cee3b3c32?dpr?dpr=2&auto=format&fit=crop&w=1500&h=1011&q=80&cs=tinysrgb&crop=') center;
    }
  `]
})
export class BookingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
