import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListDisplayComponent } from './list-display/list-display.component';

@NgModule({
  declarations: [
    ListComponent,
    ListDisplayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent
  ]
})
export class ProductsModule { }
