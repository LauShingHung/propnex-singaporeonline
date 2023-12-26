import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { PlaceService } from '../../../services/place.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-block',
  templateUrl: './add-block.component.html',
  styleUrls: ['./add-block.component.scss'],
})

export class AddBlockComponent implements OnInit {

  addBlockForm: FormGroup;
  postalCodeError: string = null;

  selectedFile: File = null;
  imagePreview: string | ArrayBuffer = '';

  constructor(
    private modalCtrl: ModalController,
    private placeService: PlaceService
  ) { }

  ngOnInit() {
    this.addBlockForm = new FormGroup({
      projectName: new FormControl(null, {
        updateOn: 'blur',
      }), 
      postalCode: new FormControl(null, {
        updateOn: 'change',
        validators: [
          Validators.required,
          Validators.pattern(/^\d{6}$/), // Ensure it's numeric and exactly 6 digits
        ]
      }),
      landArea: new FormControl(null, {
        updateOn: 'blur',
      }),
      grossFloorArea: new FormControl(null, {
        updateOn: 'blur',
      }),
      tenure: new FormControl(null, {
        updateOn: 'blur',
      }),
      numRooms: new FormControl(null, {
        updateOn: 'blur',
      }),
      numStorey: new FormControl(null, {
        updateOn: 'blur',
      }),
      askingPrice: new FormControl(null, {
        updateOn: 'blur',
      }),
      priceRoom: new FormControl(null, {
        updateOn: 'blur',
      }),
      GFA: new FormControl(null, {
        updateOn: 'blur',
      }),
      roomRate: new FormControl(null, {
        updateOn: 'blur',
      }),
      netOperatingProfit: new FormControl(null, {
        updateOn: 'blur',
      }),
      approvedUsage: new FormControl(null, {
        updateOn: 'blur',
      }),
      locationMRT: new FormControl(null, {
        updateOn: 'blur',
      }),
      locationSch: new FormControl(null, {
        updateOn: 'blur',
      }),
      district: new FormControl(null, {
        updateOn: 'blur',
      })
    });
    
  }

  // cancel add place
  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onFileChanged(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  // // submit add block form
  // submitAddBlock() {
  //   if (!this.addBlockForm.valid) {
  //     return;
  //   }
  //   const projectName = this.addBlockForm.value.projectName;
  //   const postalCode = this.addBlockForm.value.postalCode;
    
  //   this.placeService.addBlock(projectName, postalCode).subscribe(() => {

  //   });
  //   this.addBlockForm.reset();
  //   this.modalCtrl.dismiss();
  // }

  // submit add hotel form
  // submit add block form
submitAddBlock() {
  if (!this.addBlockForm.valid) {
    return;
  }

  const postalCode = this.addBlockForm.value.postalCode;

  // Check if the postal code already exists
  this.placeService.checkPostalCodeExists(postalCode).subscribe((exists: boolean) => {
    if (exists) {
      // Postal code already exists, handle accordingly (e.g., show an error message)
      this.postalCodeError = "Postal code already exists. Please choose a unique postal code.";
    } else {
      this.postalCodeError = null;  // Clear any previous error
      // Postal code is unique, proceed with adding the new block
      const projectName = this.addBlockForm.value.projectName;
      const landArea = this.addBlockForm.value.landArea;
      const grossFloorArea = this.addBlockForm.value.grossFloorArea;
      const tenure = this.addBlockForm.value.tenure;
      const numRooms = this.addBlockForm.value.numRooms;
      const numStorey = this.addBlockForm.value.numStorey;
      const askingPrice = this.addBlockForm.value.askingPrice;
      const priceRoom = this.addBlockForm.value.priceRoom;
      const GFA = this.addBlockForm.value.GFA;
      const roomRate = this.addBlockForm.value.roomRate;
      const netOperatingProfit = this.addBlockForm.value.netOperatingProfit;
      const approvedUsage = this.addBlockForm.value.approvedUsage;
      const locationMRT = this.addBlockForm.value.locationMRT;
      const locationSch = this.addBlockForm.value.locationSch;
      const district = this.addBlockForm.value.district;

      // Proceed to add the block if the postal code is unique
      this.placeService.addBlock(
        projectName, postalCode, landArea, grossFloorArea, tenure, numRooms, numStorey,
        askingPrice, priceRoom, GFA, roomRate, netOperatingProfit, approvedUsage,
        locationMRT, locationSch, district
      ).subscribe(() => {
        // Handle success if needed
        this.showSuccess("Place added successfully.");
      });

      this.addBlockForm.reset();
      this.modalCtrl.dismiss();
    }
  });
}
private showError(message: string) {
  // Implement your error handling logic here
  console.error(message); // You can log the error to the console
  // You can also display the error message to the user using a toast, alert, or any other UI component.
}

private showSuccess(message: string) {
  // Implement your success handling logic here
  console.log(message); // You can log the success message to the console
  // You can also display the success message to the user using a toast, alert, or any other UI component.
}

showWarning: boolean = false;

showPostalCodeWarning() {
  this.showWarning = true;
}

hidePostalCodeWarning() {
  const postalCodeControl = this.addBlockForm.get('postalCode');
  
  if (postalCodeControl.valid) {
    this.showWarning = false;
  }
}

    

  // upload place image
  uploadBlockImage() {
    if (!this.selectedFile) {
      console.error('No file selected!');
      return;
    }
    console.log("choose block image to upload")
  }

}