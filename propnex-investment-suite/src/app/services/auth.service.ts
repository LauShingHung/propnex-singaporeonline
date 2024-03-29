import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { take, map, tap, switchMap } from 'rxjs/operators';
import { fbPostal, fbUser, fbLicense } from '../pages/auth/firebase.model';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private _userIsAuthenticated = false;
  private _currFbUser: fbUser;
  private _currFbLicense: fbLicense;
  private _fbUsers = new BehaviorSubject<fbUser[]>([]);
  private _fbLicenses = new BehaviorSubject<fbLicense[]>([]);

  
  get currFbUser() {
    return this._currFbUser;
  }

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get fbUsers() {
    return this._fbUsers.asObservable();
  }

  get fbLicenses() {
    return this._fbLicenses.asObservable();
  }

  set currFbUser(currFbUser: fbUser) {
    this._currFbUser = currFbUser;
  }


  constructor(
    private http: HttpClient
  ) {}


  login() {
    this._userIsAuthenticated = true;
  }

  logout() {
    this._userIsAuthenticated = false;
  }

  // fetch user data
  fetchFBUsers() {
    return this.http
      .get(
        'https://propnexusers-e6189-default-rtdb.asia-southeast1.firebasedatabase.app/.json'
      )
      .pipe(
        map(resData => {
          const users = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {  
              users.push(
                new fbUser(
                  resData[key].email,
                  resData[key].favourites,
                  resData[key].generalRec,
                  resData[key].name,
                  resData[key].password,
                  resData[key].personalRec,
                  resData[key].userType,
                  resData[key].isVerified,
                  resData[key].licenseNumber
                )
              );
            }
          }
          return users;
        }),
        tap(users => {
          this._fbUsers.next(users);
        })
      );
  }

  fetchFBLicense() {
    return this.http
      .get(
        'https://propertagents-c4754-default-rtdb.asia-southeast1.firebasedatabase.app/.json'
      )
      .pipe(
        map(resData => {
          const users = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {  
              users.push(
                new fbLicense(
                  resData[key].AgencyLicense,
                  resData[key].CEA,
                  resData[key].Company,
                  resData[key].Email,
                  resData[key].Mobile,
                  resData[key].Name,
                  resData[key].RegDate
                )
              );
            }
          }
          return users;
        }),
        tap(users => {
          this._fbLicenses.next(users);
        })
      );
  }

  // add new user
  addUser(email: string, name: string, password: string, userType: string, isVerified: boolean, licenseNumber: string) {
    const newUser = new fbUser(
      email,
      [],
      [],
      name,
      password,
      [],
      userType,
      isVerified,
      licenseNumber
    );
    return this.http
      .post('https://propnexusers-e6189-default-rtdb.asia-southeast1.firebasedatabase.app/.json',
      { ...newUser })
      .pipe(
        switchMap(() => {
          return this.fbUsers;
        }),
        take(1),
        tap(fbUsers => {
          this._fbUsers.next(fbUsers.concat(newUser));
        })
      );
  }
  
  // edit existing user
  editUser(targetEmail: string, newName: string, newPassword: string) {
    let updatedUsers: fbUser[];
    return this.fbUsers.pipe(
      take(1),
      switchMap(users => {
        if (!users || users.length <= 0) {
          return this.fetchFBUsers();
        } else {
          return of(users);
        }
      }),
      switchMap(users => {
        const updatedUserIndex = users.findIndex(u => u.email === targetEmail);
        updatedUsers = [...users];
        const oldPlace = updatedUsers[updatedUserIndex];
        updatedUsers[updatedUserIndex] = new fbUser(
          oldPlace.email,
          oldPlace.favourites,
          oldPlace.generalRec,
          newName,
          newPassword,
          oldPlace.personalRec,
          oldPlace.userType,
          oldPlace.isVerified,
          oldPlace.licenseNumber
        );
        this.currFbUser = updatedUsers[updatedUserIndex];
        return this.http.put(
          `https://propnexusers-e6189-default-rtdb.asia-southeast1.firebasedatabase.app/${updatedUserIndex}.json`,
          { ...updatedUsers[updatedUserIndex] }
        );
      }),
      tap(() => {
        this._fbUsers.next(updatedUsers);
      })
    );
  }

  // add place to users' favourites
  addFav(targetEmail: string, newPlace: fbPostal, newRecs: string[]) {
    let updatedUsers: fbUser[];
    return this.fbUsers.pipe(
      take(1),
      switchMap(users => {
        if (!users || users.length <= 0) {
          return this.fetchFBUsers();
        } else {
          return of(users);
        }
      }),
      switchMap(users => {
        const updatedUserIndex = users.findIndex(u => u.email === targetEmail);
        updatedUsers = [...users];
        const oldPlace = updatedUsers[updatedUserIndex];
        
        let newFavArr = oldPlace.favourites || [];
        newFavArr = newFavArr.concat(newPlace);

        let newRecArr = oldPlace.personalRec || [];
        if (newRecs.length != 0) {
          newRecArr = newRecArr.concat(newRecs);
        }
        let uniqueRecArr = Array.from(new Set(newRecArr));
        
        updatedUsers[updatedUserIndex] = new fbUser(
          oldPlace.email,
          newFavArr,
          oldPlace.generalRec,
          oldPlace.name,
          oldPlace.password,
          uniqueRecArr,
          oldPlace.userType,
          oldPlace.isVerified,
          oldPlace.licenseNumber
        );
        this.currFbUser = updatedUsers[updatedUserIndex];
        return this.http.put(
          `https://propnexusers-e6189-default-rtdb.asia-southeast1.firebasedatabase.app/${updatedUserIndex}.json`,
          { ...updatedUsers[updatedUserIndex] }
        );
      }),
      tap(() => {
        this._fbUsers.next(updatedUsers);
      })
    );
  }

  // remove place from users' favourites
  removeFav(userInd: number, placeInd: number) {
    return this.http
      .delete(
        `https://propnexusers-e6189-default-rtdb.asia-southeast1.firebasedatabase.app/${userInd}/favourites/${placeInd}.json`
      );
  }

  // Method to update the user verification status
  updateUserVerification(email: string, isVerified: boolean) {
    let updateUser: fbUser[];
    return this.fbUsers.pipe(
      take(1),
      switchMap(users => {
        if (!users || users.length <= 0) {
          return this.fetchFBUsers();
        } else {
          return of(users);
        }
      }),
      switchMap(users => {
        const updateUserIndex = users.findIndex(u => u.email === email);
        if (updateUserIndex === -1) {
          throw new Error('User not found!');
        }
        updateUser = [...users];
        const currentUser = updateUser[updateUserIndex];
        updateUser[updateUserIndex] = new fbUser(
          currentUser.email,
          currentUser.favourites,
          currentUser.generalRec,
          currentUser.name,
          currentUser.password,
          currentUser.personalRec,
          currentUser.userType,
          isVerified,
          currentUser.licenseNumber
           // Set the new verification status
        );
        // Update the database entry for this user
        return this.http.put(
          `https://propnexusers-e6189-default-rtdb.asia-southeast1.firebasedatabase.app/${updateUserIndex}.json`,
          { ...updateUser[updateUserIndex] }
        );
      }),
      tap(() => {
        this._fbUsers.next(updateUser);
      })
    );
  }

}
