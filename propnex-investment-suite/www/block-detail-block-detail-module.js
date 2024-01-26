(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["block-detail-block-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/block-detail/add-unit/add-unit.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/block-detail/add-unit/add-unit.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button fill=\"clear\" color=\"danger\" (click)=\"onCancel()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Add Unit</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"addUnitForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Unit Number</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"unitNumber\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">No. Of Rooms</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"bedrooms\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Area (sqm)</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"size\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <!-- <ion-item>\r\n              <ion-label position=\"floating\">Homeowner Race</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"homeownerRace\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Country Of Citizenship</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"countryOfCitizenship\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Decorative Style</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"decorativeStyle\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Extension Request</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"extensionRequest\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Price</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"price\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Title Deed</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"titleDeed\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">House Age</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"houseAge\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Building Height</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"buildingHeight\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">No. Of Units (total)</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"noOfUnitsTotal\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">No. Of Units (per floor)</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"noOfUnitsPerFloor\"\r\n              ></ion-input>\r\n            </ion-item>\r\n        \r\n            <ion-item>\r\n              <ion-label position=\"floating\">Room Type</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"roomType\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">No. Of Toilets</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"noOfToilets\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">House Structure</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"houseStructure\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Door Facing</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"doorFacing\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Room Orientation</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"roomOrientation\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Corner Unit</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"cornerUnit\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Ground/Top Floor</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"groundTopFloor\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Western Sun</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"westernSun\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Noisy</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"noisy\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Refurbished State</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"refurbishedState\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Landscape From Window</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"landscapeFromWindow\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Bomb Shelter</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"bombShelter\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Open Kitchen</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"openKitchen\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Gas Management Fee</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"gasManagementFee\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">House Tax</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"houseTax\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Rental Status</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"rentalStatus\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">VR Link</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"vrLink\"\r\n              ></ion-input>\r\n            </ion-item> -->\r\n\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-button \r\n                (click)=\"uploadFloorPlanImage()\" \r\n                expand=\"block\"\r\n                >Upload Floorplan Image\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-button \r\n                type=\"submit\" \r\n                (click)=\"submitAddUnit()\" \r\n                expand=\"block\"\r\n                >Submit\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/block-detail/block-detail.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/block-detail/block-detail.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/units\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>Hotel Details</ion-title>\n\n    <ion-button \n\n    size=\"small\" \n    color=\"tertiary\"\n    slot=\"end\" \n    (click)=\"onEditBlockOptions()\"\n    >\n    <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"currPlace\">\n\n    <ion-row>\n      <ion-col class=\"ion-text-center ion-no-padding\">\n        <h6>{{ currPlace.name }}, Singapore {{ currPlace.postal }} </h6>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-button \n        color=\"tertiary\" \n        expand=\"block\"\n        (click)=\"addToFav(currPlace.postal)\"\n        >\n        Add To Favourites\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n<!--    <ion-row>\n      <ion-col>\n        <ion-searchbar \n        color=\"light\"\n        placeholder=\"Enter unit number (Eg. 01-01)\"\n        [debounce]=\"500\"\n        (ionChange)=\"handleChange($event)\"\n        ></ion-searchbar>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row>\n      <ion-col class=\"ion-text-center ion-no-padding\">\n        <ion-list>\n          <ion-item>Land Area: {{currPlace.landArea}}</ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center ion-no-padding\">\n        <ion-list>\n          <ion-item>Gross Floor Area: {{currPlace.grossFloorArea}}</ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center ion-no-padding\">\n        <ion-list>\n          <ion-item>Tenure: {{currPlace.tenure}}</ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center ion-no-padding\">\n        <ion-list>\n          <ion-item>No. of Rooms: {{currPlace.numRooms}}</ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center ion-no-padding\">\n        <ion-list>\n          <ion-item>No. of Storey: {{currPlace.numStorey}}</ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center ion-no-padding\">\n        <ion-list>\n          <ion-item>Asking price: {{currPlace.askingPrice}}</ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center ion-no-padding\">\n        <ion-list>\n          <ion-item>Price Per Room: {{currPlace.priceRoom}}</ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center ion-no-padding\">\n        <ion-list>\n          <ion-item>S$/GFA: {{currPlace.GFA}}</ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center ion-no-padding\">\n        <ion-list>\n          <ion-item>Room Rate: {{currPlace.roomRate}}</ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center ion-no-padding\">\n        <ion-list>\n          <ion-item>Net Operating Profit: {{currPlace.netOperatingProfit}}</ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center ion-no-padding\">\n        <ion-list>\n          <ion-item>Approved Usage: {{currPlace.approvedUsage}}</ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center ion-no-padding\">\n        <ion-list>\n          <ion-item>Location(MRT): {{currPlace.locationMRT}}</ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center ion-no-padding\">\n        <ion-list>\n          <ion-item>Location(School): {{currPlace.locationSch}}</ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-text-center ion-no-padding\">\n        <ion-list>\n          <ion-item>District: {{currPlace.district}}</ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center ion-no-padding\">\n        <ion-list>\n          <ion-item>\n            <!-- Replace \"1234567890\" with the actual WhatsApp phone number -->\n            <a href=\"https://wa.me/6591520660\" target=\"_blank\">Contact our agent: WhatsApp Link</a>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item *ngIf=\"result\">\n            <ion-label *ngIf=\"result.unitNumber === undefined\">\n              <h2>No results found</h2>\n            </ion-label>\n\n            <ion-label \n              *ngIf=\"result.unitNumber !== undefined\"\n              (click) = \"onSelectUnit()\"\n            >\n              <h2>#{{ result.unitNumber }}</h2>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/block-detail/edit-block/edit-block.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/block-detail/edit-block/edit-block.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button fill=\"clear\" color=\"danger\" (click)=\"onCancel()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Edit Place</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"editBlockForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Project Name</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"projectName\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-button \r\n                (click)=\"uploadBlockImage()\" \r\n                expand=\"block\"\r\n                >Upload Place Image\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-button \r\n                type=\"submit\" \r\n                (click)=\"submitEditBlock()\" \r\n                expand=\"block\"\r\n                >Save Changes\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/units/block-detail/add-unit/add-unit.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/units/block-detail/add-unit/add-unit.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VuaXRzL2Jsb2NrLWRldGFpbC9hZGQtdW5pdC9hZGQtdW5pdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/units/block-detail/add-unit/add-unit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/units/block-detail/add-unit/add-unit.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUnitComponent", function() { return AddUnitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/place.service */ "./src/app/services/place.service.ts");
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




var AddUnitComponent = /** @class */ (function () {
    function AddUnitComponent(modalCtrl, placeService) {
        this.modalCtrl = modalCtrl;
        this.placeService = placeService;
    }
    AddUnitComponent.prototype.ngOnInit = function () {
        this.currPlace = this.placeService.currPlace;
        this.addUnitForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            unitNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            bedrooms: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            size: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
        });
    };
    // cancel add unit
    AddUnitComponent.prototype.onCancel = function () {
        this.modalCtrl.dismiss(null, 'cancel');
    };
    // submit add unit form
    AddUnitComponent.prototype.submitAddUnit = function () {
        if (!this.addUnitForm.valid) {
            return;
        }
        var unitNumber = this.addUnitForm.value.unitNumber;
        var bedrooms = this.addUnitForm.value.bedrooms;
        var size = this.addUnitForm.value.size;
        var UnitFacing = this.addUnitForm.value.UnitFacing;
        this.placeService.addUnit(this.currPlace.postal, unitNumber, bedrooms, size, UnitFacing).subscribe(function () {
        });
        this.addUnitForm.reset();
        this.modalCtrl.dismiss();
    };
    // upload floorplan image
    AddUnitComponent.prototype.uploadFloorPlanImage = function () {
        console.log("choose floor plan image to upload");
    };
    AddUnitComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"] }
    ]; };
    AddUnitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-unit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-unit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/block-detail/add-unit/add-unit.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add-unit.component.scss */ "./src/app/pages/units/block-detail/add-unit/add-unit.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"]])
    ], AddUnitComponent);
    return AddUnitComponent;
}());



