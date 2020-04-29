import { Component, OnInit } from '@angular/core';
import { AuthClient } from 'src/app/client/auth-client.service';
import { Observable } from 'rxjs';

type Product = {
  id: string,
  name: string
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public $products: Observable<Product>;

  constructor(private client: AuthClient) { }

  ngOnInit(): void {
    this.$products = this.client.get<Product>('products');
    this.$products.subscribe(x => { console.log('product', x) });
  }

}
