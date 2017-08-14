import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth/guards/auth.guard'

const routes: Routes = [
  {
    path: '',
    loadChildren: './static/index#HomeModule', data: { animation: 'home' }
  },
  {
    path: 'booking',
    loadChildren: './booking/index#BookingModule', data: { animation: 'booking' },
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    loadChildren: './user/index#UsersModule', data: { animation: 'users' },
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: './auth/index#AuthModule', data: { animation: 'login' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [AuthGuard]
})
export class AppRoutingModule { }
