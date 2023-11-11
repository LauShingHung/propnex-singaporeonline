import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { fbPostal, fbRec, fbUser } from '../auth/firebase.model';
import { AddBlockComponent } from '../units/add-block/add-block.component';
import { PlaceService } from '../../services/place.service';
import { EditProfileComponent } from '../home/main/edit-profile/edit-profile.component';
export const accommodationTypes = [
    'Residential',
    "Backpackers' Hotel",
    'Hotel',
    "Students' Hotel",
    'Serviced Apartment',
    "Workers' Dormitories"
  ]; //accommodation types

export const locationTypes = [
    '0',
    'Woodlands',
    'Orchard'
  ];

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.page.html',
  styleUrls: ['./buyer.page.scss'],
})

export class BuyerPage implements OnInit {

  currUser: fbUser;
  loadedFBPostals: fbPostal[];
  private fbPostalsSub: Subscription;
  result: fbPostal[];
  loadedFBRecs: fbRec[];
  filteredresult: fbPostal[];
  private fbRecsSub: Subscription;
  recItem: fbRec;
  findRecs: string[];
  minPrice: number;
  maxPrice: number;
  approvedUsage: string;
  accommodationTypes = accommodationTypes;
  locationTypes =   locationTypes;
  selectedAccommodationType: string = ''; //initially no filter
  selectedLocationMRT: string = ''; //initially no filter
  filteredFBPostals: fbPostal[]; //hold filtered results


  constructor(
    private authService: AuthService,
    private router: Router,
    private modalCtrl: ModalController,
    private placeService: PlaceService
  ) { }


  ngOnInit() {
    this.currUser = this.authService.currFbUser;

    this.fbPostalsSub = this.placeService.fbPostals.subscribe(fbPostals => {
      this.loadedFBPostals = fbPostals;
    })

    this.fbRecsSub = this.placeService.fbRecs.subscribe(fbRecs => {
      this.loadedFBRecs = fbRecs;
    })
  }

  ionViewWillEnter() {
    this.placeService.fetchFBPostals().subscribe(() => {

    });

    this.placeService.fetchFBRecs().subscribe(() => {

    });

  }
 
  handleAccommodationTypeChange(selectedType: string) {
    this.selectedAccommodationType = selectedType;
    this.filterPostals();
  }
  
  handleLocationMRTChange(selectedType: string) {
    this.selectedLocationMRT = selectedType;
    this.filterPostals();
  }
  
  filterPostals() {
    this.filteredFBPostals = this.loadedFBPostals.filter(postal =>
      (!this.selectedAccommodationType || postal.approvedUsage === this.selectedAccommodationType) &&
      (!this.selectedLocationMRT ||  postal.locationMRT === this.selectedLocationMRT)
      // Add more conditions as needed
    );
  }
  

  // navigate to place details page
  onSelectPlace(postal: fbPostal) {
    this.router.navigate(['/', 'units', postal.postal]);
  }


  // navigate to edit user profile form
  onEditProfile() {
    this.modalCtrl
      .create({ component: EditProfileComponent })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        if (resultData.role === 'confirm') {
          this.ionViewWillEnter();
        }
      });
  }


  // add new place
  onAddBlock() {
    this.modalCtrl
      .create({ component: AddBlockComponent })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      });
  }

  ngOnDestroy() {
    if (this.fbPostalsSub) {
      this.fbPostalsSub.unsubscribe();
    }
    if (this.fbRecsSub) {
      this.fbRecsSub.unsubscribe();
    }
  }
}
