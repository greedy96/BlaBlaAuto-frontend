import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './share/shared.module';
import { AppMaterialModule } from './app.material.module';
import { ToastrModule } from 'ngx-toastr';
import { HomepageModule } from './view/HomePage/homepage.module';
import { LoginPageModule } from './view/LoginPage/loginpage.module';
import { RegistrationPageModule } from './view/RegistrationPage/registration-page.module';
import { RidePageModule } from './view/RidePage/ride-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileModule } from './view/ProfilePage/profile.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppMaterialModule,
    ToastrModule.forRoot(),
    HomepageModule,
    LoginPageModule,
    RegistrationPageModule,
    RidePageModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
