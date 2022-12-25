import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MobileSubscriptionService} from "../../mobile_subscription/service/mobile-subscription.service";
import {MatPaginator} from "@angular/material/paginator";
import {Subscription} from "rxjs";
import {MatSort, Sort} from "@angular/material/sort";
import {mobileSubscriptions} from "../../mobile_subscription/model/mobile_subscription";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  columns: String[] = ["Month", "Network access technology", "Type of plan", "Number of subscriptions (Subscriptions)", "Actions"]
  dataSource!: MatTableDataSource<any>
  refresh!: Subscription

  @Output() mobileSubscriptionData = new EventEmitter;
  constructor(private api:MobileSubscriptionService) { }

  ngOnInit() {

    this.getAllMobileSubscription();

    this.refresh = this.api.refresh.subscribe(()=> {
      this.getAllMobileSubscription()
    })
  }

  getAllMobileSubscription(){
    this.api.getAllMobileSubscription().subscribe((response)=> {
      this.dataSource = new MatTableDataSource(response);
    })
  }

  putMobileDescription(row: mobileSubscriptions){
    this.mobileSubscriptionData.emit(row)
  }

  deleteMobilSubscription(id: number){
    this.api.deleteMobileSubscription(id).subscribe({
      next: response =>{
        console.log(response)
      }
    })
  }
}
