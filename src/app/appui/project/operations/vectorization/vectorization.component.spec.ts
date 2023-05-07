import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorizationComponent } from './vectorizacion.component';

describe('VectorizationComponent', () => {
  let component: VectorizationComponent;
  let fixture: ComponentFixture<VectorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VectorizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VectorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
