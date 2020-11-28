import { Component, OnInit } from '@angular/core';

import { Routine } from './../../models/routine';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.css']
})
export class RoutinesComponent implements OnInit {

  routines: Routine[] = [
    {
      id: '1',
      title: 'Rutina Cardio',
      description: 'bla bla bla bla bla'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  clickRoutine(id: number) {
    console.log('routine');
    console.log(id);
  }

}

