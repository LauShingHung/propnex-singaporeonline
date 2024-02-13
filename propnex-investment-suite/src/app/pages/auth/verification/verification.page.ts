import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';
import { fbUser } from '../firebase.model';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html'
})

export class VerificationPage implements OnInit {

  currUser: fbUser;

  constructor(
    private authService: AuthService,
    private router: Router,
    private modalCtrl: ModalController,
  ) { }


  ngOnInit() {
    this.currUser = this.authService.currFbUser;
  }
}