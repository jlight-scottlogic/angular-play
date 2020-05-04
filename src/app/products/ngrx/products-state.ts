import { ProductListState } from '../list/ngrx/list-state';
import { ProductDetailsState } from '../details/ngrx/details-state';

export interface ProductState extends Readonly<{
    list: ProductListState,
    details: ProductDetailsState
}> {};