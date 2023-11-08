(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-stats-stats-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stats/stats.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stats/stats.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Statistical Insights</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-no-padding\">\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card class=\"ion-no-padding\">\r\n          <ion-card-header>\r\n            <ion-card-title>Price and Volume Trends\r\n              <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"trendsInfoClick()\">\r\n                <ion-icon slot=\"icon-only\" name=\"information-circle\"></ion-icon>\r\n              </ion-button></ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-text slot=\"start\"> Filter: </ion-text>\r\n                <ion-select placeholder=\"All\" [multiple]=\"true\" [value]=\"['vol', 'all']\" (ionChange)=\"handleChange($event)\">\r\n                  <ion-select-option value=\"vol\">Volume</ion-select-option>\r\n                  <ion-select-option value=\"all\">All Units</ion-select-option>\r\n                  <ion-select-option value=\"central\">Central District</ion-select-option>\r\n                  <ion-select-option value=\"east\">East District</ion-select-option>\r\n                  <ion-select-option value=\"ne\">North-East District</ion-select-option>\r\n                  <ion-select-option value=\"north\">North District</ion-select-option>\r\n                  <ion-select-option value=\"west\">West District</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-list>\r\n            <div id=\"price-trends-graph\"></div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>Most Number of Units Sold\r\n            <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"countInfoClick()\">\r\n              <ion-icon slot=\"icon-only\" name=\"information-circle\"></ion-icon>\r\n            </ion-button>\r\n          </ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-list>\r\n\r\n            <ion-item-group>\r\n              <ion-item-divider color=\"medium\" (click)=\"numLocButton()\">\r\n                <ion-label>\r\n                  <h2>By Location</h2>\r\n                </ion-label>\r\n              </ion-item-divider>\r\n\r\n              <ion-item *ngFor=\"let region of count_dataArr\" [hidden]=\"numLocHidden\">\r\n                <ion-text slot=\"start\">\r\n                  {{region[0]}}\r\n                </ion-text>\r\n                <ion-text slot=\"end\">\r\n                  {{region[1]}} units\r\n                </ion-text>\r\n              </ion-item>\r\n            </ion-item-group>\r\n\r\n            <ion-item-group>\r\n              <ion-item-divider color=\"medium\" (click)=\"numTypeButton()\">\r\n                <ion-label>\r\n                  <h2>By Type</h2>\r\n                </ion-label>\r\n              </ion-item-divider>\r\n\r\n              <ion-item *ngFor=\"let region of countT_dataArr\" [hidden]=\"numTypeHidden\">\r\n                <ion-text slot=\"start\">\r\n                  {{region[0]}}\r\n                </ion-text>\r\n                <ion-text slot=\"end\">\r\n                  {{region[1]}} units\r\n                </ion-text>\r\n              </ion-item>\r\n            </ion-item-group>\r\n\r\n          </ion-list>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n    \r\n    <ion-col>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>Most Expensive Units\r\n            <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"maxInfoClick()\">\r\n              <ion-icon slot=\"icon-only\" name=\"information-circle\"></ion-icon>\r\n            </ion-button>\r\n          </ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-list>\r\n\r\n            <ion-item-group>\r\n              <ion-item-divider color=\"medium\" (click)=\"expLocButton()\">\r\n                <ion-label>\r\n                  <h2>By Location</h2>\r\n                </ion-label>\r\n              </ion-item-divider>\r\n\r\n              <ion-item *ngFor=\"let region of max_dataArr\" [hidden]=\"expLocHidden\">\r\n                <ion-text slot=\"start\">\r\n                  {{region[0]}}\r\n                </ion-text>\r\n                <ion-text slot=\"end\">\r\n                  ${{region[1]}} psf\r\n                </ion-text>\r\n              </ion-item>\r\n            </ion-item-group>\r\n\r\n            <ion-item-group>\r\n              <ion-item-divider color=\"medium\" (click)=\"expTypeButton()\">\r\n                <ion-label>\r\n                  <h2>By Type</h2>\r\n                </ion-label>\r\n              </ion-item-divider>\r\n\r\n              <ion-item *ngFor=\"let region of maxT_dataArr\" [hidden]=\"expTypeHidden\">\r\n                <ion-text slot=\"start\">\r\n                  {{region[0]}}\r\n                </ion-text>\r\n                <ion-text slot=\"end\">\r\n                  ${{region[1]}} psf\r\n                </ion-text>\r\n              </ion-item>\r\n            </ion-item-group>\r\n\r\n          </ion-list>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>Most Expensive Locations\r\n              <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"avgLocInfoClick()\">\r\n                <ion-icon slot=\"icon-only\" name=\"information-circle\"></ion-icon>\r\n              </ion-button>\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-item *ngFor=\"let region of avg_dataArr\">\r\n              <ion-text slot=\"start\">\r\n                {{region[0]}}\r\n              </ion-text>\r\n              <ion-text slot=\"end\">\r\n                ${{region[1]}} psf\r\n              </ion-text>\r\n            </ion-item>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>Most Expensive Property Types\r\n              <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"avgTypeInfoClick()\">\r\n                <ion-icon slot=\"icon-only\" name=\"information-circle\"></ion-icon>\r\n              </ion-button>\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-item *ngFor=\"let type of avgT_dataArr\">\r\n              <ion-text slot=\"start\">\r\n                {{type[0]}}\r\n              </ion-text>\r\n              <ion-text slot=\"end\">\r\n                ${{type[1]}} psf\r\n              </ion-text>\r\n            </ion-item>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/stats/stats-data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/stats/stats-data.service.ts ***!
  \***************************************************/
/*! exports provided: StatsDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsDataService", function() { return StatsDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatsDataService = /** @class */ (function () {
    function StatsDataService(http) {
        this.http = http;
        this.count_URL = 'assets/stats/count_by_district.csv';
        this.countT_URL = 'assets/stats/count_by_type.csv';
        this.avg_URL = 'assets/stats/avg_by_district.csv';
        this.avgT_URL = 'assets/stats/avg_by_type.csv';
        this.max_URL = 'assets/stats/max_by_district.csv';
        this.maxT_URL = 'assets/stats/max_by_type.csv';
        this.price_psf_URL = 'assets/stats/price_psf_graph.json';
        this.central_URL = 'assets/stats/Central_Region.json';
        this.east_URL = 'assets/stats/East_Region.json';
        this.ne_URL = 'assets/stats/North_East_Region.json';
        this.north_URL = 'assets/stats/North_Region.json';
        this.west_URL = 'assets/stats/West_Region.json';
        this.volume_URL = 'assets/stats/volume_graph.json';
        this.mean_pred_URL = 'assets/stats/price_pred.json';
        this.central_pred_URL = 'assets/stats/Central_Region_Pred.json';
        this.east_pred_URL = 'assets/stats/East_Region_Pred.json';
        this.ne_pred_URL = 'assets/stats/North_East_Region_Pred.json';
        this.north_pred_URL = 'assets/stats/North_Region_Pred.json';
        this.west_pred_URL = 'assets/stats/West_Region_Pred.json';
    }
    StatsDataService.prototype.getPricepsfData = function () {
        return this.http.get(this.price_psf_URL);
    };
    StatsDataService.prototype.getMeanPredData = function () {
        return this.http.get(this.mean_pred_URL);
    };
    StatsDataService.prototype.getCentralData = function () {
        return this.http.get(this.central_URL);
    };
    StatsDataService.prototype.getEastData = function () {
        return this.http.get(this.east_URL);
    };
    StatsDataService.prototype.getNEData = function () {
        return this.http.get(this.ne_URL);
    };
    StatsDataService.prototype.getNorthData = function () {
        return this.http.get(this.north_URL);
    };
    StatsDataService.prototype.getWestData = function () {
        return this.http.get(this.west_URL);
    };
    StatsDataService.prototype.getCentralPredData = function () {
        return this.http.get(this.central_pred_URL);
    };
    StatsDataService.prototype.getEastPredData = function () {
        return this.http.get(this.east_pred_URL);
    };
    StatsDataService.prototype.getNEPredData = function () {
        return this.http.get(this.ne_pred_URL);
    };
    StatsDataService.prototype.getNorthPredData = function () {
        return this.http.get(this.north_pred_URL);
    };
    StatsDataService.prototype.getWestPredData = function () {
        return this.http.get(this.west_pred_URL);
    };
    StatsDataService.prototype.getVolumeData = function () {
        return this.http.get(this.volume_URL);
    };
    StatsDataService.prototype.getCountData = function () {
        return this.http.get(this.count_URL, { responseType: 'text' });
    };
    StatsDataService.prototype.getCountTypeData = function () {
        return this.http.get(this.countT_URL, { responseType: 'text' });
    };
    StatsDataService.prototype.getAvgData = function () {
        return this.http.get(this.avg_URL, { responseType: 'text' });
    };
    StatsDataService.prototype.getAvgTypeData = function () {
        return this.http.get(this.avgT_URL, { responseType: 'text' });
    };
    StatsDataService.prototype.getMaxData = function () {
        return this.http.get(this.max_URL, { responseType: 'text' });
    };
    StatsDataService.prototype.getMaxTypeData = function () {
        return this.http.get(this.maxT_URL, { responseType: 'text' });
    };
    StatsDataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    StatsDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StatsDataService);
    return StatsDataService;
}());



