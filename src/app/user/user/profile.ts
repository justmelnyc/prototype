import { Component, OnInit } from '@angular/core';
import {AuthServiceNew} from '../../auth/services/auth'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'

import {User} from '../../auth/models/user'
import {Store} from 'store'


@Component({
  selector: 'profile',
  styleUrls: ['profile.scss'],
  template: `
    <section class="section">
      <div class="container profile">
        <user-profile [user]="user$ | async"></user-profile>
      </div>
      <div class="columns">
      </div>
    </section>
  `,
})
export class ProfileComponent implements OnInit {
  user$: Observable<User>;
  subscription: Subscription;

  constructor(private store: Store,
              private authService: AuthServiceNew) { }

  ngOnInit() {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  logOut() {
    this.authService.logoutUser();
  }
}
