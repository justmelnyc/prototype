import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';

const routes: Routes = [
  {path: '', loadChildren: './pages/home/home.module#HomeModule', data: {animation: 'home'}},
  {path: 'contact', loadChildren: './pages/contact/contact.module#ContactModule', data: {animation: 'contact'}},
  {path: 'login', component: LoginComponent, data: {animation: 'login'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
