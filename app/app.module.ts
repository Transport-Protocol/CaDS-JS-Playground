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

// TGAS
import {  CADS_TAG_MENU_ENTRY_SITE }  from './tag.menu_entry_site';

// Output
import {  CADS_Welcome }              from './d.welcome';
import {  CADS_About }                from './d.about';
import {  CADS_Projects }             from './d.projects';
import {  CADS_Publication }          from './d.publication';
import {  CADS_ForStudents }          from './d.forstudents';
import {  CADS_FindCads }             from './d.findcads';
import {  CADS_Impressum }            from './d.impressum';

// Declare NgModule
@NgModule({
  imports: [ BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '',                 component: CADS_Welcome },
      { path: 'home',             component: CADS_Welcome },
      { path: 'about',            component: CADS_About },
      { path: 'projects',         component: CADS_Projects },
      { path: 'publication',      component: CADS_Publication },  
      { path: 'forstudents',      component: CADS_ForStudents }, 
      { path: 'findcads',         component: CADS_FindCads },
      { path: 'impressum',        component: CADS_Impressum},
    ],{ useHash: true })
    ],
  declarations: [ AppComponent, Header, Footer, CADS_Welcome, CADS_About, 
                  CADS_Projects, CADS_Publication, CADS_ForStudents, 
                  CADS_FindCads, CADS_Impressum, CADS_TAG_MENU_ENTRY_SITE ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {
  constructor() {
    console.log("======= CaDS APP START =========");
  };
 
}