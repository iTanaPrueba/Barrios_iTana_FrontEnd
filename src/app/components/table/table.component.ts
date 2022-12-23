import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MobileSubscriptionService} from "../../mobile_subscription/service/mobile-subscription.service";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  columns: String[] = ["Month", "Network access technology", "Type of plan", "Number of subscriptions (Subscriptions)"]
  dataSource!: MatTableDataSource<any>
  refresh!: Subscription
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  constructor(private api:MobileSubscriptionService) { }

  ngOnInit() {
    this.getAllMobileSubscription();

    this.refresh = this.api.refresh.subscribe(()=> {
      this,this.getAllMobileSubscription()
    })
  }

  getAllMobileSubscription(){
    this.api.getAllMobileSubscription().subscribe({
      next: response =>{
        this.dataSource = new MatTableDataSource(response)
      }
    })
  }

}
