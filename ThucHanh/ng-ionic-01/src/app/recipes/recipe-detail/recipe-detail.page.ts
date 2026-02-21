import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonList,
  IonItem,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonButton,
} from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes.module';
import { AlertController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonList,
    IonItem,
    IonButtons,
    IonBackButton,
    IonIcon,
    IonButton,
  ],
})
export class RecipeDetailPage implements OnInit {
  // Biến để lưu trữ công thức được tải về
  loadedRecipe?: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertController: AlertController,
  ) {}

  ngOnInit() {
    // Đăng ký theo dõi sự thay đổi của tham số URL
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('recipeId');
      if (!recipeId) {
        return;
      }

      const recipe = this.recipesService.getRecipe(recipeId);
      if (recipe) {
        this.loadedRecipe = recipe;
      }
    });
  }

  onDeleteRecipe() {
    this.alertController
      .create({
        header: 'Are you sure',
        message: 'Do you really want to delete the recipe?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel', // Tự động đóng hộp thoại
          },
          {
            text: 'Delete',
            handler: () => {
              if (!this.loadedRecipe) {
                return;
              }
              this.recipesService.deleteRecipe(this.loadedRecipe.id);
              this.router.navigate(['/recipes']);
            },
          },
        ],
      })
      .then((alertEl) => {
        // alertEl là phần tử cảnh báo trả về từ Promise
        alertEl.present();
      });
  }
}
