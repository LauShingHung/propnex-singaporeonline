(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-buyer-buyer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/buyer/buyer.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/buyer/buyer.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n  \n      <ion-title>Buyer Interface</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-grid>\n  \n      <ion-row>\n        <ion-col>\n          <ion-searchbar \n          color=\"light\"\n          placeholder=\"Enter postal code\"\n          [debounce]=\"500\"\n          (ionChange)=\"handleChange($event)\"\n          ></ion-searchbar>\n        </ion-col>\n      </ion-row>\n  \n      <ion-row>\n        <ion-col>\n          <ion-list>\n            <ion-item *ngIf=\"result\">\n              <ion-label *ngIf=\"result.name === undefined\">\n                <h2>No results found</h2>\n              </ion-label>\n  \n              <ion-thumbnail *ngIf=\"result.name !== undefined\" slot=\"start\">\n                <ion-img *ngIf=\"result.imageUrl\" [src]=\"result.imageUrl\"></ion-img>\n                <ion-img *ngIf=\"!result.imageUrl\" src=\"assets/placeholders/property.jpeg\"></ion-img>\n              </ion-thumbnail>\n              \n              <ion-label \n                *ngIf=\"result.name !== undefined\"\n                (click) = \"onSelectPlace()\"\n              >\n                <h2>{{ result.name }}</h2>\n                <p>Singapore {{ result.postal}}</p>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n  \n      <ion-row>\n        <ion-col>\n          <ion-list *ngIf=\"result\">\n            <ion-item class=\"custom-color\">\n              Similar Places:\n            </ion-item>\n            \n            <div *ngIf=\"findRecs.length == 0\">\n              <ion-item>\n                Currently Unavailable\n              </ion-item>\n            </div>\n            \n            <div *ngIf=\"findRecs.length != 0\">\n              <ion-item *ngFor=\"let recPlace of findRecs\">\n                {{recPlace}}\n              </ion-item>\n            </div>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n  ");

/***/ }),

/***/ "./src/app/pages/buyer/buyer-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/buyer/buyer-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BuyerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerPageRoutingModule", function() { return BuyerPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _buyer_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buyer.page */ "./src/app/pages/buyer/buyer.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _buyer_page__WEBPACK_IMPORTED_MODULE_2__["BuyerPage"],
    },
    {
        path: ':postalId',
        loadChildren: function () { return __webpack_require__.e(/*! import() | units-block-detail-block-detail-module */ "block-detail-block-detail-module").then(__webpack_require__.bind(null, /*! ../units/block-detail/block-detail.module */ "./src/app/pages/units/block-detail/block-detail.module.ts")).then(function (m) { return m.BlockDetailPageModule; }); }
    }
];
var BuyerPageRoutingModule = /** @class */ (function () {
    function BuyerPageRoutingModule() {
    }
    BuyerPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], BuyerPageRoutingModule);
    return BuyerPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/buyer/buyer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/buyer/buyer.module.ts ***!
  \*********************************************/
/*! exports provided: BuyerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerPageModule", function() { return BuyerPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _buyer_buyer_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buyer/buyer-routing.module */ "./src/app/pages/buyer/buyer-routing.module.ts");
/* harmony import */ var _buyer_buyer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buyer/buyer.page */ "./src/app/pages/buyer/buyer.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var BuyerPageModule = /** @class */ (function () {
    function BuyerPageModule() {
    }
    BuyerPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _buyer_buyer_routing_module__WEBPACK_IMPORTED_MODULE_4__["BuyerPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [_buyer_buyer_page__WEBPACK_IMPORTED_MODULE_5__["BuyerPage"]]
        })
    ], BuyerPageModule);
    return BuyerPageModule;
}());



/***/ }),

