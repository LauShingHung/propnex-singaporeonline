import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { fbPostal, fbUnit } from 'src/app/pages/auth/firebase.model';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-edit-unit',
  templateUrl: './edit-unit.component.html',
  styleUrls: ['./edit-unit.component.scss'],
})

export class EditUnitComponent implements OnInit {

  editUnitForm: FormGroup;
  currPlace: fbPostal;
  currUnit: fbUnit;


  constructor(
    private modalCtrl: ModalController,
    private placeService: PlaceService
  ) { }


  ngOnInit() {
    this.currPlace = this.placeService.currPlace;
    this.currUnit = this.placeService.currUnit;
    this.editUnitForm = new FormGroup({
      bedrooms: new FormControl(this.currUnit.bedrooms, {
        updateOn: 'blur',
      }), 
      size: new FormControl(this.currUnit.size, {
        updateOn: 'blur',
      }), 
      UnitFacing: new FormControl(this.currUnit.UnitFacing, {
        updateOn: 'blur',
      }), 

      //homeownerRace: new FormControl(null, {
      //   updateOn: 'blur',
      // }), 
      // countryOfCitizenship: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // decorativeStyle: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // extensionRequest: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // price: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // titleDeed: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // houseAge: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // buildingHeight: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // noOfUnitsTotal: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // noOfUnitsPerFloor: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // roomType: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // noOfToilets: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // houseStructure: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // doorFacing: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // roomOrientation: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // cornerUnit: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // groundTopFloor: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // westernSun: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // noisy: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // refurbishedState: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // landscapeFromWindow: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // bombShelter: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // openKitchen: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // gasManagementFee: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // houseTax: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // rentalStatus: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // vrLink: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
    });
  }

  // cancel edit unit
  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  // submit edit unit form
  submitEditUnit() {
    if (!this.editUnitForm.valid) {
      return;
    }

    let newBedrooms = this.editUnitForm.value.bedrooms;
    let newSize = this.editUnitForm.value.size;
    let newUnitFacing = this.editUnitForm.value.UnitFacing

    const targetLastTwoDigits = this.currUnit.unitNumber.substring(3,4);
    this.currPlace.units.forEach((unit) => {
      if (unit.unitNumber.substring(3,4) == targetLastTwoDigits) {
          let newUnit = new fbUnit(unit.bedrooms, unit.floorplan, unit.size, unit.unitNumber, newUnitFacing);
          this.placeService.editUnit(this.currPlace.postal, unit.unitNumber ,newUnit).subscribe(()=>{

          });

      }
    })

    let newUnit = new fbUnit(newBedrooms, this.currUnit.floorplan, newSize, this.currUnit.unitNumber, newUnitFacing);

    this.placeService.editUnit(this.currPlace.postal, this.currUnit.unitNumber ,newUnit).subscribe(()=>{

    });
    
    this.modalCtrl.dismiss({ message: 'Changes saved'}, 'confirm');
  }
   
  // upload floorplan image
  uploadFloorPlanImage() {
    console.log("choose floor plan image to upload")
  }


}
