import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { fbPostal, fbRec, fbUser } from '../auth/firebase.model';
import { PlaceService } from '../../services/place.service';
import { EditProfileComponent } from '../home/main/edit-profile/edit-profile.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html'
})

export class AdminPage implements OnInit {

  currUser: fbUser;
  loadedFBPostals: fbPostal[];
  private fbPostalsSub: Subscription;
  result: fbPostal;
  loadedFBRecs: fbRec[];
  private fbRecsSub: Subscription;
  recItem: fbRec;
  findRecs: string[];


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

  // retrieve place using postal
  handleChange(event) {
    const query = event.target.value;
    this.result  = this.loadedFBPostals.find(p => p.postal === query);

    if (this.result) {
      this.placeService.currPlace = this.result;
      this.recItem = this.loadedFBRecs.find(p => p.place === this.placeService.currPlace.name);
      if (this.recItem) {
        this.findRecs = [this.recItem.rec1, this.recItem.rec2, this.recItem.rec3];
      } else {
        this.findRecs = []
      }
      
    }

  }

  // navigate to place details page
  onSelectPlace() {
    this.router.navigate(['/', 'admin', this.result.postal]);
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


  ngOnDestroy() {
    if (this.fbPostalsSub) {
      this.fbPostalsSub.unsubscribe();
    }
    if (this.fbRecsSub) {
      this.fbRecsSub.unsubscribe();
    }
  }
}