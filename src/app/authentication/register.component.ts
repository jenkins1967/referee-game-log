
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import {FormGroup,  FormBuilder, Validators, FormControl} from '@angular/forms';
import {matchingValuesValidator} from '../core/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
  errorMessage: string = '';
  successMessage: string = ''; 
  registerForm:FormGroup;
  constructor(
    private authService: AuthenticationService,
    private fb:FormBuilder,
    private router: Router) {
    
          this.registerForm = new FormGroup({
          email:new FormControl('', [Validators.required, Validators.email]),
          password:new FormControl('', [Validators.required]),
          confirmPassword:new FormControl('', [Validators.required]),
            });

          this.registerForm.setValidators([matchingValuesValidator("password", "confirmPassword")]);
      
   }

   get controls(){
     return this.registerForm.controls;
   }
 
   tryFacebookLogin(){
     this.authService.doFacebookLogin()
     .then(res =>{
       this.router.navigate(['/user']);
     }, err => console.log(err)
     )
   }

   tryTwitterLogin(){
     this.authService.doTwitterLogin()
     .then(res =>{
       this.router.navigate(['/user']);
     }, err => console.log(err)
     )
   }

   tryGoogleLogin(){
     this.authService.doGoogleLogin()
     .then(res =>{
       this.router.navigate(['/user']);
     }, err => console.log(err)
     )
   }

   onSubmit(){
     this.authService.doRegister(this.registerForm.value)
     .then(res => {
       console.log(res);
       this.errorMessage = "";
       this.successMessage = "Your account has been created";
     }, err => {
       console.log(err);
       this.errorMessage = err.message;
       this.successMessage = "";
     })
   }

}