import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo010TaskComponent } from './demo010-task.component';

describe('Demo010TaskComponent', () => {
  let component: Demo010TaskComponent;
  let fixture: ComponentFixture<Demo010TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo010TaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo010TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
