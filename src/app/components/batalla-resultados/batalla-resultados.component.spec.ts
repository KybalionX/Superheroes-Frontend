import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatallaResultadosComponent } from './batalla-resultados.component';

describe('BatallaResultadosComponent', () => {
  let component: BatallaResultadosComponent;
  let fixture: ComponentFixture<BatallaResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatallaResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatallaResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
