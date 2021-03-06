import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core'
import {AuthServiceNew} from '../../auth/services/auth'
import {User} from '../../auth/models/user'


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
          <a routerLink="reservations" routerLinkActive="is-active" class="navbar-item is-hidden-desktop-only">
            Reservations
          </a>
          <a routerLink="users" routerLinkActive="is-active" class="navbar-item is-hidden-desktop-only">
            Clients
          </a>
          <a routerLink="contact" routerLinkActive="is-active" class="navbar-item is-hidden-desktop-only">
            Contact
          </a>
          <span class="navbar-item " >
            <a class="button is-warning" routerLink="login" *ngIf="user === null; else alreadyLoggedIn">
              <span>Sign In</span>
            </a>
            <ng-template #alreadyLoggedIn>
              <div class="navbar-item has-dropdown is-right is-hoverable">
                <a class="navbar-link is-active avatar is-right">
                  <img class="card-img-top" [src]="user?.photoURL || 'https://api.adorable.io/avatars/109/fire.png'" width=50px>
                </a>
                <div class="navbar-dropdown is-right">
                  <a class="navbar-item " [routerLink]="['reservations', 'booking']">
                    Book Reservation
                  </a>
                  <hr class="navbar-divider">
                  <a class="navbar-item " [routerLink]="['users', 'n6zQKC807GbCcsMXtCj8zlEDnAS2']">
                    Account
                  </a>
                  <a class="navbar-item" routerLink="login">
                    Test Log In
                  </a>
                  <hr class="navbar-divider">
                  <a class="navbar-item" (click)="logoutUser()">
                    Sign Out
                  </a>
                </div>
              </div>
            </ng-template>
          </span>
        </div>
      </div>
    </nav>
   
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
  @Input()
  user: User;

  @Output()
  logout = new EventEmitter<any>();

  logoutUser() {
    this.logout.emit();
  }
}
