import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { faShoppingCart, faSignInAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
  protected faSignInAlt = faSignInAlt;
  protected faShoppingCart = faShoppingCart;
  protected faUserCircle = faUserCircle;
  constructor(public readonly authService: AuthenticationService) { }

  ngOnInit(): void {
  }



}
