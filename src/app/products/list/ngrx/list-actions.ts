import { createAction, props } from '@ngrx/store';
import { Product } from '../../models';

export const loadProductList = createAction('[Product List] Load')
export const loadProductListComplete = createAction('[Product List] Load Complete', props<{ products: Product[] }>())
export const loadProductListError = createAction('[Product List] Load Error', props<{ error: any }>())