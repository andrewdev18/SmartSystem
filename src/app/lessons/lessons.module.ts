import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent as LessonListComponent } from './pages/lesson-list/lesson-list.component';
import { PrimengModule } from '../ui-module/primeng.module';
import { LessonViewComponent } from './pages/lesson-view/lesson-view.component';



@NgModule({
  declarations: [
    LessonListComponent,
    LessonViewComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ], exports: [
    LessonListComponent
  ]
})
export class LessonsModule { }
