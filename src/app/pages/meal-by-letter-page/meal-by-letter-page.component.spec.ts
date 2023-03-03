import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealByLetterPageComponent } from './meal-by-letter-page.component';

describe('MealsByLetterPageComponent', () => {
  let component: MealByLetterPageComponent;
  let fixture: ComponentFixture<MealByLetterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealByLetterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealByLetterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
