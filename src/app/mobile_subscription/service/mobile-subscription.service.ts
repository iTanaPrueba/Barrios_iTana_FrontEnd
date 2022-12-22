import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MobileSubscriptionService {
  basePath = 'http://localhost:4200/';
  constructor(private http: HttpClient) { }

  getAllMobileSubscription(){
    return this.http.get(this.basePath + 'mobileSubscriptions');
  }

  postMobileSubscriptions(data: any){
    return this.http.post<any>(this.basePath + "mobileSubscriptions", data)
  }
}
