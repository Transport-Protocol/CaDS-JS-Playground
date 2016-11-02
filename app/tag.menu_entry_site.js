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
var CADS_TAG_MENU_ENTRY_SITE = (function () {
    function CADS_TAG_MENU_ENTRY_SITE() {
    }
    CADS_TAG_MENU_ENTRY_SITE.prototype.toogleID = function () {
        if (document.getElementById(this.toHide).classList.contains('cads_hide')) {
            document.getElementById(this.toHide).classList.remove('cads_hide');
            document.getElementById(this.name).style.backgroundColor = '#204C86';
        }
        else {
            document.getElementById(this.toHide).classList.add('cads_hide');
        }
        void (0);
    };
    CADS_TAG_MENU_ENTRY_SITE.prototype.ngOnInit = function () {
        console.log("= CADS_TAG_MENU_ENTRY_SITE Tag loaded... =");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CADS_TAG_MENU_ENTRY_SITE.prototype, "entry", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CADS_TAG_MENU_ENTRY_SITE.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CADS_TAG_MENU_ENTRY_SITE.prototype, "toHide", void 0);
    CADS_TAG_MENU_ENTRY_SITE = __decorate([
        core_1.Component({
            selector: 'cads_tag-menu-entry-site',
            //templateUrl: '../templates/cads_tag-menu-entry-site.html'
            template: "\n          <table class=\"cads_full_sized\">    \n            <tr class=\"cads_space_header\" id=\"{{name}}\">\n            <td>\n            <div class=\"cads_no_decoration\">\n                <a (click)=\"toogleID()\">\n                <div class=\"cads_full_sized\">{{entry}} </div></a>\n            </div>\n            </td>\n          </tr>\n          </table>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], CADS_TAG_MENU_ENTRY_SITE);
    return CADS_TAG_MENU_ENTRY_SITE;
}());
exports.CADS_TAG_MENU_ENTRY_SITE = CADS_TAG_MENU_ENTRY_SITE;
//# sourceMappingURL=tag.menu_entry_site.js.map