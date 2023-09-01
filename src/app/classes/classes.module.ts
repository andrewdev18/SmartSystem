import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassListComponent } from './pages/class-list/class-list.component';
import { ClassViewComponent } from './pages/class-view/class-view.component';
import { ClassRegisterComponent } from './pages/class-register/class-register.component';
import { PrimengModule } from '../ui-module/primeng.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClassListComponent,
    ClassViewComponent,
    ClassRegisterComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule
  ], exports: [
    
  ]
})
export class ClassesModule { }
