import { Component, OnInit } from '@angular/core';
import { RidesService } from '../../../core/services/rides.service';
import { Ride } from '../../../core/models/ride.model';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
import { ToastService } from '../../../share/toast/toast.service';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['../../../app.component.scss', 'ride-details.component.scss']
})
export class RideDetailsComponent implements OnInit {
  ride: Ride;

  constructor(private activatedRoute: ActivatedRoute,
              private ridesService: RidesService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.ridesService.getRideDetails(params.id).subscribe(ride => this.ride = ride);
    });
  }

  formatDate(date: Date): string {
    return formatDate(date, 'dd-MM-yyyy HH:mm', 'en');
  }

  addPassenger() {
    this.ridesService.addaPassenger(this.ride.id).subscribe(
      ride => this.ride = ride,
      () => ToastService.warning('Błąd', 'Nie można dodać cię do przejazdu')
    );
  }
}
