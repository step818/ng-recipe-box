import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Baked goods only';
  recipes: Recipe[] = [
    new Recipe('Muffins', 'flour, sugar, baking powder, eggs, blueberries, milk, vanilla extract, veggie oil', 'Bake em til they are done'),
    new Recipe('cookies!', 'more of the same but chocolate chips', 'The same as the muffins directions.')
  ];
}
