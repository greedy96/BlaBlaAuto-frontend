import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {
  constructor(private router: Router) {
  }

  public redirectToHomePage(): void {
    this.router.navigate(['']);
  }

  public redirectToLoginPage(): void {
    this.router.navigate(['login']);
  }

  public redirectToMyProfile(): void {
    this.router.navigate(['profile']);
  }

  redirectToRegistrationPage() {
    this.router.navigate(['registration']);
  }

  redirectToSearchRide() {
    this.router.navigate(['search-ride']);
  }

  redirectToAddRide() {
    this.router.navigate(['add-ride']);
  }

  redirectToRidesList(rideFrom, rideTo, startDate) {
    this.router.navigate(['rides-list'], {queryParams: {ride_from: rideFrom, ride_to: rideTo, start_date: startDate}});
  }

  redirectToRideDetails(id: number) {
    this.router.navigate(['ride-details/' + id]);
  }
}
