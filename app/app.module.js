"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
// My Modules
var app_component_1 = require('./app.component');
// header 
var d_header_1 = require('./d.header');
// footer 
var d_footer_1 = require('./d.footer');
// TGAS
var tag_menu_entry_site_1 = require('./tag.menu_entry_site');
// Output
var d_welcome_1 = require('./d.welcome');
var d_about_1 = require('./d.about');
var d_projects_1 = require('./d.projects');
var d_publication_1 = require('./d.publication');
var d_forstudents_1 = require('./d.forstudents');
var d_findcads_1 = require('./d.findcads');
var d_impressum_1 = require('./d.impressum');
// Declare NgModule
var AppModule = (function () {
    function AppModule() {
        console.log("======= CaDS APP START =========");
    }
    ;
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: d_welcome_1.CADS_Welcome },
                    { path: 'home', component: d_welcome_1.CADS_Welcome },
                    { path: 'about', component: d_about_1.CADS_About },
                    { path: 'projects', component: d_projects_1.CADS_Projects },
                    { path: 'publication', component: d_publication_1.CADS_Publication },
                    { path: 'forstudents', component: d_forstudents_1.CADS_ForStudents },
                    { path: 'findcads', component: d_findcads_1.CADS_FindCads },
                    { path: 'impressum', component: d_impressum_1.CADS_Impressum },
                ], { useHash: true })
            ],
            declarations: [app_component_1.AppComponent, d_header_1.Header, d_footer_1.Footer, d_welcome_1.CADS_Welcome, d_about_1.CADS_About,
                d_projects_1.CADS_Projects, d_publication_1.CADS_Publication, d_forstudents_1.CADS_ForStudents,
                d_findcads_1.CADS_FindCads, d_impressum_1.CADS_Impressum, tag_menu_entry_site_1.CADS_TAG_MENU_ENTRY_SITE],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map