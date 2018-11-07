import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../core/models/user';
import { UserService } from '../authentication/services/user.service';
import { UserManagementService } from '../core/services/user-management.service';
import { UserInfo } from '../core/models/userInfo';
import * as moment from 'moment'; 
import { ReferenceDataService } from '../core/services/reference-data.service';
import { RefereeGrade } from '../core/models/referee-grade';

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
  grades:Array<RefereeGrade>;

  constructor(
    private referenceDataService:ReferenceDataService,
      private userMgtService:UserManagementService, 
    private route: ActivatedRoute
  ) {
    this.myForm = new FormGroup({
      grade:new FormControl(''),
      profile:new FormControl(''),      
      memberSince:new FormControl('')
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
            this.myForm.controls["memberSince"].setValue(moment.utc(userInfo.memberSinceTimestamp).toLocaleString());
          }
      });

      this.referenceDataService.UssfRefereeGrades().subscribe((grades:Array<RefereeGrade>) =>{
        this.grades = grades.sort((a, b) =>{
          if(a > b){
            return 1;
          }
          return -1;
        });
      })
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