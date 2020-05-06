import { Component } from '@angular/core';
import { AppState } from 'src/app/ngrx/app-state';
import { Store } from '@ngrx/store';
import { Product } from '../models';
import { createProduct } from './ngrx/create-actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  constructor(private store: Store<AppState>) { }

  public onSubmit(product: Product) {
    this.store.dispatch(createProduct({ product }));
  }
}
