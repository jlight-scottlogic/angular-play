import { createReducer, on } from '@ngrx/store';
import { loadProductDetails, loadProductDetailsComplete, loadProductDetailsError } from './details-actions';

const initialState = {
    loading: false,
    error: false,
    product: null
}

export default createReducer(initialState,
    on(loadProductDetails, state => ({
        ...state,
        loading: true,
        error: false
    })),
    
    on(loadProductDetailsComplete, (state, action) => ({
        ...state,
        loading: true,
        product: action.product
    })),

    on(loadProductDetailsError, state => ({
        ...state,
        loading: false,
        error: true
    }))
);