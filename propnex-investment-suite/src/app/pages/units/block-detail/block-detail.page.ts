import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, AlertController, ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { fbPostal, fbRec, fbUnit, fbUser } from 'src/app/pages/auth/firebase.model';
import { PlaceService } from '../../../services/place.service';
import { AddUnitComponent } from './add-unit/add-unit.component';
import { EditBlockComponent } from './edit-block/edit-block.component';
import { Subscription } from 'rxjs';
import { FilterService } from '../../filter.service';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-block-detail',
  templateUrl: './block-detail.page.html',
  styleUrls: ['./block-detail.page.scss'],
})

export class BlockDetailPage implements OnInit {

  currUser: fbUser;
  currPlace: fbPostal;
  result: fbUnit;
  favPlace: fbPostal;
  loadedFBRecs: fbRec[];
  private fbRecsSub: Subscription;
  recItem: fbRec;
  findRecs: string[];
  whatsappLink: string;
  savedFilters: any;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController,
    private placeService: PlaceService,
    private filterService: FilterService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.currUser = this.authService.currFbUser;
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('postalId')) {
        this.navCtrl.navigateBack('/units');
        return;
      }
      const postalId = paramMap.get('postalId');
      this.placeService.fetchPlaceDetail(postalId).subscribe(place => {
        this.currPlace = place; // Now currPlace is set independently
      });
      //this.currPlace = this.placeService.currPlace;
    });

    this.fbRecsSub = this.placeService.fbRecs.subscribe(fbRecs => {
      this.loadedFBRecs = fbRecs;
    })

    this.savedFilters = this.filterService.getFilters();

    // Now you can use this.savedFilters in this component
    console.log(this.savedFilters);

  }

  // ionViewWillEnter() {
  //   this.currPlace = this.placeService.currPlace;
  //   this.placeService.fetchFBPostals().subscribe(() => {

  //   });
  //   this.placeService.fetchFBRecs().subscribe(() => {

  //   });

  // }
  ionViewWillEnter() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('postalId')) {
        // Handle missing postalId
        return;
      }
      const postalId = paramMap.get('postalId');
      this.placeService.fetchPlaceDetail(postalId).subscribe(place => {
        this.currPlace = place; // Set currPlace based on the postalId
      });
    });
  
    // Fetch lists that are used for other parts of this page or for UI components
    this.placeService.fetchFBPostals().subscribe(() => {
      // Handle post-fetch logic if needed
    });
    this.placeService.fetchFBRecs().subscribe(() => {
      // Handle post-fetch logic if needed
    });

    this.placeService.addApriori(
      this.currPlace.postal,this.currUser.name
    ).subscribe(() => {
    });
  }
  

  // retrieve unit using unit number
  handleChange(event) {
    const query = event.target.value;
    if (this.currPlace.units) {
      this.result  = this.currPlace.units.find(p => p.unitNumber === query);
    }
    this.placeService.currUnit = this.result;
  }

  // navigate to unit details page
  onSelectUnit() {
    this.router.navigate(['/', 'units', this.currPlace.postal, this.result.unitNumber]);
  }

  // edit existing place / add new unit action sheet
  onEditBlockOptions() {

    this.actionSheetCtrl.create({
      header: 'Please Choose',
      buttons: [
        { 
          text: 'Edit Place', 
          handler: () => { 
            this.onEditBlock();
          } 
        },
        {
          text: 'Add New Unit', 
          handler: () => { 
            this.onAddUnit();
          }
        },
        { text: 'Cancel', role: 'cancel' }
      ]
    })
    .then(actionSheetEl => {
      actionSheetEl.present();
    });
  }

  // edit existing place 
  onEditBlock() {
    this.modalCtrl
      .create({ component: EditBlockComponent })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
          this.ionViewWillEnter();
        }
      });
  }

  // add new unit
  onAddUnit() {
    this.modalCtrl
      .create({ component: AddUnitComponent })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      });
  }

  addToFav(postalCode: string) {
    /*
      check if already in fav
      if yes, dont add 
      if no, add
    */
    if (this.currUser.favourites && this.currUser.favourites.length > 0) {
      this.favPlace  = this.currUser.favourites.find(p => p.postal === postalCode);
      if (this.favPlace) {
        this.presentFavAlert();
      } else {
        this.recItem = this.loadedFBRecs.find(p => p.place === this.placeService.currPlace.name);
        if (this.recItem) {
          this.findRecs = [this.recItem.rec1, this.recItem.rec2, this.recItem.rec3];
        } else {
          this.findRecs = [];
        }
        this.authService.addFav(this.currUser.email, this.placeService.currPlace, this.findRecs).subscribe(()=>{

        });
      }
    } else {
      this.recItem = this.loadedFBRecs.find(p => p.place === this.placeService.currPlace.name);
      if (this.recItem) {
        this.findRecs = [this.recItem.rec1, this.recItem.rec2, this.recItem.rec3];
      } else {
        this.findRecs = [];
      }
      
      this.authService.addFav(this.currUser.email, this.placeService.currPlace, this.findRecs).subscribe(()=>{

      });
    }
    
  }

  // present place already in favourites alert
  async presentFavAlert() {
    const alert = await this.alertController.create({
      header: 'Already Exist',
      message: 'This place is already in your favourites!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  generateWhatsAppLink(): string {
    // Get saved filters from the FilterService
    const savedFilters = this.filterService.getFilters();

    // Extract values from saved filters
    const accommodationType = savedFilters.selectedAccommodationType || 'N/A';
    const districtType = savedFilters.selectedDistrict || 'N/A';
    const budgetRange = `(${savedFilters.minPrice} - ${savedFilters.maxPrice})`;
    const numberOfRooms = `(${savedFilters.minRooms} - ${savedFilters.maxRooms})`;
    const username = savedFilters.username;
    const propertyname = this.currPlace.name;
    const tenure = savedFilters.tenure;

    const messageTemplate = `Hello Jared,
  
  I am ${username}. I came across this property, ${propertyname} and am interested in learning more about it. Here are my requirements:
  
  1. Accommodation Type: ${accommodationType}
  2. Preferred District/Area: ${districtType}
  3. Budget Range: ${budgetRange}
  4. Number of Rooms Required: ${numberOfRooms}
  5. Tenure Type (e.g., leasehold, freehold): ${tenure}
  
  Please feel free to contact me by replying to this message for further discussion. Looking forward to hearing from you!
  
  Best regards,
  ${username}`;

    // URL encode the message
    const encodedMessage = encodeURIComponent(messageTemplate);
    const whatsappLink = `https://wa.me/6591520660?text=${encodedMessage}`;

    return whatsappLink;
  }

  ngOnDestroy() {
    if (this.fbRecsSub) {
      this.fbRecsSub.unsubscribe();
    }
  }

}
