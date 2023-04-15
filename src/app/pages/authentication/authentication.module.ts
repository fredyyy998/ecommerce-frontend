import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from '../../components/login/login.component';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    LoginComponent
  ]
})
export class AuthenticationModule { }
