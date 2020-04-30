import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public $products: Observable<Product[]>;
  public loading = false;

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.loading = true;
    this.$products = this.service.getProducts();
    this.$products.subscribe(x => {
      this.loading = false;
    })
  }
}
