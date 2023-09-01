import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassListComponent } from './pages/class-list/class-list.component';
import { ClassViewComponent } from './pages/class-view/class-view.component';
import { ClassRegisterComponent } from './pages/class-register/class-register.component';
import { ClassService } from './services/class.service';



@NgModule({
  declarations: [
    ClassListComponent,
    ClassViewComponent,
    ClassRegisterComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    
  ]
})
export class ClassesModule { }
