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
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent(_ngZone) {
        this._ngZone = _ngZone;
        this.title = 'CaDS Playground';
        this.page_name = 'home';
        this.zone = _ngZone;
        console.log("======= CaDS Component START ========");
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        /* global callTheTwitterFunction*/
        this.zone.runOutsideAngular(function () {
            //  callTheTwitterFunction();
        });
        console.log("page loading completed");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <base href=\"/\">\n        <cads-header></cads-header>\n        <router-outlet></router-outlet>\n        <cads-footer></cads-footer>\n    ",
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map