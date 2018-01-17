import { Component } from '@angular/core';
import { trigger, style, animate, transition, query } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
export class AppComponent {

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }

}
