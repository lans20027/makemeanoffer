import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisserComponent } from './disser.component';

describe('DisserComponent', () => {
  let component: DisserComponent;
  let fixture: ComponentFixture<DisserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
