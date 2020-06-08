import { Component, OnInit } from '@angular/core';
import { Ride } from '../../../core/models/ride.model';
import { ActivatedRoute } from '@angular/router';
import { RedirectService } from '../../../core/redirect/redirect.service';
import { formatDate } from '@angular/common';
import { RidesService } from '../../../core/services/rides.service';

@Component({
  selector: 'app-rides-list',
  templateUrl: './rides-list.component.html',
  styleUrls: ['../../../app.component.scss', 'rides-list.component.scss']
})
export class RidesListComponent implements OnInit {
  rides: Ride[];
  firstResult = 0;
  maxResult = 10;

  constructor(private activatedRoute: ActivatedRoute,
              private redirectService: RedirectService,
              private ridesService: RidesService) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const rideFrom = params.ride_from;
      const rideTo = params.ride_to;
      let startDate = params.start_date;
      if (!rideFrom || !rideTo) {
        this.redirectService.redirectToSearchRide();
      }
      if (!startDate) {
        startDate = formatDate(Date.now(), 'yyyy-MM-dd', 'en');
      }

      this.ridesService.searchRides(rideFrom, rideTo, startDate, this.firstResult, this.maxResult).subscribe(rides => this.rides = rides);
    });
  }
}