/***/ }),

/***/ "./src/app/pages/units/block-detail/block-detail-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/units/block-detail/block-detail-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: BlockDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockDetailPageRoutingModule", function() { return BlockDetailPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _block_detail_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block-detail.page */ "./src/app/pages/units/block-detail/block-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _block_detail_page__WEBPACK_IMPORTED_MODULE_2__["BlockDetailPage"]
    },
    {
        path: ':unitNumId',
        loadChildren: function () { return __webpack_require__.e(/*! import() | unit-detail-unit-detail-module */ "unit-detail-unit-detail-module").then(__webpack_require__.bind(null, /*! ./unit-detail/unit-detail.module */ "./src/app/pages/units/block-detail/unit-detail/unit-detail.module.ts")).then(function (m) { return m.UnitDetailPageModule; }); }
    }
];
var BlockDetailPageRoutingModule = /** @class */ (function () {
    function BlockDetailPageRoutingModule() {
    }
    BlockDetailPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], BlockDetailPageRoutingModule);
    return BlockDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/units/block-detail/block-detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/units/block-detail/block-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: BlockDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockDetailPageModule", function() { return BlockDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _block_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block-detail-routing.module */ "./src/app/pages/units/block-detail/block-detail-routing.module.ts");
/* harmony import */ var _block_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block-detail.page */ "./src/app/pages/units/block-detail/block-detail.page.ts");
/* harmony import */ var _add_unit_add_unit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-unit/add-unit.component */ "./src/app/pages/units/block-detail/add-unit/add-unit.component.ts");
/* harmony import */ var _edit_block_edit_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-block/edit-block.component */ "./src/app/pages/units/block-detail/edit-block/edit-block.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BlockDetailPageModule = /** @class */ (function () {
    function BlockDetailPageModule() {
    }
    BlockDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _block_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["BlockDetailPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [_block_detail_page__WEBPACK_IMPORTED_MODULE_5__["BlockDetailPage"], _add_unit_add_unit_component__WEBPACK_IMPORTED_MODULE_6__["AddUnitComponent"], _edit_block_edit_block_component__WEBPACK_IMPORTED_MODULE_7__["EditBlockComponent"]]
        })
    ], BlockDetailPageModule);
    return BlockDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/units/block-detail/block-detail.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/units/block-detail/block-detail.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VuaXRzL2Jsb2NrLWRldGFpbC9ibG9jay1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/units/block-detail/block-detail.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/units/block-detail/block-detail.page.ts ***!
  \***************************************************************/
