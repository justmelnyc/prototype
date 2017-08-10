import { NgModule } from '@angular/core';

// Components
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
// import { ProfileDropdownComponent } from './header/profile-dropdown/profile-dropdown.component';

// Modules
// import { SharedModule } from '../shared/index';
import { RouterModule } from '@angular/router';
import {LogoComponent} from './logo'
import {WordmarkComponent} from './workmark'

@NgModule({
  declarations: [
    // components
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    WordmarkComponent

    // sub components
    // ProfileDropdownComponent

    // pipes
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    WordmarkComponent
  ],
  imports: [
    // SharedModule,
    RouterModule
  ]
})
export class LayoutModule {}
