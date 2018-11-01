import { Component, OnInit } from '@angular/core';
import { UserService } from '../authentication/services/user.service';
import { User } from '../core/models/user';
import { AuthenticationService } from '../authentication/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {
  showNavigation = false;
  currentUser:User
  constructor(private readonly userService:UserService, 
    private readonly authService:AuthenticationService,
    private readonly router:Router) { }

  ngOnInit() {
    this.userService.currentUser.subscribe((user:User) =>{
      this.currentUser = user;
    })
  }

  toggleMenu(){
    this.showNavigation = !this.showNavigation;
  }

  logout(){
    this.authService.doLogout().then(
      () =>{ 
        this.router.navigate(["home"]);
      }
    )
    
  }

}
