import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueMaskComponent } from './value-mask.component';

describe('ValueMaskComponent', () => {
  let component: ValueMaskComponent;
  let fixture: ComponentFixture<ValueMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
