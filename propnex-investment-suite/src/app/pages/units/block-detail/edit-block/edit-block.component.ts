import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { fbPostal } from 'src/app/pages/auth/firebase.model';
import { PlaceService } from '../../../../services/place.service';

@Component({
  selector: 'app-edit-block',
  templateUrl: './edit-block.component.html',
  styleUrls: ['./edit-block.component.scss'],
})

export class EditBlockComponent implements OnInit {

  editBlockForm: FormGroup;
  currPlace: fbPostal;
  selectedFile: File = null;
  imagePreview: string | ArrayBuffer = '';

  constructor(
    private modalCtrl: ModalController,
    private placeService: PlaceService
  ) { }

  
  ngOnInit() {
    this.currPlace = this.placeService.currPlace;
    this.editBlockForm = new FormGroup({
      projectName: new FormControl(this.currPlace.name, {
        updateOn: 'blur',
      }),
    });
  }

  // cancel edit place
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

  // submit edit place form
  submitEditBlock() {
    if (!this.editBlockForm.valid) {
      return;
    }

    let newName = this.editBlockForm.value.projectName;

    this.placeService.editBlock(this.currPlace.postal, newName).subscribe(()=>{

    });
    
    this.modalCtrl.dismiss({ message: 'Changes saved'}, 'confirm');
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
