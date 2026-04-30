import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private items: any[] = [];

  addItem(item: any) {
    this.items.push({ ...item });
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.items = [];
  }
}