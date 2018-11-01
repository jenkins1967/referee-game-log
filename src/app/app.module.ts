import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import {  AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GamesModule } from './games/games.module';
import { GoalsModule } from './goals/goals.module';
import { MisconductModule } from './misconduct/misconduct.module';
import { InjuriesModule } from './injuries/injuries.module';
import { environment } from '../environments/environment';
import { AuthenticationModule } from './authentication/authentication.module';
import { MainNavigationComponent } from './navigation/main-navigation.component';
import { NavigationModule } from './navigation/navigation.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),    
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    CoreModule,
    NavigationModule,
    AuthenticationModule,
    GamesModule,
    GoalsModule,
    MisconductModule,
    InjuriesModule,
    ProfileModule,
    AppRoutingModule,
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
