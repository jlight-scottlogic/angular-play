import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as actions from './create-actions';
import { ProductService } from '../../services/product.service';
import { of } from 'rxjs';

@Injectable()
export class CreateEffects {
 
  constructor(
    private actions$: Actions,
    private service: ProductService
  ) {}
 
  saveProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.createProduct),
      mergeMap(action => this.service.createProduct(action.product)
        .pipe(
          map(id => actions.createProductSuccess({ id })),
          catchError(error => of(actions.createProductError({ error })))
        )
      )
    )
  );
}