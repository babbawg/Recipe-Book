import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../Recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Lasagne', "Lasagne alla bolognese", 'http://www.saison.ch/media/uploads/filer/public/2015/07/27/mm201508lasagne.jpg.256x256_q85_crop_upscale.jpg', []),
    new Recipe('Risotto', "Risotto alla mantovana", 'http://www.saison.ch/media/uploads/filer/public/2011/08/15/20100233a.jpg.256x256_q85_crop_upscale.jpg', []),
    new Recipe('Cotoletta', "Cotoletta alla milanese", 'http://images.bigoven.com/image/upload/t_recipe-256/chicken-milanese-breaded-chicken-cu-11.jpg', [])
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();
  

  constructor() { }

  ngOnInit() { }

  onSelected(recipe: Recipe)  {
    this.recipeSelected.emit(recipe);
  }
}
