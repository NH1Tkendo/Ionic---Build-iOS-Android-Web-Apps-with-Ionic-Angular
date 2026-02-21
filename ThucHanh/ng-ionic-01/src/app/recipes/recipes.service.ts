import { Injectable } from '@angular/core';
import { Recipe } from './recipes.module';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://example.com/schnitzel.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Sctzel',
      imageUrl: 'https://example.com/schnitzel.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Banh mi'],
    },
  ];

  getAllRecipes() {
    return [...this.recipes]; // Trả về bản sao của mảng
  }

  getRecipe(recipeId: string) {
    return this.recipes.find((recipe) => recipe.id === recipeId);
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== recipeId);
  }
}
