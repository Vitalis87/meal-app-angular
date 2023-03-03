import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealByCategoriesPageComponent } from './meal-by-categories-page.component';

describe('MealByCategoriesPageComponent', () => {
  let component: MealByCategoriesPageComponent;
  let fixture: ComponentFixture<MealByCategoriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealByCategoriesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealByCategoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
