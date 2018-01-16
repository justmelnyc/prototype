import {Component, OnDestroy, OnInit} from '@angular/core'
import { Router } from '@angular/router'

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';
import {User} from './auth/models/user'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import {AuthServiceNew} from './auth/services/auth'
import {Store} from 'store'

@Component({
  selector: 'root',
  template: `
    <masthead [user]='user$ | async' (logout)="onLogout()"></masthead>
    <!--<div style="position: absolute; left: 50%; top: 50%;" *ngIf="(user$ | async)?.authenticated">-->
    <!--<pre style="padding: 1em; z-index: 1000; position: relative; left: -50%; top: -50%; font-size: 1.2em;">{{ user$ | async | json}}</pre>-->
    <!--</div>-->
    <div [@routerAnimation]="getRouteAnimation(route)">
      <router-outlet #route="outlet"></router-outlet>
    </div>
    <!--<foot></foot>-->
  `,
  styles: [``],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width: '100%',
            opacity: 0,
            transform: 'translateY(3%)'
          }),
          {optional: true}),
        // move page off screen right on leave
        // query(':leave',
        //   animate('500ms ease',
        //     style({
        //       position: 'fixed',
        //       width: '100%',
        //       transform: 'translateX(100%)'
        //     })
        //   ),
        //   {optional: true}),
        // move page in screen from left to right
        query(':enter',
          animate('300ms ease',
            style({
              opacity: 1,
              transform: 'translateY(0%)'
            })
          ),
          {optional: true}),
      ])
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {

  user$: Observable<User>;
  subscription: Subscription;
  title = 'Prototype';
  constructor(private store: Store,
              private authService: AuthServiceNew,
              private router: Router) {}

  // change the animation state
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }

  ngOnInit() {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async onLogout() {
    await this.authService.logoutUser();
    this.router.navigate(['/login']);
  }

}
