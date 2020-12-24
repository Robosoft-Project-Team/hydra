import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvStatsHeaderComponent } from './cv-stats-header.component';

describe('CvStatsHeaderComponent', () => {
  let component: CvStatsHeaderComponent;
  let fixture: ComponentFixture<CvStatsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvStatsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvStatsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
