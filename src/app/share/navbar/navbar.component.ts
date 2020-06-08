import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { RedirectService } from '../../core/redirect/redirect.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isLoggedIn: boolean;

  constructor(private http: HttpClient,
              public authService: AuthService,
              private redirectService: RedirectService) {
    this.isLoggedIn = authService.isAuthenticated();
    authService.emitAuthenticated.subscribe(logged => this.setIsLoggedIn(logged));
  }

  public logout(): void {
    this.authService.logout();
    this.redirectService.redirectToLoginPage();
  }

  public redirectToMyProfile(): void {
    this.redirectService.redirectToMyProfile();
  }

  public redirectToHomePage(): void {
    this.redirectService.redirectToHomePage();
  }

  public redirectToLoginPage(): void {
    this.redirectService.redirectToLoginPage();
  }

  public redirectToRegistrationPage(): void {
    this.redirectService.redirectToRegistrationPage();
  }

  private setIsLoggedIn(isLoggedIn: boolean): void {
    this.isLoggedIn = isLoggedIn;
  }

  redirectToSearchRide(): void {
    this.redirectService.redirectToSearchRide();
  }

  redirectToAddRide() {
    this.redirectService.redirectToAddRide();
  }
}
