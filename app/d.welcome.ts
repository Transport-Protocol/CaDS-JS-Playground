import { Component, OnInit, EventEmitter } from '@angular/core';
declare var callTheTwitterFunction:any

@Component({
  selector: 'cads-welcome',
  templateUrl: '../templates/cads_welcome.html'
})

export class CADS_Welcome implements OnInit{ 

  ngOnInit() {
    console.log("= Welcome Page loaded... =");
      callTheTwitterFunction();
  }
}