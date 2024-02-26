import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { fbPostal, fbRec, fbUnit, fbER } from '../pages/auth/firebase.model';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PlaceService {

  private _fbPostals = new BehaviorSubject<fbPostal[]>([]);
  private _fbERs = new BehaviorSubject<fbER[]>([]);
  private _fbRecs = new BehaviorSubject<fbRec[]>([]);
  private _currPlace: fbPostal;
  private _currUnit: fbUnit;


  get fbPostals() {
    return this._fbPostals.asObservable();
  }

  get fbERs() {
    return this._fbERs.asObservable();
  }

  get fbRecs() {
    return this._fbRecs.asObservable();
  }

  get currPlace() {
    return this._currPlace;
  }

  get currUnit() {
    return this._currUnit;
  }

  set currPlace(currPlace: fbPostal) {
    this._currPlace = currPlace;
  }

  set currUnit(currUnit: fbUnit) {
    this._currUnit = currUnit;
  }


  constructor(
    private http: HttpClient
  ) { }

  checkPostalCodeExists(postal: string): Observable<boolean> {
    return this.fbPostals.pipe(
      take(1),
      map(postals => postals.some(place => place.postal === postal))
    );
  }


  // fetch place data
  fetchFBPostals() {
    return this.http
      .get(
        `https://propnexpostals-37c08-default-rtdb.asia-southeast1.firebasedatabase.app/.json`
      )
      .pipe(
        map(resData => {
          const postals: fbPostal[] = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              postals.push(
                new fbPostal(
                  resData[key].name, 
                  resData[key].address, 
                  resData[key].postal,
                  resData[key].landArea,
                  resData[key].grossFloorArea,
                  resData[key].tenure,
                  resData[key].numRooms,
                  resData[key].numStorey,
                  resData[key].askingPrice,
                  resData[key].priceRoom,
                  resData[key].GFA,
                  resData[key].roomRate,
                  resData[key].netOperatingProfit,
                  resData[key].approvedUsage,
                  resData[key].region,
                  resData[key].locationMRT,
                  resData[key].locationSch,
                  resData[key].district,
                  resData[key].imageUrl,
                  resData[key].units
                )
              );
            }
          }
          return postals;
        }),
        tap(postals => {
          this._fbPostals.next(postals);
        })
      );
  }

  fetchFBERs() {
    return this.http
      .get(
        `https://entityresolution-d68cb-default-rtdb.asia-southeast1.firebasedatabase.app/.json`
      )
      .pipe(
        map(resData => {
          const postals: fbER[] = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              postals.push(
                new fbER(
                  resData[key].name, 
                  resData[key].address, 
                  resData[key].postal,
                  resData[key].landArea,
                  resData[key].grossFloorArea,
                  resData[key].tenure,
                  resData[key].numRooms,
                  resData[key].numStorey,
                  resData[key].askingPrice,
                  resData[key].priceRoom,
                  resData[key].GFA,
                  resData[key].roomRate,
                  resData[key].netOperatingProfit,
                  resData[key].approvedUsage,
                  resData[key].region,
                  resData[key].locationMRT,
                  resData[key].locationSch,
                  resData[key].district,
                  resData[key].number,
                  resData[key].imageUrl,
                  resData[key].units
                )
              );
            }
          }
          return postals;
        }),
        tap(postals => {
          this._fbERs.next(postals);
        })
      );
  }

    // fetch place data
    

  fetchPlaceDetail(postalId: string) {
    return this.fbPostals.pipe(
      take(1),
      map(postals => {
        const foundPostal = postals.find(p => p.postal === postalId);
        if (!foundPostal) {
          throw new Error(`Postal with ID ${postalId} not found`);
        }
        return foundPostal;
      }),
      tap(currPlace => {
        this._currPlace = currPlace; // Set the current place
      }),
    );
  }

  // fetch recommendation data
  fetchFBRecs() {
    return this.http
      .get(
        `https://propnexpostals-37c08-default-rtdb.asia-southeast1.firebasedatabase.app/.json`
      )
      .pipe(
        map(resData => {
          const places: fbRec[] = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              places.push(
                new fbRec(
                  resData[key].place, 
                  resData[key].rec1, 
                  resData[key].rec2,
                  resData[key].rec3
                )
              );
            }
          }
          return places;
        }),
        tap(places => {
          this._fbRecs.next(places);
        })
      );
  }

  // add new place
  addBlock(name: string, address: string, postal: string, landArea: Float32Array, grossFloorArea: Float32Array, tenure: string, numRooms: number, numStorey: Int16Array, askingPrice: number, priceRoom: Float32Array, GFA: string, roomRate: Float32Array, netOperatingProfit: Float32Array, approvedUsage: string, region: string, LocationMRT: string, LocationSch: string, district: string) {
    const newBlock = new fbPostal(
      name,
      address,
      postal,
      landArea,
      grossFloorArea,
      tenure,
      numRooms,
      numStorey,
      askingPrice,
      priceRoom,
      GFA,
      roomRate,
      netOperatingProfit,
      approvedUsage,
      region,
      LocationMRT,
      LocationSch,
      district
    );
    return this.http
      .post('https://propnexpostals-37c08-default-rtdb.asia-southeast1.firebasedatabase.app/.json',
      { ...newBlock })
      .pipe(
        switchMap(resData => {
          return this.fbPostals;
        }),
        take(1),
        tap(fbUsers => {
          this._fbPostals.next(fbUsers.concat(newBlock));
        })
      );
  }

  addER(name: string, address: string, postal: string, landArea: Float32Array, grossFloorArea: Float32Array, tenure: string, numRooms: number, numStorey: Int16Array, askingPrice: number, priceRoom: Float32Array, GFA: string, roomRate: Float32Array, netOperatingProfit: Float32Array, approvedUsage: string, region: string, LocationMRT: string, LocationSch: string, district: string, number: string) {
    const newER = new fbER(
      name,
      address,
      postal,
      landArea,
      grossFloorArea,
      tenure,
      numRooms,
      numStorey,
      askingPrice,
      priceRoom,
      GFA,
      roomRate,
      netOperatingProfit,
      approvedUsage,
      region,
      LocationMRT,
      LocationSch,
      district,
      number
    );
    return this.http
      .post('https://entityresolution-d68cb-default-rtdb.asia-southeast1.firebasedatabase.app/.json',
      { ...newER })
      .pipe(
        switchMap(resData => {
          return this.fbERs;
        }),
        take(1),
        tap(fbUsers => {
          this._fbERs.next(fbUsers.concat(newER));
        })
      );
  }



