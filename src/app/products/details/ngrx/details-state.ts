import { Product } from '../../models';

export interface ProductDetailsState extends Readonly<{
    loading: boolean,
    error: boolean,
    product: Product
}> {};