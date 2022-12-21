import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { Register_mobile_subscriptionComponent } from './subscripcion_moviles/page/register_mobile_subscription.component';
import {MatButtonModule} from "@angular/material/button";
import { TableComponent } from './components/table/table.component';
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [
    AppComponent,
    Register_mobile_subscriptionComponent,
    TableComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
