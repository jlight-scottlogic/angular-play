import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule as NgFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgFormsModule,
    MatFormFieldModule
  ],
  exports: [
    NgFormsModule
  ]
})
export class FormsModule { }
