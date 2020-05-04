import { createFeatureSelector } from '@ngrx/store';
import { key } from './products-reducer';
import { AppState } from 'src/app/ngrx/app-state';
import { ProductState } from './products-state';

export const selectProductsState = createFeatureSelector<AppState, ProductState>(key);