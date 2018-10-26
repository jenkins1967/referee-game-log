import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';
import { GoalDetailComponent } from './goal-detail.component';
import { GoalEditorComponent } from './goal-editor.component';
import { GoalListComponent } from './goal-list.component';

@NgModule({
  imports: [
    CommonModule,
    GoalsRoutingModule
  ],
  declarations: [GoalsComponent, GoalDetailComponent, GoalEditorComponent, GoalListComponent]
})
export class GoalsModule { }
