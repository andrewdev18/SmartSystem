import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameViewComponent } from './pages/game-view/game-view.component';
import { SenteceSortComponent } from './components/sentece-sort/sentece-sort.component';
import { WordCompleteComponent } from './components/word-complete/word-complete.component';
import { ChooseOptionComponent } from './components/choose-option/choose-option.component';
import { SelectOneComponent } from './components/select-one/select-one.component';
import { PrimengModule } from '../ui-module/primeng.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GameViewComponent,
    SenteceSortComponent,
    WordCompleteComponent,
    ChooseOptionComponent,
    SelectOneComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule
  ], exports: [
    GameViewComponent
  ]
})
export class GameModule { }
