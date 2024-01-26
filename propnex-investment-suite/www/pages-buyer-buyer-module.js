(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-buyer-buyer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/buyer/buyer.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/buyer/buyer.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n  \n      <ion-title>Buyer Interface</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-grid>\n    <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label>Filter by Accommodation Type</ion-label>\n            <ion-select placeholder=\"Select Type\" [(ngModel)]=\"selectedAccommodationType\" (ionChange)=\"handleAccommodationTypeChange($event.detail.value)\" multiple>\n              <ion-select-option value=\"\">All Types</ion-select-option>\n              <ion-select-option *ngFor=\"let type of accommodationTypes\" [value]=\"type\">{{ type }}</ion-select-option>\n            </ion-select>            \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col size=\"12\">\n          <!-- Other filters -->\n      \n          <!-- Accommodation type filter buttons -->\n          <ion-button (click)=\"setAccommodationType('Residential')\">Residential</ion-button>\n          <ion-button (click)=\"setAccommodationType('Backpackers Hotel')\">Backpackers' Hotel</ion-button>\n          <ion-button (click)=\"setAccommodationType('Students Hotel')\">Students' Hotel</ion-button>\n          <ion-button (click)=\"setAccommodationType('Hotel')\">Hotel</ion-button>\n          <ion-button (click)=\"setAccommodationType('Serviced Apartment')\">Serviced Apartment</ion-button>\n          <ion-button (click)=\"setAccommodationType('Workers Dormitories')\">Workers' Dormitories</ion-button>\n          <!-- Add more buttons as needed -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label>Filter by Region</ion-label>\n            <ion-select placeholder=\"Select Region\" [(ngModel)]=\"selectedRegion\" (ionChange)=\"handleRegionChange($event.detail.value)\"multiple>\n              <ion-select-option value=\"\">All Types</ion-select-option>\n              <ion-select-option *ngFor=\"let type of regionTypes\" [value]=\"type\">{{ type }}</ion-select-option>\n            </ion-select>            \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col size=\"12\">\n          <!-- Tenure type filter buttons -->\n          <ion-button (click)=\"setRegion('OCR')\">OCR</ion-button>\n          <ion-button (click)=\"setRegion('CCR')\">CCR</ion-button>\n          <ion-button (click)=\"setRegion('RCR')\">RCR</ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item >\n            <ion-label>Filter by District</ion-label>\n            <ion-select placeholder=\"Select Type\" [(ngModel)]=\"selectedDistrict\" (ionChange)=\"handleDistrictChange($event.detail.value)\" multiple>\n              <ion-select-option value=\"\">All Types</ion-select-option>\n              <ion-select-option *ngFor=\"let type of districtTypes\" [value]=\"type\">{{ type }}</ion-select-option>\n            </ion-select>            \n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label>Min Budget</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"minPrice\" (ionChange)=\"handlePriceChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n      \n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label>Max Budget</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"maxPrice\" (ionChange)=\"handlePriceChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <!-- Other filters -->\n      \n          <!-- Budget filter buttons -->\n          <ion-button (click)=\"setBudgetRange(0, 10000)\">0-10,000</ion-button>\n          <ion-button (click)=\"setBudgetRange(10001, 20000)\">10,001-20,000</ion-button>\n          <ion-button (click)=\"setBudgetRange(20001, 30000)\">20,001-30,000</ion-button>\n          <ion-button (click)=\"setBudgetRange(30001, 40000)\">30,001-40,000</ion-button>\n          <ion-button (click)=\"setBudgetRange(40001, 50000)\">40,001-50,000</ion-button>\n          <ion-button (click)=\"setBudgetRange(50001, 60000)\">50,001-60,000</ion-button>\n          <!-- Add more buttons as needed -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label>Min Number of Rooms</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"minRooms\" (ionChange)=\"handleRoomChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n      \n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label>Max Number of Rooms</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"maxRooms\" (ionChange)=\"handleRoomChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <!-- Other filters -->\n      \n          <!-- Budget filter buttons -->\n          <ion-button (click)=\"setRoomRange(0, 10)\">0-10</ion-button>\n          <ion-button (click)=\"setRoomRange(11, 30)\">11-30</ion-button>\n          <ion-button (click)=\"setRoomRange(31, 40)\">31-40</ion-button>\n          <ion-button (click)=\"setRoomRange(41, 60)\">41-60</ion-button>\n          <!-- Add more buttons as needed -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label>Filter by Tenure</ion-label>\n            <ion-select placeholder=\"Select Tenure\" [(ngModel)]=\"selectedTenure\" (ionChange)=\"handleTenureChange($event.detail.value)\">\n              <ion-select-option value=\"\">All Types</ion-select-option>\n              <ion-select-option *ngFor=\"let type of tenureTypes\" [value]=\"type\">{{ type }}</ion-select-option>\n            </ion-select>            \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col size=\"12\">\n          <!-- Tenure type filter buttons -->\n          <ion-button (click)=\"setTenure('99 Years')\">99 Years</ion-button>\n          <ion-button (click)=\"setTenure('60 Years')\">60 Years</ion-button>\n          <ion-button (click)=\"setTenure('Freehold')\">Freehold / 999 Years</ion-button>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label>Filter</ion-label>\n            <ion-toggle [(ngModel)]=\"filter\" (ionChange)=\"handleFilterYes()\"></ion-toggle>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- New row for displaying the number of results -->\n      <ion-row *ngIf=\"allFiltersFilled()\" class=\"result-count-row\">\n        <ion-col>\n          <ion-item lines=\"none\" class=\"result-count-item\">\n            <ion-label>Total Results: {{ filteredFBPostals.length }}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- New row for displaying filtered results -->\n      <ion-row *ngIf=\"allFiltersFilled()\">\n        <ion-col>\n          <ion-list>\n            <!-- Iterate over filteredFBPostals to display each postal -->\n            <ion-item *ngFor=\"let postal of filteredFBPostals\" [routerLink]=\"['/', 'units', postal.postal]\">\n              <ion-thumbnail slot=\"start\">\n                <ion-img [src]=\"postal.imageUrl || 'assets/placeholders/property.jpeg'\"></ion-img>\n              </ion-thumbnail>\n              <ion-label *ngIf=\"postal.name !== undefined\">\n                <h2>{{ postal.name }}</h2>\n                <p>Singapore {{ postal.postal }}</p>\n                <p>Asking Price: {{ postal.askingPrice }}</p>\n                <p>District: {{ postal.district }}</p> <!-- Use the actual properties of your fbPostal object -->\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n  \n      <ion-row>\n        <ion-col>\n          <ion-list *ngIf=\"result\">\n            <ion-item class=\"custom-color\">\n              Similar Places:\n            </ion-item>\n            \n            <div *ngIf=\"findRecs.length == 0\">\n              <ion-item>\n                Currently Unavailable\n              </ion-item>\n            </div>\n            \n            <div *ngIf=\"findRecs.length != 0\">\n              <ion-item *ngFor=\"let recPlace of findRecs\">\n                {{recPlace}}\n              </ion-item>\n            </div>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n  ");

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
/* harmony default export */ __webpack_exports__["default"] = (".custom-color {\n  --color: #7f7f7f;\n}\n\n/* Style the result count item */\n\n.result-count-item {\n  font-size: 18px;\n  font-weight: bold;\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXJhaG9yL0RvY3VtZW50cy9HaXRIdWIvRllQLVJlY29tbWVuZGVyLVN5c3RlbS9wcm9wbmV4LWludmVzdG1lbnQtc3VpdGUvc3JjL2FwcC9wYWdlcy9idXllci9idXllci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2J1eWVyL2J1eWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUEsZ0NBQUE7O0FBQ0E7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9idXllci9idXllci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWNvbG9yIHtcbiAgICAtLWNvbG9yOiAjN2Y3ZjdmOyBcbn1cblxuLyogU3R5bGUgdGhlIHJlc3VsdCBjb3VudCBpdGVtICovXG4ucmVzdWx0LWNvdW50LWl0ZW0ge1xuICAgIC8vIEFkZCB5b3VyIGN1c3RvbSBzdHlsZXMgaGVyZVxuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuICAiLCIuY3VzdG9tLWNvbG9yIHtcbiAgLS1jb2xvcjogIzdmN2Y3Zjtcbn1cblxuLyogU3R5bGUgdGhlIHJlc3VsdCBjb3VudCBpdGVtICovXG4ucmVzdWx0LWNvdW50LWl0ZW0ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMzMztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/buyer/buyer.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/buyer/buyer.page.ts ***!
  \*******************************************/
/*! exports provided: accommodationTypes, districtTypes, tenureTypes, regionTypes, BuyerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accommodationTypes", function() { return accommodationTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "districtTypes", function() { return districtTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tenureTypes", function() { return tenureTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regionTypes", function() { return regionTypes; });
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







var accommodationTypes = [
    'Residential',
    "Backpackers' Hotel",
    'Hotel',
    "Students' Hotel",
    'Serviced Apartment',
    "Workers' Dormitories"
]; //accommodation types
var districtTypes = [
    "District 01 - Raffles Place, Marina, Cecil",
    'District 02 - Tanjong Pagar, Chinatown',
    'District 03 - Tiong Bahru, Alexandra, Queenstown',
    'District 04 - Mount Faber, Telok Blangah, Harbourfront',
    'District 05 - Buona Vista, Pasir Panjang, Clementi',
    'District 06 - Clarke Quay, City Hall',
    'District 07 - Bugis, Beach Road, Golden Mile',
    'District 08 - Little India, Farrer Park',
    'District 09 - Orchard Road, River Valley',
    'District 10 - Bukit Timah, Holland, Balmoral',
    'District 11 - Novena, Newton, Thomson',
    'District 12 - Toa Payoh, Serangoon, Balestier',
    'District 13 - Macpherson, Braddell',
    'District 14 - Geylang, Paya Lebar, Sims',
    'District 15 - Joo Chiat, Marina Parade, Katong',
    'District 16 - Bedok, Upper East Coast, Siglap',
    'District 17 - Changi, Flora, Loyang',
    'District 18 - Tampines, Pasir Ris',
    'District 19 - Punggol, Sengkang, Serangoon Gardens',
    'District 20 - Ang Mo Kio, Bishan, Thomson',
    'District 21 - Upper Bukit Timah, Ulu Pandan, Clementi Park',
    'District 22 - Boon Lay, Jurong, Tuas',
    'District 23 - Choa Chu Kang, Diary Farm, Hillview, Bukit Panjang, Bukit Batok',
    'District 24 - Kranji, Lim Chu Kang, Tengah',
    'District 25 - Woodlands, Admiralty',
    'District 26 - Upper Thomson, Mandai',
    'District 27 - Sembawang, Yishun, Admiralty',
    'District 28 - Yio Chu Kang, Seletar'
];
var tenureTypes = [
    '99 Years',
    '60 Years',
    'Freehold'
]; //tenure types
var regionTypes = [
    'RCR',
    'CCR',
    'OCR'
];
var BuyerPage = /** @class */ (function () {
    function BuyerPage(authService, router, modalCtrl, placeService) {
        this.authService = authService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.placeService = placeService;
        this.minPrice = 0;
        this.maxPrice = (100 / 0);
        this.accommodationTypes = accommodationTypes;
        this.tenureTypes = tenureTypes;
        this.regionTypes = regionTypes;
        this.districtTypes = districtTypes;
        this.selectedAccommodationType = ''; //initially no filter
        this.selectedDistrict = ''; //initially no filter
        this.selectedTenure = ''; //initially no filter
        this.selectedRegion = ''; //initially no filter
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
    BuyerPage.prototype.handleAccommodationTypeChange = function (selectedType) {
        this.selectedAccommodationType = selectedType;
        this.filterPostals();
    };
    BuyerPage.prototype.handleLDistrictChange = function (selectedType) {
        this.selectedDistrict = selectedType;
        this.filterPostals();
    };
    BuyerPage.prototype.handlePriceChange = function () {
        this.filterPostals();
    };
    BuyerPage.prototype.handleTenureChange = function (selectedType) {
        this.selectedTenure = selectedType;
        this.filterPostals();
    };
    BuyerPage.prototype.handleRegionChange = function (selectedType) {
        this.selectedRegion = selectedType;
        this.filterPostals();
    };
    BuyerPage.prototype.handleFilterYes = function () {
        if (this.filter) {
        }
        else {
            // Set additionalFilter to false when the toggle is switched off
            this.filter = false;
        }
    };
    BuyerPage.prototype.allFiltersFilled = function () {
        return (this.selectedAccommodationType !== undefined &&
            this.selectedDistrict !== undefined &&
            this.minPrice !== undefined &&
            this.maxPrice !== undefined &&
            this.selectedTenure !== undefined &&
            this.selectedRegion !== undefined &&
            this.filter === true
        // Add more conditions if you have additional filters
        );
    };
    BuyerPage.prototype.filterPostals = function () {
        var _this = this;
        this.filteredFBPostals = this.loadedFBPostals.filter(function (postal) {
            return (!_this.selectedAccommodationType || postal.approvedUsage === _this.selectedAccommodationType) &&
                (!_this.selectedDistrict || postal.district === _this.selectedDistrict) && (!_this.minPrice || postal.askingPrice >= _this.minPrice) &&
                (!_this.maxPrice || postal.askingPrice <= _this.maxPrice) &&
                (!_this.selectedTenure || postal.tenure === _this.selectedTenure) &&
                (!_this.selectedRegion || postal.region === _this.selectedRegion);
        }
        // Add more conditions as needed
        );
        return this.filteredFBPostals;
    };
    // navigate to place details page
    BuyerPage.prototype.onSelectPlace = function (postal) {
        this.router.navigate(['/', 'units', postal.postal]);
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