/*! exports provided: BlockDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockDetailPage", function() { return BlockDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/place.service */ "./src/app/services/place.service.ts");
/* harmony import */ var _add_unit_add_unit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-unit/add-unit.component */ "./src/app/pages/units/block-detail/add-unit/add-unit.component.ts");
/* harmony import */ var _edit_block_edit_block_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-block/edit-block.component */ "./src/app/pages/units/block-detail/edit-block/edit-block.component.ts");
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







var BlockDetailPage = /** @class */ (function () {
    function BlockDetailPage(authService, navCtrl, route, router, actionSheetCtrl, modalCtrl, placeService, alertController) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.placeService = placeService;
        this.alertController = alertController;
    }
    BlockDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.currUser = this.authService.currFbUser;
        this.route.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('postalId')) {
                _this.navCtrl.navigateBack('/units');
                return;
            }
            var postalId = paramMap.get('postalId');
            _this.placeService.fetchPlaceDetail(postalId).subscribe(function (place) {
                _this.currPlace = place; // Now currPlace is set independently
            });
            //this.currPlace = this.placeService.currPlace;
        });
        this.fbRecsSub = this.placeService.fbRecs.subscribe(function (fbRecs) {
            _this.loadedFBRecs = fbRecs;
        });
    };
    BlockDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('postalId')) {
                // Handle missing postalId
                return;
            }
            var postalId = paramMap.get('postalId');
            _this.placeService.fetchPlaceDetail(postalId).subscribe(function (place) {
                _this.currPlace = place; // Set currPlace based on the postalId
            });
        });
        // Fetch lists that are used for other parts of this page or for UI components
        this.placeService.fetchFBPostals().subscribe(function () {
            // Handle post-fetch logic if needed
        });
        this.placeService.fetchFBRecs().subscribe(function () {
            // Handle post-fetch logic if needed
        });
    };
    // retrieve unit using unit number
    BlockDetailPage.prototype.handleChange = function (event) {
        var query = event.target.value;
        if (this.currPlace.units) {
            this.result = this.currPlace.units.find(function (p) { return p.unitNumber === query; });
        }
        this.placeService.currUnit = this.result;
    };
    // navigate to unit details page
    BlockDetailPage.prototype.onSelectUnit = function () {
        this.router.navigate(['/', 'units', this.currPlace.postal, this.result.unitNumber]);
    };
    // edit existing place / add new unit action sheet
    BlockDetailPage.prototype.onEditBlockOptions = function () {
        var _this = this;
        this.actionSheetCtrl.create({
            header: 'Please Choose',
            buttons: [
                {
                    text: 'Edit Place',
                    handler: function () {
                        _this.onEditBlock();
                    }
                },
                {
                    text: 'Add New Unit',
                    handler: function () {
                        _this.onAddUnit();
                    }
                },
                { text: 'Cancel', role: 'cancel' }
            ]
        })
            .then(function (actionSheetEl) {
            actionSheetEl.present();
        });
    };
    // edit existing place 
    BlockDetailPage.prototype.onEditBlock = function () {
        var _this = this;
        this.modalCtrl
            .create({ component: _edit_block_edit_block_component__WEBPACK_IMPORTED_MODULE_6__["EditBlockComponent"] })
            .then(function (modalEl) {
            modalEl.present();
            return modalEl.onDidDismiss();
        })
            .then(function (resultData) {
            console.log(resultData.data, resultData.role);
            if (resultData.role === 'confirm') {
                _this.ionViewWillEnter();
            }
        });
    };
    // add new unit
    BlockDetailPage.prototype.onAddUnit = function () {
        this.modalCtrl
            .create({ component: _add_unit_add_unit_component__WEBPACK_IMPORTED_MODULE_5__["AddUnitComponent"] })
            .then(function (modalEl) {
            modalEl.present();
            return modalEl.onDidDismiss();
        });
    };
    BlockDetailPage.prototype.addToFav = function (postalCode) {
        var _this = this;
        /*
          check if already in fav
          if yes, dont add
          if no, add
        */
        if (this.currUser.favourites && this.currUser.favourites.length > 0) {
            this.favPlace = this.currUser.favourites.find(function (p) { return p.postal === postalCode; });
            if (this.favPlace) {
                this.presentFavAlert();
            }
            else {
                this.recItem = this.loadedFBRecs.find(function (p) { return p.place === _this.placeService.currPlace.name; });
                if (this.recItem) {
                    this.findRecs = [this.recItem.rec1, this.recItem.rec2, this.recItem.rec3];
                }
                else {
                    this.findRecs = [];
                }
                this.authService.addFav(this.currUser.email, this.placeService.currPlace, this.findRecs).subscribe(function () {
                });
            }
        }
        else {
            this.recItem = this.loadedFBRecs.find(function (p) { return p.place === _this.placeService.currPlace.name; });
            if (this.recItem) {
                this.findRecs = [this.recItem.rec1, this.recItem.rec2, this.recItem.rec3];
            }
            else {
                this.findRecs = [];
            }
            this.authService.addFav(this.currUser.email, this.placeService.currPlace, this.findRecs).subscribe(function () {
            });
        }
    };
    // present place already in favourites alert
    BlockDetailPage.prototype.presentFavAlert = function () {
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
    BlockDetailPage.prototype.ngOnDestroy = function () {
        if (this.fbRecsSub) {
            this.fbRecsSub.unsubscribe();
        }
    };
    BlockDetailPage.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_place_service__WEBPACK_IMPORTED_MODULE_4__["PlaceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    BlockDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-detail',
            template: __importDefault(__webpack_require__(/*! raw-loader!./block-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/block-detail/block-detail.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./block-detail.page.scss */ "./src/app/pages/units/block-detail/block-detail.page.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_place_service__WEBPACK_IMPORTED_MODULE_4__["PlaceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], BlockDetailPage);
    return BlockDetailPage;
}());



