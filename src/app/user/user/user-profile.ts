import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-profile',
  styles: [`.avatar, .follow { float: right; } .avatar img { border-radius: 200px; }`],
  template: `
    <div class="section profile-heading">
      <div class="columns">
        <div class="column is-2">
          <div class="image is-128x128 avatar">
            <img class="card-img-top" [src]="user?.photoURL || 'https://api.adorable.io/avatars/109/fire.png'">
          </div>
        </div>
        <div class="column is-4 name">
          <div>
            <span class="title is-bold">{{ user?.displayName }}</span>
            {{ user?.email }}
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
  `,
})
export class UserProfileComponent {

 @Input()
  user;
}
