import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {

  private user = new Subject<IUser>();
  user$ = this.user.asObservable();

  constructor() { }

  storeUser(user: IUser) {
    this.user.next(user);
  }

}
