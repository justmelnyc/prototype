import { Component, OnInit } from '@angular/core';
import {AuthServiceNew} from '../../auth/services/auth'
import {Store} from 'store'
import {User} from '../../auth/models/user'
import {Subscription} from 'rxjs/Subscription'
import {Observable} from 'rxjs/Observable'
import {UsersService} from '../services/users'

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
      <div class="container content columns has-text-centered"  style="padding-bottom: 40em">
        <div *ngFor="let user of users$ | async" class="column">
          <aside>
            <div class="box" *ngIf="user" style="padding-top: 1em">
              <header class="header">
                <a class="author" href="#" target="_blank">
                  <figure class="avatar">
                    <img class="card-img-top" [src]="user.photoURL || 'https://api.adorable.io/avatars/109/fire.png'" width=50px>
                  </figure>
                  <div class="name">
                    <strong class="fullname">{{ user.displayName }}</strong>
                    <span class="email">{{ user.email }}</span>
                  </div>
                </a>
              </header>
              <button class="button is-warning" routerLink="n6zQKC807GbCcsMXtCj8zlEDnAS2">see profile</button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .header-image {
      background-size: cover;
      background: linear-gradient(rgba(0, 0, 0, 0.29), rgba(0, 0, 0, 0.59)), url('https://images.unsplash.com/photo-1454328911520-ccf83f1ef41d?dpr?dpr=2&auto=format&fit=crop&w=1500&h=1011&q=80&cs=tinysrgb&crop=') center;
    }
    .avatar img { border-radius: 200px; } .button { margin: 1.5em;}
  `]
})
export class UsersComponent implements OnInit {
  subscription: Subscription;

  private usersLimit = 10;
  users$;

  public user$: Observable<User>;

  constructor(private store: Store,
              private usersService: UsersService,
              private authService: AuthServiceNew) { }

  ngOnInit() {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
    this.users$ = this.usersService.getAllUsers({query: {
      limitToFirst: this.usersLimit
    }})
      .publishReplay().refCount(); // to avoid multiple subscribe network load
  }

}
