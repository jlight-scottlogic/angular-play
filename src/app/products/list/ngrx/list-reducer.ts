import { createReducer, on } from '@ngrx/store';
import { loadProductList, loadProductListComplete, loadProductListError } from './list-actions';

const initialState = {
    loading: false,
    error: false,
    products: []
}

export default createReducer(initialState,
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