import { Injectable } from '@angular/core';

import { Store } from 'store';

import 'rxjs/add/operator/do';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import {AngularFireDatabase} from 'angularfire2/database'


export interface User {
  email: string,
  uid: string,
  photoURL: string,
  displayName: string,
  authenticated: boolean
}

@Injectable()
export class AuthServiceNew {
  testUser: User;

  // authState: any = null;

  auth$ = this.af.authState
    .do(next => {
      if (!next) {
        this.store.set('user', null);
        return;
      }
      const user: User = {
        email: next.email,
        uid: next.uid,
        photoURL: next.photoURL,
        displayName: next.displayName,
        authenticated: true
      };
      this.store.set('user', user);
    });

  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private af: AngularFireAuth
  ) {}

  get user() {
    return this.af.auth.currentUser;
  }

  get authState() {
    return this.af.authState;
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.socialSignIn(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider()
    return this.socialSignIn(provider);
  }


  private socialSignIn(provider) {
    return this.af.auth.signInWithPopup(provider)
      .then((credential) =>  {
        this.testUser = credential.user;
        this.updateUserData();
      })
      // .catch(error => console.log(error));
  }


  logoutUser() {
    return this.af.auth.signOut();
  }

  //// Helpers ////

  private updateUserData() {
    // Writes user name and email to realtime db
    // useful if your app displays information about users or for admin features

    const path = `users/${this.user.uid}`; // Endpoint on firebase
    const data = {
      email: this.user.email,
      name: this.user.displayName,
      photo: this.user.photoURL,
    };

    this.db.object(path).update(data)
      .catch(error => console.log(error));
  }

}
