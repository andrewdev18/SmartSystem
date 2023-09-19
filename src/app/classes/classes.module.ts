import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassListComponent } from './pages/class-list/class-list.component';
import { ClassViewComponent } from './pages/class-view/class-view.component';
import { PrimengModule } from '../ui-module/primeng.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ClassListComponent,
    ClassViewComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    SharedModule,
    FormsModule
  ], exports: [
    
  ]
})
export class ClassesModule { }
