import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users',
  template: `
    <section class="hero is-info is-medium header-image acct">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            These are the users yall
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
        <span class="nav-item">
            <a class="button is-warning" routerLink="n6zQKC807GbCcsMXtCj8zlEDnAS2">
              <span>got to mel's profile</span>
            </a>
    </span>
      </div>
    </section>
  `,
  styles: [`
    .header-image {
      background-size: cover;
      background: linear-gradient(rgba(0, 0, 0, 0.29), rgba(0, 0, 0, 0.59)), url('https://images.unsplash.com/photo-1454328911520-ccf83f1ef41d?dpr?dpr=2&auto=format&fit=crop&w=1500&h=1011&q=80&cs=tinysrgb&crop=') center;
    }
  `]
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
