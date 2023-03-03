import { Component, Input } from '@angular/core';
import { ICategories } from 'src/app/models/meals';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
})
export class CategoryListComponent {
@Input() category: ICategories


}
