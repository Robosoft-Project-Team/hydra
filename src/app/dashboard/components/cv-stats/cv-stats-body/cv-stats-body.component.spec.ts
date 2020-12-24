import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvStatsBodyComponent } from './cv-stats-body.component';

describe('CvStatsBodyComponent', () => {
  let component: CvStatsBodyComponent;
  let fixture: ComponentFixture<CvStatsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvStatsBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvStatsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
