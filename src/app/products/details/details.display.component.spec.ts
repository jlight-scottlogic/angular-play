import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDisplayComponent } from './details.display.component';

describe('Details.DisplayComponent', () => {
  let component:DetailsDisplayComponent;
  let fixture: ComponentFixture<DetailsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
