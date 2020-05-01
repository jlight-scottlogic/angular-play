import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'product-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  public $product: Observable<Product>;
  public loading = false;
  private subscriptions: Subscription[] = [];

  constructor(
    route: ActivatedRoute,
    private service: ProductService
  ) {
    this.subscriptions.push(
      route.params
        .pipe(map(p => p.id))
        .subscribe(id => {
          this.loading = true;
          this.$product = this.service.getProduct(id);
        })
    );
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.$product.subscribe(x => {
        this.loading = false;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
