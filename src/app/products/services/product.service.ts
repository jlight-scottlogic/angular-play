import { Injectable } from '@angular/core';
import { AuthClient } from 'src/app/client/auth-client.service';
import { Product, ProductCreateModel } from '../models';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

type ProductDTO = {
  id: string,
  name: string,
  description: string,
  dateAdded: string,
  isActive: boolean
}

@Injectable()
export class ProductService {

  constructor(private client: AuthClient) { }

  getProducts(): Observable<Product[]> {
    return this.client.get<ProductDTO[]>('products').pipe(
      map(products =>
        products.map(p => ({ ...p, dateAdded: moment(p.dateAdded) }))
      )
    )
  }

  getProduct(id: string): Observable<Product> {
    return this.client.get<ProductDTO>(`products/${id}`).pipe(
      map(p => ({ ...p, dateAdded: moment(p.dateAdded) }))
    )
  }

  createProduct(product: ProductCreateModel): Observable<string> {
    return this.client.post(`products`, {
      ...product,
      dateAdded: product.dateAdded.format()
    });
  }
}
