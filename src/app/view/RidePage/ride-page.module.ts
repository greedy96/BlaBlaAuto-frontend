import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRideComponent } from './search-ride/search-ride.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import { RidesListComponent } from './rides-list/rides-list.component';
import { AppMaterialModule } from '../../app.material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AddRideComponent } from './add-ride/add-ride.component';
import { SharedModule } from '../../share/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    SharedModule,
  ],
  declarations: [
    RideDetailsComponent,
    RidesListComponent,
    SearchRideComponent,
    AddRideComponent
  ],
  exports: [
    RideDetailsComponent,
    RidesListComponent,
    SearchRideComponent,
    AddRideComponent
  ]
})
export class RidePageModule {
}
