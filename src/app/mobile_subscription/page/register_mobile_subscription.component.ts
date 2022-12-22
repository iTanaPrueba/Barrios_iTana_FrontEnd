import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {mobileSubscriptions} from "../model/mobile_subscription";

@Component({
  selector: 'register_mobile_subscription',
  templateUrl: './register_mobile_subscription.html',
  styleUrls: ['./register_mobile_subscription.component.css']
})
export class Register_mobile_subscriptionComponent implements OnInit {

  registerForm!: FormGroup;
  redValue!: String;
  planValue!: String;
  ngOnInit(): void {
  }

  add(form: mobileSubscriptions){

  }

  constructor(private formBuilder: FormBuilder){
    this.registerForm = this.formBuilder.group({
      month: new FormControl('', [Validators.required, Validators.pattern(/^((0[1-9])|(1[0-2]))$/)]),
      network: new FormControl('', [Validators.required]),
      plan: new FormControl('', [Validators.required]),
      subscriptions: new FormControl('', [Validators.required, Validators.pattern(/^([0-9]+)$/)])
    })
  }
}
