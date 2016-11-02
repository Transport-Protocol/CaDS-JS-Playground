import { Component, OnInit, EventEmitter } from '@angular/core';
declare var callTheTwitterFunction:any

@Component({
  selector: 'cads-projects',
  templateUrl: '../templates/cads_projects.html'
})

export class CADS_Projects implements OnInit{ 

  ngOnInit() {
    console.log("= Project Page loaded... =");
     
  }
}