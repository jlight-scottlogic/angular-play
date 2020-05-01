import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { of, asapScheduler } from 'rxjs';
import * as moment from 'moment';
import { Product } from '../models';

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
  let serviceSpy: jasmine.SpyObj<ProductService>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('ProductService', ['getProduct']);

    TestBed
      .configureTestingModule({
        declarations: [DetailsComponent],
        providers: [
          { provide: ActivatedRoute, useValue: { params: of({ id: '1' })} },
          { provide: ProductService, useValue: spy }
        ]
      })
      .compileComponents();

    serviceSpy = TestBed.inject(ProductService) as jasmine.SpyObj<ProductService>;
  }));

  const instantiateComponent = () => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  }

  it('should create', () => {
    serviceSpy.getProduct.and.returnValue(of(createTestProduct(1)))
    instantiateComponent();
    expect(component).toBeTruthy();
  });

  it('should show loading until getProduct returns', fakeAsync(() => {
    serviceSpy.getProduct.and.returnValue(of(createTestProduct(1), asapScheduler))
    
    instantiateComponent();

    expect(element.querySelector('details-display')).toBeNull();
    expect(element.querySelector('.loading')).not.toBeNull();

    tick();
    fixture.detectChanges();

    expect(element.querySelector('details-display')).not.toBeNull();
    expect(element.querySelector('.loading')).toBeNull();
  }));
});
