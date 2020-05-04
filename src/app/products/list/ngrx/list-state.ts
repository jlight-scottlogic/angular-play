import { Product } from '../../models';

export interface ProductListState extends Readonly<{
    loading: boolean,
    error: boolean,
    products: Product[]
}> {};