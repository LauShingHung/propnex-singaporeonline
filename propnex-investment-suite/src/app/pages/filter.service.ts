import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  filters: any = {}; // You can customize this to match your filter structure

  setFilters(filters: any) {
    this.filters = filters;
  }

  getFilters() {
    return this.filters;
  }
}
