import { Component, OnInit } from '@angular/core';
import { AuthClient } from 'src/app/client/auth-client.service';
import { Observable } from 'rxjs';
import { Product } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public $products: Observable<Product>;
  public loading = false;

  constructor(private client: AuthClient) { }

  ngOnInit(): void {
    this.loading = true;
    this.$products = this.client.get<Product>('products');
    this.$products.subscribe(x => {
      console.log(x)
      this.loading = false;
    })
  }

}
