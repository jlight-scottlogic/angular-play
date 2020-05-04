import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx/app-state';
import { selectListProducts, selectListLoading } from './ngrx/list-selectors';
import { loadProductList } from './ngrx/list-actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public $products = this.store.select(selectListProducts);
  public $loading = this.store.select(selectListLoading);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadProductList());
  }
}
