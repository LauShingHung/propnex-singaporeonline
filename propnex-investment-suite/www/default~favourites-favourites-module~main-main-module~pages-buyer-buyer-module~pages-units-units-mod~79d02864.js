(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~favourites-favourites-module~main-main-module~pages-buyer-buyer-module~pages-units-units-mod~79d02864"],{

/***/ "./src/app/services/place.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/place.service.ts ***!
  \*******************************************/
/*! exports provided: PlaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceService", function() { return PlaceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/auth/firebase.model */ "./src/app/pages/auth/firebase.model.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};





var PlaceService = /** @class */ (function () {
    function PlaceService(http) {
        this.http = http;
        this._fbPostals = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._fbRecs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    Object.defineProperty(PlaceService.prototype, "fbPostals", {
        get: function () {
            return this._fbPostals.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaceService.prototype, "fbRecs", {
        get: function () {
            return this._fbRecs.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaceService.prototype, "currPlace", {
        get: function () {
            return this._currPlace;
        },
        set: function (currPlace) {
            this._currPlace = currPlace;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaceService.prototype, "currUnit", {
        get: function () {
            return this._currUnit;
        },
        set: function (currUnit) {
            this._currUnit = currUnit;
        },
        enumerable: true,
        configurable: true
    });
    // fetch place data
    PlaceService.prototype.fetchFBPostals = function () {
        var _this = this;
        return this.http
            .get("http://localhost:8100/assets/postalsAndUnits.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resData) {
            var postals = [];
            for (var key in resData) {
                if (resData.hasOwnProperty(key)) {
<<<<<<< Updated upstream:propnex-investment-suite/www/default~favourites-favourites-module~main-main-module~pages-units-units-module~recommendations-recom~65a86ca3.js
                    postals.push(new _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbPostal"](resData[key].name, resData[key].postal, resData[key].imageUrl, resData[key].units));
=======
                    postals.push(new _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbPostal"](resData[key].name, resData[key].postal, resData[key].landArea, resData[key].grossFloorArea, resData[key].tenure, resData[key].numRooms, resData[key].numStorey, resData[key].askingPrice, resData[key].priceRoom, resData[key].GFA, resData[key].roomRate, resData[key].netOperatingProfit, resData[key].approvedUsage, resData[key].locationMRT, resData[key].locationSch, resData[key].district, resData[key].imageUrl, resData[key].units));
>>>>>>> Stashed changes:propnex-investment-suite/www/default~favourites-favourites-module~main-main-module~pages-buyer-buyer-module~pages-units-units-mod~79d02864.js
                }
            }
            return postals;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (postals) {
            _this._fbPostals.next(postals);
        }));
    };
    // fetch recommendation data
    PlaceService.prototype.fetchFBRecs = function () {
        var _this = this;
        return this.http
            .get("http://localhost:8100/assets/postalsAndUnits.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resData) {
            var places = [];
            for (var key in resData) {
                if (resData.hasOwnProperty(key)) {
                    places.push(new _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbRec"](resData[key].place, resData[key].rec1, resData[key].rec2, resData[key].rec3));
                }
            }
            return places;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (places) {
            _this._fbRecs.next(places);
        }));
    };
    // add new place
<<<<<<< Updated upstream:propnex-investment-suite/www/default~favourites-favourites-module~main-main-module~pages-units-units-module~recommendations-recom~65a86ca3.js
    PlaceService.prototype.addBlock = function (name, postal) {
        var _this = this;
        var newBlock = new _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbPostal"](name, postal, "assets/placeholders/property.jpeg");
=======
    PlaceService.prototype.addBlock = function (name, postal, landArea, grossFloorArea, tenure, numRooms, numStorey, askingPrice, priceRoom, GFA, roomRate, netOperatingProfit, approvedUsage, district, LocationMRT, LocationSch) {
        var _this = this;
        var newBlock = new _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbPostal"](name, postal, landArea, grossFloorArea, tenure, numRooms, numStorey, askingPrice, priceRoom, GFA, roomRate, netOperatingProfit, approvedUsage, district, LocationMRT, LocationSch);
>>>>>>> Stashed changes:propnex-investment-suite/www/default~favourites-favourites-module~main-main-module~pages-buyer-buyer-module~pages-units-units-mod~79d02864.js
        return this.http
            .post('http://localhost:8100/assets/postalsAndUnits.json', __assign({}, newBlock))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (resData) {
            return _this.fbPostals;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (fbUsers) {
            _this._fbPostals.next(fbUsers.concat(newBlock));
        }));
    };
    // edit existing place
    PlaceService.prototype.editBlock = function (targetPostal, newName) {
        var _this = this;
        var updatedUsers;
        return this.fbPostals.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (users) {
            if (!users || users.length <= 0) {
                return _this.fetchFBPostals();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(users);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (users) {
            var updatedUserIndex = users.findIndex(function (u) { return u.postal === targetPostal; });
            updatedUsers = __spreadArrays(users);
            var oldPlace = updatedUsers[updatedUserIndex];
<<<<<<< Updated upstream:propnex-investment-suite/www/default~favourites-favourites-module~main-main-module~pages-units-units-module~recommendations-recom~65a86ca3.js
            updatedUsers[updatedUserIndex] = new _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbPostal"](newName, oldPlace.postal, oldPlace.imageUrl);
=======
            updatedUsers[updatedUserIndex] = new _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbPostal"](newName, oldPlace.postal, oldPlace.landArea, oldPlace.grossFloorArea, oldPlace.tenure, oldPlace.numRooms, oldPlace.numStorey, oldPlace.askingPrice, oldPlace.priceRoom, oldPlace.GFA, oldPlace.roomRate, oldPlace.netOperatingProfit, oldPlace.approvedUsage, oldPlace.district, oldPlace.locationMRT, oldPlace.locationSch, oldPlace.imageUrl);
>>>>>>> Stashed changes:propnex-investment-suite/www/default~favourites-favourites-module~main-main-module~pages-buyer-buyer-module~pages-units-units-mod~79d02864.js
            _this.currPlace = updatedUsers[updatedUserIndex];
            return _this.http.put("http://localhost:8100/assets/postalsAndUnits/" + updatedUserIndex + ".json", __assign({}, updatedUsers[updatedUserIndex]));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this._fbPostals.next(updatedUsers);
        }));
    };
    // add new unit to existing place
    PlaceService.prototype.addUnit = function (targetPostal, unitNumber, bedrooms, size) {
        var _this = this;
        var updatedPlaces;
        return this.fbPostals.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (places) {
            if (!places || places.length <= 0) {
                return _this.fetchFBPostals();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(places);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (places) {
            var updatedPlaceIndex = places.findIndex(function (p) { return p.postal === targetPostal; });
            updatedPlaces = __spreadArrays(places);
            var oldPlace = updatedPlaces[updatedPlaceIndex];
            var newUnit = new _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbUnit"](bedrooms, "assets/placeholders/floorplan.png", size, unitNumber);
            var newUnitsArr = oldPlace.units || [];
            newUnitsArr = newUnitsArr.concat(newUnit);
<<<<<<< Updated upstream:propnex-investment-suite/www/default~favourites-favourites-module~main-main-module~pages-units-units-module~recommendations-recom~65a86ca3.js
            updatedPlaces[updatedPlaceIndex] = new _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbPostal"](oldPlace.name, oldPlace.postal, oldPlace.imageUrl, newUnitsArr);
=======
            updatedPlaces[updatedPlaceIndex] = new _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbPostal"](oldPlace.name, oldPlace.postal, oldPlace.landArea, oldPlace.grossFloorArea, oldPlace.tenure, oldPlace.numRooms, oldPlace.numStorey, oldPlace.askingPrice, oldPlace.priceRoom, oldPlace.GFA, oldPlace.roomRate, oldPlace.netOperatingProfit, oldPlace.approvedUsage, oldPlace.district, oldPlace.locationMRT, oldPlace.locationSch, oldPlace.imageUrl, newUnitsArr);
>>>>>>> Stashed changes:propnex-investment-suite/www/default~favourites-favourites-module~main-main-module~pages-buyer-buyer-module~pages-units-units-mod~79d02864.js
            _this.currPlace = updatedPlaces[updatedPlaceIndex];
            _this.currUnit = newUnit;
            return _this.http.put("http://localhost:8100/assets/postalsAndUnits/" + updatedPlaceIndex + ".json", __assign({}, updatedPlaces[updatedPlaceIndex]));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this._fbPostals.next(updatedPlaces);
        }));
    };
    // edit existing unit in existing place
    PlaceService.prototype.editUnit = function (targetPostal, targetUnitNum, newUnit) {
        var _this = this;
        var updatedUsers;
        return this.fbPostals.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (users) {
            if (!users || users.length <= 0) {
                return _this.fetchFBPostals();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(users);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (users) {
            var updatedUserIndex = users.findIndex(function (u) { return u.postal === targetPostal; });
            updatedUsers = __spreadArrays(users);
            var oldPlace = updatedUsers[updatedUserIndex];
            var oldUnitIndex = oldPlace.units.findIndex(function (u) { return u.unitNumber === targetUnitNum; });
            oldPlace.units[oldUnitIndex] = newUnit;
            var newFavArr = oldPlace.units;
<<<<<<< Updated upstream:propnex-investment-suite/www/default~favourites-favourites-module~main-main-module~pages-units-units-module~recommendations-recom~65a86ca3.js
            updatedUsers[updatedUserIndex] = new _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbPostal"](oldPlace.name, oldPlace.postal, oldPlace.imageUrl, newFavArr);
=======
            updatedUsers[updatedUserIndex] = new _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbPostal"](oldPlace.name, oldPlace.postal, oldPlace.landArea, oldPlace.grossFloorArea, oldPlace.tenure, oldPlace.numRooms, oldPlace.numStorey, oldPlace.askingPrice, oldPlace.priceRoom, oldPlace.GFA, oldPlace.roomRate, oldPlace.netOperatingProfit, oldPlace.approvedUsage, oldPlace.district, oldPlace.locationMRT, oldPlace.locationSch, oldPlace.imageUrl, newFavArr);
>>>>>>> Stashed changes:propnex-investment-suite/www/default~favourites-favourites-module~main-main-module~pages-buyer-buyer-module~pages-units-units-mod~79d02864.js
            _this.currPlace = updatedUsers[updatedUserIndex];
            _this.currUnit = newUnit;
            return _this.http.put("http://localhost:8100/assets/postalsAndUnits/" + updatedUserIndex + ".json", __assign({}, updatedUsers[updatedUserIndex]));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this._fbPostals.next(updatedUsers);
        }));
    };
    // edit all existing units with same unit number in existing place
    PlaceService.prototype.editAllUnit = function (targetPostal, targetUnitNum, newBedrooms, newSize) {
        var _this = this;
        var updatedUsers;
        return this.fbPostals.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (users) {
            if (!users || users.length <= 0) {
                return _this.fetchFBPostals();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(users);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (users) {
            var updatedUserIndex = users.findIndex(function (u) { return u.postal === targetPostal; });
            updatedUsers = __spreadArrays(users);
            var oldPlace = updatedUsers[updatedUserIndex];
            var targetString = '-' + targetUnitNum.split('-')[1];
            var unitArr = oldPlace.units.filter(function (u) { return u.unitNumber.includes(targetString); });
            unitArr.forEach(function (u) {
                u.bedrooms = newBedrooms;
                u.size = newSize;
            });
            var _loop_1 = function (i) {
                var currUnitNum = unitArr[i].unitNumber;
                var currIndex = oldPlace.units.findIndex(function (u) { return u.unitNumber === currUnitNum; });
                oldPlace.units[currIndex] = unitArr[i];
            };
            for (var i = 0; i < unitArr.length; i++) {
                _loop_1(i);
            }
            var oldUnitIndex = oldPlace.units.findIndex(function (u) { return u.unitNumber === targetUnitNum; });
<<<<<<< Updated upstream:propnex-investment-suite/www/default~favourites-favourites-module~main-main-module~pages-units-units-module~recommendations-recom~65a86ca3.js
            updatedUsers[updatedUserIndex] = new _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbPostal"](oldPlace.name, oldPlace.postal, oldPlace.imageUrl, oldPlace.units);
=======
            updatedUsers[updatedUserIndex] = new _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbPostal"](oldPlace.name, oldPlace.postal, oldPlace.landArea, oldPlace.grossFloorArea, oldPlace.tenure, oldPlace.numRooms, oldPlace.numStorey, oldPlace.askingPrice, oldPlace.priceRoom, oldPlace.GFA, oldPlace.roomRate, oldPlace.netOperatingProfit, oldPlace.approvedUsage, oldPlace.locationMRT, oldPlace.locationSch, oldPlace.district, oldPlace.imageUrl, oldPlace.units);
>>>>>>> Stashed changes:propnex-investment-suite/www/default~favourites-favourites-module~main-main-module~pages-buyer-buyer-module~pages-units-units-mod~79d02864.js
            _this.currPlace = updatedUsers[updatedUserIndex];
            _this.currUnit = oldPlace.units[oldUnitIndex];
            return _this.http.put("http://localhost:8100/assets/postalsAndUnits/" + updatedUserIndex + ".json", __assign({}, updatedUsers[updatedUserIndex]));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this._fbPostals.next(updatedUsers);
        }));
    };
    PlaceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    PlaceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], PlaceService);
    return PlaceService;
}());



/***/ })

}]);
//# sourceMappingURL=default~favourites-favourites-module~main-main-module~pages-buyer-buyer-module~pages-units-units-mod~79d02864.js.map