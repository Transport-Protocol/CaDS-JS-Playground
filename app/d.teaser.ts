import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'cads-teaser',
  templateUrl: '../templates/cads_teaser.html'
})

export class Teaser implements OnInit{
  constructor(private router: Router) {}

  ngOnInit() {
    console.log("= Create teaser... =");
    this.router.events.subscribe((evt) => {
 
  }

 }
 