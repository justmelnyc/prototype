import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service'

@Component({
  selector: 'user-profile',
  template: `
    <section class="section">
      <div class="container">
        <div class="columns">
          <aside class="column is-one-third">
            <div class="box" *ngIf="auth.currentUser">
              <h3>Howdy, {{ auth.currentUserDisplayName }}</h3>
              <img class="card-img-top" [src]="auth.currentUser.photoURL || 'https://api.adorable.io/avatars/109/fire.png'" width=50px>
              <p class="text-truncate">Email: {{ auth.currentUser.email }}</p>
              <p class="text-truncate">UID: {{ auth.currentUserId }}</p>
              <button class="button is-danger" (click)="logOut()">Logout</button>
            </div>
          </aside>
          <div class="column is-one-third">
            <div class="card">
              <div class="card-content">
                <p class="title">
                  “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                </p>
                <p class="subtitle">
                  Jeff Atwood
                </p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                    View on <a href="#">Twitter</a>
                  </span>
                </p>
                <p class="card-footer-item">
                  <span>
                    Share on <a href="#">Facebook</a>
                  </span>
                </p>
              </footer>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  `,
  styles: []
})
export class UserProfileComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  logOut() {
    this.auth.signOut();
  }
}
