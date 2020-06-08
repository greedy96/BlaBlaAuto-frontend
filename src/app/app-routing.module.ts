import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './view/HomePage/homepage.component';
import { LoginPageComponent } from './view/LoginPage/loginpage.component';
import { LoginGuardService } from './core/auth/login-guard.service';
import { RegistrationPageComponent } from './view/RegistrationPage/registration-page.component';
import { SearchRideComponent } from './view/RidePage/search-ride/search-ride.component';
import { RidesListComponent } from './view/RidePage/rides-list/rides-list.component';
import { AddRideComponent } from './view/RidePage/add-ride/add-ride.component';
import { AuthGuardService } from './core/auth/authGuard.service';
import { ProfileComponent } from './view/ProfilePage/profile.component';
import { NotFoundComponent } from './share/not-found/not-found.component';
import { RideDetailsComponent } from './view/RidePage/ride-details/ride-details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'registration',
    component: RegistrationPageComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'search-ride',
    component: SearchRideComponent
  },
  {
    path: 'rides-list',
    component: RidesListComponent
  },
  {
    path: 'ride-details/:id',
    component: RideDetailsComponent
  },
  {
    path: 'add-ride',
    component: AddRideComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
