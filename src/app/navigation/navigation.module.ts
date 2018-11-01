import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavigationComponent } from './main-navigation.component';
import { UserInformationDisplayComponent } from './user-information-display.component';
import {  RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MainNavigationComponent, UserInformationDisplayComponent],
  exports:[MainNavigationComponent]
})
export class NavigationModule { }
