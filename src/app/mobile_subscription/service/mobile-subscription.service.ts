import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject, tap} from "rxjs";
import { environment } from "../../../environments/environment";
import {mobileSubscriptions} from "../model/mobile_subscription";

@Injectable({
  providedIn: 'root'
})
export class MobileSubscriptionService {
  APIREST = environment.mobileBaseAPI;
  basePath = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  private _refresh = new Subject<void>();

  get refresh(){
    return this._refresh;
  }
  getAllMobileSubscription(){
    return this.http.get<mobileSubscriptions[]>(this.APIREST);
  }

  postMobileSubscriptions(data: mobileSubscriptions){
    return this.http.post<mobileSubscriptions>(this.APIREST, data)
      .pipe(
        tap(() => {
          this._refresh.next()
        })
      )
  }

  putMobileSubscription(data:mobileSubscriptions, id:number){
    return this.http.put<mobileSubscriptions>(this.APIREST + '/' + id + '?month=' + data.month + '&network=' + data.network + '&plan=' + data.plan + '&subscriptions=' + data.subscriptions, data)
      .pipe(
        tap(() => {
          this._refresh.next()
        })
      )
  }
  //http://localhost:8080/api/v1/mobileSubscription/5?month=string&network=string&plan=string&subscriptions=0

  deleteMobileSubscription(id: number){
    return this.http.delete<mobileSubscriptions>(this.APIREST + '/' + id)
      .pipe(
        tap(()=>{
          this.refresh.next()
        })
      )
  }
}
