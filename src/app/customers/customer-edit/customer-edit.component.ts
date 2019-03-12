import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as customerActions from '../state/customer.actions';
import * as fromCustomer from '../state/customer.reducer';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromCustomer.AppState>
  ) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      customer_name: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      sex: ['', Validators.required],
      avatar: ['', Validators.required],
      phone: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required],
      code: ['', Validators.required],
      id: null
    });

    const customer$: Observable<Customer> = this.store.select(
      fromCustomer.getCurrentCustomer
    );

    customer$.subscribe(currentCustomer => {
      if (currentCustomer) {
        this.customerForm.patchValue({
          customer_name: currentCustomer.customer_name,
          email: currentCustomer.email,
          username: currentCustomer.username,
          phone: currentCustomer.phone,
          avatar: currentCustomer.avatar,
          sex: currentCustomer.sex,
          district: currentCustomer.district,
          city: currentCustomer.city,
          lat: currentCustomer.lat,
          lng: currentCustomer.lng,
          code: currentCustomer.code,
          id: currentCustomer.id
        });
      }
    });
  }

  updateCustomer() {
    const updatedCustomer: Customer = {
      customer_name: this.customerForm.get('customer_name').value,
      email: this.customerForm.get('email').value,
      username: this.customerForm.get('username').value,
      phone: this.customerForm.get('phone').value,
      avatar: this.customerForm.get('avatar').value,
      city: this.customerForm.get('city').value,
      district: this.customerForm.get('district').value,
      code: this.customerForm.get('code').value,
      lat: this.customerForm.get('lat').value,
      lng: this.customerForm.get('lng').value,
      sex: this.customerForm.get('sex').value,
      id: this.customerForm.get('id').value
    };
    console.log(updatedCustomer);

    this.store.dispatch(new customerActions.UpdateCustomer(updatedCustomer));
  }

}
