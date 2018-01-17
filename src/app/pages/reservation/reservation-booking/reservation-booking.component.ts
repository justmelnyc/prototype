import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { SharedService } from '../../../_core/services/shared.service';
import { IReservation } from '../../../_core/interfaces/reservation';
import { IUser } from '../../../_core/interfaces/user';

@Component({
  selector: 'app-reservation-booking',
  templateUrl: './reservation-booking.component.html',
  styleUrls: ['./reservation-booking.component.scss']
})
export class ReservationBookingComponent implements OnInit {

  reservation: IReservation = {id: 0, name: '', email: '', date: '', phone: ''};

  constructor(
    private sharedService: SharedService,
    private afAuth: AngularFireAuth,
    private afDB: AngularFireDatabase
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      const user: IUser = this.sharedService.getUser();
      if (user.id) {

      } else {
        await this.afAuth.authState.first().toPromise();
        const uid = this.afAuth.auth.currentUser.uid;
      }
    } catch (e) {

    } finally {

    }
  }

}
