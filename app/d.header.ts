import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'cads-header',
  templateUrl: '../templates/cads_header.html'
})

export class Header implements OnInit{
  constructor(private router: Router) {}

  ngOnInit() {
    console.log("= Create header... =");
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        $('body').animate({ scrollTop: 50 }, 500);
    });
  }

 }