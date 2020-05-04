import { createAction, props } from '@ngrx/store';
import { Product } from '../../models';

export const loadProductDetails = createAction('[Product Details] Load', props<{ id: string }>())
export const loadProductDetailsComplete = createAction('[Product Details] Load Complete', props<{ product: Product }>())
export const loadProductDetailsError = createAction('[Product Details] Load Error', props<{ error: any }>())