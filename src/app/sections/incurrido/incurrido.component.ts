import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { IncurridoService } from 'src/app/global/services/incurrido.service';
import { mockIncurrido } from './models/mock';
import { DatoIncurrido, Empleado } from './models/empleado';


@Component({
  selector: 'app-incurrido',
  templateUrl: './incurrido.component.html',
  styleUrls: ['./incurrido.component.scss'],
  providers: [IncurridoService]
})
export class IncurridoComponent {

  incurridos: any;
  dataCombo: any;
  empleados: Array<Empleado>;
  constructor(private _incurridoService: IncurridoService
  ) {
    this.init();
  }

  init(): void {
    this.initVariables();
    this.obtenerIncuridos();
  }

  initVariables() {
    this.empleados = [];
    this.dataCombo = [];
    this.dataCombo.push({ code: '1', desc: 'Llamada a red fija' });
    this.dataCombo.push({ code: '2', desc: 'Llamadas a móviles y rurales' });
    this.dataCombo.push({ code: '3', desc: 'Llamadas a servicios' });
    this.dataCombo.push({ code: '4', desc: 'Todas' });
  }

  async obtenerIncuridos() {
    //this._incurridoService.obtenerIncurrido().subscribe((data) => {
    let empleados: Array<Empleado> = [];
    let respService = mockIncurrido;
    respService.data.forEach(element => {
      let empleado = new Empleado();
      let incurrido = new DatoIncurrido();
      empleado.NOMBRE = element.NOMBRE;
      empleado.APELLIDO = element.APELLIDO;
      empleado.NRO_EMPLEADO = element.NRO_EMPLEADO;

      incurrido.TAREA = element.TAREA;
      incurrido.FECHA = element.FECHA;
      incurrido.HORAS_INCURRIDAS = element.HORAS_INCURRIDAS;
      empleado.DATO_INCURRIDO = [];
      empleado.DATO_INCURRIDO.push(incurrido);

      empleados.push(empleado);
    });
    this.clusterEmployees(empleados);
    //});
  }

  /**
   * Realiza la agrupación por empleados.
   */
  clusterEmployees(listEmploye: Array<Empleado>) {
    // Buscar Usuarios.
    let empleados: Array<Empleado> = this.buscarUsuarios(listEmploye);


    if (empleados.length > 0) {
      empleados.forEach(elementEm => {
        listEmploye.forEach(elementList => {
          if (elementEm.NRO_EMPLEADO === elementList.NRO_EMPLEADO) {
            let incurrido = elementList.DATO_INCURRIDO[0];
            elementEm.DATO_INCURRIDO.push(incurrido);
          }
        });
      });
    }
    // TODO: Agrupación de las tareas por días
    /*
empleados[0].DATO_INCURRIDO[0].FECHA
Mon May 03 2021 00:00:00 GMT-0400 (hora estándar de Chile)
var asd = new Date(empleados[0].DATO_INCURRIDO[0].FECHA);
undefined
asd
Mon May 03 2021 00:00:00 GMT-0400 (hora estándar de Chile)
    */
    let fechaTest: Date = new Date(2021, 4, 3);
    debugger
    // this.empleados
  }
  buscarUsuarios(listEmploye: Array<Empleado>) {
    let result: Array<Empleado> = [];
    let idEmplrados: Array<number> = [];
    listEmploye.forEach(element => {
      let empleado = new Empleado();
      if (!idEmplrados.includes(element.NRO_EMPLEADO)) {
        idEmplrados.push(element.NRO_EMPLEADO);
        empleado.NRO_EMPLEADO = element.NRO_EMPLEADO;
        empleado.NOMBRE = element.NOMBRE;
        empleado.APELLIDO = element.APELLIDO;
        empleado.DATO_INCURRIDO = [];
        result.push(empleado);
      }
    });
    return result;
  }

  changeInMacroionChange(event: any) {

  }
}
