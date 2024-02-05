import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { fbPostal, fbRec, fbUnit } from '../pages/auth/firebase.model';
import { Observable } from 'rxjs';
import { combineLatest} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PlaceService {

  private _fbPostals = new BehaviorSubject<fbPostal[]>([]);
  private _fbRecs = new BehaviorSubject<fbRec[]>([]);
  private _currPlace: fbPostal;
  private _currUnit: fbUnit;


  get fbPostals() {
    return this._fbPostals.asObservable();
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

  checkPostalCodeExists(postal: string, newListing: fbPostal): Observable<{ errorMessage: string | null, similarity: number }> {
    return this.fbPostals.pipe(
      take(1),
      switchMap(postals => {
        const exactMatch = postals.some(place => place.postal === postal);
        if (exactMatch) {
          // If exact match found, return an error message for duplicate postal
          return of({ errorMessage: 'A listing with the same postal code already exists.', similarity: null });
        } else {
          // Calculate cosine similarity for other attribute values
          const cosineSimilarityThreshold = 0.8; // Set your threshold here
          const similarityChecks = postals.map(place => this.calculateCosineSimilarity(newListing, place));
          return combineLatest(similarityChecks).pipe(
            map(similarities => {
              const maxSimilarity = Math.max(...similarities);
              if (maxSimilarity > cosineSimilarityThreshold) {
                // If similarity is above threshold, return an error message for high similarity
                return {
                  errorMessage: `A listing with similar attributes already exists. Please review. Similarity: ${maxSimilarity}`,
                  similarity: maxSimilarity
                };
              } else {
                // Otherwise, return null to indicate no error
                return { errorMessage: null, similarity: null };
              }
            })
          );
        }
      })
    );
  }

  calculateCosineSimilarity(listing1: fbPostal, listing2: fbPostal): number {
    // Calculate dot product
    let dotProduct = 0;
    for (const key in listing1) {
      if (listing1.hasOwnProperty(key) && listing2.hasOwnProperty(key)) {
        if (typeof listing1[key] === 'number' && typeof listing2[key] === 'number') {
          dotProduct += listing1[key] * listing2[key];
        }
      }
    }
  
    // Calculate magnitude of each vector
    let magnitude1 = 0;
    let magnitude2 = 0;
    for (const key in listing1) {
      if (listing1.hasOwnProperty(key) && typeof listing1[key] === 'number') {
        magnitude1 += Math.pow(listing1[key], 2);
      }
    }
    for (const key in listing2) {
      if (listing2.hasOwnProperty(key) && typeof listing2[key] === 'number') {
        magnitude2 += Math.pow(listing2[key], 2);
      }
    }
    magnitude1 = Math.sqrt(magnitude1);
    magnitude2 = Math.sqrt(magnitude2);
  
    // Calculate cosine similarity
    let similarity = dotProduct / (magnitude1 * magnitude2);
  
    // Return similarity score
    return similarity;
  }  


  // fetch place data
  fetchFBPostals() {
    return this.http
      .get(
        `https://propnexpostals-b7ebd-default-rtdb.asia-southeast1.firebasedatabase.app/.json`
      )
      .pipe(
        map(resData => {
          const postals: fbPostal[] = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              postals.push(
                new fbPostal(
                  resData[key].name, 
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
        `https://propnexpostals-b7ebd-default-rtdb.asia-southeast1.firebasedatabase.app/.json`
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
  addBlock(name: string, postal: string, landArea: Float32Array, grossFloorArea: Float32Array, tenure: string, numRooms: number, numStorey: Int16Array, askingPrice: number, priceRoom: Float32Array, GFA: string, roomRate: Float32Array, netOperatingProfit: Float32Array, approvedUsage: string, region: string, LocationMRT: string, LocationSch: string, district: string) {
    const newBlock = new fbPostal(
      name,
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
      .post('https://propnexpostals-b7ebd-default-rtdb.asia-southeast1.firebasedatabase.app/.json',
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
          `https://propnexpostals-b7ebd-default-rtdb.asia-southeast1.firebasedatabase.app/${updatedUserIndex}.json`,
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
          `https://propnexpostals-b7ebd-default-rtdb.asia-southeast1.firebasedatabase.app/${updatedPlaceIndex}.json`,
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
          `https://propnexpostals-b7ebd-default-rtdb.asia-southeast1.firebasedatabase.app/${updatedUserIndex}.json`,
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
          `https://propnexpostals-b7ebd-default-rtdb.asia-southeast1.firebasedatabase.app/${updatedUserIndex}.json`,
          { ...updatedUsers[updatedUserIndex] }
        );
      }),
      tap(() => {
        this._fbPostals.next(updatedUsers);
      })
    );
  }
}
