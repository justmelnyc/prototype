import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './core/auth.service'
import { baseAnimation } from './animations/';

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
  <!--<div class="dropdown">-->
    <!--<div class="dropdown-trigger">-->
      <!--<button class="button is-info" aria-haspopup="true" aria-controls="dropdown-menu2">-->
        <!--<span>Content</span>-->
        <!--<span class="icon is-small">-->
                    <!--<i class="fa fa-angle-down" aria-hidden="true"></i>-->
                  <!--</span>-->
      <!--</button>-->
    <!--</div>-->
    <!--<div class="dropdown-menu" id="dropdown-menu2" role="menu">-->
      <!--<div class="dropdown-content">-->
        <!--<div class="dropdown-item">-->
          <!--<p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>-->
        <!--</div>-->
        <!--<hr class="dropdown-divider">-->
        <!--<div class="dropdown-item">-->
          <!--<p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>-->
        <!--</div>-->
        <!--<hr class="dropdown-divider">-->
        <!--<a href="#" class="dropdown-item">-->
          <!--This is a link-->
        <!--</a>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
  <div class="route-container">
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
  animations: [ baseAnimation ]
})
export class AppComponent {
  title = 'Prototype';
  constructor(public auth: AuthService, private router: Router) {}

  prepareRouteTransition(outlet) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }

}
