import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customer/customers.service';

@Component({
  selector: 'app-list-address-info',
  templateUrl: './list-address-info.component.html',
  styleUrls: ['./list-address-info.component.css'],
})
export class ListAddressInfoComponent implements OnInit {
  customer!: Customer;
  constructor(
    private customersService: CustomersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customersService.customerToAddModel$.subscribe((state) => {
      this.customer = state;
    });
  }
  selectAddressId(id: number) {
    let address = this.customer.addresses?.find((c) => c.id == id);
    this.router.navigateByUrl(`update-address-info/${address?.id}`);
  }
}
