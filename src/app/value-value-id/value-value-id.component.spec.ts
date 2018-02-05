import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueValueIdComponent } from './value-value-id.component';

describe('ValueValueIdComponent', () => {
  let component: ValueValueIdComponent;
  let fixture: ComponentFixture<ValueValueIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueValueIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueValueIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
