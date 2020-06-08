import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { RedirectService } from '../../core/redirect/redirect.service';
import { User } from '../../core/models/user.model';
import { UserService } from '../../core/services/user.service';
import { RidesService } from '../../core/services/rides.service';
import { Ride } from '../../core/models/ride.model';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../../app.component.scss', './profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: {
    user: User,
    historicRides: Ride[],
    passengerRides: Ride[],
  } = {user: null, historicRides: null, passengerRides: null};

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private redirectService: RedirectService,
              private userService: UserService,
              private ridesService: RidesService) {
  }

  ngOnInit(): void {
    this.userService.getUserData().subscribe(user => this.profile.user = user);
  }

  changeBoard($event: MatTabChangeEvent) {
    switch ($event.index) {
      case 0:
        if (this.profile.user) {
          break;
        }
        this.userService.getUserData().subscribe(user => this.profile.user = user);
        break;
      case 1:
        if (this.profile.historicRides) {
          break;
        }
        this.ridesService.getHistoricRides().subscribe(rides => this.profile.historicRides = rides);
        break;
      case 2:
        if (this.profile.passengerRides) {
          break;
        }
        this.ridesService.getParticipantRides().subscribe(rides => this.profile.passengerRides = rides);
        break;
    }

  }
}
