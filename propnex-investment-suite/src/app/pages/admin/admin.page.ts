import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { fbPostal, fbRec, fbUser, fbER } from '../auth/firebase.model';
import { AddBlockComponent } from '../units/add-block/add-block.component';
import { PlaceService } from '../../services/place.service';
import { EditProfileComponent } from '../home/main/edit-profile/edit-profile.component';
import { FilterService } from '../../pages/filter.service'; // Import the FilterService
import { SelectedHotelsService } from '../../services/TrackHotel.service'; // Replace with the correct path

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html'
})

export class AdminPage implements OnInit {

  currUser: fbUser;
  loadedFBPostals: fbER[];
  private fbPostalsSub: Subscription;
  result: fbER[];
  loadedFBRecs: fbRec[];
  filteredresult: fbER[];
  private fbRecsSub: Subscription;
  recItem: fbRec;
  findRecs: string[];
  filter: boolean;
  filteredFBPostals: fbPostal[]; //hold filtered results
  selectedAccommodationType: string[] = ['hi']; 

  constructor(
    private authService: AuthService,
    private router: Router,
    private modalCtrl: ModalController,
    private filterService: FilterService, 
    private placeService: PlaceService,
    private selectedHotelsService: SelectedHotelsService
  ) { }


  ngOnInit() {
    this.currUser = this.authService.currFbUser;

    this.fbPostalsSub = this.placeService.fbERs.subscribe(fbERs => {
      this.loadedFBPostals = fbERs;
    })

    this.fbRecsSub = this.placeService.fbRecs.subscribe(fbRecs => {
      this.loadedFBRecs = fbRecs;
    })
  }

  ionViewWillEnter() {
    this.placeService.fetchFBERs().subscribe(() => {

    });

    this.placeService.fetchFBRecs().subscribe(() => {

    });

  }


  // navigate to edit user profile form

  removePostal(number: string) {
    this.placeService.removeER(number);
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