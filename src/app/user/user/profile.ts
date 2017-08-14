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
        <!--<div class="profile-options">-->
          <!--<div class="tabs is-fullwidth">-->
            <!--<ul>-->
              <!--<li class="link is-active"><a><span class="icon"><i class="fa fa-list"></i></span> <span>My Lists</span></a></li>-->
              <!--<li class="link"><a><span class="icon"><i class="fa fa-heart"></i></span> <span>My Likes</span></a></li>-->
              <!--<li class="link"><a><span class="icon"><i class="fa fa-th"></i></span> <span>My Posts</span></a></li>-->
              <!--<li class="link"><a><span class="icon"><i class="fa fa-bookmark"></i></span> <span>My Bookmarks</span></a></li>-->
            <!--</ul>-->
          <!--</div>-->
        <!--</div>-->
      </div>
      <!--<div class="columns">-->
        <!--<aside class="column is-one-third">-->
          <!--<div class="box" *ngIf="auth.currentUser">-->
            <!--<header class="header">-->
              <!--<a class="author" href="#" target="_blank">-->
                <!--<figure class="avatar">-->
                  <!--<img class="card-img-top" [src]="auth.currentUser.photoURL || 'https://api.adorable.io/avatars/109/fire.png'" width=50px>-->
                <!--</figure>-->
                <!--<div class="name">-->
                  <!--<strong class="fullname">{{ auth.currentUserDisplayName }}</strong>-->
                  <!--<span class="email">{{ auth.currentUser.email }}</span>-->
                <!--</div>-->
              <!--</a>-->
            <!--</header>-->
            <!--<button class="button is-danger" (click)="logOut()">Logout</button>-->
          <!--</div>-->

        <!--</aside>-->
        <!---->
      <!--</div>-->


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