removeBlock(postal: string): Observable<any> {
  // Make a GET request to fetch all listings from the database
  return this.http
    .get('https://propnexpostals-37c08-default-rtdb.asia-southeast1.firebasedatabase.app/.json')
    .pipe(
      switchMap((listings: any) => {
        const listingKeys = Object.keys(listings);
        // Filter the listings to find those with the specified postal code
        const listingsToDeleteKeys = listingKeys.filter((key: string) => listings[key]?.postal === postal);
        // Delete each listing with the specified postal code
        const deleteRequests = listingsToDeleteKeys.map((key: string) => {
          const url = `https://propnexpostals-37c08-default-rtdb.asia-southeast1.firebasedatabase.app/${key}.json`;
          return this.http.delete(url);
        });
        // Combine all delete requests into a single observable
        return forkJoin(deleteRequests);
      }),
      switchMap(() => {
        // Once listings are successfully deleted, fetch the updated list of listings
        return this.http.get('https://propnexpostals-37c08-default-rtdb.asia-southeast1.firebasedatabase.app/.json');
      }),
      take(1),
      tap((updatedListings: any) => {
        // Update the local list of listings after deletion
        this._fbPostals.next(updatedListings); // Assuming updatedListings is an array of objects
      })
    );
}

removeER(postal: string): Observable<any> {
  // Make a GET request to fetch all listings from the EntityResolution database
  return this.http
    .get('https://entityresolution-d68cb-default-rtdb.asia-southeast1.firebasedatabase.app/.json')
    .pipe(
      switchMap((listings: any) => {
        const listingKeys = Object.keys(listings);
        // Filter the listings to find those with the specified postal code
        const listingsToDeleteKeys = listingKeys.filter((key: string) => listings[key]?.postal === postal);
        // Delete each listing with the specified postal code
        const deleteRequests = listingsToDeleteKeys.map((key: string) => {
          const url = `https://entityresolution-d68cb-default-rtdb.asia-southeast1.firebasedatabase.app/${key}.json`;
          return this.http.delete(url);
        });
        // Combine all delete requests into a single observable
        return forkJoin(deleteRequests);
      }),
      switchMap(() => {
        // Once listings are successfully deleted, fetch the updated list of listings
        return this.http.get('https://entityresolution-d68cb-default-rtdb.asia-southeast1.firebasedatabase.app/.json');
      }),
      take(1),
      tap((updatedListings: any) => {
        // Update the local list of listings after deletion
        this._fbERs.next(updatedListings); // Assuming updatedListings is an array of objects
      })
    );
}



  // edit existing place
  editBlock(targetPostal: string, newName: string) {
    let updatedUsers: fbPostal[];
    return this.fbPostals.pipe(
      take(1),
      switchMap(users => {
        if (!users || users.length <= 0) {
          return this.fetchFBPostals();
        } else {
          return of(users);
        }
      }),
      switchMap(users => {
        const updatedUserIndex = users.findIndex(u => u.postal === targetPostal);
        updatedUsers = [...users];
        const oldPlace = updatedUsers[updatedUserIndex];
        updatedUsers[updatedUserIndex] = new fbPostal(
          newName,
          oldPlace.address,
          oldPlace.postal,
          oldPlace.landArea,
          oldPlace.grossFloorArea,
          oldPlace.tenure,
          oldPlace.numRooms,
          oldPlace.numStorey,
          oldPlace.askingPrice,
          oldPlace.priceRoom,
          oldPlace.GFA,
          oldPlace.roomRate,
          oldPlace.netOperatingProfit,
          oldPlace.approvedUsage,
          oldPlace.region,
          oldPlace.locationMRT,
          oldPlace.locationSch,
          oldPlace.imageUrl
        );
        this.currPlace = updatedUsers[updatedUserIndex];
        return this.http.put(
          `https://propnexpostals-37c08-default-rtdb.asia-southeast1.firebasedatabase.app/${updatedUserIndex}.json`,
          { ...updatedUsers[updatedUserIndex] }
        );
      }),
      tap(() => {
        this._fbPostals.next(updatedUsers);
      })
    );
  }

  // add new unit to existing place
  addUnit(targetPostal: string, unitNumber: string, bedrooms: string, size: string, UnitFacing: string) {
    let updatedPlaces: fbPostal[];
    return this.fbPostals.pipe(
      take(1),
      switchMap(places => {
        if (!places || places.length <= 0) {
          return this.fetchFBPostals();
        } else {
          return of(places);
        }
      }),
      switchMap(places => {
        const updatedPlaceIndex = places.findIndex(p => p.postal === targetPostal);
        updatedPlaces = [...places];
        const oldPlace = updatedPlaces[updatedPlaceIndex];
        const newUnit = new fbUnit(
          bedrooms,
          `assets/placeholders/floorplan.png`,
          size,
          unitNumber,
          UnitFacing
        );
        let newUnitsArr = oldPlace.units || [];
        newUnitsArr = newUnitsArr.concat(newUnit);
        
        updatedPlaces[updatedPlaceIndex] = new fbPostal(
          oldPlace.name,
          oldPlace.address,
          oldPlace.postal,
          oldPlace.landArea,
          oldPlace.grossFloorArea,
          oldPlace.tenure,
          oldPlace.numRooms,
          oldPlace.numStorey,
          oldPlace.askingPrice,
          oldPlace.priceRoom,
          oldPlace.GFA,
          oldPlace.roomRate,
          oldPlace.netOperatingProfit,
          oldPlace.approvedUsage,
          oldPlace.region,
          oldPlace.locationMRT,
          oldPlace.locationSch,
          oldPlace.district,
          oldPlace.imageUrl,
          newUnitsArr
        );
        this.currPlace = updatedPlaces[updatedPlaceIndex];
        this.currUnit = newUnit;
        return this.http.put(
          `https://propnexpostals-37c08-default-rtdb.asia-southeast1.firebasedatabase.app/${updatedPlaceIndex}.json`,
          { ...updatedPlaces[updatedPlaceIndex] }
        );
      }),
      tap(() => {
        this._fbPostals.next(updatedPlaces);
      })
    );
  }

  // edit existing unit in existing place
  editUnit(targetPostal: string, targetUnitNum: string, newUnit: fbUnit) {
    let updatedUsers: fbPostal[];
    return this.fbPostals.pipe(
      take(1),
      switchMap(users => {
        if (!users || users.length <= 0) {
          return this.fetchFBPostals();
        } else {
          return of(users);
        }
      }),
      switchMap(users => {
        const updatedUserIndex = users.findIndex(u => u.postal === targetPostal);
        updatedUsers = [...users];
        const oldPlace = updatedUsers[updatedUserIndex];
        const oldUnitIndex = oldPlace.units.findIndex(u => u.unitNumber === targetUnitNum);
        oldPlace.units[oldUnitIndex] = newUnit;
        let newFavArr = oldPlace.units;
        updatedUsers[updatedUserIndex] = new fbPostal(
          oldPlace.name,
          oldPlace.address,
          oldPlace.postal,
          oldPlace.landArea,
          oldPlace.grossFloorArea,
          oldPlace.tenure,
          oldPlace.numRooms,
          oldPlace.numStorey,
          oldPlace.askingPrice,
          oldPlace.priceRoom,
          oldPlace.GFA,
          oldPlace.roomRate,
          oldPlace.netOperatingProfit,
          oldPlace.approvedUsage,
          oldPlace.region,
          oldPlace.locationMRT,
          oldPlace.locationSch,
          oldPlace.district,
          oldPlace.imageUrl,
          newFavArr
        );
        this.currPlace = updatedUsers[updatedUserIndex];
        this.currUnit = newUnit;
        return this.http.put(
          `https://propnexpostals-37c08-default-rtdb.asia-southeast1.firebasedatabase.app/${updatedUserIndex}.json`,
          { ...updatedUsers[updatedUserIndex] }
        );
      }),
      tap(() => {
        this._fbPostals.next(updatedUsers);
      })
    );
  }

  // edit all existing units with same unit number in existing place
  editAllUnit(targetPostal: string, targetUnitNum: string, newBedrooms: string, newSize: string) {
    let updatedUsers: fbPostal[];
    return this.fbPostals.pipe(
      take(1),
      switchMap(users => {
        if (!users || users.length <= 0) {
          return this.fetchFBPostals();
        } else {
          return of(users);
        }
      }),
      switchMap(users => {
        const updatedUserIndex = users.findIndex(u => u.postal === targetPostal);
        updatedUsers = [...users];
        const oldPlace = updatedUsers[updatedUserIndex];

        let targetString = '-' + targetUnitNum.split('-')[1];
        let unitArr = oldPlace.units.filter(u => u.unitNumber.includes(targetString));

        unitArr.forEach(u => {
          u.bedrooms = newBedrooms;
          u.size = newSize;
        });

        for (let i = 0; i < unitArr.length; i++) {
          let currUnitNum = unitArr[i].unitNumber;
          let currIndex = oldPlace.units.findIndex(u => u.unitNumber === currUnitNum);
          oldPlace.units[currIndex] = unitArr[i];
        }
        
        const oldUnitIndex = oldPlace.units.findIndex(u => u.unitNumber === targetUnitNum);

        updatedUsers[updatedUserIndex] = new fbPostal(
          oldPlace.name,
          oldPlace.address,
          oldPlace.postal,
          oldPlace.landArea,
          oldPlace.grossFloorArea,
          oldPlace.tenure,
          oldPlace.numRooms,
          oldPlace.numStorey,
          oldPlace.askingPrice,
          oldPlace.priceRoom,
          oldPlace.GFA,
          oldPlace.roomRate,
          oldPlace.netOperatingProfit,
          oldPlace.approvedUsage,
          oldPlace.region,
          oldPlace.locationMRT,
          oldPlace.locationSch,
          oldPlace.district,
          oldPlace.imageUrl,
          oldPlace.units
        );
        this.currPlace = updatedUsers[updatedUserIndex];
        this.currUnit = oldPlace.units[oldUnitIndex];
        return this.http.put(
          `https://propnexpostals-37c08-default-rtdb.asia-southeast1.firebasedatabase.app/${updatedUserIndex}.json`,
          { ...updatedUsers[updatedUserIndex] }
        );
      }),
      tap(() => {
        this._fbPostals.next(updatedUsers);
      })
    );
  }
}
