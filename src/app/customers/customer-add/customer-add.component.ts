import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, State, select } from '@ngrx/store';
import * as customerActions from '../state/customer.actions';
import * as fromCustomer from '../state/customer.reducer';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromCustomer.AppState>
  ) {}

  ngOnInit() {
    this.customerForm = this.fb.group({
      customer_name: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      avatar: ['', Validators.required],
      district: ['', Validators.required],
      commune: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
      code: ['', Validators.required],
      active: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required],
      sex: ['', Validators.required],
      status: ['', Validators.required],
      order_id: ['', Validators.required]
    });
  }

  createCustomer() {
    console.log('newCustomer');
    const newCustomer: Customer = {
      customer_name: this.customerForm.get('customer_name').value,
      email: this.customerForm.get('email').value,
      username: this.customerForm.get('username').value,
      city: this.customerForm.get('city').value,
      district: this.customerForm.get('district').value,
      commune: this.customerForm.get('commune').value,
      phone: this.customerForm.get('phone').value,
      avatar: this.customerForm.get('avatar').value,
      active: this.customerForm.get('active').value,
      lat: this.customerForm.get('lat').value,
      lng: this.customerForm.get('lng').value,
      sex: this.customerForm.get('sex').value,
      status: this.customerForm.get('status').value,
      order_id: this.customerForm.get('order_id').value
    };
    console.log(newCustomer);
    this.store.dispatch(new customerActions.CreateCustomer(newCustomer));

    // this.customerForm.reset();
  }
}
