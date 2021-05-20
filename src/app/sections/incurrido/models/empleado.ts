export class Empleado {
  NOMBRE: string;
  APELLIDO: string;
  NRO_EMPLEADO: number;
  DATO_INCURRIDO: Array<DatoIncurrido>;
}
export class DatoIncurrido {
  FECHA: string;
  HORAS_INCURRIDAS: number;
  TAREA: string;
}
export class RegMesIncurrido {
  empleado: Empleado;
  listaIncurrido: Array<DatoIncurrido>;
}
