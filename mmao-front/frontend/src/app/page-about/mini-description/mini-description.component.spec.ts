import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniDescriptionComponent } from './mini-description.component';

describe('MiniDescriptionComponent', () => {
  let component: MiniDescriptionComponent;
  let fixture: ComponentFixture<MiniDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
