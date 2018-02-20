import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueFontColorComponent } from './value-font-color.component';

describe('ValueFontColorComponent', () => {
  let component: ValueFontColorComponent;
  let fixture: ComponentFixture<ValueFontColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueFontColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueFontColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
