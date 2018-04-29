import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: []
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>(); 

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe 1',
      'This is simply a test 1',
      'https://img.delicious.com.au/52hfFIjf/h506-w759-cfill/del/2017/05/one-pot-butter-chicken-with-dill-yoghurt-46876-2.jpg'),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test 2',
      'https://img.delicious.com.au/52hfFIjf/h506-w759-cfill/del/2017/05/one-pot-butter-chicken-with-dill-yoghurt-46876-2.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
