import { createAction, props } from '@ngrx/store';
import { ProductCreateModel } from '../../models';

export const createProduct = createAction('[Product Create] Save', props<{ product: ProductCreateModel }>());
export const createProductSuccess = createAction('[Product Create] Save Complete', props<{ id: string }>());
export const createProductError = createAction('[Product Create] Save Error', props<{ error: any }>());