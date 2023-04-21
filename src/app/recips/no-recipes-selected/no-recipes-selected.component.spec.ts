import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRecipesSelectedComponent } from './no-recipes-selected.component';

describe('NoRecipesSelectedComponent', () => {
  let component: NoRecipesSelectedComponent;
  let fixture: ComponentFixture<NoRecipesSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoRecipesSelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoRecipesSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
