import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { AppMaterialModule } from '../../app.material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../../share/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    MatInputModule,
    SharedModule
  ],
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule {
}
