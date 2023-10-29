(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-units-units-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/add-block/add-block.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/add-block/add-block.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button fill=\"clear\" color=\"danger\" (click)=\"onCancel()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Add Place</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"addBlockForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Project Name</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"projectName\"\r\n              ></ion-input>\r\n            </ion-item>\r\n        \r\n            <ion-item>\r\n              <ion-label position=\"floating\">Postal Code</ion-label>\r\n              <ion-input \r\n                type=\"text\"\r\n                formControlName=\"postalCode\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-button \r\n                (click)=\"uploadBlockImage()\" \r\n                expand=\"block\"\r\n                >Upload Place Image\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-button \r\n                type=\"submit\" \r\n                (click)=\"submitAddBlock()\" \r\n                expand=\"block\"\r\n                >Submit\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/units.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/units.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Find Place</ion-title>\r\n\r\n    <ion-button \r\n\r\n    size=\"small\" \r\n    color=\"tertiary\"\r\n    slot=\"end\" \r\n    (click)=\"onAddBlock()\"\r\n  >\r\n    <ion-icon slot=\"icon-only\" name=\"add-outline\"></ion-icon>\r\n</ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-searchbar \r\n        color=\"light\"\r\n        placeholder=\"Enter postal code\"\r\n        [debounce]=\"500\"\r\n        (ionChange)=\"handleChange($event)\"\r\n        ></ion-searchbar>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item *ngIf=\"result\">\r\n            <ion-label *ngIf=\"result.name === undefined\">\r\n              <h2>No results found</h2>\r\n            </ion-label>\r\n\r\n            <ion-thumbnail *ngIf=\"result.name !== undefined\" slot=\"start\">\r\n              <ion-img *ngIf=\"result.imageUrl\" [src]=\"result.imageUrl\"></ion-img>\r\n              <ion-img *ngIf=\"!result.imageUrl\" src=\"assets/placeholders/property.jpeg\"></ion-img>\r\n            </ion-thumbnail>\r\n            \r\n            <ion-label \r\n              *ngIf=\"result.name !== undefined\"\r\n              (click) = \"onSelectPlace()\"\r\n            >\r\n              <h2>{{ result.name }}</h2>\r\n              <p>Singapore {{ result.postal}}</p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list *ngIf=\"result\">\r\n          <ion-item class=\"custom-color\">\r\n            Similar Places:\r\n          </ion-item>\r\n          \r\n          <div *ngIf=\"findRecs.length == 0\">\r\n            <ion-item>\r\n              Currently Unavailable\r\n            </ion-item>\r\n          </div>\r\n          \r\n          <div *ngIf=\"findRecs.length != 0\">\r\n            <ion-item *ngFor=\"let recPlace of findRecs\">\r\n              {{recPlace}}\r\n            </ion-item>\r\n          </div>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/units/add-block/add-block.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/units/add-block/add-block.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VuaXRzL2FkZC1ibG9jay9hZGQtYmxvY2suY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/units/add-block/add-block.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/units/add-block/add-block.component.ts ***!
  \**************************************************************/
/*! exports provided: AddBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBlockComponent", function() { return AddBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/place.service */ "./src/app/services/place.service.ts");
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




var AddBlockComponent = /** @class */ (function () {
    function AddBlockComponent(modalCtrl, placeService) {
        this.modalCtrl = modalCtrl;
        this.placeService = placeService;
    }
    AddBlockComponent.prototype.ngOnInit = function () {
        this.addBlockForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            projectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            postalCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
        });
    };
    // cancel add place
    AddBlockComponent.prototype.onCancel = function () {
        this.modalCtrl.dismiss(null, 'cancel');
    };
    // submit add block form
    AddBlockComponent.prototype.submitAddBlock = function () {
        if (!this.addBlockForm.valid) {
            return;
        }
        var projectName = this.addBlockForm.value.projectName;
        var postalCode = this.addBlockForm.value.postalCode;
        this.placeService.addBlock(projectName, postalCode).subscribe(function () {
        });
        this.addBlockForm.reset();
        this.modalCtrl.dismiss();
    };
    // upload place image
    AddBlockComponent.prototype.uploadBlockImage = function () {
        console.log("choose block image to upload");
    };
    AddBlockComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"] }
    ]; };
    AddBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-block',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-block.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/add-block/add-block.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add-block.component.scss */ "./src/app/pages/units/add-block/add-block.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"]])
    ], AddBlockComponent);
    return AddBlockComponent;
}());



/***/ }),

