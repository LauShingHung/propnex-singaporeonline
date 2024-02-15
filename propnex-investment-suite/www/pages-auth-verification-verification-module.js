(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-verification-verification-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/verification/verification.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/verification/verification.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title style>User Type Verification</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"padding: 16px;\">\n  <h2 style=\"font-size: 20px; margin-bottom: 20px; text-align: center;\">Please enter your details for verification</h2>\n    \n  <ion-item>\n    <ion-label position=\"floating\" style=\"font-size: 18px;\">Full Name</ion-label>\n    <ion-input type=\"text\" required style=\"font-size: 18px;\"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label position=\"floating\" style=\"font-size: 18px;\">License Number</ion-label>\n    <ion-input type=\"text\" required style=\"font-size: 18px;\"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label position=\"floating\" style=\"font-size: 18px;\">Agency Name</ion-label>\n    <ion-input type=\"text\" required style=\"font-size: 18px;\"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label position=\"floating\" style=\"font-size: 18px;\">Phone Number</ion-label>\n    <ion-input type=\"tel\" required style=\"font-size: 18px;\"></ion-input>\n  </ion-item>\n  \n  <ion-button (click)=\"verifyUser()\" expand=\"block\">Submit Verification</ion-button>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/auth/verification/verification-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/auth/verification/verification-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: VerificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPageRoutingModule", function() { return VerificationPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verification.page */ "./src/app/pages/auth/verification/verification.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _verification_page__WEBPACK_IMPORTED_MODULE_2__["VerificationPage"],
    }
];
var VerificationPageRoutingModule = /** @class */ (function () {
    function VerificationPageRoutingModule() {
    }
    VerificationPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], VerificationPageRoutingModule);
    return VerificationPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/verification/verification.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/verification/verification.module.ts ***!
  \****************************************************************/
/*! exports provided: VerificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPageModule", function() { return VerificationPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _verification_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verification-routing.module */ "./src/app/pages/auth/verification/verification-routing.module.ts");
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verification.page */ "./src/app/pages/auth/verification/verification.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var VerificationPageModule = /** @class */ (function () {
    function VerificationPageModule() {
    }
    VerificationPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _verification_routing_module__WEBPACK_IMPORTED_MODULE_4__["VerificationPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_5__["VerificationPage"]]
        })
    ], VerificationPageModule);
    return VerificationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/verification/verification.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/auth/verification/verification.page.ts ***!
  \**************************************************************/
/*! exports provided: VerificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPage", function() { return VerificationPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
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




var VerificationPage = /** @class */ (function () {
    function VerificationPage(authService, router, modalCtrl) {
        this.authService = authService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.isVerified = false;
    }
    VerificationPage.prototype.ngOnInit = function () {
        this.currUser = this.authService.currFbUser;
    };
    VerificationPage.prototype.verifyUser = function () {
        var _this = this;
        this.authService.updateUserVerification(this.currUser.email).subscribe({
            next: function () {
                _this.router.navigateByUrl('/home');
            },
            error: function (error) {
                console.error('Verification failed', error);
                _this.router.navigateByUrl('/auth');
            }
        });
    };
    VerificationPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    VerificationPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verification',
            template: __importDefault(__webpack_require__(/*! raw-loader!./verification.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/verification/verification.page.html")).default
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], VerificationPage);
    return VerificationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-verification-verification-module.js.map