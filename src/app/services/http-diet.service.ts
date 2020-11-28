import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Diet } from './../models/diet';


@Injectable({
  providedIn: 'root'
})
export class HttpDietService {

  diets: Diet[] = [
    {
      id: 1,
      name: 'Dieta Vegana',
      description: 'bla bla bla bla bla',
      duration: 'asd'
    },

  ];

  constructor() { }

  getAllDiets() {
    return this.diets;
  }

  getDiet(id: number) {
    return this.diets.find(item => id === item.id);
  }
}