/***/ "./src/app/pages/buyer/buyer.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/buyer/buyer.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-color {\n  --color: #7f7f7f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYW5nY2hlbmdoYW8vRG9jdW1lbnRzL0dpdEh1Yi9GWVAtUmVjb21tZW5kZXItU3lzdGVtL3Byb3BuZXgtaW52ZXN0bWVudC1zdWl0ZS9zcmMvYXBwL3BhZ2VzL2J1eWVyL2J1eWVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYnV5ZXIvYnV5ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2J1eWVyL2J1eWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tY29sb3Ige1xuICAgIC0tY29sb3I6ICM3ZjdmN2Y7IFxufSIsIi5jdXN0b20tY29sb3Ige1xuICAtLWNvbG9yOiAjN2Y3ZjdmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/buyer/buyer.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/buyer/buyer.page.ts ***!
  \*******************************************/
/*! exports provided: BuyerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerPage", function() { return BuyerPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _units_add_block_add_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../units/add-block/add-block.component */ "./src/app/pages/units/add-block/add-block.component.ts");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/place.service */ "./src/app/services/place.service.ts");
/* harmony import */ var _home_main_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home/main/edit-profile/edit-profile.component */ "./src/app/pages/home/main/edit-profile/edit-profile.component.ts");
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







var BuyerPage = /** @class */ (function () {
    function BuyerPage(authService, router, modalCtrl, placeService) {
        this.authService = authService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.placeService = placeService;
    }
    BuyerPage.prototype.ngOnInit = function () {
        var _this = this;
        this.currUser = this.authService.currFbUser;
        this.fbPostalsSub = this.placeService.fbPostals.subscribe(function (fbPostals) {
            _this.loadedFBPostals = fbPostals;
        });
        this.fbRecsSub = this.placeService.fbRecs.subscribe(function (fbRecs) {
            _this.loadedFBRecs = fbRecs;
        });
    };
    BuyerPage.prototype.ionViewWillEnter = function () {
        this.placeService.fetchFBPostals().subscribe(function () {
        });
        this.placeService.fetchFBRecs().subscribe(function () {
        });
    };
    // retrieve place using postal
    BuyerPage.prototype.handleChange = function (event) {
        var _this = this;
        var query = event.target.value;
        this.result = this.loadedFBPostals.find(function (p) { return p.postal === query; });
        if (this.result) {
            this.placeService.currPlace = this.result;
            this.recItem = this.loadedFBRecs.find(function (p) { return p.place === _this.placeService.currPlace.name; });
            if (this.recItem) {
                this.findRecs = [this.recItem.rec1, this.recItem.rec2, this.recItem.rec3];
            }
            else {
                this.findRecs = [];
            }
        }
    };
    // navigate to place details page
    BuyerPage.prototype.onSelectPlace = function () {
        this.router.navigate(['/', 'units', this.result.postal]);
    };
    // navigate to edit user profile form
    BuyerPage.prototype.onEditProfile = function () {
        var _this = this;
        this.modalCtrl
            .create({ component: _home_main_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"] })
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
    // add new place
    BuyerPage.prototype.onAddBlock = function () {
        this.modalCtrl
            .create({ component: _units_add_block_add_block_component__WEBPACK_IMPORTED_MODULE_4__["AddBlockComponent"] })
            .then(function (modalEl) {
            modalEl.present();
            return modalEl.onDidDismiss();
        });
    };
    BuyerPage.prototype.ngOnDestroy = function () {
        if (this.fbPostalsSub) {
            this.fbPostalsSub.unsubscribe();
        }
        if (this.fbRecsSub) {
            this.fbRecsSub.unsubscribe();
        }
    };
    BuyerPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_place_service__WEBPACK_IMPORTED_MODULE_5__["PlaceService"] }
    ]; };
    BuyerPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buyer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./buyer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/buyer/buyer.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./buyer.page.scss */ "./src/app/pages/buyer/buyer.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_place_service__WEBPACK_IMPORTED_MODULE_5__["PlaceService"]])
    ], BuyerPage);
    return BuyerPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-buyer-buyer-module.js.map