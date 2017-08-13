import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../_core/auth.service'

@Component({
  selector: 'user-profile',
  styleUrls: ['profile.scss'],
  template: `
    <section class="section">
      <div class="container profile">
        <div class="section profile-heading">
          <div class="columns">
            <div class="column is-2">
              <div class="image is-128x128 avatar">
                <img class="card-img-top" [src]="auth.currentUser.photoURL || 'https://api.adorable.io/avatars/109/fire.png'">
              </div>
            </div>
            <div class="column is-4 name">
              <div>
                <span class="title is-bold">{{ auth.currentUserDisplayName }}</span>
                {{ auth.currentUser.email }}
                <span class="button is-primary is-outlined follow">Follow</span>
              </div>
              <p class="tagline">The users profile bio would go here, of course. It could be two lines</p>
            </div>
            <div class="column is-2 followers has-text-centered">
              <p class="stat-val">129k</p>
              <p class="stat-key">followers</p>
            </div>
            <div class="column is-2 following has-text-centered">
              <p class="stat-val">2k</p>
              <p class="stat-key">following</p>
            </div>
            <div class="column is-2 likes has-text-centered">
              <p class="stat-val">29</p>
              <p class="stat-key">likes</p>
            </div>
          </div>
        </div>
        <div class="profile-options">
          <div class="tabs is-fullwidth">
            <ul>
              <li class="link is-active"><a><span class="icon"><i class="fa fa-list"></i></span> <span>My Lists</span></a></li>
              <li class="link"><a><span class="icon"><i class="fa fa-heart"></i></span> <span>My Likes</span></a></li>
              <li class="link"><a><span class="icon"><i class="fa fa-th"></i></span> <span>My Posts</span></a></li>
              <li class="link"><a><span class="icon"><i class="fa fa-bookmark"></i></span> <span>My Bookmarks</span></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="columns">
        <aside class="column is-one-third">
          <div class="box" *ngIf="auth.currentUser">
            <header class="header">
              <a class="author" href="#" target="_blank">
                <figure class="avatar">
                  <img class="card-img-top" [src]="auth.currentUser.photoURL || 'https://api.adorable.io/avatars/109/fire.png'" width=50px>
                </figure>
                <div class="name">
                  <strong class="fullname">{{ auth.currentUserDisplayName }}</strong>
                  <span class="email">{{ auth.currentUser.email }}</span>
                </div>
              </a>
            </header>
            <button class="button is-danger" (click)="logOut()">Logout</button>
          </div>

        </aside>
        
      </div>


    </section>
  `,
})
export class UserProfileComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  logOut() {
    this.auth.signOut();
  }
}
