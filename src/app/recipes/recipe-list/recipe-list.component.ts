import { Recipes } from './../recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipes[] = [
    new Recipes(
      'test recipe',
      'this is a test recipe',
      'https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
