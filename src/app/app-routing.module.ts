import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { LandingComponent } from './core/landing/landing.component';
import { LoginComponent } from './authentication/login.component';
import { RegisterComponent } from './authentication/register.component';
import { UserComponent } from './profile/user.component';
import { UserService } from './authentication/services/user.service';

const routes: Routes = [
  {path:'home', component:LandingComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
    {path: '', redirectTo: '/home', pathMatch:'full'},  
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  //imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
