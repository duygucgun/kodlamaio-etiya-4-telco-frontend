import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CityService } from 'src/app/features/city/services/city/city.service';
import { Address } from '../../models/address';
import { City } from '../../models/city';
import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customer/customers.service';

@Component({
  templateUrl: './add-customer-address.component.html',
  styleUrls: ['./add-customer-address.component.css'],
})
export class AddCustomerAddressComponent implements OnInit {
  addressForm!: FormGroup;
  selectedCustomerId!: number;
  selectedAddressId!: number;
  customer!: Customer;
  addressToUpdate!: Address;
  cityList!: City[];
  isShow: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomersService,
    private router: Router,
    private messageService: MessageService,
    private cityService: CityService
  ) {}

  ngOnInit(): void {
    this.getParams();
    this.getCityList();
  }

  getParams() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.selectedCustomerId = Number(params['id']);
      if (params['addressId'])
        this.selectedAddressId = Number(params['addressId']);

      this.getCustomerById();
    });
  }

  getCustomerById() {
    if (this.selectedCustomerId == undefined) {
      //toast
    } else {
      this.customerService
        .getCustomerById(this.selectedCustomerId)
        .subscribe((data) => {
          this.customer = data;

          if (
            this.customer.addresses?.find(
              (address) => address.id == this.selectedAddressId
            ) !== undefined
          )
            this.addressToUpdate = this.customer.addresses?.find(
              (address) => address.id == this.selectedAddressId
            ) as Address; // Address | undefined,  as Address -> Address

          this.createAddressForm();
        });
    }
  }

  createAddressForm() {
    this.addressForm = this.formBuilder.group({
      city: [
        this.addressToUpdate?.city.id || 0,
        [Validators.required, Validators.min(1)],
      ],
      street: [this.addressToUpdate?.street || '', Validators.required],
      flatNumber: [this.addressToUpdate?.flatNumber || '', Validators.required],
      description: [
        this.addressToUpdate?.description || '',
        Validators.required,
      ],
    });
  }

  getCityList() {
    this.cityService.getList().subscribe((data) => {
      this.cityList = data;
    });
  }

  save() {
    if (this.addressForm.valid) {
      this.isShow = false;
      if (this.addressToUpdate === undefined) {
        this.add();
        this.router
          .navigateByUrl(`/dashboard/customers/customer-address/${this.selectedCustomerId})
        }`);
      } else {
        this.update();
        this.messageService.add({
          detail: 'This address updated',
          severity: 'info',
          key: 'etiya-custom',
        });
        this.router.navigateByUrl(
          `/dashboard/customers/customer-address/${this.selectedCustomerId}`
        );
      }
    } else {
      this.isShow = true;
    }
  }
  cancel() {
    this.router.navigateByUrl(
      `/dashboard/customers/customer-address/${this.selectedCustomerId}`
    );
  }

  add() {
    if (this.addressForm.valid) {
      const addressToAdd: Address = {
        ...this.addressForm.value,
        city: this.cityList.find(
          (city) => city.id == this.addressForm.value.city
        ),
        isMain: this.isMainAdd(),
      };
      this.customerService.addAddress(addressToAdd, this.customer).subscribe();
      this.router.navigateByUrl(
        '/dashboard/customers/customer-address/' + this.selectedCustomerId
      );
    }
  }
  isMainAdd() {
    return this.customer.addresses?.length == 0 ? true : false;
  }

  update() {
    if (this.addressForm.valid) {
      const addressToUpdate: Address = {
        ...this.addressForm.value,
        id: this.selectedAddressId,
        city: this.cityList.find(
          (city) => city.id == this.addressForm.value.city
        ),
        isMain: this.getSelectedIsMain(),
      };
      this.customerService
        .updateAddress(addressToUpdate, this.customer)
        .subscribe();
    }
    this.router.navigateByUrl(
      '/dashboard/customers/customer-address/' + this.selectedCustomerId
    );
  }
  getSelectedIsMain() {
    let selectedAddress = this.customer.addresses?.find(
      (address) => address.id == this.selectedAddressId
    );
    return selectedAddress?.isMain;
  }

  closeIconRoute() {
    this.router.navigateByUrl(
      `/dashboard/customers/customer-address/${this.selectedCustomerId}`
    );
  }
}
