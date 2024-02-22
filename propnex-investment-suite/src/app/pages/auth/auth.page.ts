import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { fbUser, fbLicense } from './firebase.model';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})

export class AuthPage implements OnInit, OnDestroy {

  isLogin = true;
  selectedUserType: string;

  result: fbUser;
  resultL: fbLicense;

  loadedFBUsers: fbUser[];
  private fbUsersSub: Subscription;
  private fbLicenseSub: Subscription;
  private excelData: any;
  loadedFBLicenses: fbLicense[];

  constructor(
    private authService: AuthService, 
    private router: Router,
    private alertController: AlertController,
    private http: HttpClient
  ) { }


  ngOnInit() {
    this.fbUsersSub = this.authService.fbUsers.subscribe(fbUsers => {
      this.loadedFBUsers = fbUsers;
    });
    this.fbLicenseSub = this.authService.fbLicenses.subscribe(fbLicenses => {
      this.loadedFBLicenses = fbLicenses;
    });
  }
  

  ionViewWillEnter() {
    this.authService.fetchFBUsers().subscribe(() => {

    });

    this.authService.fetchFBLicense().subscribe(() => {

    });
  }

  // submit login / signup form
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    const name = form.value.name;
    const userType = form.value.userType;
    const isVerified = false;
    let licenseNumber;
    let mobile; // Declare licenseNumber variable

    // Extract license number value if the userType is propertyAgent
    if (userType === 'propertyAgent') {
      licenseNumber = form.value.licenseNumber;
    }
    if (userType === 'propertyAgent') {
      mobile = form.value.mobile;
      
    }

    form.reset();

    if (this.isLogin) {
      // login
      this.result = this.loadedFBUsers.find(u => u.email === email);
      if (this.result) {
        
        if (this.result.password === password) {
          
          this.authService.currFbUser = this.result;
          this.authService.login();
          if (this.result.isVerified === true){
            this.router.navigateByUrl('/home');
          }
          else if (this.authService.currFbUser.userType === 'admin'){
            this.router.navigateByUrl('/home');
          }
          else{
            this.router.navigateByUrl('/verification');
          }
        } else {
          // incorrect password
          this.authService.currFbUser = this.result;
          
        }
      } else {
        // invalid email
        this.authService.currFbUser = this.result;
        
      }
    } else {
      this.resultL = this.loadedFBLicenses.find(u => u.Mobile === mobile);
      if (this.resultL) {
        alert('Verification successful.');
        this.authService.addUser(email, name, password, userType, isVerified, licenseNumber).subscribe(() => {

        });
        this.isLogin = true;
        this.router.navigateByUrl('/auth');
      }
      else {
        alert(mobile);
      }
  }
  }

      

  

  // present invalid email alert
  async presentEmailAlert() {
    const alert = await this.alertController.create({
      header: 'Authentication Failed',
      message: 'Invalid email!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  // present incorrect password alert
  async presentPasswordAlert() {
    const alert = await this.alertController.create({
      header: 'Authentication Failed',
      message: 'Incorrect password!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  // switch between login / signup mode
  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

  ngOnDestroy() {
    if (this.fbUsersSub) {
      this.fbUsersSub.unsubscribe();
    }
  }
}
