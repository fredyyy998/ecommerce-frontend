import { Component, OnInit } from '@angular/core';
import { faFileContract, faList, faMoneyBill, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  protected readonly faShoppingCart = faShoppingCart;
  protected readonly faList = faList;
  protected readonly faFileContract = faFileContract;
  protected readonly faMoneyBill = faMoneyBill;
}
