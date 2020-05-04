import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx/app-state';
import { selectDetailsProduct, selectDetailsLoading } from './ngrx/details-selectors';
import { loadProductDetails } from './ngrx/details-actions';

@Component({
  selector: 'product-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnDestroy {
  public $product = this.store.select(selectDetailsProduct);
  public $loading = this.store.select(selectDetailsLoading);
  
  private subscription: Subscription;
  
  constructor(
    route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.subscription =
      route.params
        .pipe(map(p => p.id))
        .subscribe(id => {
          this.store.dispatch(loadProductDetails({ id }))
        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
