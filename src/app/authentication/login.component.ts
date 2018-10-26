import { Component } from '@angular/core';
import { Router, Params } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {

  errorMessage: string = '';
  email:string;
  password:string;

  constructor(
    public authService: AuthenticationService,
    private router: Router
  ) {
    
  }

  
  tryFacebookLogin(){
    this.authService.doFacebookLogin()
    .then(res => {
      this.router.navigate(['/user']);
    })
  }

  tryTwitterLogin(){
    this.authService.doTwitterLogin()
    .then(res => {
      this.router.navigate(['/user']);
    })
  }

  tryGoogleLogin(){
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/user']);
    })
  }

  tryLogin(){
    this.authService.doLogin({email:this.email, password:this.password})
    .then(res => {
      this.router.navigate(['/user']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }
}