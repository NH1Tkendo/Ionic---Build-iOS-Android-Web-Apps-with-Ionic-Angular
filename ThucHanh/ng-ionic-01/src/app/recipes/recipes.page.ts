import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonAvatar,
  IonImg,
  IonLabel,
} from '@ionic/angular/standalone';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipes.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonList,
    IonItem,
    IonAvatar,
    IonImg,
    IonLabel,
    RouterModule,
  ],
})
export class RecipesPage implements OnInit {
  recipes?: Recipe[];
  private recipesService = inject(RecipesService);

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }
}
