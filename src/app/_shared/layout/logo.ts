import { Component } from '@angular/core';

@Component({
  selector: 'logo',
  template: `
    <span class="svgIcon svgIcon--logoNew svgIcon--85px">
      <svg class="svgIcon-use" data-multipart="true" height="85" viewbox="3 -2 85 85" width="85">
        <path d="M57.356 15.733c-.93-.45-1.69.004-1.69 1.01v39.963l16.955 8.2c1.87.918 3.38.28 3.38-1.395V25.03c0-.16-.09-.3-.24-.38l-18.4-8.89v-.027z"></path>
        <path d="M35.333 46.872l19.343-30.4c.547-.857 1.75-1.196 2.676-.757l18.426 8.912c.118.06.16.2.092.3L55.665 56.71l-20.332-9.834v-.004z"></path>
        <path d="M17.814 16.275c-1.547-.748-2.072-.19-1.165 1.236l18.68 29.37 20.33 9.84-20.28-31.89a.426.426 0 0 0-.12-.11l-17.45-8.44z"></path>
        <path d="M35.333 63.495c0 1.675-1.266 2.432-2.814 1.683L16.68 57.52c-.92-.444-1.68-1.633-1.68-2.64V17.35c0-1.34 1.013-1.946 2.253-1.346l17.97 8.693c.068.03.11.095.11.166v38.633z"></path>
      </svg>
    </span>
  `,
  styles: [`
    .svgIcon--logoNew path:nth-child(1) {
      fill: #d0d2d3
    }
    .svgIcon--logoNew path:nth-child(2) {
      fill: #a6a8ab
    }
    .svgIcon--logoNew path:nth-child(3) {
      fill: #808184
    }
    .svgIcon--logoNew path:nth-child(4) {
      fill: #58595b
    }
  `]
})
export class LogoComponent {
  constructor() {

  }
}
