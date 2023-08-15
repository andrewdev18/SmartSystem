import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { DragDropModule } from 'primeng/dragdrop';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], exports: [
    ButtonModule,
    ChipModule,
    DragDropModule,
    InputTextModule,
    MenubarModule,
    RadioButtonModule
  ]
})
export class PrimengModule { }
