import { Component } from '@angular/core';
import { Router, Params } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { FormManagingComponent } from './form-managing-component';
import {FormGroup,  FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent extends FormManagingComponent{
  actionName="Login";
  errorMessage: string = '';
  email:string;
  password:string;

  constructor(
    public authService: AuthenticationService,
    private router: Router
  ) {
    super();
    this.myForm = new FormGroup({
      email:new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('', [Validators.required]),      
    });
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

  onSubmit(){
    if(this.myForm.valid){
      this.authService.doLogin({email:this.email, password:this.password})
      .then(res => {
        this.router.navigate(['/user']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      })
    }
  }
}