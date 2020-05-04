import { createReducer, on, Action } from '@ngrx/store';
import { loadProductDetails, loadProductDetailsComplete, loadProductDetailsError } from './details-actions';
import { ProductDetailsState } from './details-state';

const initialState: ProductDetailsState = {
    loading: false,
    error: false,
    product: null
}

const reducer = createReducer(initialState,
    on(loadProductDetails, state => ({
        ...state,
        loading: true,
        error: false
    })),
    
    on(loadProductDetailsComplete, (state, action) => ({
        ...state,
        loading: false,
        product: action.product
    })),

    on(loadProductDetailsError, state => ({
        ...state,
        loading: false,
        error: true
    }))
);

export default function (state: ProductDetailsState | undefined, action: Action) {
  return reducer(state, action);
}