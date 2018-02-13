import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueMaskValueFieldStringComponent } from './value-mask-value-field-string.component';

describe('ValueMaskValueFieldStringComponent', () => {
  let component: ValueMaskValueFieldStringComponent;
  let fixture: ComponentFixture<ValueMaskValueFieldStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueMaskValueFieldStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueMaskValueFieldStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
