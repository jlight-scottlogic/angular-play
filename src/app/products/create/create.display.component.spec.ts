import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDisplayComponent } from './create.display.component';

describe('CreateDisplayComponent', () => {
  let component: CreateDisplayComponent;
  let fixture: ComponentFixture<CreateDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
