(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-buyer-buyer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/buyer/buyer.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/buyer/buyer.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< Updated upstream
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n  \n      <ion-title>View Listings</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-grid>\n    <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label>Filter by Accommodation Type</ion-label>\n            <ion-select placeholder=\"Select Type\" [(ngModel)]=\"selectedAccommodationType\" (ionChange)=\"handleAccommodationTypeChange($event.detail.value)\" multiple>\n              <ion-select-option value=\"\">All Types</ion-select-option>\n              <ion-select-option *ngFor=\"let type of accommodationTypes\" [value]=\"type\">{{ type }}</ion-select-option>\n            </ion-select>            \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col size=\"12\">\n          <!-- Accommodation type filter buttons -->\n          <ion-button (click)=\"toggleAccommodationType('Residential')\">Residential</ion-button>\n          <ion-button (click)=\"toggleAccommodationType('Backpackers Hotel')\">Backpackers' Hotel</ion-button>\n          <ion-button (click)=\"toggleAccommodationType('Students Hotel')\">Students' Hotel</ion-button>\n          <ion-button (click)=\"toggleAccommodationType('Hotel')\">Hotel</ion-button>\n          <ion-button (click)=\"toggleAccommodationType('Serviced Apartment')\">Serviced Apartment</ion-button>\n          <ion-button (click)=\"toggleAccommodationType('Workers Dormitories')\">Workers' Dormitories</ion-button>\n                  <!-- Add more buttons as needed -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label>Selected Accommodation Type: </ion-label>\n            <ion-note>{{ selectedAccommodationType.join(', ') || 'None' }}</ion-note>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label>Filter by Region</ion-label>\n            <ion-select placeholder=\"Select Region\" [(ngModel)]=\"selectedRegion\" (ionChange)=\"handleRegionChange($event.detail.value)\"multiple>\n              <ion-select-option value=\"\">All Types</ion-select-option>\n              <ion-select-option *ngFor=\"let type of regionTypes\" [value]=\"type\">{{ type }}</ion-select-option>\n            </ion-select>            \n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <!-- Tenure type filter buttons -->\n          <ion-button (click)=\"setRegion('OCR')\">OCR</ion-button>\n          <ion-button (click)=\"setRegion('CCR')\">CCR</ion-button>\n          <ion-button (click)=\"setRegion('RCR')\">RCR</ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item >\n            <ion-label>Filter by District</ion-label>\n            <ion-select placeholder=\"Select Type\" [(ngModel)]=\"selectedDistrict\" (ionChange)=\"handleDistrictChange($event.detail.value)\" multiple>\n              <ion-select-option value=\"\">All Types</ion-select-option>\n              <ion-select-option *ngFor=\"let type of districtTypes\" [value]=\"type\">{{ type }}</ion-select-option>\n            </ion-select>            \n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label>Min Budget</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"minPrice\" (ionChange)=\"handlePriceChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n      \n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label>Max Budget</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"maxPrice\" (ionChange)=\"handlePriceChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <!-- Other filters -->\n      \n          <!-- Budget filter buttons -->\n          <ion-button (click)=\"toggleBudgetRange({ min: 0, max: 1000000 })\" [class.selected]=\"isBudgetRangeSelected({ min: 0, max: 1000000 })\">0-1mil</ion-button>\n          <ion-button (click)=\"toggleBudgetRange({ min: 1000001, max: 5000000 })\" [class.selected]=\"isBudgetRangeSelected({ min: 1000001, max: 5000000 })\">1mil-5mil</ion-button>\n          <ion-button (click)=\"toggleBudgetRange({ min: 5000001, max: 10000000 })\" [class.selected]=\"isBudgetRangeSelected({ min: 5000001, max: 10000000 })\">5mil-10mil</ion-button>\n          <ion-button (click)=\"toggleBudgetRange({ min: 10000001, max: 30000001 })\" [class.selected]=\"isBudgetRangeSelected({ min: 10000001, max: 30000001 })\">10mil-30mil</ion-button>\n          <ion-button (click)=\"toggleBudgetRange({ min: 30000001, max: 50000000 })\" [class.selected]=\"isBudgetRangeSelected({ min: 30000001, max: 50000000 })\">30mil-50mil</ion-button>\n          <ion-button (click)=\"toggleBudgetRange({ min: 50000001, max: 99999999999 })\" [class.selected]=\"isBudgetRangeSelected({ min: 50000001, max: 99999999999 })\">>50mil</ion-button>\n          <!-- Add more buttons as needed -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label>Selected Budget Ranges:</ion-label>\n            <ion-note>{{ getSelectedBudgetRanges() || 'None' }}</ion-note>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label>Min Number of Rooms</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"minRooms\" (ionChange)=\"handleRoomChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n      \n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label>Max Number of Rooms</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"maxRooms\" (ionChange)=\"handleRoomChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <!-- Other filters -->\n      \n          <!-- Budget filter buttons -->\n          <ion-button (click)=\"setRoomRange(0, 10)\">0-10</ion-button>\n          <ion-button (click)=\"setRoomRange(11, 30)\">11-30</ion-button>\n          <ion-button (click)=\"setRoomRange(31, 40)\">31-40</ion-button>\n          <ion-button (click)=\"setRoomRange(41, 60)\">41-60</ion-button>\n          <!-- Add more buttons as needed -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label>Filter by Tenure</ion-label>\n            <ion-select placeholder=\"Select Tenure\" [(ngModel)]=\"selectedTenure\" (ionChange)=\"handleTenureChange($event.detail.value)\">\n              <ion-select-option value=\"\">All Types</ion-select-option>\n              <ion-select-option *ngFor=\"let type of tenureTypes\" [value]=\"type\">{{ type }}</ion-select-option>\n            </ion-select>            \n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <!-- Tenure type filter buttons -->\n          <ion-button (click)=\"setTenureType('99 Years')\">99 Years</ion-button>\n          <ion-button (click)=\"setTenureType('60 Years')\">60 Years</ion-button>\n          <ion-button (click)=\"setTenureType('Freehold')\">Freehold / 999 Years</ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label>Filter</ion-label>\n            <ion-toggle [(ngModel)]=\"filter\" (ionChange)=\"handleFilterYes()\"></ion-toggle>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      \n  \n      <!-- New row for displaying filtered results -->\n      <ion-row *ngIf=\"allFiltersFilled()\">\n        <ion-col>\n          <ion-list>\n            <!-- Iterate over filteredFBPostals to display each postal -->\n            <ion-item *ngFor=\"let postal of filteredFBPostals\" [routerLink]=\"['/', 'units', postal.postal]\">\n              <ion-thumbnail slot=\"start\">\n                <ion-img [src]=\"postal.imageUrl || 'assets/placeholders/property.jpeg'\"></ion-img>\n              </ion-thumbnail>\n              <ion-label *ngIf=\"postal.name !== undefined\">\n                <h2>{{ postal.name }}</h2>\n                <p>Singapore {{ postal.postal }}</p>\n                <p>Asking Price: {{ postal.askingPrice }}</p>\n                <p>District: {{ postal.district }}</p> <!-- Use the actual properties of your fbPostal object -->\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n            <!-- New row for displaying the number of results -->\n      <ion-row *ngIf=\"allFiltersFilled()\" class=\"result-count-row\">\n        <ion-col>\n          <ion-item lines=\"none\" class=\"result-count-item\">\n            <ion-label>Total Results: {{ filteredFBPostals.length }}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n  \n      <ion-row>\n        <ion-col>\n          <ion-list *ngIf=\"result\">\n            <ion-item class=\"custom-color\">\n              Similar Places:\n            </ion-item>\n            \n            <div *ngIf=\"findRecs.length == 0\">\n              <ion-item>\n                Currently Unavailable\n              </ion-item>\n            </div>\n            \n            <div *ngIf=\"findRecs.length != 0\">\n              <ion-item *ngFor=\"let recPlace of findRecs\">\n                {{recPlace}}\n              </ion-item>\n            </div>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n  \n");
=======
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n  \r\n      <ion-title>Buyer Interface</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-content>\r\n    <ion-grid>\r\n    <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label>Filter by Accommodation Type</ion-label>\r\n            <ion-select placeholder=\"Select Type\" [(ngModel)]=\"selectedAccommodationType\" (ionChange)=\"handleAccommodationTypeChange($event.detail.value)\" multiple>\r\n              <ion-select-option value=\"\">All Types</ion-select-option>\r\n              <ion-select-option *ngFor=\"let type of accommodationTypes\" [value]=\"type\">{{ type }}</ion-select-option>\r\n            </ion-select>            \r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      \r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <!-- Accommodation type filter buttons -->\r\n          <ion-button (click)=\"toggleAccommodationType('Residential')\">Residential</ion-button>\r\n          <ion-button (click)=\"toggleAccommodationType('Backpackers Hotel')\">Backpackers' Hotel</ion-button>\r\n          <ion-button (click)=\"toggleAccommodationType('Students Hotel')\">Students' Hotel</ion-button>\r\n          <ion-button (click)=\"toggleAccommodationType('Hotel')\">Hotel</ion-button>\r\n          <ion-button (click)=\"toggleAccommodationType('Serviced Apartment')\">Serviced Apartment</ion-button>\r\n          <ion-button (click)=\"toggleAccommodationType('Workers Dormitories')\">Workers' Dormitories</ion-button>\r\n                  <!-- Add more buttons as needed -->\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label>Selected Accommodation Type: </ion-label>\r\n            <ion-note>{{ selectedAccommodationType.join(', ') || 'None' }}</ion-note>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label>Filter by Region</ion-label>\r\n            <ion-select placeholder=\"Select Region\" [(ngModel)]=\"selectedRegion\" (ionChange)=\"handleRegionChange($event.detail.value)\"multiple>\r\n              <ion-select-option value=\"\">All Types</ion-select-option>\r\n              <ion-select-option *ngFor=\"let type of regionTypes\" [value]=\"type\">{{ type }}</ion-select-option>\r\n            </ion-select>            \r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <!-- Tenure type filter buttons -->\r\n          <ion-button (click)=\"setRegion('OCR')\">OCR</ion-button>\r\n          <ion-button (click)=\"setRegion('CCR')\">CCR</ion-button>\r\n          <ion-button (click)=\"setRegion('RCR')\">RCR</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item >\r\n            <ion-label>Filter by District</ion-label>\r\n            <ion-select placeholder=\"Select Type\" [(ngModel)]=\"selectedDistrict\" (ionChange)=\"handleDistrictChange($event.detail.value)\" multiple>\r\n              <ion-select-option value=\"\">All Types</ion-select-option>\r\n              <ion-select-option *ngFor=\"let type of districtTypes\" [value]=\"type\">{{ type }}</ion-select-option>\r\n            </ion-select>            \r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-item>\r\n            <ion-label>Min Budget</ion-label>\r\n            <ion-input type=\"number\" [(ngModel)]=\"minPrice\" (ionChange)=\"handlePriceChange()\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      \r\n        <ion-col size=\"6\">\r\n          <ion-item>\r\n            <ion-label>Max Budget</ion-label>\r\n            <ion-input type=\"number\" [(ngModel)]=\"maxPrice\" (ionChange)=\"handlePriceChange()\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <!-- Other filters -->\r\n      \r\n          <!-- Budget filter buttons -->\r\n          <ion-button (click)=\"toggleBudgetRange({ min: 0, max: 1000000 })\" [class.selected]=\"isBudgetRangeSelected({ min: 0, max: 1000000 })\">0-1mil</ion-button>\r\n          <ion-button (click)=\"toggleBudgetRange({ min: 1000001, max: 5000000 })\" [class.selected]=\"isBudgetRangeSelected({ min: 1000001, max: 5000000 })\">1mil-5mil</ion-button>\r\n          <ion-button (click)=\"toggleBudgetRange({ min: 5000001, max: 10000000 })\" [class.selected]=\"isBudgetRangeSelected({ min: 5000001, max: 10000000 })\">5mil-10mil</ion-button>\r\n          <ion-button (click)=\"toggleBudgetRange({ min: 10000001, max: 30000001 })\" [class.selected]=\"isBudgetRangeSelected({ min: 10000001, max: 30000001 })\">10mil-30mil</ion-button>\r\n          <ion-button (click)=\"toggleBudgetRange({ min: 30000001, max: 50000000 })\" [class.selected]=\"isBudgetRangeSelected({ min: 30000001, max: 50000000 })\">30mil-50mil</ion-button>\r\n          <ion-button (click)=\"toggleBudgetRange({ min: 50000001, max: 99999999999 })\" [class.selected]=\"isBudgetRangeSelected({ min: 50000001, max: 99999999999 })\">>50mil</ion-button>\r\n          <!-- Add more buttons as needed -->\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label>Selected Budget Ranges:</ion-label>\r\n            <ion-note>{{ getSelectedBudgetRanges() || 'None' }}</ion-note>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-item>\r\n            <ion-label>Min Number of Rooms</ion-label>\r\n            <ion-input type=\"number\" [(ngModel)]=\"minRooms\" (ionChange)=\"handleRoomChange()\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      \r\n        <ion-col size=\"6\">\r\n          <ion-item>\r\n            <ion-label>Max Number of Rooms</ion-label>\r\n            <ion-input type=\"number\" [(ngModel)]=\"maxRooms\" (ionChange)=\"handleRoomChange()\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <!-- Other filters -->\r\n      \r\n          <!-- Budget filter buttons -->\r\n          <ion-button (click)=\"setRoomRange(0, 10)\">0-10</ion-button>\r\n          <ion-button (click)=\"setRoomRange(11, 30)\">11-30</ion-button>\r\n          <ion-button (click)=\"setRoomRange(31, 40)\">31-40</ion-button>\r\n          <ion-button (click)=\"setRoomRange(41, 60)\">41-60</ion-button>\r\n          <!-- Add more buttons as needed -->\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label>Filter by Tenure</ion-label>\r\n            <ion-select placeholder=\"Select Tenure\" [(ngModel)]=\"selectedTenure\" (ionChange)=\"handleTenureChange($event.detail.value)\">\r\n              <ion-select-option value=\"\">All Types</ion-select-option>\r\n              <ion-select-option *ngFor=\"let type of tenureTypes\" [value]=\"type\">{{ type }}</ion-select-option>\r\n            </ion-select>            \r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <!-- Tenure type filter buttons -->\r\n          <ion-button (click)=\"setTenureType('99 Years')\">99 Years</ion-button>\r\n          <ion-button (click)=\"setTenureType('60 Years')\">60 Years</ion-button>\r\n          <ion-button (click)=\"setTenureType('Freehold')\">Freehold / 999 Years</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label>Filter</ion-label>\r\n            <ion-toggle [(ngModel)]=\"filter\" (ionChange)=\"handleFilterYes()\"></ion-toggle>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      \r\n  \r\n      <!-- New row for displaying filtered results -->\r\n      <ion-row *ngIf=\"allFiltersFilled()\">\r\n        <ion-col>\r\n          <ion-list>\r\n            <!-- Iterate over filteredFBPostals to display each postal -->\r\n            <ion-item *ngFor=\"let postal of filteredFBPostals\" [routerLink]=\"['/', 'units', postal.postal]\">\r\n              <ion-thumbnail slot=\"start\">\r\n                <ion-img [src]=\"postal.imageUrl || 'assets/placeholders/property.jpeg'\"></ion-img>\r\n              </ion-thumbnail>\r\n              <ion-label *ngIf=\"postal.name !== undefined\">\r\n                <h2>{{ postal.name }}</h2>\r\n                <p>Singapore {{ postal.postal }}</p>\r\n                <p>Asking Price: {{ postal.askingPrice }}</p>\r\n                <p>District: {{ postal.district }}</p> <!-- Use the actual properties of your fbPostal object -->\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n            <!-- New row for displaying the number of results -->\r\n      <ion-row *ngIf=\"allFiltersFilled()\" class=\"result-count-row\">\r\n        <ion-col>\r\n          <ion-item lines=\"none\" class=\"result-count-item\">\r\n            <ion-label>Total Results: {{ filteredFBPostals.length }}</ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-list *ngIf=\"result\">\r\n            <ion-item class=\"custom-color\">\r\n              Similar Places:\r\n            </ion-item>\r\n            \r\n            <div *ngIf=\"findRecs.length == 0\">\r\n              <ion-item>\r\n                Currently Unavailable\r\n              </ion-item>\r\n            </div>\r\n            \r\n            <div *ngIf=\"findRecs.length != 0\">\r\n              <ion-item *ngFor=\"let recPlace of findRecs\">\r\n                {{recPlace}}\r\n              </ion-item>\r\n            </div>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>\r\n\r\n  <ng-template #notAuthorized>\r\n    <ion-row class=\"ion-justify-content-center ion-align-items-start\" style=\"height: 100vh;\">\r\n      <ion-col>\r\n        <ion-text class=\"ion-text-center\">\r\n          <h2 class=\"ion-text-uppercase ion-text-bold ion-text-italic\" style=\"font-size: 1.5em;\">Only accessible by Buyers</h2>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ng-template>\r\n  \r\n");
>>>>>>> Stashed changes

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
        loadChildren: function () { return __webpack_require__.e(/*! import() | units-block-detail-block-detail-module */ "default~block-detail-block-detail-module~units-block-detail-block-detail-module").then(__webpack_require__.bind(null, /*! ../units/block-detail/block-detail.module */ "./src/app/pages/units/block-detail/block-detail.module.ts")).then(function (m) { return m.BlockDetailPageModule; }); }
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
/* harmony default export */ __webpack_exports__["default"] = (".custom-color {\n  --color: #7f7f7f;\n}\n\n/* Style the result count item */\n\n.result-count-item {\n  font-size: 18px;\n  font-weight: bold;\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYnV5ZXIvQzpcXFVzZXJzXFx1c2VyXFxEb2N1bWVudHNcXEdpdEh1YlxcRllQLVJlY29tbWVuZGVyLVN5c3RlbVxccHJvcG5leC1pbnZlc3RtZW50LXN1aXRlL3NyY1xcYXBwXFxwYWdlc1xcYnV5ZXJcXGJ1eWVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYnV5ZXIvYnV5ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQSxnQ0FBQTs7QUFDQTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2J1eWVyL2J1eWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tY29sb3Ige1xyXG4gICAgLS1jb2xvcjogIzdmN2Y3ZjsgXHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSByZXN1bHQgY291bnQgaXRlbSAqL1xyXG4ucmVzdWx0LWNvdW50LWl0ZW0ge1xyXG4gICAgLy8gQWRkIHlvdXIgY3VzdG9tIHN0eWxlcyBoZXJlXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICAiLCIuY3VzdG9tLWNvbG9yIHtcbiAgLS1jb2xvcjogIzdmN2Y3Zjtcbn1cblxuLyogU3R5bGUgdGhlIHJlc3VsdCBjb3VudCBpdGVtICovXG4ucmVzdWx0LWNvdW50LWl0ZW0ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMzMztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/buyer/buyer.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/buyer/buyer.page.ts ***!
  \*******************************************/
/*! exports provided: accommodationTypes, tenureTypes, regionTypes, regionDistrictMapping, districtTypes, BuyerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accommodationTypes", function() { return accommodationTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tenureTypes", function() { return tenureTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regionTypes", function() { return regionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regionDistrictMapping", function() { return regionDistrictMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "districtTypes", function() { return districtTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerPage", function() { return BuyerPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _units_add_block_add_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../units/add-block/add-block.component */ "./src/app/pages/units/add-block/add-block.component.ts");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/place.service */ "./src/app/services/place.service.ts");
/* harmony import */ var _home_main_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home/main/edit-profile/edit-profile.component */ "./src/app/pages/home/main/edit-profile/edit-profile.component.ts");
/* harmony import */ var _pages_filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/filter.service */ "./src/app/pages/filter.service.ts");
/* harmony import */ var _services_TrackHotel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/TrackHotel.service */ "./src/app/services/TrackHotel.service.ts");
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







 // Import the FilterService
 // Replace with the correct path
