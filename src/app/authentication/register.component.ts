
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import {FormGroup,  FormBuilder, Validators, FormControl} from '@angular/forms';
import {matchesSiblingValidator} from '../core/custom-validators';
import { FormManagingComponent } from './form-managing-component';
import { UserManagementService } from '../core/services/user-management.service';
import { User } from '../core/models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends FormManagingComponent {
  actionName = "Register";
  errorMessage: string = '';
  successMessage: string = ''; 
  registerForm:FormGroup;
  constructor(
    private authService: AuthenticationService,
    private userManagerService:UserManagementService,
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
 
   tryFacebookLogin(){
     this.authService.doFacebookLogin()
     .then(res =>{
       this.createUser(res);
     }, err => console.log(err)
     )
   }

   tryTwitterLogin(){
     this.authService.doTwitterLogin()
     .then(res =>{
      this.createUser(res);
     }, err => console.log(err)
     )
   }

   tryGoogleLogin(){
     this.authService.doGoogleLogin()
     .then(res =>{
      this.createUser(res);
     }, err => console.log(err)
     )
   }

   private createUser(res){
     const user:User = User.fromAuthUser(res);
     this.userManagerService.addUser(user).subscribe((user:User) =>{
        this.router.navigate(['/user']);
     });       
   }

   onSubmit(){
     if(this.myForm.valid){
     this.authService.doRegister(this.registerForm.value)
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