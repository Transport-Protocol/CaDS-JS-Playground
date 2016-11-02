import { Component, OnInit, EventEmitter } from '@angular/core';
declare var callTheTwitterFunction:any

@Component({
  selector: 'cads-impressum',
  templateUrl: '../templates/cads_impressum.html'
})

export class CADS_Impressum implements OnInit{ 

  ngOnInit() {
    console.log("= Find Cads Page loaded... =");
  }
}