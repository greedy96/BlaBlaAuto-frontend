import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationPageComponent } from './registration-page.component';
import { AppMaterialModule } from '../../app.material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    RegistrationPageComponent
  ],
  exports: [
    RegistrationPageComponent
  ]
})
export class RegistrationPageModule {
}
