import { combineReducers, Action } from '@ngrx/store';

import listReducer from '../list/ngrx/list-reducer';
import detailsReducer from '../details/ngrx/details-reducer';
import { ProductState } from './products-state';

const reducer = combineReducers({
    list: listReducer,
    details: detailsReducer
});

export default function (state: ProductState | undefined, action: Action) {
    return reducer(state, action);
}