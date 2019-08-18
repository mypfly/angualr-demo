import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo008PaletxComponent } from './demo008-paletx.component';

describe('Demo008PaletxComponent', () => {
  let component: Demo008PaletxComponent;
  let fixture: ComponentFixture<Demo008PaletxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo008PaletxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo008PaletxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
