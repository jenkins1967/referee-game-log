import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../core/models/user';
import { UserService } from '../authentication/services/user.service';
import { UserManagementService } from '../core/services/user-management.service';
import { UserInfo } from '../core/models/userInfo';

@Component({
  selector: 'page-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss']
})
export class UserComponent implements OnInit{

  user: User;
  name:string;
  myForm:FormGroup;
  submitting = false;
  constructor(
    public userService: UserService,   
    private userMgtService:UserManagementService, 
    private route: ActivatedRoute,
    private location : Location
  ) {
    this.myForm = new FormGroup({
      grade:new FormControl(''),
      profile:new FormControl(''),      
    });
  }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      let data = routeData['user'];
      this.user = data;      
      this.userMgtService.getUser(this.user.uid).subscribe((userInfo) =>{
          if(userInfo != null){
            this.myForm.controls["grade"].setValue(userInfo.grade);
            this.myForm.controls["profile"].setValue(userInfo.profile);            
          }
      });
    })
  }

  onSubmit(){
    this.submitting = true;
    const userInfo = new UserInfo();
    userInfo.profile = this.myForm.value.profile;
    userInfo.grade = this.myForm.value.grade;
    this.userMgtService.updateUser(this.user, userInfo).subscribe(() =>{
      this.submitting = false;
    });
  }    
}