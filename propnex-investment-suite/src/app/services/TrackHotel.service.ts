import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { fbPostal, fbRec, fbUnit } from '../pages/auth/firebase.model';

@Injectable({
  providedIn: 'root',
})
export class SelectedHotelsService {
  private selectedHotelsSubject = new BehaviorSubject<fbPostal[]>([]);
  selectedHotels$ = this.selectedHotelsSubject.asObservable();

  addSelectedHotel(hotel: fbPostal) {
    const currentSelectedHotels = this.selectedHotelsSubject.value;
    this.selectedHotelsSubject.next([...currentSelectedHotels, hotel]);
  }

  getSelectedHotels(): fbPostal[] {
    return this.selectedHotelsSubject.value;
  }

  saveSelectedHotelsToFirebase(userId: string) {
    const selectedHotels = this.selectedHotelsSubject.value;
  }
}
