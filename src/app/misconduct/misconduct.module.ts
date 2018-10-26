import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisconductRoutingModule } from './misconduct-routing.module';
import { MisconductListComponent } from './misconduct-list.component';
import { MisconductDetailComponent } from './misconduct-detail.component';
import { MisconductEditorComponent } from './misconduct-editor.component';
import { MisconductComponent } from './misconduct.component';

@NgModule({
  imports: [
    CommonModule,
    MisconductRoutingModule
  ],
  declarations: [MisconductListComponent, MisconductDetailComponent, MisconductEditorComponent, MisconductComponent]
})
export class MisconductModule { }
