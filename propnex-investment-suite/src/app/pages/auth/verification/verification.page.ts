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
  isVerified = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private modalCtrl: ModalController,
  ) { }


  ngOnInit() {
    this.currUser = this.authService.currFbUser;
  }

  verifyUser() {
    this.authService.updateUserVerification(this.currUser.email, true).subscribe({
      next: () => {
        // Handle the successful verification here
        this.router.navigateByUrl('/home');
      },
      error: (error) => {
        // Handle the error here
        console.error('Verification failed', error);
        this.router.navigateByUrl('/auth');
      }
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }

}