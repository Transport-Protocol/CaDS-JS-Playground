import { Component, OnInit, EventEmitter } from '@angular/core';
declare var callTheTwitterFunction:any

@Component({
  selector: 'cads-forstudents',
  templateUrl: '../templates/cads_forstudents.html'
})

export class CADS_ForStudents implements OnInit{ 

  ngOnInit() {
    console.log("= For Students Page loaded... =");
  }
}