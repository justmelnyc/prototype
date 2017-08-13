import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ModalModule } from './modal/modal.module'

import { HeaderComponent, FooterComponent, LogoComponent, WordmarkComponent } from './layout'

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    WordmarkComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    WordmarkComponent
  ],
})
export class SharedModule { }
