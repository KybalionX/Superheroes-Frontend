import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroesCreateComponent } from './superheroes-create.component';

describe('SuperheroesCreateComponent', () => {
  let component: SuperheroesCreateComponent;
  let fixture: ComponentFixture<SuperheroesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperheroesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