/***/ }),

/***/ "./src/app/pages/stats/stats-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/stats/stats-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: StatsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsPageRoutingModule", function() { return StatsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _stats_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stats.page */ "./src/app/pages/stats/stats.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _stats_page__WEBPACK_IMPORTED_MODULE_2__["StatsPage"]
    }
];
var StatsPageRoutingModule = /** @class */ (function () {
    function StatsPageRoutingModule() {
    }
    StatsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], StatsPageRoutingModule);
    return StatsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/stats/stats.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/stats/stats.module.ts ***!
  \*********************************************/
/*! exports provided: StatsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsPageModule", function() { return StatsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _stats_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stats-routing.module */ "./src/app/pages/stats/stats-routing.module.ts");
/* harmony import */ var _stats_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stats.page */ "./src/app/pages/stats/stats.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var StatsPageModule = /** @class */ (function () {
    function StatsPageModule() {
    }
    StatsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _stats_routing_module__WEBPACK_IMPORTED_MODULE_4__["StatsPageRoutingModule"]
            ],
            declarations: [_stats_page__WEBPACK_IMPORTED_MODULE_5__["StatsPage"]]
        })
    ], StatsPageModule);
    return StatsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/stats/stats.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/stats/stats.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXRzL3N0YXRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/stats/stats.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/stats/stats.page.ts ***!
  \*******************************************/
