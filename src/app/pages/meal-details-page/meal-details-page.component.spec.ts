import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealDetailsPageComponent } from './meal-details-page.component';

describe('MealDetailsPageComponent', () => {
  let component: MealDetailsPageComponent;
  let fixture: ComponentFixture<MealDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
