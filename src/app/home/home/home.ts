import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../_animations/index';

@Component({
  selector: 'home',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
  template: `
    <section class="hero is-primary is-large header-image">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">The eyes are windows to the soul</h1>
          <h2 class="subtitle is-5">A hero description could go here.</h2>
          <p><a class="button is-outlined" routerLink="booking">Reserve</a></p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container content">
        <header class="has-text-centered">
          <h2 class="title">Comparison table</h2>
          <p class="subtitle">See which elements of the framework exist (or not) in the other</p>
        </header>
        <div id="grid" class="columns">
          <div class="column">
            <div class="card">
              <div class="card-content">
                <p class="title">
                  “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                </p>
                <p class="subtitle">
                  Jeff Atwood
                </p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                    View on <a href="#">Twitter</a>
                  </span>
                </p>
                <p class="card-footer-item">
                  <span>
                    Share on <a href="#">Facebook</a>
                  </span>
                </p>
              </footer>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-content">
                <p class="title">
                  “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                </p>
                <p class="subtitle">
                  Jeff Atwood
                </p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                    View on <a href="#">Twitter</a>
                  </span>
                </p>
                <p class="card-footer-item">
                  <span>
                    Share on <a href="#">Facebook</a>
                  </span>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr>
  `,
  styles: [`
    
    .header-image {
      background-position: top;
      background-size: cover;
      background-image: linear-gradient(rgba(0, 0, 0, 0.29),rgba(0, 0, 0, 0.59)),url('https://images.unsplash.com/photo-1454329030972-00583f5f051f?dpr=2&auto=format&fit=crop&w=1500&h=1011&q=80&cs=tinysrgb&crop=') ;
    }
    .is-outlined {
      background-color:transparent;
      color:#fff;
      border-color: #fff;
    }
    .is-outlined:hover {
      background-color:#fff;
      color:#212121;
    }
    header {
      padding: 3rem;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
