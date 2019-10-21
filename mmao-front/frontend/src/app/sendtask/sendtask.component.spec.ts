import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendtaskComponent } from './sendtask.component';

describe('SendtaskComponent', () => {
  let component: SendtaskComponent;
  let fixture: ComponentFixture<SendtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
