import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersMasterComponent } from './users-master.component';

describe('UsersMasterComponent', () => {
  let component: UsersMasterComponent;
  let fixture: ComponentFixture<UsersMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
