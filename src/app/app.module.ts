import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GameModule } from './game/game.module';
import { LessonsModule } from './lessons/lessons.module';
import { PrimengModule } from './ui-module/primeng.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { ClassesModule } from './classes/classes.module';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    GameModule,
    LessonsModule,
    PrimengModule,
    HttpClientModule,
    FormsModule,
    ClassesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
