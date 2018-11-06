import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../core/models/user';
import { UserService } from '../authentication/services/user.service';

@Component({
  selector: 'page-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss']
})
export class UserComponent implements OnInit{

  user: User;
  name:string;

  constructor(
    public userService: UserService,    
    private route: ActivatedRoute,
    private location : Location
  ) {

  }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      let data = routeData['user'];
      if (data) {
        this.user = data;
        console.log(this.user);
      }
    })
  }

  
  
}