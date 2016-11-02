import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cads-about',
  templateUrl: '../templates/cads_about.html'
})

export class CADS_About implements OnInit{
  
  ngOnInit() {
    console.log("= About Page loaded... =");
  }
}