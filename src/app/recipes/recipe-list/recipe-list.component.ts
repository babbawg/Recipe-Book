import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../Recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', "Dummy description of test", 'http://newsdesignlist.it/site/wp-content/uploads/2016/06/8a40duo_coffee_steeper_1-120x120.jpg');

  constructor() { }

  ngOnInit() { }

  onSelected(recipe: Recipe)  {
    this.recipeSelected.emit(recipe);
  }
}