/*! exports provided: StatsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsPage", function() { return StatsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _stats_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stats-data.service */ "./src/app/pages/stats/stats-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
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



var StatsPage = /** @class */ (function () {
    function StatsPage(dataService, alertController) {
        this.dataService = dataService;
        this.alertController = alertController;
        this.numLocHidden = false;
        this.numTypeHidden = false;
        this.expLocHidden = false;
        this.expTypeHidden = false;
        this.filterSelectedItems = ["All Units"];
        this.filterListItems = ["All Units", "Central Region", "North Region", "West Region"];
        this.plot_id = 'price-trends-graph';
    }
    StatsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getCountData().subscribe(function (data) { _this.count_data = data; });
        this.dataService.getCountTypeData().subscribe(function (data) { _this.countT_data = data; });
        this.dataService.getAvgData().subscribe(function (data) { _this.avg_data = data; });
        this.dataService.getAvgTypeData().subscribe(function (data) { _this.avgT_data = data; });
        this.dataService.getMaxData().subscribe(function (data) { _this.max_data = data; });
        this.dataService.getMaxTypeData().subscribe(function (data) { _this.maxT_data = data; });
        this.dataService.getPricepsfData().subscribe(function (data) {
            _this.pricepsfData = data;
        });
        this.dataService.getMeanPredData().subscribe(function (data) {
            _this.meanPredData = data;
        });
        this.dataService.getCentralData().subscribe(function (data) {
            _this.centralData = data;
        });
        this.dataService.getEastData().subscribe(function (data) {
            _this.eastData = data;
        });
        this.dataService.getNEData().subscribe(function (data) {
            _this.neData = data;
        });
        this.dataService.getNorthData().subscribe(function (data) {
            _this.northData = data;
        });
        this.dataService.getWestData().subscribe(function (data) {
            _this.westData = data;
        });
        this.dataService.getCentralPredData().subscribe(function (data) {
            _this.centralPredData = data;
        });
        this.dataService.getEastPredData().subscribe(function (data) {
            _this.eastPredData = data;
        });
        this.dataService.getNEPredData().subscribe(function (data) {
            _this.nePredData = data;
        });
        this.dataService.getNorthPredData().subscribe(function (data) {
            _this.northPredData = data;
        });
        this.dataService.getWestPredData().subscribe(function (data) {
            _this.westPredData = data;
        });
        this.dataService.getVolumeData().subscribe(function (data) {
            _this.volumeData = data;
        });
        this.width = window.innerWidth;
    };
    StatsPage.prototype.handleChange = function (e) {
        var translate = { "vol": [this.volumeData],
            "all": [this.pricepsfData, this.meanPredData],
            "central": [this.centralData, this.centralPredData],
            "north": [this.northData, this.northPredData],
            "east": [this.eastData, this.eastPredData],
            "ne": [this.neData, this.nePredData],
            "west": [this.westData, this.westPredData] };
        var filter = e.detail.value;
        this.data = [];
        for (var i = 0; i < filter.length; i++) {
            if (filter[i] == "vol") {
                this.data.push(translate[filter[i]][0]);
            }
            else {
                this.data.push(translate[filter[i]][0]);
                this.data.push(translate[filter[i]][1]);
            }
        }
        Plotly.newPlot(this.plot_id, this.data, this.layout, this.configs);
    };
    StatsPage.prototype.ionViewWillEnter = function () {
        this.pricepsfData["name"] = "Price psf";
        this.meanPredData["name"] = "Predicted Price psf";
        this.centralData["name"] = "Central Region Price psf";
        this.northData["name"] = "North Region Price psf";
        this.eastData["name"] = "East Region Price psf";
        this.neData["name"] = "North-East Region Price psf";
        this.westData["name"] = "West Region Price psf";
        this.centralPredData["name"] = "Predicted Central Region Price psf";
        this.northPredData["name"] = "Predicted North Region Price psf";
        this.eastPredData["name"] = "Predicted East Region Price psf";
        this.nePredData["name"] = "Predicted North-East Region Price psf";
        this.westPredData["name"] = "Predicted West Region Price psf";
        this.volumeData["name"] = "Volume";
        this.data = [this.pricepsfData, this.volumeData, this.meanPredData];
        this.layout = {
            showlegend: false,
            dragmode: 'pan',
            margin: { l: 30, r: 15, t: 10, b: 20 },
            width: this.width
        };
        this.configs = {
            scrollZoom: false,
            responsive: true,
            displaylogo: false,
            modeBarButtonsToRemove: ['select2d', 'lasso2d', 'zoom2d', 'resetScale2d']
        };
        Plotly.newPlot(this.plot_id, this.data, this.layout, this.configs);
        this.count_dataArr = this.count_data.split("\r\n").slice(1, 6);
        for (var i = 0; i < 5; i++) {
            this.count_dataArr[i] = this.count_dataArr[i].split(",");
        }
        this.count_dataArr = this.count_dataArr.sort(this.sort2Darray);
        this.countT_dataArr = this.countT_data.split("\r\n").slice(1, 17);
        for (var i = 0; i < 16; i++) {
            this.countT_dataArr[i] = this.countT_dataArr[i].split(",");
        }
        this.countT_dataArr = this.countT_dataArr.sort(this.sort2Darray);
        this.avg_dataArr = this.avg_data.split("\r\n").slice(1, 6);
        for (var i = 0; i < 5; i++) {
            this.avg_dataArr[i] = this.avg_dataArr[i].split(",");
            this.avg_dataArr[i][1] = this.avg_dataArr[i][1].slice(0, this.avg_dataArr[i][1].indexOf("."));
        }
        this.avg_dataArr = this.avg_dataArr.sort(this.sort2Darray);
        this.avgT_dataArr = this.avgT_data.split("\r\n").slice(1, 17);
        for (var i = 0; i < 16; i++) {
            this.avgT_dataArr[i] = this.avgT_dataArr[i].split(",");
            this.avgT_dataArr[i][1] = this.avgT_dataArr[i][1].slice(0, this.avgT_dataArr[i][1].indexOf("."));
        }
        this.avgT_dataArr = this.avgT_dataArr.sort(this.sort2Darray);
        this.max_dataArr = this.max_data.split("\r\n").slice(1, 6);
        for (var i = 0; i < 5; i++) {
            this.max_dataArr[i] = this.max_dataArr[i].split(",");
            this.max_dataArr[i][1] = this.max_dataArr[i][1].slice(0, this.max_dataArr[i][1].indexOf("."));
        }
        this.max_dataArr = this.max_dataArr.sort(this.sort2Darray);
        this.maxT_dataArr = this.maxT_data.split("\r\n").slice(1, 17);
        for (var i = 0; i < 16; i++) {
            this.maxT_dataArr[i] = this.maxT_dataArr[i].split(",");
            this.maxT_dataArr[i][1] = this.maxT_dataArr[i][1].slice(0, this.maxT_dataArr[i][1].indexOf("."));
        }
        this.maxT_dataArr = this.maxT_dataArr.sort(this.sort2Darray);
    };
    StatsPage.prototype.countInfoClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("count info button clicked");
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Most Number of Units Sold',
                                subHeader: 'How is this calculated?',
                                message: 'All transactions over the last 6 months are grouped by their region/type, and the number of transactions for each region/type is totaled.',
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
    StatsPage.prototype.trendsInfoClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("trends info button clicked");
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Price and Volume Trends',
                                subHeader: 'How is this calculated?',
                                message: 'All transactions are averaged by month, then the average price per square feet and volume of transactions each month are presented. \n\n Predictions are calculated using deep learning artificial intelligence.',
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
    StatsPage.prototype.maxInfoClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("max info button clicked");
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Most Expensive Units',
                                subHeader: 'How is this calculated?',
                                message: 'All transactions over the last 6 months are grouped by their region/type, and the most expensive transaction by price per square feet is presented.',
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
    StatsPage.prototype.avgLocInfoClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("avgLocInfoClick");
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Most Expensive Locations',
                                subHeader: 'How is this calculated?',
                                message: 'All transactions over the last 6 months are grouped by their region, and the mean for each region presented.',
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
    StatsPage.prototype.avgTypeInfoClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("avgLocInfoClick");
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Most Expensive Property Types',
                                subHeader: 'How is this calculated?',
                                message: 'All transactions over the last 6 months are grouped by their type, and the mean for each type presented.',
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
    StatsPage.prototype.sort2Darray = function (a, b) {
        var a1 = Number(a[1]);
        var b1 = Number(b[1]);
        return b1 - a1;
    };
    StatsPage.prototype.numLocButton = function () {
        this.numLocHidden = !this.numLocHidden;
    };
    StatsPage.prototype.numTypeButton = function () {
        this.numTypeHidden = !this.numTypeHidden;
    };
    StatsPage.prototype.expLocButton = function () {
        this.expLocHidden = !this.expLocHidden;
    };
    StatsPage.prototype.expTypeButton = function () {
        this.expTypeHidden = !this.expTypeHidden;
    };
    StatsPage.ctorParameters = function () { return [
        { type: _stats_data_service__WEBPACK_IMPORTED_MODULE_1__["StatsDataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    StatsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stats',
            template: __importDefault(__webpack_require__(/*! raw-loader!./stats.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stats/stats.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./stats.page.scss */ "./src/app/pages/stats/stats.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_stats_data_service__WEBPACK_IMPORTED_MODULE_1__["StatsDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], StatsPage);
    return StatsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-stats-stats-module.js.map