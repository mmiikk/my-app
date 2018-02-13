import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueMaskValueFieldNumericComponent } from './value-mask-value-field-numeric.component';

describe('ValueMaskValueFieldNumericComponent', () => {
  let component: ValueMaskValueFieldNumericComponent;
  let fixture: ComponentFixture<ValueMaskValueFieldNumericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueMaskValueFieldNumericComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueMaskValueFieldNumericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
