import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillService } from '../../services/bill';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-receipt',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './receipt.html'
})
export class Receipt {

  constructor(public billService: BillService) {}

  getTotal() {
    return this.billService.getItems()
      .reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  clear() {
    this.billService.clearItems();
  }
}