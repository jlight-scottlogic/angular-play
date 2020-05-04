import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as actions from './list-actions';
import { ProductService } from '../../services/product.service';
import { of } from 'rxjs';

@Injectable()
export class ListEffects {
 
  constructor(
    private actions$: Actions,
    private service: ProductService
  ) {}
 
  loadProductList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadProductList),
      mergeMap(() => this.service.getProducts()
        .pipe(
          map(products => actions.loadProductListComplete({ products })),
          catchError(error => of(actions.loadProductListError({ error })))
        )
      )
    )
  );
}