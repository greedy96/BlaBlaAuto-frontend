import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RedirectService } from '../../../core/redirect/redirect.service';
import { formatDate } from '@angular/common';
import { RidesService } from '../../../core/services/rides.service';
import { ToastService } from '../../../share/toast/toast.service';

@Component({
  selector: 'app-search-ride',
  templateUrl: './add-ride.component.html',
  styleUrls: ['../../../app.component.scss', 'add-ride.component.scss']
})
export class AddRideComponent implements OnInit {
  todayDate: string = formatDate(Date.now(), 'yyyy-MM-ddTHH:MM', 'en');

  public addRideForm: FormGroup;

  constructor(private fb: FormBuilder,
              private ridesService: RidesService,
              private redirectService: RedirectService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.addRideForm = this.fb.group({
      ride_from: [null, Validators.required],
      ride_to: [null, Validators.required],
      start_date: [null, Validators.required],
      seats: [null, Validators.required],
      price: [null, Validators.required]
    });
  }

  public addRide() {
    if (this.addRideForm.valid) {
      this.ridesService.addNewRide(this.addRideForm.getRawValue())
        .subscribe(
          (ride) => this.redirectService.redirectToRideDetails(ride.id),
          () => ToastService.info('Błąd', 'Wystąpił błąd podczas dodawania przejazdu')
        );
    }
  }
}
