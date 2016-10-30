import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <my-header></my-header>
        <div ui-view=""></div>
        <my-footer></my-footer>
    `,
})


export class AppComponent {
  name: string;
  title     = 'CaDS Playground';
  page_name = 'home';
  
  constructor() {
    console.log("======= CaDS Component START ========");
  };

}