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
import { UiModule } from '../ui/ui.module';
import { ButtonComponent } from './list/button/button.component';
import { StoreModule } from '@ngrx/store';
import { key, reducer } from './ngrx/products-reducer';
import { EffectsModule } from '@ngrx/effects';
import productsEffects from './ngrx/products-effects';
import { CreateComponent } from './create/create.component';
import { CreateDisplayComponent } from './create/create.display.component';
import { FormsModule } from '../forms/forms.module';


@NgModule({
  declarations: [
    ProductsComponent,
    ListComponent,
    ListDisplayComponent,
    DetailsComponent,
    DetailsDisplayComponent,
    ButtonComponent,
    CreateComponent,
    CreateDisplayComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature(key, reducer),
    EffectsModule.forFeature(productsEffects),
    AgGridModule.withComponents([
      ButtonComponent
    ]),
    UiModule,
    FormsModule,
  ],
  providers: [
    ProductService
  ]
})
export class ProductsModule { }