var accommodationTypes = [
    'Residential',
    "Backpackers Hotel",
    'Hotel',
    "Students Hotel",
    'Serviced Apartment',
    "Workers Dormitories"
]; //accommodation types
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
var regionDistrictMapping = {
    'RCR': [
        'District 01 - Raffles Place, Marina, Cecil', 'District 02 - Tanjong Pagar, Chinatown',
        'District 03 - Tiong Bahru, Alexandra, Queenstown', 'District 04 - Mount Faber, Telok Blangah, Harbourfront',
        'District 06 - Clarke Quay, City Hall', 'District 16 - Bedok, Upper East Coast, Siglap',
        'District 17 - Changi, Flora, Loyang', 'District 18 - Tampines, Pasir Ris',
        'District 19 - Punggol, Sengkang, Serangoon Gardens', 'District 21 - Upper Bukit Timah, Ulu Pandan, Clementi Park',
        'District 22 - Boon Lay, Jurong, Tuas', 'District 23 - Choa Chu Kang, Diary Farm, Hillview, Bukit Panjang, Bukit Batok',
        'District 24 - Kranji, Lim Chu Kang, Tengah', 'District 25 - Woodlands, Admiralty',
        'District 26 - Upper Thomson, Mandai', 'District 27 - Sembawang, Yishun, Admiralty',
        'District 28 - Yio Chu Kang, Seletar',
    ],
    'CCR': [
        'District 09 - Orchard Road, River Valley', 'District 10 - Bukit Timah, Holland, Balmoral',
        'District 11 - Novena, Newton, Thomson',
    ],
    'OCR': [
        'District 05 - Buona Vista, Pasir Panjang, Clementi', 'District 14 - Geylang, Paya Lebar, Sims',
        'District 15 - Joo Chiat, Marina Parade, Katong', 'District 20 - Ang Mo Kio, Bishan, Thomson',
    ],
};
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
var BuyerPage = /** @class */ (function () {
    function BuyerPage(authService, router, modalCtrl, filterService, placeService, selectedHotelsService) {
        this.authService = authService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.filterService = filterService;
        this.placeService = placeService;
        this.selectedHotelsService = selectedHotelsService;
        this.minPrice = 0;
        this.maxPrice = (100 / 0);
        this.minRooms = 0;
        this.maxRooms = (100 / 0);
        this.accommodationTypes = accommodationTypes;
        this.tenureTypes = tenureTypes;
        this.districtTypes = districtTypes;
        this.selectedAccommodationType = []; //initially no filter
        this.selectedDistrict = [];
        this.selectedTenure = []; //initially no filter
        this.regionTypes = regionTypes;
        this.selectedRegions = [];
        this.selectedBudgetRanges = [];
        this.selectedDistricts = [];
        this.availableDistricts = [];
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
    BuyerPage.prototype.handleLDistrictChange = function (selectedTypes) {
        this.selectedDistrict = selectedTypes;
        this.filterPostals();
    };
    BuyerPage.prototype.handleRegionChange = function (selectedRegion) {
        if (this.selectedRegions.includes(selectedRegion)) {
            // Remove the region if it's already selected
            this.selectedRegions = this.selectedRegions.filter(function (r) { return r !== selectedRegion; });
        }
        else {
            // Add the region if it's not selected
            this.selectedRegions.push(selectedRegion);
        }
        // Update the selectedDistricts based on all selected regions
        this.selectedDistricts = this.getSelectedDistricts();
        this.filterPostals();
    };
    BuyerPage.prototype.getSelectedDistricts = function () {
        var districts = [];
        for (var _i = 0, _a = this.selectedRegions; _i < _a.length; _i++) {
            var region = _a[_i];
            districts.push.apply(districts, (regionDistrictMapping[region] || []));
        }
        return districts;
    };
    BuyerPage.prototype.getDistrictsForRegion = function (region) {
        return regionDistrictMapping[region] || [];
    };
    BuyerPage.prototype.handleDistrictChange = function () {
        this.filterPostals();
    };
    BuyerPage.prototype.handlePriceChange = function () {
        this.filterPostals();
    };
    BuyerPage.prototype.handleRoomchange = function () {
        this.filterPostals();
    };
    BuyerPage.prototype.handleTenureChange = function (selectedType) {
        this.selectedTenure = selectedType;
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
    BuyerPage.prototype.toggleBudgetRange = function (range) {
        var index = this.selectedBudgetRanges.findIndex(function (r) { return r.min === range.min && r.max === range.max; });
        if (index !== -1) {
            // Range is already selected, remove it
            this.selectedBudgetRanges.splice(index, 1);
        }
        else {
            // Range is not selected, add it
            this.selectedBudgetRanges.push(range);
        }
        this.filterPostals();
    };
    BuyerPage.prototype.isBudgetRangeSelected = function (range) {
        return this.selectedBudgetRanges.some(function (r) { return r.min === range.min && r.max === range.max; });
    };
    BuyerPage.prototype.getSelectedBudgetRanges = function () {
        return this.selectedBudgetRanges.map(function (range) { return range.min + "-" + range.max; }).join(', ');
    };
    BuyerPage.prototype.setRoomRange = function (minValue, maxValue) {
        this.minRooms = minValue;
        this.maxRooms = maxValue;
        this.filterPostals();
    };
    BuyerPage.prototype.toggleAccommodationType = function (type) {
        var index = this.selectedAccommodationType.indexOf(type);
        if (index !== -1) {
            // Type is already in the array, remove it
            this.selectedAccommodationType.splice(index, 1);
        }
        else {
            // Type is not in the array, add it
            this.selectedAccommodationType.push(type);
        }
        console.log(this.selectedAccommodationType); // Log the array to check its contents
        this.filterPostals();
    };
    BuyerPage.prototype.setAccommodationType = function (type) {
        this.selectedAccommodationType = type;
        this.filterPostals();
    };
    BuyerPage.prototype.setTenureType = function (type) {
        this.selectedTenure = [type]; // Convert to an array to match the expected format
        this.filterPostals();
    };
    BuyerPage.prototype.allFiltersFilled = function () {
        return (this.filter === true
        // Add more conditions if you have additional filters
        );
    };
    BuyerPage.prototype.filterPostals = function () {
        var _this = this;
        this.filterService.setFilters({
            selectedAccommodationType: this.selectedAccommodationType,
            selectedDistrict: this.selectedDistrict,
            minPrice: this.minPrice,
            maxPrice: this.maxPrice,
            minRooms: this.minRooms,
            maxRooms: this.maxRooms,
            username: this.currUser.name,
            tenure: this.selectedTenure
            // Add other filters as needed
        });
        this.filteredFBPostals = this.loadedFBPostals.filter(function (postal) {
            return (!_this.selectedAccommodationType || _this.selectedAccommodationType.includes(postal.approvedUsage)) &&
                (!_this.selectedDistrict || _this.selectedDistrict.includes(postal.district)) &&
                _this.checkPriceInRange(postal.askingPrice) &&
                (!_this.minRooms || postal.numRooms >= _this.minRooms) &&
                (!_this.maxRooms || postal.numRooms <= _this.maxRooms) &&
                (!_this.selectedTenure || _this.selectedTenure.includes(postal.tenure));
        }
        // Add more conditions as needed
        );
        return this.filteredFBPostals;
    };
    BuyerPage.prototype.isSelectedRegion = function (postalRegion) {
        return (!this.selectedRegions.length ||
            this.selectedRegions.includes(postalRegion));
    };
    BuyerPage.prototype.checkPriceInRange = function (price) {
        if (this.selectedBudgetRanges.length > 0) {
            return this.selectedBudgetRanges.some(function (range) {
                return price >= range.min && price <= range.max;
            });
        }
        else {
            return (!this.minPrice || price >= this.minPrice) && (!this.maxPrice || price <= this.maxPrice);
        }
    };
    BuyerPage.prototype.onSelectPlace = function (postal) {
        this.router.navigate(['/', 'units', postal.postal]);
        this.selectedHotelsService.addSelectedHotel(postal);
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
        { type: _pages_filter_service__WEBPACK_IMPORTED_MODULE_7__["FilterService"] },
        { type: _services_place_service__WEBPACK_IMPORTED_MODULE_5__["PlaceService"] },
        { type: _services_TrackHotel_service__WEBPACK_IMPORTED_MODULE_8__["SelectedHotelsService"] }
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
            _pages_filter_service__WEBPACK_IMPORTED_MODULE_7__["FilterService"],
            _services_place_service__WEBPACK_IMPORTED_MODULE_5__["PlaceService"],
            _services_TrackHotel_service__WEBPACK_IMPORTED_MODULE_8__["SelectedHotelsService"]])
    ], BuyerPage);
    return BuyerPage;
}());



/***/ }),

/***/ "./src/app/services/TrackHotel.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/TrackHotel.service.ts ***!
  \************************************************/
/*! exports provided: SelectedHotelsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedHotelsService", function() { return SelectedHotelsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};


var SelectedHotelsService = /** @class */ (function () {
    function SelectedHotelsService() {
        this.selectedHotelsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.selectedHotels$ = this.selectedHotelsSubject.asObservable();
    }
    SelectedHotelsService.prototype.addSelectedHotel = function (hotel) {
        var currentSelectedHotels = this.selectedHotelsSubject.value;
        this.selectedHotelsSubject.next(__spreadArrays(currentSelectedHotels, [hotel]));
    };
    SelectedHotelsService.prototype.getSelectedHotels = function () {
        return this.selectedHotelsSubject.value;
    };
    SelectedHotelsService.prototype.saveSelectedHotelsToFirebase = function (userId) {
        var selectedHotels = this.selectedHotelsSubject.value;
    };
    SelectedHotelsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], SelectedHotelsService);
    return SelectedHotelsService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-buyer-buyer-module.js.map