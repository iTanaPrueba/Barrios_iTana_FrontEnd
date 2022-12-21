import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Subscripcion_movil} from "./subscripcion_moviles/model/subscripcion_movil";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  registrarFormulario!: FormGroup;
  title = 'front_end';

  agregar(form: Subscripcion_movil){

  }
}
