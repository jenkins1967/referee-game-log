import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../authentication/services/authentication.guard';

import { UserService } from '../authentication/services/user.service';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path:'profile',
    component:UserComponent,
    canActivate: [AuthenticationGuard],
    resolve:{user:UserService},
    children:[
     
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfileRoutingModule { }
