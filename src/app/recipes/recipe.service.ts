import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test',
      'descrption Test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
    new Recipe(
      'Another',
      'descrption Test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); //slice because we want copy of this recipes array not the actual one becuase by default array and objects are reference types in js
  }
}
