import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './core/auth.service'
import { fadeInAnimation } from './animations/index';

@Component({
  selector: 'root',
  template: `
  <masthead>
    <!--<span class="nav-item" *ngIf="auth.currentUser">-->
            <!--<a class="button is-danger" (click)="logout()">-->
              <!--<span>Sign Out</span>-->
            <!--</a>-->
    <!--</span>-->
  </masthead>
  <div class="route-container" [@fadeInAnimation]>
    <router-outlet></router-outlet>
  </div>
  <!--<foot></foot>-->
  `,
  styles: [`
    .route-container {
      position:relative;
    }
    .route-container>* {
      display:block;
    }
  `],
  animations: [fadeInAnimation]
})
export class AppComponent {
  title = 'Prototype';
  constructor(public auth: AuthService, private router: Router) {}

}
