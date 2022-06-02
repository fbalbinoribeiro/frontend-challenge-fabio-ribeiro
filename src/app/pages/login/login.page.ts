import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

export const loginValidator = {
  email: {
    regex: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}[ ]{0,1}$/,
  },
  password: {
    minLength: 6,
  },
};

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginFormControls = {
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern(new RegExp(loginValidator.email.regex)),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(loginValidator.password.minLength),
    ]),
  };

  loginFormGroup: FormGroup = new FormGroup(this.loginFormControls);

  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService
  ) {}

  ngOnInit() {}

  login() {
    if (this.loginFormGroup.valid) {
      this.loginService.setUser(this.loginFormGroup.getRawValue().email.trim());
      this.router.navigate(['/home']);
    }
  }
}
