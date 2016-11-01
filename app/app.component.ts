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
    console.log("page loading completed");
  }
}