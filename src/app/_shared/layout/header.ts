import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AuthService} from '../../_core/auth.service'

@Component({
  selector: 'masthead',
  template: `
    <nav class="navbar u-boxShadowBottomThinLighter" >
      <div class="navbar-brand u-boxShadowBottomThinLighter">
        <a class="navbar-item" routerLink="/" >
          <wordmark routerLink="/" ></wordmark>
        </a>
        <div class="navbar-burger burger" data-target="navMenuExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenuExample" class="navbar-menu">
        <div class="navbar-start">
          
        </div>

        <div class="navbar-end">
          <a routerLink="/" routerLinkActive="is-active"
             [routerLinkActiveOptions]="{exact:true}"
             class="navbar-item is-hidden-desktop-only" >
            Home
          </a>
          <a routerLink="booking" routerLinkActive="is-active" class="navbar-item is-hidden-desktop-only">
            Booking
          </a>
          <a routerLink="users" routerLinkActive="is-active" class="navbar-item is-hidden-desktop-only">
            Clients
          </a>
          <a routerLink="contact" routerLinkActive="is-active" class="navbar-item is-hidden-desktop-only">
            Contact
          </a>
          <span class="navbar-item " >
            <a class="button is-warning" routerLink="login" *ngIf="user$.photoURL == null; else alreadyLoggedIn">
              <span>Sign In</span>
            </a>
            <ng-template #alreadyLoggedIn>
              <div class="navbar-item has-dropdown is-right is-hoverable">
                <a class="navbar-link is-active avatar is-right" >
                  <img class="card-img-top" [src]=" (user$ | async)?.photoURL || 'https://api.adorable.io/avatars/109/fire.png'" width=50px>
                </a>
                <div class="navbar-dropdown is-right">
                  <a class="navbar-item " routerLink="booking">
                    Book Reservation
                  </a>
                  <hr class="navbar-divider">
                  <a class="navbar-item " [routerLink]="['users', 'n6zQKC807GbCcsMXtCj8zlEDnAS2']">
                    Account
                  </a>
                  <a class="navbar-item" routerLink="login">
                    Test Log In
                  </a>
    
                  <a class="navbar-item">
                    Components
                  </a>
                  <hr class="navbar-divider">
                   <a class="navbar-item" (click)="logOut()">
                    Sign Out
                  </a>
            </div>
          </div>
          </ng-template>
          </span>
        </div>
      </div>
    </nav>
    <div style="position: absolute; left: 50%; top: 50%;">
      <pre style="padding: 1em; z-index: 1000; position: relative; left: -50%; top: -50%; font-size: 1.2em;">{{ (user$ | async)?.photoURL | json}}</pre>
    </div>
    
  `,
  styles: [`

    .u-boxShadowBottomThinLighter {
      box-shadow: 0 2px 2px -2px rgba(0,0,0,.15);
    }
    .navbar-item .avatar img {
       max-height: 2rem;
       max-width: 2rem;
       border-radius: 20px;
    }
    .navbar-item {
      padding: .1rem 1rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public user$ = this.auth.user;
  constructor(private auth: AuthService) {

  }
  logOut() {
    this.auth.signOut();
  }
}
