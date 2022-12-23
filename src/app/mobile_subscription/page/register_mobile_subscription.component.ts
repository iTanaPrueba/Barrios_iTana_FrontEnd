import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {mobileSubscriptions} from "../model/mobile_subscription";
import {MobileSubscriptionService} from "../service/mobile-subscription.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'register_mobile_subscription',
  templateUrl: './register_mobile_subscription.html',
  styleUrls: ['./register_mobile_subscription.component.css']
})
export class Register_mobile_subscriptionComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private formBuilder: FormBuilder, public mobileSubscriptionService: MobileSubscriptionService){
    this.registerForm = this.formBuilder.group({
      month: new FormControl('', [Validators.required, Validators.pattern(/^((0[1-9])|(1[0-2]))$/)]),
      network: new FormControl('', [Validators.required]),
      plan: new FormControl('', [Validators.required]),
      subscriptions: new FormControl('', [Validators.required, Validators.pattern(/^([0-9]+)$/)])
    })
  }

  registerForm!: FormGroup;

  add(form: mobileSubscriptions){
    this.mobileSubscriptionService.postMobileSubscriptions(form).subscribe(data=>{
      console.log(data);
    })
  }

}
