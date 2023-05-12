import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/auth.service';
import { User } from '@app/models';
import { LoginCredentials } from '@app/models/login-credentials.model';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private autService: AuthenticationService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      Object.values(this.loginForm.controls).forEach((control) => {
        control.markAllAsTouched();
      });

      return;
    }

    if (!this.autService.logInApp(this.loginForm.value)) {
      alert('Usuario o contraseña invalido');
    }

    this.autService.login(this.loginForm.value as LoginCredentials);
  }

  /**
   * return message if is invalid value
   */
  getMessageInvalidField(field: string, message: string): any {
    if (this.loginForm.controls[field].hasError('required')) {
      return `* ${message} es requerido`;
    }

    if (this.loginForm.controls[field].hasError('email')) {
      return `* ${message} es invalido`;
    }
  }
}
