import { Component, OnInit } from '@angular/core';
import { Clremedios } from '../models/CLremedios';


@Component({
  selector: 'app-remedios-all',
  templateUrl: './remedios-all.page.html',
  styleUrls: ['./remedios-all.page.scss'],
})
export class RemediosAllPage implements OnInit {


  msgError = ""
  buttonEliminarDisabled = false
  buttonLeerDisabled = false
  buttonActualizarDisabled = false
  buttonCrearDisabled = false
  remedios: Clremedios = { id: 1, nombre: '', descripcion: '', dosis: '' };;
  constructor() { }

  ngOnInit() {
  }
  public id: string = '';


  leer() {}
  eliminar() { }
  grabar() { }
  actualizar() { }
  grabarActualizarAutomatico() { }


}
