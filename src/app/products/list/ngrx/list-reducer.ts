import { createReducer, on, Action } from '@ngrx/store';
import { loadProductList, loadProductListComplete, loadProductListError } from './list-actions';
import { ProductListState } from './list-state';

const initialState: ProductListState = {
    loading: false,
    error: false,
    products: []
}

const reducer = createReducer(initialState,
    on(loadProductList, state => ({
        ...state,
        loading: true,
        error: false
    })),

    on(loadProductListComplete, (state, action) => ({
        ...state,
        loading: true,
        products: action.products
    })),

    on(loadProductListError, state => ({
        ...state,
        loading: false,
        error: true
    }))
);

export default function (state: ProductListState | undefined, action: Action) {
  return reducer(state, action);
}