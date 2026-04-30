import { Routes } from '@angular/router';
import { BillForm } from './components/bill-form/bill-form';
import { Receipt } from './components/receipt/receipt';

export const routes: Routes = [
  { path: '', component: BillForm },
  { path: 'receipt', component: Receipt }
];