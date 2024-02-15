import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { fbPostal, fbRec, fbUser } from '../../auth/firebase.model';
import { PlaceService } from '../../../services/place.service';
import { EditProfileComponent } from '../main/edit-profile/edit-profile.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html'
})

export class AdminPage implements OnInit {

  currUser: fbUser;


  constructor(
    private authService: AuthService,
    private router: Router,
    private modalCtrl: ModalController,
    private placeService: PlaceService
  ) { }


  ngOnInit() {
    this.currUser = this.authService.currFbUser;

  }
 
}