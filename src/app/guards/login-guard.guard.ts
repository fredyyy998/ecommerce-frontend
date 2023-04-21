import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {


  constructor(private readonly authService: AuthenticationService,
              private readonly router: Router) {
  }
  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.isLoggedIn$.pipe(
      map(result => {
        console.log(result);
        if (result) {
          console.log(this.router.parseUrl('/shop'));
          return this.router.parseUrl('/shop');
        }
        return true;
      })
    )
  }

}
