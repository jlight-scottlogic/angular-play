import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store, Action } from '@ngrx/store';

import { ListComponent } from './list.component';
import { key, reducer } from '../ngrx/products-reducer';
import { loadProductListComplete, loadProductListError } from './ngrx/list-actions';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let element: HTMLElement;
  let store: Store;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [ListComponent],
        imports: [
          StoreModule.forRoot({ [key]: reducer })
        ]
      })
      .compileComponents();

    store = TestBed.inject(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    element = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading until load products completes', () => {
    expectElementLoading();
    dispatchAction(loadProductListComplete({ products: [] }));
    expectElementNotLoading();
  });

  it('should show loading until load products errors', () => {
    expectElementLoading();
    dispatchAction(loadProductListError({ error: 'TEST' }));
    expectElementNotLoading();
  });
  
  function dispatchAction(action: Action) {
    store.dispatch(action);
    fixture.detectChanges();
  }
  
  function expectElementNotLoading() {
    expect(element.querySelector('list-display')).not.toBeNull();
    expect(element.querySelector('.loading')).toBeNull();
  }
  
  function expectElementLoading() {
    expect(element.querySelector('list-display')).toBeNull();
    expect(element.querySelector('.loading')).not.toBeNull();
  }
});