/***/ }),

/***/ "./src/app/pages/units/block-detail/edit-block/edit-block.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/units/block-detail/edit-block/edit-block.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VuaXRzL2Jsb2NrLWRldGFpbC9lZGl0LWJsb2NrL2VkaXQtYmxvY2suY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/units/block-detail/edit-block/edit-block.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/units/block-detail/edit-block/edit-block.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlockComponent", function() { return EditBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/place.service */ "./src/app/services/place.service.ts");
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




var EditBlockComponent = /** @class */ (function () {
    function EditBlockComponent(modalCtrl, placeService) {
        this.modalCtrl = modalCtrl;
        this.placeService = placeService;
    }
    EditBlockComponent.prototype.ngOnInit = function () {
        this.currPlace = this.placeService.currPlace;
        this.editBlockForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            projectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currPlace.name, {
                updateOn: 'blur',
            }),
        });
    };
    // cancel edit place
    EditBlockComponent.prototype.onCancel = function () {
        this.modalCtrl.dismiss(null, 'cancel');
    };
    // submit edit place form
    EditBlockComponent.prototype.submitEditBlock = function () {
        if (!this.editBlockForm.valid) {
            return;
        }
        var newName = this.editBlockForm.value.projectName;
        this.placeService.editBlock(this.currPlace.postal, newName).subscribe(function () {
        });
        this.modalCtrl.dismiss({ message: 'Changes saved' }, 'confirm');
    };
    // upload place image
    EditBlockComponent.prototype.uploadBlockImage = function () {
        console.log("choose block image to upload");
    };
    EditBlockComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"] }
    ]; };
    EditBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-block',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit-block.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/block-detail/edit-block/edit-block.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./edit-block.component.scss */ "./src/app/pages/units/block-detail/edit-block/edit-block.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"]])
    ], EditBlockComponent);
    return EditBlockComponent;
}());



/***/ })

}]);
//# sourceMappingURL=block-detail-block-detail-module.js.map