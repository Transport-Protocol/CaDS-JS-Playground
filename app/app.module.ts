import { BrowserModule }                  from '@angular/platform-browser';
import { NgModule, OnInit, EventEmitter}  from '@angular/core';
import { FormsModule }                    from '@angular/forms';
import { RouterModule }                   from '@angular/router';

// My Modules
import { AppComponent }  from './app.component';

// header 
import { Header } from './d.header';
// footer 
import { Footer } from './d.footer';


// Output
import {  CADS_Welcome }              from './d.welcome';
import {  CADS_About }                from './d.about';


// Declare NgModule
@NgModule({
  imports: [ BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '',                 component: CADS_Welcome },
      { path: 'home',             component: CADS_Welcome },
      { path: 'about',            component: CADS_About },
      
    ],{ useHash: true })
    ],
  declarations: [ AppComponent, Header, Footer, CADS_Welcome, CADS_About ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {
  constructor() {
    console.log("======= CaDS APP START =========");
  };
 
}