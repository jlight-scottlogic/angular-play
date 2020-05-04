import { createSelector } from "@ngrx/store";
import { selectProductsState } from '../../ngrx/products-selectors';

const selectDetailsState = createSelector(
    selectProductsState,
    state => state.details
)

export const selectDetailsLoading = createSelector(
    selectDetailsState,
    state => state.loading
)

export const selectDetailsHasError = createSelector(
    selectDetailsState,
    state => state.error
)

export const selectDetailsProducts = createSelector(
    selectDetailsState,
    state => state.product
)