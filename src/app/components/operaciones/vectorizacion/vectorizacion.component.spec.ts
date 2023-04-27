import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorizacionComponent } from './vectorizacion.component';

describe('VectorizacionComponent', () => {
  let component: VectorizacionComponent;
  let fixture: ComponentFixture<VectorizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VectorizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VectorizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
