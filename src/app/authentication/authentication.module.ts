import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { UserComponent } from './user.component';

import { UserService } from './services/user.service';
import { AuthenticationGuard } from './services/authentication.guard';
import { AuthenticationService } from './services/authentication.service';
import { UserResolver } from './user-resolver';
import { SocialNetworkSelectorComponent } from './social-network-selector.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  declarations: [LoginComponent, RegisterComponent, UserComponent, SocialNetworkSelectorComponent],
  providers:[AuthenticationGuard, AuthenticationService, UserResolver, UserService]
})
export class AuthenticationModule { }
