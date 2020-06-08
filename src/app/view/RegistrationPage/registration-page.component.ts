import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RedirectService } from '../../core/redirect/redirect.service';
import { UserService } from '../../core/services/user.service';
import { ToastService } from '../../share/toast/toast.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration-page.component.html',
  styleUrls: ['../../app.component.scss', './registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnInit {

  hide = true;
  public registrationForm: FormGroup;

  constructor(private fb: FormBuilder,
              private redirectService: RedirectService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.registrationForm = this.fb.group(({
      username: [null, Validators.required],
      password: [null, Validators.required],
      email: [null, Validators.required],
      first_name: [null, Validators.required],
      last_name: [null, Validators.required]
    }));
  }

  register() {
    if (this.registrationForm.valid) {
      this.userService.registerUser(this.registrationForm.getRawValue()).subscribe(
        () => this.redirectService.redirectToLoginPage(),
        () => ToastService.error('Błąd', 'Błąd podczas rejestracji użytkownika')
      );
    } else {
      ToastService.warning('Błąd', 'Nie wypełniłeś wszystkich pól');
    }
  }
}
