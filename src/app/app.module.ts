import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { Register_mobile_subscriptionComponent } from './mobile_subscription/page/register_mobile_subscription.component';
import {MatButtonModule} from "@angular/material/button";
import { TableComponent } from './components/table/table.component';
import {MatSelectModule} from "@angular/material/select";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClientModule} from "@angular/common/http";

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

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
        HttpClientModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
