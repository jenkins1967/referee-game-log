import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { UserComponent } from './user.component';

import { UserService } from './services/user.service';
import { AuthenticationGuard } from './services/authentication.guard';
import { AuthenticationService } from './services/authentication.service';
import { UserResolver } from './user-resolver';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [LoginComponent, RegisterComponent, UserComponent],
  providers:[AuthenticationGuard, AuthenticationService, UserResolver, UserService]
})
export class AuthenticationModule { }
