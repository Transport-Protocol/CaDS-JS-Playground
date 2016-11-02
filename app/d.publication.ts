import { Component, OnInit, EventEmitter } from '@angular/core';
declare var callTheTwitterFunction:any

@Component({
  selector: 'cads-publication',
  templateUrl: '../templates/cads_publication.html'
})

export class CADS_Publication implements OnInit{ 

  ngOnInit() {
    console.log("= Publication Page loaded... =");
  }
}