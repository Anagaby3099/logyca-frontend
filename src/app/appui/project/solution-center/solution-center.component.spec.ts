import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionCenterComponent } from './solution-center.component';

describe('SolutionCenterComponent', () => {
  let component: SolutionCenterComponent;
  let fixture: ComponentFixture<SolutionCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
