import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { PrimengModule } from '../ui-module/primeng.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ], exports: [
    MainComponent
  ]
})
export class LessonsModule { }
