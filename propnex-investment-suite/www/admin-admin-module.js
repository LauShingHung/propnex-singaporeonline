(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/admin/admin.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/admin/admin.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n  \n      <ion-title>Admin</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content *ngIf=\"currUser && currUser.userType === 'admin'; else notAuthorized\">\n \n  \n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/main/edit-profile/edit-profile.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/main/edit-profile/edit-profile.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button fill=\"clear\" color=\"danger\" (click)=\"onCancel()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Edit Profile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"form\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Password</ion-label>\r\n              <ion-input \r\n                type=\"password\"\r\n                formControlName=\"password\"\r\n                minlength=\"6\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item\r\n              *ngIf=\"!form.get('password').valid && form.get('password').touched\"\r\n            >\r\n              <p>Password must be at least 6 characters.</p>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Name</ion-label>\r\n              <ion-input \r\n                type=\"text\"\r\n                formControlName=\"name\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-button \r\n                type=\"submit\" \r\n                (click)=\"onEditProfile()\" \r\n                expand=\"block\"\r\n                >Save Changes\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/home/admin/admin-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/home/admin/admin-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: AdminPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageRoutingModule", function() { return AdminPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.page */ "./src/app/pages/home/admin/admin.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_2__["AdminPage"],
    }
];
var AdminPageRoutingModule = /** @class */ (function () {
    function AdminPageRoutingModule() {
    }
    AdminPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AdminPageRoutingModule);
    return AdminPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/home/admin/admin.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/home/admin/admin.module.ts ***!
  \**************************************************/
/*! exports provided: AdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageModule", function() { return AdminPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/pages/home/admin/admin-routing.module.ts");
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin.page */ "./src/app/pages/home/admin/admin.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AdminPageModule = /** @class */ (function () {
    function AdminPageModule() {
    }
    AdminPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_5__["AdminPage"]]
        })
    ], AdminPageModule);
    return AdminPageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/admin/admin.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/home/admin/admin.page.ts ***!
  \************************************************/
/*! exports provided: AdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPage", function() { return AdminPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/place.service */ "./src/app/services/place.service.ts");
/* harmony import */ var _main_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../main/edit-profile/edit-profile.component */ "./src/app/pages/home/main/edit-profile/edit-profile.component.ts");
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






var AdminPage = /** @class */ (function () {
    function AdminPage(authService, router, modalCtrl, placeService) {
        this.authService = authService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.placeService = placeService;
    }
    AdminPage.prototype.ngOnInit = function () {
        var _this = this;
        this.currUser = this.authService.currFbUser;
        this.fbPostalsSub = this.placeService.fbPostals.subscribe(function (fbPostals) {
            _this.loadedFBPostals = fbPostals;
        });
        this.fbRecsSub = this.placeService.fbRecs.subscribe(function (fbRecs) {
            _this.loadedFBRecs = fbRecs;
        });
    };
    AdminPage.prototype.ionViewWillEnter = function () {
        this.placeService.fetchFBPostals().subscribe(function () {
        });
        this.placeService.fetchFBRecs().subscribe(function () {
        });
    };
    // retrieve place using postal
    AdminPage.prototype.handleChange = function (event) {
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
    AdminPage.prototype.onSelectPlace = function () {
        this.router.navigate(['/', 'admin', this.result.postal]);
    };
    // navigate to edit user profile form
    AdminPage.prototype.onEditProfile = function () {
        var _this = this;
        this.modalCtrl
            .create({ component: _main_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_5__["EditProfileComponent"] })
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
    AdminPage.prototype.ngOnDestroy = function () {
        if (this.fbPostalsSub) {
            this.fbPostalsSub.unsubscribe();
        }
        if (this.fbRecsSub) {
            this.fbRecsSub.unsubscribe();
        }
    };
    AdminPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_place_service__WEBPACK_IMPORTED_MODULE_4__["PlaceService"] }
    ]; };
    AdminPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __importDefault(__webpack_require__(/*! raw-loader!./admin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/admin/admin.page.html")).default
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_place_service__WEBPACK_IMPORTED_MODULE_4__["PlaceService"]])
    ], AdminPage);
    return AdminPage;
}());



/***/ }),

/***/ "./src/app/pages/home/main/edit-profile/edit-profile.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/home/main/edit-profile/edit-profile.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvbWFpbi9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/home/main/edit-profile/edit-profile.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/home/main/edit-profile/edit-profile.component.ts ***!
  \************************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
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




var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(authService, modalCtrl) {
        this.authService = authService;
        this.modalCtrl = modalCtrl;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.currUser = this.authService.currFbUser;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currUser.email, {
                updateOn: 'blur',
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currUser.password, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]
            }),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currUser.name, {
                updateOn: 'blur',
            })
        });
    };
    // cancel edit profile 
    EditProfileComponent.prototype.onCancel = function () {
        this.modalCtrl.dismiss(null, 'cancel');
    };
    // submit edit profile 
    EditProfileComponent.prototype.onEditProfile = function () {
        if (!this.form.valid) {
            return;
        }
        var newPassword = this.form.value.password;
        var newName = this.form.value.name;
        this.authService.editUser(this.currUser.email, newName, newPassword).subscribe(function () {
        });
        this.modalCtrl.dismiss({ message: 'Changes saved' }, 'confirm');
    };
    EditProfileComponent.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/main/edit-profile/edit-profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./edit-profile.component.scss */ "./src/app/pages/home/main/edit-profile/edit-profile.component.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map