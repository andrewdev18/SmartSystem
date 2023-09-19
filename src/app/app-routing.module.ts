import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameViewComponent } from './game/pages/game-view/game-view.component';
import { MainComponent as LessonListComponent } from './lessons/pages/lesson-list/lesson-list.component';
import { HomeComponent } from './home/home.component';
import { LessonViewComponent } from './lessons/pages/lesson-view/lesson-view.component';
import { LoginComponent } from './auth/login/login.component';
import { LogedInGuard } from './auth/loged-in.guard';
import { AuthGuard } from './auth/auth.guard';
import { ClassListComponent } from './classes/pages/class-list/class-list.component';
import { TeacherGuardGuard } from './auth/teacher-guard.guard';
import { ClassViewComponent } from './classes/pages/class-view/class-view.component';
import { RegisterStudentComponent } from './auth/pages/register-student/register-student.component';
import { RegisterTeacherComponent } from './auth/pages/register-teacher/register-teacher.component';
import { StudentGuard } from './auth/student.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'lessons', component: LessonListComponent, canActivate: [AuthGuard] },
  { path: 'lessons/:topic', component: LessonViewComponent, canActivate: [AuthGuard] },
  { path: 'games', component: GameViewComponent, canActivate: [AuthGuard, StudentGuard] },
  { path: 'classes', component: ClassListComponent, canActivate: [AuthGuard] },
  { path: 'classes/:class', component: ClassViewComponent, canActivate: [AuthGuard, TeacherGuardGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LogedInGuard] },
  { path: 'register/student', component: RegisterStudentComponent, canActivate: [LogedInGuard] },
  { path: 'register/teacher', component: RegisterTeacherComponent, canActivate: [LogedInGuard] },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
