(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-buyer-buyer-module~pages-units-units-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/add-block/add-block.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/add-block/add-block.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button fill=\"clear\" color=\"danger\" (click)=\"onCancel()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Add Place</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <form [formGroup]=\"addBlockForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\">Project Name</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"projectName\"\n              ></ion-input>\n            </ion-item>\n        \n            <ion-item>\n              <ion-label position=\"floating\">Postal Code</ion-label>\n              <ion-input \n                type=\"text\"\n                formControlName=\"postalCode\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Land Area</ion-label>\n              <ion-input \n                type=\"text\"\n                formControlName=\"landArea\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Gross Floor Area</ion-label>\n              <ion-input \n                type=\"text\"\n                formControlName=\"grossFloorArea\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Tenure</ion-label>\n              <ion-input \n                type=\"text\"\n                formControlName=\"tenure\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">No. of Rooms</ion-label>\n              <ion-input \n                type=\"text\"\n                formControlName=\"numRooms\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">No. of Storey</ion-label>\n              <ion-input \n                type=\"text\"\n                formControlName=\"numStorey\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Asking Price</ion-label>\n              <ion-input \n                type=\"text\"\n                formControlName=\"askingPrice\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Price Per Room</ion-label>  \n              <ion-input \n                type=\"text\"\n                formControlName=\"priceRoom\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">S$/GFA</ion-label>\n              <ion-input \n                type=\"text\"\n                formControlName=\"GFA\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Room Rate</ion-label>\n              <ion-input \n                type=\"text\"\n                formControlName=\"roomRate\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Net Operating Profit</ion-label>\n              <ion-input \n                type=\"text\"\n                formControlName=\"netOperatingProfit\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Approved Usage</ion-label>\n              <ion-input \n                type=\"text\"\n                formControlName=\"approvedUsage\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Location(MRT)</ion-label>\n              <ion-input \n                type=\"text\"\n                formControlName=\"locationMRT\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">District</ion-label>\n              <ion-select formControlName=\"district\" single=\"true\">\n                <ion-select-option value=\"District 01 - Raffles Place, Marina, Cecil\">District 01 - Raffles Place, Marina, Cecil</ion-select-option>\n                <ion-select-option value=\"District 02 - Tanjong Pagar, Chinatown\">District 02 - Tanjong Pagar, Chinatown</ion-select-option>\n                <ion-select-option value=\"District 03 - Tiong Bahru, Alexandra, Queenstown\">District 03 - Tiong Bahru, Alexandra, Queenstown</ion-select-option>\n                <ion-select-option value=\"District 04 - Mount Faber, Telok Blangah, Harbourfront\">District 04 - Mount Faber, Telok Blangah, Harbourfront</ion-select-option>\n                <ion-select-option value=\"District 05 - Buona Vista, Pasir Panjang, Clementi\">District 05 - Buona Vista, Pasir Panjang, Clementi</ion-select-option>\n                <ion-select-option value=\"District 06 - Clarke Quay, City Hall\">District 06 - Clarke Quay, City Hall</ion-select-option>\n                <ion-select-option value=\"District 07 - Bugis, Beach Road, Golden Mile\">District 07 - Bugis, Beach Road, Golden Mile</ion-select-option>\n                <ion-select-option value=\"District 08 - Little India, Farrer Park\">District 08 - Little India, Farrer Park</ion-select-option>\n                <ion-select-option value=\"District 09 - Orchard Road, River Valley\">District 09 - Orchard Road, River Valley</ion-select-option>\n                <ion-select-option value=\"District 10 - Bukit Timah, Holland, Balmoral\">District 10 - Bukit Timah, Holland, Balmoral</ion-select-option>\n                <ion-select-option value=\"District 11 - Novena, Newton, Thomson\">District 11 - Novena, Newton, Thomson</ion-select-option>\n                <ion-select-option value=\"District 12 - Toa Payoh, Serangoon, Balestier\">District 12 - Toa Payoh, Serangoon, Balestier</ion-select-option>\n                <ion-select-option value=\"District 13 - Macpherson, Braddell\">District 13 - Macpherson, Braddell</ion-select-option>\n                <ion-select-option value=\"District 14 - Geylang, Paya Lebar, Sims\">District 14 - Geylang, Paya Lebar, Sims</ion-select-option>\n                <ion-select-option value=\"District 15 - Joo Chiat, Marina Parade, Katong\">District 15 - Joo Chiat, Marina Parade, Katong</ion-select-option>\n                <ion-select-option value=\"District 16 - Bedok, Upper East Coast, Siglap\">District 16 - Bedok, Upper East Coast, Siglap</ion-select-option>\n                <ion-select-option value=\"District 17 - Changi, Flora, Loyang\">District 17 - Changi, Flora, Loyang</ion-select-option>\n                <ion-select-option value=\"District 18 - Tampines, Pasir Ris\">District 18 - Tampines, Pasir Ris</ion-select-option>\n                <ion-select-option value=\"District 19 - Punggol, Sengkang, Serangoon Gardens\">District 19 - Punggol, Sengkang, Serangoon Gardens</ion-select-option>\n                <ion-select-option value=\"District 20 - Ang Mo Kio, Bishan, Thomson\">District 20 - Ang Mo Kio, Bishan, Thomson</ion-select-option>\n                <ion-select-option value=\"District 21 - Upper Bukit Timah, Ulu Pandan, Clementi Park\">District 21 - Upper Bukit Timah, Ulu Pandan, Clementi Park</ion-select-option>\n                <ion-select-option value=\"District 22 - Boon Lay, Jurong, Tuas\">District 22 - Boon Lay, Jurong, Tuas</ion-select-option>\n                <ion-select-option value=\"District 23 - Choa Chu Kang, Diary Farm, Hillview, Bukit Panjang, Bukit Batok\">District 23 - Choa Chu Kang, Diary Farm, Hillview, Bukit Panjang, Bukit Batok</ion-select-option>\n                <ion-select-option value=\"District 24 - Kranji, Lim Chu Kang, Tengah\">District 24 - Kranji, Lim Chu Kang, Tengah</ion-select-option>\n                <ion-select-option value=\"District 25 - Woodlands, Admiralty\">District 25 - Woodlands, Admiralty</ion-select-option>\n                <ion-select-option value=\"District 26 - Upper Thomson, Mandai\">District 26 - Upper Thomson, Mandai</ion-select-option>\n                <ion-select-option value=\"District 27 - Sembawang, Yishun, Admiralty\">District 27 - Sembawang, Yishun, Admiralty</ion-select-option>\n                <ion-select-option value=\"District 28 - Yio Chu Kang, Seletar\">District 28 - Yio Chu Kang, Seletar</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Location(School)</ion-label>\n              <ion-input \n                type=\"text\"\n                formControlName=\"locationSch\"\n              ></ion-input>\n            </ion-item>\n\n            <!-- <ion-row>\n              <ion-col>\n                <ion-button \n                (click)=\"uploadBlockImage()\" \n                expand=\"block\"\n                >Upload Place Image\n                </ion-button>\n              </ion-col>\n            </ion-row> -->\n\n            <ion-row>\n              <ion-col>\n                <input type=\"file\" (change)=\"onFileChanged($event)\" hidden #fileInput>\n                <ion-button (click)=\"fileInput.click()\" expand=\"block\">Upload Place Image</ion-button>\n              </ion-col>\n            </ion-row>\n        \n            <!-- Image Preview Section -->\n            <ion-row *ngIf=\"imagePreview\">\n              <ion-col>\n                <img [src]=\"imagePreview\" style=\"max-width: 100%; height: auto;\">\n              </ion-col>\n            </ion-row>\n            \n            <ion-row>\n              <ion-col>\n                <ion-button \n                type=\"submit\" \n                (click)=\"submitAddBlock()\" \n                expand=\"block\"\n                >Submit\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>");

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
        this.selectedFile = null;
        this.imagePreview = '';
    }
    AddBlockComponent.prototype.ngOnInit = function () {
        this.addBlockForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            projectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            postalCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            landArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            grossFloorArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            tenure: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            numRooms: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            numStorey: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            askingPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            priceRoom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            GFA: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            roomRate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            netOperatingProfit: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            approvedUsage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            locationMRT: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            locationSch: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            district: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            })
        });
    };
    // cancel add place
    AddBlockComponent.prototype.onCancel = function () {
        this.modalCtrl.dismiss(null, 'cancel');
    };
    AddBlockComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (file) {
            this.selectedFile = file;
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                _this.imagePreview = reader_1.result;
            };
            reader_1.readAsDataURL(file);
        }
    };
    // // submit add block form
    // submitAddBlock() {
    //   if (!this.addBlockForm.valid) {
    //     return;
    //   }
    //   const projectName = this.addBlockForm.value.projectName;
    //   const postalCode = this.addBlockForm.value.postalCode;
    //   this.placeService.addBlock(projectName, postalCode).subscribe(() => {
    //   });
    //   this.addBlockForm.reset();
    //   this.modalCtrl.dismiss();
    // }
    // submit add hotel form
    AddBlockComponent.prototype.submitAddBlock = function () {
        if (!this.addBlockForm.valid) {
            return;
        }
        var projectName = this.addBlockForm.value.projectName;
        var postalCode = this.addBlockForm.value.postalCode;
        var landArea = this.addBlockForm.value.landArea;
        var grossFloorArea = this.addBlockForm.value.grossFloorArea;
        var tenure = this.addBlockForm.value.tenure;
        var numRooms = this.addBlockForm.value.numRooms;
        var numStorey = this.addBlockForm.value.numStorey;
        var askingPrice = this.addBlockForm.value.askingPrice;
        var priceRoom = this.addBlockForm.value.priceRoom;
        var GFA = this.addBlockForm.value.GFA;
        var roomRate = this.addBlockForm.value.roomRate;
        var netOperatingProfit = this.addBlockForm.value.netOperatingProfit;
        var approvedUsage = this.addBlockForm.value.approvedUsage;
        var locationMRT = this.addBlockForm.value.locationMRT;
        var locationSch = this.addBlockForm.value.locationSch;
        var district = this.addBlockForm.value.district;
        this.placeService.addBlock(projectName, postalCode, landArea, grossFloorArea, tenure, numRooms, numStorey, askingPrice, priceRoom, GFA, roomRate, netOperatingProfit, approvedUsage, locationMRT, locationSch, district).subscribe(function () {
        });
        this.addBlockForm.reset();
        this.modalCtrl.dismiss();
    };
    // upload place image
    AddBlockComponent.prototype.uploadBlockImage = function () {
        if (!this.selectedFile) {
            console.error('No file selected!');
            return;
        }
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



/***/ })

}]);
//# sourceMappingURL=default~pages-buyer-buyer-module~pages-units-units-module.js.map