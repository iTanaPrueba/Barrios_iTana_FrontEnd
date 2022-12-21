import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { Registro_subscripcion_movilComponent } from './subscripcion_moviles/page/registro_subscripcion_movil.component';
import {MatButtonModule} from "@angular/material/button";
import { TableComponent } from './components/table/table.component';
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [
    AppComponent,
    Registro_subscripcion_movilComponent,
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
