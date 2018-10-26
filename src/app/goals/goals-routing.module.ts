import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsComponent } from './goals.component';
import { GoalDetailComponent } from './goal-detail.component';
import { GoalListComponent } from './goal-list.component';
import { GoalEditorComponent } from './goal-editor.component';

const routes: Routes = [
  {
    path:'games/:id/goals',
    component:GoalsComponent,
    children:[
      {
          path:'',
          component:GoalListComponent
      },
      {        
        path:':goalId',
        component:GoalDetailComponent
      },
      {
        path:'new',
        component:GoalEditorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule { }
