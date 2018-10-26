import { Component, OnInit } from '@angular/core';
import { UserService } from '../authentication/services/user.service';
import { User } from '../core/models/user';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.scss']
})
export class LoginStatusComponent implements OnInit {

  currentUser:User = null;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.CurrentUser.subscribe((user:User) =>{
      this.currentUser = user;
      
    });
  }

}
