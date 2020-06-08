import { Component, Input } from '@angular/core';
import { Ride } from '../../core/models/ride.model';
import { isFuture, parseISO } from 'date-fns';
import { RedirectService } from '../../core/redirect/redirect.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-ride-item',
  templateUrl: './ride-item.component.html',
  styleUrls: ['./ride-item.component.scss'],
})
export class RideItemComponent {

  @Input()
  ride: Ride;

  @Input()
  colorFuture: boolean;

  constructor(private redirectService: RedirectService) {
  }

  isDateFuture(): boolean {
    return isFuture(parseISO(this.ride.date.toString()));
  }

  formatDate(date: Date): string {
    return formatDate(date, 'dd-MM-yyyy HH:mm', 'en');
  }

  navigateToDetails() {
    this.redirectService.redirectToRideDetails(this.ride.id);
  }
}
