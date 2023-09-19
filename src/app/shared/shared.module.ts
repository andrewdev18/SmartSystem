import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadspinnerComponent } from './loadspinner/loadspinner.component';
import { PrimengModule } from '../ui-module/primeng.module';



@NgModule({
  declarations: [LoadspinnerComponent],
  imports: [
    CommonModule,
    PrimengModule
  ], exports: [
    LoadspinnerComponent
  ]
})
export class SharedModule { }
