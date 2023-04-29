import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  passwordRepeat: string = '';

  error?: string;

  constructor(private readonly authService: AuthenticationService,
              private readonly router: Router) { }

  onRegisterFormSubmit() {
    if (this.passwordRepeat !== this.password) {
      this.error = 'The password does not match!';
      return;
    }

    this.authService.register(this.email, this.password).subscribe({
      next: () => this.router.navigate(['login']),
      error: (err) => {
        console.error(err);
        this.error = err.error;
      }
    });

  }
}
