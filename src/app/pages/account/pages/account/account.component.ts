import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../services/authentication/authentication.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private readonly authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout();
  }
}
