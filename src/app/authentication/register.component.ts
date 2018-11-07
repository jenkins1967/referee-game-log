
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import {FormGroup,  FormBuilder, Validators, FormControl} from '@angular/forms';
import {matchesSiblingValidator} from '../core/custom-validators';
import { FormManagingComponent } from './form-managing-component';
import { UserManagementService } from '../core/services/user-management.service';
import { User } from '../core/models/user';
import { UserInfo } from '../core/models/userInfo';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends FormManagingComponent implements OnInit {
  actionName = "Register";
  errorMessage: string = '';
  successMessage: string = ''; 
  myForm:FormGroup;
  constructor(
    private authService: AuthenticationService,
    private userManagerService:UserManagementService,
    private userService:UserService,
    private fb:FormBuilder,
    private router: Router) {
        super();
        this.myForm = new FormGroup({
        email:new FormControl('', [Validators.required, Validators.email]),
        password:new FormControl('', [Validators.required]),
        confirmPassword:new FormControl('', [Validators.required, matchesSiblingValidator("password")])}, {updateOn:'blur'});              
   }

   get controls(){
     return this.myForm.controls;
   }

   ngOnInit(){
     this.userService.currentUser.subscribe((user:User) =>{
        if(user){
          this.userManagerService.addUser(user);
          this.router.navigate(['/profile']);
        }
     })
   }
 
   tryFacebookLogin(){
     this.authService.doFacebookLogin()
     .then(res =>{
       
     }, err => console.log(err)
     )
   }

   tryTwitterLogin(){
     this.authService.doTwitterLogin()
     .then(res =>{
      
     }, err => console.log(err)
     )
   }

   tryGoogleLogin(){
     this.authService.doGoogleLogin()
     .then(res =>{
      
     }, err => console.log(err)
     )
   }

   

   onSubmit(){
     if(this.myForm.valid){
     this.authService.doRegister(this.myForm.value)
     .then(res => {
       console.log(res);
       this.errorMessage = "";
       this.successMessage = "Your account has been created";
     }, err => {
       console.log(err);
       this.errorMessage = err.message;
       this.successMessage = "";
     });
    }
   }
}