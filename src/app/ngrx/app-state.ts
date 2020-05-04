import { ProductState } from '../products/ngrx/products-state';

export interface AppState extends Readonly<{
    products: ProductState
}> { };