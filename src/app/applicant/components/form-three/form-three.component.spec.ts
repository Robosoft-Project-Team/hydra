import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormThreeComponent } from './form-three.component';

describe('FormThreeComponent', () => {
  let component: FormThreeComponent;
  let fixture: ComponentFixture<FormThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
