import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as actions from './details-actions';
import { ProductService } from '../../services/product.service';
import { of } from 'rxjs';

@Injectable()
export class DetailsEffects {
 
  constructor(
    private actions$: Actions,
    private service: ProductService
  ) {}
 
  loadProductDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadProductDetails),
      mergeMap(action => this.service.getProduct(action.id)
        .pipe(
          map(product => actions.loadProductDetailsComplete({ product })),
          catchError(error => of(actions.loadProductDetailsError({ error })))
        )
      )
    )
  );
}