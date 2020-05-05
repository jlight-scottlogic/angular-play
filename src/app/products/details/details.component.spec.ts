import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { of, asapScheduler } from 'rxjs';
import * as moment from 'moment';
import { key, reducer } from '../ngrx/products-reducer';
import { Product } from '../models';
import { StoreModule, Store, Action } from '@ngrx/store';
import { loadProductDetailsComplete, loadProductDetailsError } from './ngrx/details-actions';

const createTestProduct = (id: number) => ({
  id: id.toString(),
  name: `Product ${id}`,
  description: 'Description',
  isActive: true,
  dateAdded: moment('2020-01-01T00:00:00')
} as Product)

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let element: HTMLElement;
  let store: Store;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [DetailsComponent],
        imports: [
          StoreModule.forRoot({ [key]: reducer })
        ],
        providers: [
          { provide: ActivatedRoute, useValue: { params: of({ id: '1' })} },
        ]
      })
      .compileComponents();

    store = TestBed.inject(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    element = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading until load product completes', () => {
    expectElementLoading();
    dispatchAction(loadProductDetailsComplete({ product: createTestProduct(1) }));
    expectElementNotLoading();
  });

  it('should show loading until load product errors', () => {
    expectElementLoading();
    dispatchAction(loadProductDetailsError({ error: 'TEST' }));
    expectElementNotLoading();
  });
  
  function dispatchAction(action: Action) {
    store.dispatch(action);
    fixture.detectChanges();
  }
  
  function expectElementNotLoading() {
    expect(element.querySelector('details-display')).not.toBeNull();
    expect(element.querySelector('.loading')).toBeNull();
  }
  
  function expectElementLoading() {
    expect(element.querySelector('details-display')).toBeNull();
    expect(element.querySelector('.loading')).not.toBeNull();
  }
});
