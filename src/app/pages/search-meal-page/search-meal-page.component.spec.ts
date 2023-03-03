import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMealPageComponent } from './search-meal-page.component';

describe('SearchMealsPageComponent', () => {
  let component: SearchMealPageComponent;
  let fixture: ComponentFixture<SearchMealPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMealPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMealPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
