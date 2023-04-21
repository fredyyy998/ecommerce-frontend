import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Router, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLinkWithHref],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  error?: string;

  constructor(private readonly authService: AuthenticationService,
              private readonly router: Router) { }

  ngOnInit(): void {
  }

  onLoginFormSubmit() {
    this.authService.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['/shop']),
      error: (err) => {
        console.error(err);
        this.error = 'There was an error trying to log you in, please try again'
      }
    });
  }
}
