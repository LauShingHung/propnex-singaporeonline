(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recommendations-recommendations-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/recommendations/recommendations.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/recommendations/recommendations.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Discover</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-segment [(ngModel)]=\"selectedView\" (ionChange)=\"onFilterUpdate($event)\">\r\n    <ion-segment-button value=\"personal\">For You</ion-segment-button>\r\n    <ion-segment-button value=\"trend\">Trending</ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list *ngIf=\"selectedView === 'personal'\">\r\n          <ion-item *ngFor=\"let place of displayedPlaces\">{{place}}</ion-item>\r\n        </ion-list>\r\n\r\n        <ion-list *ngIf=\"selectedView === 'trend'\">\r\n          <ion-item-sliding *ngFor=\"let place of displayedPlaces\" #slidingRecos>\r\n            <ion-item \r\n              detail \r\n              (click)=\"onClickPlace(place.postal)\" \r\n              button\r\n            >\r\n              <ion-thumbnail slot=\"start\">\r\n                <ion-img *ngIf=\"!place.imageUrl\" src=\"assets/placeholders/property.jpeg\"></ion-img>\r\n                <ion-img *ngIf=\"place.imageUrl\" [src]=\"place.imageUrl\"></ion-img>\r\n              </ion-thumbnail>\r\n              <ion-label>\r\n                <h2>{{ place.name }}</h2>\r\n                <p>Singapore {{ place.postal}}</p>\r\n              </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"tertiary\" (click)=\"onAddPlace(place.postal, slidingRecos)\">\r\n                <ion-icon name=\"star\" slot=\"icon-only\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/home/recommendations/recommendations-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/home/recommendations/recommendations-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: RecommendationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationsPageRoutingModule", function() { return RecommendationsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _recommendations_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recommendations.page */ "./src/app/pages/home/recommendations/recommendations.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _recommendations_page__WEBPACK_IMPORTED_MODULE_2__["RecommendationsPage"]
    }
];
var RecommendationsPageRoutingModule = /** @class */ (function () {
    function RecommendationsPageRoutingModule() {
    }
    RecommendationsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], RecommendationsPageRoutingModule);
    return RecommendationsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/home/recommendations/recommendations.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/home/recommendations/recommendations.module.ts ***!
  \**********************************************************************/
/*! exports provided: RecommendationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationsPageModule", function() { return RecommendationsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _recommendations_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recommendations-routing.module */ "./src/app/pages/home/recommendations/recommendations-routing.module.ts");
/* harmony import */ var _recommendations_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recommendations.page */ "./src/app/pages/home/recommendations/recommendations.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RecommendationsPageModule = /** @class */ (function () {
    function RecommendationsPageModule() {
    }
    RecommendationsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _recommendations_routing_module__WEBPACK_IMPORTED_MODULE_4__["RecommendationsPageRoutingModule"]
            ],
            declarations: [_recommendations_page__WEBPACK_IMPORTED_MODULE_5__["RecommendationsPage"]]
        })
    ], RecommendationsPageModule);
    return RecommendationsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/recommendations/recommendations.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/home/recommendations/recommendations.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvcmVjb21tZW5kYXRpb25zL3JlY29tbWVuZGF0aW9ucy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/home/recommendations/recommendations.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/home/recommendations/recommendations.page.ts ***!
  \********************************************************************/
/*! exports provided: RecommendationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationsPage", function() { return RecommendationsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_services_place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/place.service */ "./src/app/services/place.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var RecommendationsPage = /** @class */ (function () {
    function RecommendationsPage(authService, router, placeService, alertController) {
        this.authService = authService;
        this.router = router;
        this.placeService = placeService;
        this.alertController = alertController;
        this.selectedView = 'personal';
    }
    RecommendationsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.currUser = this.authService.currFbUser;
        this.displayedPlaces = this.authService.currFbUser.personalRec;
        this.fbPostalsSub = this.placeService.fbPostals.subscribe(function (fbPostals) {
            _this.loadedFBPostals = fbPostals;
        });
        this.fbRecsSub = this.placeService.fbRecs.subscribe(function (fbRecs) {
            _this.loadedFBRecs = fbRecs;
        });
    };
    RecommendationsPage.prototype.ionViewWillEnter = function () {
        this.currUser = this.authService.currFbUser;
        this.displayedPlaces = this.authService.currFbUser.personalRec;
        this.placeService.fetchFBPostals().subscribe(function () {
        });
        this.placeService.fetchFBRecs().subscribe(function () {
        });
    };
    // switch between personal / general segment
    RecommendationsPage.prototype.onFilterUpdate = function (event) {
        if (event.detail.value === 'personal') {
            this.displayedPlaces = this.authService.currFbUser.personalRec;
        }
        else {
            this.displayedPlaces = this.authService.currFbUser.generalRec;
        }
    };
    // navigate to place details page
    RecommendationsPage.prototype.onClickPlace = function (postalCode) {
        this.result = this.loadedFBPostals.find(function (p) { return p.postal === postalCode; });
        this.placeService.currPlace = this.result;
        this.router.navigate(['/', 'units', this.result.postal]);
    };
    // add place to favourites
    RecommendationsPage.prototype.onAddPlace = function (postalCode, slidingEl) {
        slidingEl.close();
        var targetPlace = this.loadedFBPostals.find(function (p) { return p.postal === postalCode; });
        if (this.currUser.favourites && this.currUser.favourites.length > 0) {
            var favPlace = this.currUser.favourites.find(function (p) { return p.postal === postalCode; });
            if (favPlace) {
                this.presentFavAlert();
            }
            else {
                this.recItem = this.loadedFBRecs.find(function (p) { return p.place === targetPlace.name; });
                this.findRecs = [this.recItem.rec1, this.recItem.rec2, this.recItem.rec3];
                this.authService.addFav(this.currUser.email, targetPlace, this.findRecs).subscribe(function () {
                });
            }
        }
        else {
            this.recItem = this.loadedFBRecs.find(function (p) { return p.place === targetPlace.name; });
            this.findRecs = [this.recItem.rec1, this.recItem.rec2, this.recItem.rec3];
            this.authService.addFav(this.currUser.email, targetPlace, this.findRecs).subscribe(function () {
            });
        }
    };
    // present place already in favourites alert
    RecommendationsPage.prototype.presentFavAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Already Exist',
                            message: 'This place is already in your favourites!',
                            buttons: ['OK'],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RecommendationsPage.prototype.ngOnDestroy = function () {
        if (this.fbPostalsSub) {
            this.fbPostalsSub.unsubscribe();
        }
        if (this.fbRecsSub) {
            this.fbRecsSub.unsubscribe();
        }
    };
    RecommendationsPage.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_place_service__WEBPACK_IMPORTED_MODULE_4__["PlaceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] }
    ]; };
    RecommendationsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recommendations',
            template: __importDefault(__webpack_require__(/*! raw-loader!./recommendations.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/recommendations/recommendations.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./recommendations.page.scss */ "./src/app/pages/home/recommendations/recommendations.page.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_place_service__WEBPACK_IMPORTED_MODULE_4__["PlaceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], RecommendationsPage);
    return RecommendationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=recommendations-recommendations-module.js.map