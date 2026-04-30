import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BillService } from '../../services/bill';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bill-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './bill-form.html'
})
export class BillForm {

  item = {
    name: '',
    price: 0,
    qty: 1
  };

  constructor(private billService: BillService) {}

  addItem() {
    this.billService.addItem(this.item);
    this.item = { name: '', price: 0, qty: 1 };
  }
}