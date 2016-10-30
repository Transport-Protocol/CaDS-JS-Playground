import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NgModule }      from '@angular/core';
import { OnInit }        from '@angular/core';


// header 
import {Header} from './d.header';
// footer 
import {Footer} from './d.footer';
 // welcome 
import {Welcome} from './d.welcome';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, Header, Footer, Welcome ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  constructor() {
    console.log("======= CaDS APP START =========");
  

  };
}