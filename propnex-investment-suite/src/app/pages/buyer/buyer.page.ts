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
    "Backpackers Hotel",
    'Hotel',
    "Students Hotel",
    'Serviced Apartment',
    "Workers Dormitories"
  ]; //accommodation types

export const districtTypes = [ 
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
  minPrice: number = 0;
  maxPrice: number = (100/0);
  minRooms: number = 0;
  maxRooms: number = (100/0);
  filter: boolean;
  approvedUsage: string;
  accommodationTypes = accommodationTypes;
  districtTypes =   districtTypes;
  selectedAccommodationType: any[] = []; //initially no filter
  selectedDistrict: any[] = [];
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
 
  handleAccommodationTypeChange(selectedType: string[]) {
    this.selectedAccommodationType = selectedType;
    this.filterPostals();
  }
  
  handleLDistrictChange(selectedTypes: string[]) {
    this.selectedDistrict = selectedTypes;
    this.filterPostals();
  }
  

  handlePriceChange() {
    this.filterPostals();
  }

  handleRoomchange() {
    this.filterPostals();
  }

  handleFilterYes() {
    if (this.filter) {
      
    } else {
      // Set additionalFilter to false when the toggle is switched off
      this.filter = false;
    }
  }

  setBudgetRange(minValue: number, maxValue: number) {
    this.minPrice = minValue;
    this.maxPrice = maxValue;
    this.filterPostals();
  }

  setRoomRange(minValue: number, maxValue: number) {
    this.minRooms = minValue;
    this.maxRooms = maxValue;
    this.filterPostals();
  }

  setAccommodationType(type: string) {
    this.selectedAccommodationType = [type]; // Convert to an array to match the expected format
    this.filterPostals();
  }

  allFiltersFilled(): boolean {
    return (
      this.filter === true
      // Add more conditions if you have additional filters
    );
  }
  
  filterPostals() {
    this.filteredFBPostals = this.loadedFBPostals.filter(postal =>
      (!this.selectedAccommodationType || this.selectedAccommodationType.includes(postal.approvedUsage)) &&
      (!this.selectedDistrict || this.selectedDistrict.includes(postal.district)) &&
      (!this.minPrice || postal.askingPrice >= this.minPrice) &&
      (!this.maxPrice || postal.askingPrice <= this.maxPrice) &&
      (!this.minRooms || postal.numRooms >= this.minRooms) &&
      (!this.maxRooms || postal.numRooms <= this.maxRooms)
      // Add more conditions as needed
    );
    return this.filteredFBPostals;
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
