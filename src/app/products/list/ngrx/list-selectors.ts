import { createSelector } from "@ngrx/store";
import { selectProductsState } from '../../ngrx/products-selectors';

const selectListState = createSelector(
    selectProductsState,
    state => state.list
)

export const selectListLoading = createSelector(
    selectListState,
    state => state.loading
)

export const selectListHasError = createSelector(
    selectListState,
    state => state.error
)

export const selectListProducts = createSelector(
    selectListState,
    state => state.products
)