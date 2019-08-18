import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo009HerosComponent } from './demo009-heros.component';

describe('Demo009HerosComponent', () => {
  let component: Demo009HerosComponent;
  let fixture: ComponentFixture<Demo009HerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo009HerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo009HerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
