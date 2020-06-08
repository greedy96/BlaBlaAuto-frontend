import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';
import { RedirectService } from '../../../core/redirect/redirect.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-search-ride',
  templateUrl: './search-ride.component.html',
  styleUrls: ['../../../app.component.scss', 'search-ride.component.scss']
})
export class SearchRideComponent implements OnInit {
  todayDate: string = formatDate(Date.now(), 'yyyy-MM-ddTHH:MM', 'en');

  public searchRideForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private redirectService: RedirectService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.searchRideForm = this.fb.group({
      ride_from: [null, Validators.required],
      ride_to: [null, Validators.required],
      start_date: [null, Validators.required]
    });
  }

  public search() {
    if (this.searchRideForm.valid) {
      const searchParams = this.searchRideForm.getRawValue();
      this.redirectService.redirectToRidesList(searchParams.ride_from, searchParams.ride_to, searchParams.start_date);
    }
  }
}
