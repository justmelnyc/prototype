import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service'

@Component({
  selector: 'user-profile',
  template: `
    <div class="box" *ngIf="auth.currentUser">
      <h3>Howdy, {{ auth.currentUserDisplayName }}</h3>
      <img class="card-img-top" [src]="auth.currentUser.photoURL || 'https://api.adorable.io/avatars/109/fire.png'" width=50px>
      <p class="text-truncate">UID: {{ auth.currentUserId }}</p>
      <button class="button">Logout</button>
    </div>
  `,
  styles: []
})
export class UserProfileComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
}
