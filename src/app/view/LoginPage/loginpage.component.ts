import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { RedirectService } from '../../core/redirect/redirect.service';

@Component({
  selector: 'app-login',
  templateUrl: './loginpage.component.html',
  styleUrls: ['../../app.component.scss', './loginpage.component.scss'],
})
export class LoginPageComponent implements OnInit {
  hide = true;
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private redirectService: RedirectService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  public login() {
    const userCredentialsData = this.loginForm.value;
    this.authService.login(userCredentialsData)
      .subscribe(
        () => this.redirectService.redirectToHomePage(),
        err => console.error(err));
  }

  private buildForm() {
    this.loginForm = this.fb.group(({
      username: [null, Validators.required],
      password: [null, Validators.required]
    }));
  }
}
