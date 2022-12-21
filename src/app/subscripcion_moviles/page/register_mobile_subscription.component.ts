import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
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

}
