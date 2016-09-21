import { Component, OnInit } from '@angular/core';
import { RecipeListComponent } from './recipe-list';
import { RecipeDetailComponent } from './recipe-detail';

@Component({
  selector: 'rb-recipes',
  templateUrl: 'recipes.component.html'
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
