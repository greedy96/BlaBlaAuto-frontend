import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppMaterialModule } from '../app.material.module';
import { RideItemComponent } from './ride-item/ride-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppMaterialModule,
  ],
  declarations: [
    NotFoundComponent,
    NavbarComponent,
    RideItemComponent
  ],
  exports: [
    NotFoundComponent,
    NavbarComponent,
    RideItemComponent
  ]
})
export class SharedModule {
}
