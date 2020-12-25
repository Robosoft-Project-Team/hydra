import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignBoardComponent } from './assign-board.component';

describe('AssignBoardComponent', () => {
  let component: AssignBoardComponent;
  let fixture: ComponentFixture<AssignBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
