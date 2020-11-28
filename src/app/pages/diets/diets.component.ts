import { Component, OnInit } from '@angular/core';

import { Diet } from './../../models/diet';

@Component({
  selector: 'app-diets',
  templateUrl: './diets.component.html',
  styleUrls: ['./diets.component.css']
})
export class DietsComponent implements OnInit {

  diets: Diet[] = [
    {
      id: 1,
      name: 'Dieta Vegana',
      description: 'bla bla bla bla bla',
      duration: 'asd'}
  ];

  constructor() { }

  ngOnInit() {
  }

  clickDiet(id: number) {
    console.log('diet');
    console.log(id);
  }

}
