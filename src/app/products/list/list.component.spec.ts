import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { ProductService } from '../services/product.service';
import { of } from 'rxjs';
import * as moment from 'moment';
import { Product } from '../models';

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
    component = fixture.componentInstance;
  });

  it('should create', () => {
    serviceSpy.getProducts.and.returnValue(of([createTestProduct(1)]))
    
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
