import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Subscripcion_movil} from "../model/subscripcion_movil";

@Component({
  selector: 'app-page',
  templateUrl: './registro_subscripcion_movil.component.html',
  styleUrls: ['./registro_subscripcion_movil.component.css']
})
export class Registro_subscripcion_movilComponent implements OnInit {

  registrarFormulario!: FormGroup;
  ngOnInit(): void {
  }

  agregar(form: Subscripcion_movil){

  }

}
