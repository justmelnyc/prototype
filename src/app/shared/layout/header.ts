import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'masthead',
  template: `
    <header class="nav" style="z-index: 900">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <wordmark routerLink="/" ></wordmark>
          </a>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <a routerLink="/" routerLinkActive="is-active" 
             [routerLinkActiveOptions]="{exact:true}" 
             class="nav-item" >
            Home
          </a>
          <a routerLink="booking" routerLinkActive="is-active" class="nav-item">
            Booking
          </a>
          <a routerLink="users" routerLinkActive="is-active" class="nav-item">
            Users
          </a>
          <a routerLink="contact" routerLinkActive="is-active" class="nav-item">
            Contact
          </a>
          <ng-content></ng-content>
        </div>
      </div>
    </header>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor() {

  }
}
