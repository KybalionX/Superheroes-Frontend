import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroesEditComponent } from './superheroes-edit.component';

describe('SuperheroesEditComponent', () => {
  let component: SuperheroesEditComponent;
  let fixture: ComponentFixture<SuperheroesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperheroesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
