import { createAction, props } from '@ngrx/store';
import { Product } from '../../models';

export const loadProductDetails = createAction('[Product Details] Load')
export const loadProductDetailsComplete = createAction('[Product Details] Load Complete', props<{ product: Product }>())
export const loadProductDetailsError = createAction('[Product Details] Load Error')