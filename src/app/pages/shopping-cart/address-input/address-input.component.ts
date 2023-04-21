import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address } from '../../../models/customer';

@Component({
  selector: 'app-address-input',
  templateUrl: './address-input.component.html',
  styleUrls: ['./address-input.component.css']
})
export class AddressInputComponent {

  private _address!: Address;

  @Input() get address() {
    return this._address;
  }

  set address(address: Address) {
    this._address = address;
    this.addressChange.emit(this._address);
  }

  @Output() addressChange = new EventEmitter<Address>();


  constructor() { }

}
