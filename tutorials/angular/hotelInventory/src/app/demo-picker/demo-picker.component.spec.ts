import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPickerComponent } from './demo-picker.component';

describe('DemoPickerComponent', () => {
  let component: DemoPickerComponent;
  let fixture: ComponentFixture<DemoPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
