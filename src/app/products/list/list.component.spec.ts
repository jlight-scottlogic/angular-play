import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { of, asapScheduler } from 'rxjs';
import * as moment from 'moment';
import { Product } from '../models';

import { ListComponent } from './list.component';
import { ProductService } from '../services/product.service';

const createTestProduct = (id: number) => ({
  id: id.toString(),
  name: `Product ${id}`,
  description: 'Description',
  isActive: true,
  dateAdded: moment('2020-01-01T00:00:00')
} as Product)

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let serviceSpy: jasmine.SpyObj<ProductService>;
  let element: HTMLElement;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('ProductService', ['getProducts']);

    TestBed
      .configureTestingModule({
        declarations: [ListComponent],
        providers: [
          { provide: ProductService, useValue: spy }
        ]
      })
      .compileComponents();

    serviceSpy = TestBed.inject(ProductService) as jasmine.SpyObj<ProductService>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    element = fixture.nativeElement;
    component = fixture.componentInstance;
  });

  it('should create', () => {
    serviceSpy.getProducts.and.returnValue(of([createTestProduct(1)]))
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show loading until getProducts returns', fakeAsync(() => {
    serviceSpy.getProducts.and.returnValue(of([createTestProduct(1)], asapScheduler))
    
    fixture.detectChanges();

    expect(element.querySelector('list-display')).toBeNull();
    expect(element.querySelector('.loading')).not.toBeNull();

    tick();
    fixture.detectChanges();

    expect(element.querySelector('list-display')).not.toBeNull();
    expect(element.querySelector('.loading')).toBeNull();
  }));
});
