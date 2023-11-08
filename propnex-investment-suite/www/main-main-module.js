(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/main/main.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/main/main.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Home</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-card-header class=\"ion-text-center\">\r\n            <ion-card-subtitle class=\"ion-text-left ion-margin-bottom\">Welcome Back,</ion-card-subtitle>\r\n            <ion-card-title>{{currUser.name}}</ion-card-title>\r\n            <ion-icon name=\"person-circle\"></ion-icon>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content class=\"ion-text-center\">\r\n            <ion-button fill=\"clear\" color=\"tertiary\" (click)=\"onEditProfile()\">Edit Profile</ion-button>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>Favourites</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-item \r\n                class=\"ion-no-padding ion-text-center\" \r\n                *ngIf=\"!currUser.favourites || currUser.favourites.length <= 0\"\r\n              >\r\n                <ion-label>\r\n                  <h2>No favourites for now...</h2>\r\n                </ion-label>\r\n              </ion-item>\r\n\r\n              <ion-item \r\n                class=\"ion-no-padding\" \r\n                detail \r\n                *ngIf=\"currUser.favourites && currUser.favourites.length > 0\"\r\n                (click)=\"onClickPlace(currUser.favourites[0].postal)\" \r\n                button\r\n              >\r\n                <ion-thumbnail slot=\"start\">\r\n                  <ion-img *ngIf=\"!currUser.favourites[0].imageUrl\" src=\"assets/placeholders/property.jpeg\"></ion-img>\r\n                  <ion-img *ngIf=\"currUser.favourites[0].imageUrl\" [src]=\"currUser.favourites[0].imageUrl\"></ion-img>\r\n                </ion-thumbnail>\r\n                <ion-label>\r\n                  <h2>{{ currUser.favourites[0].name }}</h2>\r\n                  <p>Singapore {{ currUser.favourites[0].postal}}</p>\r\n                </ion-label>\r\n              </ion-item>\r\n\r\n              <ion-item \r\n                class=\"ion-no-padding\" \r\n                detail \r\n                *ngIf=\"currUser.favourites && currUser.favourites.length > 1\"\r\n                (click)=\"onClickPlace(currUser.favourites[1].postal)\" \r\n                button\r\n              >\r\n                <ion-thumbnail slot=\"start\">\r\n                  <ion-img *ngIf=\"!currUser.favourites[1].imageUrl\" src=\"assets/placeholders/property.jpeg\"></ion-img>\r\n                  <ion-img *ngIf=\"currUser.favourites[1].imageUrl\" [src]=\"currUser.favourites[1].imageUrl\"></ion-img>\r\n                </ion-thumbnail>\r\n                <ion-label>\r\n                  <h2>{{ currUser.favourites[1].name }}</h2>\r\n                  <p>Singapore {{ currUser.favourites[1].postal}}</p>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n\r\n          <div class=\"ion-text-center\" >\r\n            <ion-button \r\n              fill=\"clear\" \r\n              color=\"tertiary\"\r\n              [routerLink]=\"[\r\n              '/', \r\n              'home', \r\n              'tabs', \r\n              'favourites'\r\n              ]\"\r\n            >\r\n            View More\r\n            </ion-button>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>Recommended For You</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-item \r\n                class=\"ion-no-padding ion-text-center\" \r\n                *ngIf=\"!currUser.personalRec || currUser.personalRec.length <= 0\"\r\n              >\r\n                <ion-label>\r\n                  <h2 class=\"wrap-heading\">No personal recommendations for now...</h2>\r\n                </ion-label>\r\n              </ion-item>\r\n\r\n              <ion-item \r\n                class=\"ion-no-padding\"  \r\n                *ngIf=\"currUser.personalRec && currUser.personalRec.length > 0\"\r\n              >\r\n                <ion-label>\r\n                  <h2>{{ currUser.personalRec[0] }}</h2>\r\n                </ion-label>\r\n              </ion-item>\r\n\r\n              <ion-item \r\n                class=\"ion-no-padding\"  \r\n                *ngIf=\"currUser.personalRec && currUser.personalRec.length > 1\"\r\n              >\r\n                <ion-label>\r\n                  <h2>{{ currUser.personalRec[1] }}</h2>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n\r\n          <div class=\"ion-text-center\">\r\n            <ion-button \r\n              fill=\"clear\" \r\n              color=\"tertiary\"\r\n              [routerLink]=\"[\r\n              '/', \r\n              'home', \r\n              'tabs', \r\n              'recommendations'\r\n              ]\"\r\n            >\r\n            View More\r\n          </ion-button>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/home/main/main-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home/main/main-routing.module.ts ***!
  \********************************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.page */ "./src/app/pages/home/main/main.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_2__["MainPage"]
    },
    {
        path: ':postalId',
        loadChildren: function () { return __webpack_require__.e(/*! import() | src-app-pages-units-block-detail-block-detail-module */ "block-detail-block-detail-module").then(__webpack_require__.bind(null, /*! src/app/pages/units/block-detail/block-detail.module */ "./src/app/pages/units/block-detail/block-detail.module.ts")).then(function (m) { return m.BlockDetailPageModule; }); }
    }
];
var MainPageRoutingModule = /** @class */ (function () {
    function MainPageRoutingModule() {
    }
    MainPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], MainPageRoutingModule);
    return MainPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/home/main/main.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/home/main/main.module.ts ***!
  \************************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/pages/home/main/main-routing.module.ts");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.page */ "./src/app/pages/home/main/main.page.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/pages/home/main/edit-profile/edit-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _main_routing_module__WEBPACK_IMPORTED_MODULE_4__["MainPageRoutingModule"]
            ],
            declarations: [_main_page__WEBPACK_IMPORTED_MODULE_5__["MainPage"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"]]
        })
    ], MainPageModule);
    return MainPageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/main/main.page.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/main/main.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  font-size: 88px;\n}\n\n.wrap-heading {\n  word-wrap: break-word;\n  white-space: normal !important;\n  width: auto !important;\n  height: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9tYWluL0M6XFxVc2Vyc1xcdXNlclxcRG9jdW1lbnRzXFxHaXRIdWJcXEZZUC1SZWNvbW1lbmRlci1TeXN0ZW1cXHByb3BuZXgtaW52ZXN0bWVudC1zdWl0ZS9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXG1haW5cXG1haW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL21haW4vbWFpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FER0E7RUFDRSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9tYWluL21haW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA4OHB4O1xyXG4gIH1cclxuICBcclxuXHJcbi53cmFwLWhlYWRpbmcge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufSIsImlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA4OHB4O1xufVxuXG4ud3JhcC1oZWFkaW5nIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/main/main.page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/main/main.page.ts ***!
  \**********************************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/place.service */ "./src/app/services/place.service.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/pages/home/main/edit-profile/edit-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var MainPage = /** @class */ (function () {
    function MainPage(authService, modalCtrl, router, placeService) {
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.placeService = placeService;
    }
    MainPage.prototype.ngOnInit = function () {
        var _this = this;
        this.currUser = this.authService.currFbUser;
        this.fbPostalsSub = this.placeService.fbPostals.subscribe(function (fbPostals) {
            _this.loadedFBPostals = fbPostals;
        });
    };
    MainPage.prototype.ionViewWillEnter = function () {
        this.currUser = this.authService.currFbUser;
        this.placeService.fetchFBPostals().subscribe(function () {
        });
    };
    // navigate to edit user profile form
    MainPage.prototype.onEditProfile = function () {
        var _this = this;
        this.modalCtrl
            .create({ component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_5__["EditProfileComponent"] })
            .then(function (modalEl) {
            modalEl.present();
            return modalEl.onDidDismiss();
        })
            .then(function (resultData) {
            if (resultData.role === 'confirm') {
                _this.ionViewWillEnter();
            }
        });
    };
    // navigate to place details page
    MainPage.prototype.onClickPlace = function (postalCode) {
        this.result = this.loadedFBPostals.find(function (p) { return p.postal === postalCode; });
        this.placeService.currPlace = this.result;
        this.router.navigate(['/', 'units', this.result.postal]);
    };
    MainPage.prototype.ngOnDestroy = function () {
        if (this.fbPostalsSub) {
            this.fbPostalsSub.unsubscribe();
        }
    };
    MainPage.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_services_place_service__WEBPACK_IMPORTED_MODULE_4__["PlaceService"] }
    ]; };
    MainPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __importDefault(__webpack_require__(/*! raw-loader!./main.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/main/main.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./main.page.scss */ "./src/app/pages/home/main/main.page.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_place_service__WEBPACK_IMPORTED_MODULE_4__["PlaceService"]])
    ], MainPage);
    return MainPage;
}());



/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map