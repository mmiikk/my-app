import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueBackColorComponent } from './value-back-color.component';

describe('ValueBackColorComponent', () => {
  let component: ValueBackColorComponent;
  let fixture: ComponentFixture<ValueBackColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueBackColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueBackColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
