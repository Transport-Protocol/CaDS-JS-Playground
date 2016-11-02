import { Component, OnInit, EventEmitter } from '@angular/core';
declare var callTheTwitterFunction:any

@Component({
  selector: 'cads-findcads',
  templateUrl: '../templates/cads_findcads.html'
})

export class CADS_FindCads implements OnInit{ 

  ngOnInit() {
    console.log("= Find Cads Page loaded... =");
  }
}