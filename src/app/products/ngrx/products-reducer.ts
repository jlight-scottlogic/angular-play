import { combineReducers, Action } from '@ngrx/store';

import listReducer from '../list/ngrx/list-reducer';
import detailsReducer from '../details/ngrx/details-reducer';
import { ProductState } from './products-state';

export const key = 'products';

export const reducerFn = combineReducers({
    list: listReducer,
    details: detailsReducer
});

export function reducer(state: ProductState | undefined, action: Action) {
    return reducerFn(state, action);
}