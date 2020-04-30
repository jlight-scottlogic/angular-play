import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ListComponent } from './list/list.component';
import { ListDisplayComponent } from './list/list.display.component';
import { ProductService } from './services/product.service';
import { DetailsComponent } from './details/details.component';
import { DetailsDisplayComponent } from './details/details.display.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ListComponent,
    ListDisplayComponent,
    DetailsComponent,
    DetailsDisplayComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    ProductService
  ]
})
export class ProductsModule { }
