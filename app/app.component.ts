import { Component, NgZone, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
        <base href="/">
        <cads-header></cads-header>
        <router-outlet></router-outlet>
        <cads-footer></cads-footer>
    `,
})


export class AppComponent  implements OnInit  {
  name: string;
  title     = 'CaDS Playground';
  page_name = 'home';
  zone: NgZone;
   
  constructor(private _ngZone: NgZone) {
    this.zone = _ngZone;
    console.log("======= CaDS Component START ========");
  };

  
  ngOnInit(): void {

    /* global callTheTwitterFunction*/
     this.zone.runOutsideAngular(() => {
           //  callTheTwitterFunction();
    });

  
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-62200961-1', 'auto');
  ga('send', 'pageview');


    console.log("page loading completed");
  }
}