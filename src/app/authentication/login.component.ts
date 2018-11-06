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
  socialLoginError: string ;
  emailLoginError:string;
  email:string;
  password:string;
  afterLoginUrl = "games";
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
    this.handleLogin(this.authService.doFacebookLogin(), this.socialLoginError);    
  }

  tryTwitterLogin(){
    this.handleLogin(this.authService.doTwitterLogin(), this.socialLoginError);    
  }

  tryGoogleLogin(){
    this.handleLogin(this.authService.doGoogleLogin(), this.socialLoginError);    
  }

  handleLogin(promise:Promise<any>, errorMessage:string){
    promise
    .then(res => {
      this.router.navigate([this.afterLoginUrl]);
    })
    .catch((reason) =>{
      console.error("Login failed: " + reason);
      errorMessage = reason.message;
    })
  }

  onSubmit(){
    if(this.myForm.valid){
      this.handleLogin(this.authService.doLogin({email:this.email, password:this.password}), this.emailLoginError);      
    }
  }
}