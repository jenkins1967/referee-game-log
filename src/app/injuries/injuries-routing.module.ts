import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InjuriesComponent } from './injuries.component';
import { InjuryListComponent } from './injury-list.component';
import { InjuryDetailComponent } from './injury-detail.component';
import { InjuryEditorComponent } from './injury-editor.component';

const routes: Routes = [
  {
    path:'games/:id/injuries',
    component:InjuriesComponent,
    children:[
      {
          path:'',
          component:InjuryListComponent
      },
      {        
        path:':injuryId',
        component:InjuryDetailComponent
      },
      {
        path:'new',
        component:InjuryEditorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InjuriesRoutingModule { }
