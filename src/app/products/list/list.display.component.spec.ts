import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDisplayComponent } from './list.display.component';
import * as moment from 'moment';

describe('ListDisplayComponent', () => {
  let component: ListDisplayComponent;
  let fixture: ComponentFixture<ListDisplayComponent>;
  let element: HTMLElement;

  const createDumbProduct = () => ({
    id: '1',
    name: '',
    dateAdded: moment(),
    description: '',
    isActive: true
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListDisplayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDisplayComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display empty message when products is null', () => {
    component.products = null;

    fixture.detectChanges();

    expect(element.querySelector('.empty-message')).not.toBeNull();
    expect(element.querySelector('ag-grid-angular')).toBeNull();
  })

  it('should display empty message when products is empty', () => {
    component.products = [];

    fixture.detectChanges();

    expect(element.querySelector('.empty-message')).not.toBeNull();
    expect(element.querySelector('ag-grid-angular')).toBeNull();
  })
  it('should display grid when products is not empty', () => {
    component.products = [createDumbProduct()];

    fixture.detectChanges();

    expect(element.querySelector('.empty-message')).toBeNull();
    expect(element.querySelector('ag-grid-angular')).not.toBeNull();
  })
});
