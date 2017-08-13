import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './_core/auth.service'
import { baseAnimation } from './_animations/';

@Component({
  selector: 'root',
  template: `
  <masthead></masthead>
 
  <div class="route-container">
    <router-outlet></router-outlet>
  </div>
  <foot></foot>
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
