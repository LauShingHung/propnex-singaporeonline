import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { fbUser, fbLicense } from './firebase.model';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})

export class AuthPage implements OnInit, OnDestroy {

  isLogin = true;
  selectedUserType: string;
  showField: boolean = false;

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
    private http: HttpClient,
    private toastController: ToastController
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
  update(mobile: number, form: NgForm) {
    this.resultL = this.loadedFBLicenses.find(u => u.Mobile === mobile);
    if (this.resultL) {
      // Get the license number from the found user
      const licenseNumber = this.resultL.CEA;
  
      // Update the license number value in the form
      this.presentToast(licenseNumber);
      form.form.patchValue({ licenseNumber: licenseNumber });
    }
  }

  isPasswordComplex(password: string): boolean {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  }
  

  async onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    const name = form.value.name;
    const userType = form.value.userType;
    const isVerified = false;
    let licenseNumber = "";
    let AgencyName = "";
    let mobile; // Declare licenseNumber variable
    let agencyName;
    if (userType === 'propertyAgent') {
      mobile = form.value.mobile;
      licenseNumber = form.value.licenseNumber;
      agencyName = form.value.agencyName;
    }

    

    // Add a check for the password when signing up
    if (!this.isLogin && !this.isPasswordComplex(password)) {
      await this.presentToast('Password must be at least 8 characters long and include at least one digit, one lowercase, and one uppercase letter.');
      return; // Do not proceed with signup if the password is not complex enough
    }

    if (this.isLogin) {
         // login
         this.result = this.loadedFBUsers.find(u => u.email === email);
         if (this.result) {
           
           if (this.result.password === password) {
             
             this.authService.currFbUser = this.result;
             this.authService.login();
             this.router.navigateByUrl('/home');
             if (this.result.isVerified === true){
               this.router.navigateByUrl('/home');
             }
             else if (this.authService.currFbUser.userType === 'admin'){
               this.router.navigateByUrl('/home');
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
      // Sign up process...
      if (userType === "propertyAgent") {
      this.resultL = this.loadedFBLicenses.find(u => u.Mobile === mobile);

      if (this.showField === true) {
        this.authService.addUser(email, name, password, userType, isVerified, licenseNumber).subscribe(() => {
          // Sign up successful
        });
      }
      if (this.resultL) {
        // If the license number is found, confirm it with the user
        if (licenseNumber === undefined) {
          licenseNumber = this.resultL.CEA;
          AgencyName = this.resultL.AgencyLicense;
        }

        const alert = await this.alertController.create({
          header: 'Please Check Whether Your License Number And Agency License is Accurate.',
          message: 'License number: ' + licenseNumber + '\nAgency License: ' + AgencyName,
          buttons: [
            {
              text: 'No',
              role: 'cancel',
              handler: () => {
                this.presentToast('Please enter correct license number and Agency License');
                this.showField = true;
              }
            }, {
              text: 'Yes',
              handler: () => {
                // Proceed with sign up
                this.presentToast('Verification successful');
                this.authService.addUser(email, name, password, userType, isVerified, licenseNumber).subscribe(() => {
                  // Sign up successful
                });
                this.isLogin = true;
                this.result.isVerified === true;
                this.router.navigateByUrl('/auth');
              }
            }
          ]
        });
        await alert.present();
        this.showField = false;
      } else {
        // If the license number is not found, display an error message
        this.presentToast("Verification Unsuccessful");
      }
    }
    else if (userType === "regularUser") {
      this.authService.addUser(email, name, password, userType, isVerified, "0" ).subscribe(() => {

      });
      this.isLogin = true;
      this.router.navigateByUrl('/auth');
    }
    else {
      this.authService.addUser(email, name, password, userType, isVerified, "0" ).subscribe(() => {

      });
      this.isLogin = true;
      this.router.navigateByUrl('/auth');
    }
  }
  form.reset();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000, // Display the toast for 3 seconds
      position: 'top' // Display the toast at the top of the screen
    });
    toast.present();
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
