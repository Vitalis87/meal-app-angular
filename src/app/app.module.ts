import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LettersArrayPipe } from './pipes/letters-array.pipe';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NgIconsModule } from '@ng-icons/core';
import { heroPlusCircle, heroHome } from '@ng-icons/heroicons/outline';
import { ErrorComponent } from './components/error/error.component';
import { LoadComponent } from './components/load/load.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MealByLetterPageComponent } from './pages/meal-by-letter-page/meal-by-letter-page.component';
import { SearchMealPageComponent } from './pages/search-meal-page/search-meal-page.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MealDetailsPageComponent } from './pages/meal-details-page/meal-details-page.component';
import { RecipePipe } from './pipes/recipe.pipe';
import { AutoFocusDirective } from './derectives/auto-focus.directive';
import { MealItemComponent } from './components/meal-item/meal-item.component';
import { MealByCategoriesPageComponent } from './pages/meal-by-categories-page/meal-by-categories-page.component';



@NgModule({
  declarations: [
    AppComponent,
    LettersArrayPipe,
    HomePageComponent,
    ErrorComponent,
    LoadComponent,
    MealByLetterPageComponent,
    SearchMealPageComponent,
    CategoryListComponent,
    NavigationComponent,
    MealDetailsPageComponent,
    RecipePipe,
    AutoFocusDirective,
    MealItemComponent,
    MealByCategoriesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgIconsModule.withIcons({heroPlusCircle, heroHome}),
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
