import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private readonly authService: AuthenticationService,
              private readonly router: Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/shop']);
  }
}
