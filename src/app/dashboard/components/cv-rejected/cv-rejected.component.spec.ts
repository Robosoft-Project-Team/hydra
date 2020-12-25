import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvRejectedComponent } from './cv-rejected.component';

describe('CvRejectedComponent', () => {
  let component: CvRejectedComponent;
  let fixture: ComponentFixture<CvRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvRejectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
