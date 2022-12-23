import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MobileSubscriptionService {
  basePath = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  private _refresh = new Subject<void>();

  get refresh(){
    return this._refresh;
  }
  getAllMobileSubscription(){
    return this.http.get<any>(this.basePath + 'mobileSubscriptions');
  }

  postMobileSubscriptions(data: any){
    return this.http.post<any>(this.basePath + 'mobileSubscriptions', data)
      .pipe(
        tap(() => {
          this._refresh.next()
        })
      )
  }

  putMobileDescription(data:any, id:number){
    return this.http.put<any>(this.basePath + 'mobileSubscriptions/' + id, data)
      .pipe(
        tap(() => {
          this._refresh.next()
        })
      )
  }
}
