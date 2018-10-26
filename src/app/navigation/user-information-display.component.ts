import { Component, OnInit } from '@angular/core';
import { UserService } from '../authentication/services/user.service';
import { User } from '../core/models/user';

@Component({
  selector: 'app-user-information-display',
  templateUrl: './user-information-display.component.html',
  styleUrls: ['./user-information-display.component.scss']
})
export class UserInformationDisplayComponent implements OnInit {

  currentUser:User = null;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.CurrentUser.subscribe((user:User) =>{
      this.currentUser = user;
      
    });
  }

}
