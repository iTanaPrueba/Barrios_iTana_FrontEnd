import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {mobileSubscriptions} from "../model/mobile_subscription";
import {MobileSubscriptionService} from "../service/mobile-subscription.service";

@Component({
  selector: 'register_mobile_subscription',
  templateUrl: './register_mobile_subscription.html',
  styleUrls: ['./register_mobile_subscription.component.css']
})
export class Register_mobile_subscriptionComponent implements OnInit {
  _updateDataConfirm!: boolean
  idMobileSubscription!: number

  ngOnInit(): void {
  }

  constructor(private formBuilder: FormBuilder, public mobileSubscriptionService: MobileSubscriptionService) {
    this.registerForm = this.formBuilder.group({
      month: new FormControl('', [Validators.required, Validators.pattern(/^((0[1-9])|(1[0-2]))$/)]),
      network: new FormControl('', [Validators.required]),
      plan: new FormControl('', [Validators.required]),
      subscriptions: new FormControl('', [Validators.required, Validators.pattern(/^([0-9]+)$/)])
    })
  }

  registerForm!: FormGroup;

  addMobileSubscription(form: mobileSubscriptions) {
    if (this._updateDataConfirm) {
      this.mobileSubscriptionService.putMobileDescription(form, this.idMobileSubscription).subscribe(data => {
        console.log(data)
      })
      this.registerForm.reset()
      this._updateDataConfirm = false
    } else {
      this.mobileSubscriptionService.postMobileSubscriptions(form).subscribe(data => {
        console.log(data);
      })
      this.registerForm.reset()
    }
  }

  updateMobileSubscription(newData: any) {
    this.registerForm = this.formBuilder.group({
      month: new FormControl(newData.month, [Validators.required, Validators.pattern(/^((0[1-9])|(1[0-2]))$/)]),
      network: new FormControl(newData.network, [Validators.required]),
      plan: new FormControl(newData.plan, [Validators.required]),
      subscriptions: new FormControl(newData.subscriptions, [Validators.required, Validators.pattern(/^([0-9]+)$/)])
    })
    this._updateDataConfirm = true;
    this.idMobileSubscription = newData.id
  }

  cancelUpdate() {
    this.registerForm.reset()
    this._updateDataConfirm = false
  }
}