/***/ "./src/app/pages/units/units-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/units/units-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UnitsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsPageRoutingModule", function() { return UnitsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _units_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./units.page */ "./src/app/pages/units/units.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _units_page__WEBPACK_IMPORTED_MODULE_2__["UnitsPage"],
    },
    {
        path: ':postalId',
        loadChildren: function () { return __webpack_require__.e(/*! import() | block-detail-block-detail-module */ "block-detail-block-detail-module").then(__webpack_require__.bind(null, /*! ./block-detail/block-detail.module */ "./src/app/pages/units/block-detail/block-detail.module.ts")).then(function (m) { return m.BlockDetailPageModule; }); }
    }
];
var UnitsPageRoutingModule = /** @class */ (function () {
    function UnitsPageRoutingModule() {
    }
    UnitsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], UnitsPageRoutingModule);
    return UnitsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/units/units.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/units/units.module.ts ***!
  \*********************************************/
/*! exports provided: UnitsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsPageModule", function() { return UnitsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _units_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./units-routing.module */ "./src/app/pages/units/units-routing.module.ts");
/* harmony import */ var _units_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./units.page */ "./src/app/pages/units/units.page.ts");
/* harmony import */ var _add_block_add_block_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-block/add-block.component */ "./src/app/pages/units/add-block/add-block.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UnitsPageModule = /** @class */ (function () {
    function UnitsPageModule() {
    }
    UnitsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _units_routing_module__WEBPACK_IMPORTED_MODULE_4__["UnitsPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [_units_page__WEBPACK_IMPORTED_MODULE_5__["UnitsPage"], _add_block_add_block_component__WEBPACK_IMPORTED_MODULE_6__["AddBlockComponent"]]
        })
    ], UnitsPageModule);
    return UnitsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/units/units.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/units/units.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-color {\n  --color: #7f7f7f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdW5pdHMvQzpcXFVzZXJzXFx1c2VyXFxEb2N1bWVudHNcXEdpdEh1YlxcRllQLVJlY29tbWVuZGVyLVN5c3RlbVxccHJvcG5leC1pbnZlc3RtZW50LXN1aXRlL3NyY1xcYXBwXFxwYWdlc1xcdW5pdHNcXHVuaXRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdW5pdHMvdW5pdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VuaXRzL3VuaXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tY29sb3Ige1xyXG4gICAgLS1jb2xvcjogIzdmN2Y3ZjsgXHJcbn0iLCIuY3VzdG9tLWNvbG9yIHtcbiAgLS1jb2xvcjogIzdmN2Y3Zjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/units/units.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/units/units.page.ts ***!
  \*******************************************/
/*! exports provided: UnitsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsPage", function() { return UnitsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _add_block_add_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-block/add-block.component */ "./src/app/pages/units/add-block/add-block.component.ts");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/place.service */ "./src/app/services/place.service.ts");
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






var UnitsPage = /** @class */ (function () {
    function UnitsPage(authService, router, modalCtrl, placeService) {
        this.authService = authService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.placeService = placeService;
    }
    UnitsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.currUser = this.authService.currFbUser;
        this.fbPostalsSub = this.placeService.fbPostals.subscribe(function (fbPostals) {
            _this.loadedFBPostals = fbPostals;
        });
        this.fbRecsSub = this.placeService.fbRecs.subscribe(function (fbRecs) {
            _this.loadedFBRecs = fbRecs;
        });
    };
    UnitsPage.prototype.ionViewWillEnter = function () {
        this.placeService.fetchFBPostals().subscribe(function () {
        });
        this.placeService.fetchFBRecs().subscribe(function () {
        });
    };
    // retrieve place using postal
    UnitsPage.prototype.handleChange = function (event) {
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
    UnitsPage.prototype.onSelectPlace = function () {
        this.router.navigate(['/', 'units', this.result.postal]);
    };
    // add new place
    UnitsPage.prototype.onAddBlock = function () {
        this.modalCtrl
            .create({ component: _add_block_add_block_component__WEBPACK_IMPORTED_MODULE_4__["AddBlockComponent"] })
            .then(function (modalEl) {
            modalEl.present();
            return modalEl.onDidDismiss();
        });
    };
    UnitsPage.prototype.ngOnDestroy = function () {
        if (this.fbPostalsSub) {
            this.fbPostalsSub.unsubscribe();
        }
        if (this.fbRecsSub) {
            this.fbRecsSub.unsubscribe();
        }
    };
    UnitsPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_place_service__WEBPACK_IMPORTED_MODULE_5__["PlaceService"] }
    ]; };
    UnitsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-units',
            template: __importDefault(__webpack_require__(/*! raw-loader!./units.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/units.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./units.page.scss */ "./src/app/pages/units/units.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_place_service__WEBPACK_IMPORTED_MODULE_5__["PlaceService"]])
    ], UnitsPage);
    return UnitsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-units-units-module.js.map