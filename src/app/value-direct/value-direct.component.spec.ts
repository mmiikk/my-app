import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueDirectComponent } from './value-direct.component';

describe('ValueDirectComponent', () => {
  let component: ValueDirectComponent;
  let fixture: ComponentFixture<ValueDirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueDirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
