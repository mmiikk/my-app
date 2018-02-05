import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueStaticComponent } from './value-static.component';

describe('ValueStaticComponent', () => {
  let component: ValueStaticComponent;
  let fixture: ComponentFixture<ValueStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
