import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvStatsComponent } from './cv-stats.component';

describe('CvStatsComponent', () => {
  let component: CvStatsComponent;
  let fixture: ComponentFixture<CvStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
