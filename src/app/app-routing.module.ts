import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { LandingComponent } from './core/landing/landing.component';
import { LoginComponent } from './authentication/login.component';
import { AuthenticationGuard } from './authentication/services/authentication.guard';
import { RegisterComponent } from './authentication/register.component';
import { UserComponent } from './authentication/user.component';
import { UserResolver } from './authentication/user-resolver';

const routes: Routes = [
  {path:'home', component:LandingComponent},
  { path: 'login', component: LoginComponent, canActivate: [AuthenticationGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthenticationGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}},
  {path: '', redirectTo: '/home', pathMatch:'full'},  
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
