import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WordmarkComponent } from './wordmark/wordmark.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent, FooterComponent, WordmarkComponent],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
