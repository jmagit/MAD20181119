import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../common-app/notification.service';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {
  nombre: string = 'Mundo';
  listado = [
    {id: 1, nombre: 'Madrid'},
    {id: 2, nombre: 'sevilla'},
    {id: 3, nombre: 'BARCELONA'},
    {id: 4, nombre: 'ValenciA'},
  ];
  idProvincia = 2;
  fontsize = 12;

  resultado = '';
  visible = true;
  estetica = { error: true, importante: false, urgente: true, };

  constructor(public notify: NotificationService) { }

  ngOnInit() {
  }

  saluda() {
    this.resultado = `Hola ${this.nombre}`;
  }
  despide() {
    this.resultado = `Adios ${this.nombre}`;
  }
  di(algo: string) {
    this.resultado = `Dice ${algo}`;
  }

  cambia() {
    this.visible = !this.visible;
    this.estetica.error = !this.estetica.error;
    this.estetica.importante = !this.estetica.importante;
  }

  calcula(a: number, b: number): number {
    return a + b;
  }

  add(provincia: string) {
    if (provincia) {
      const id = this.listado.length ? this.listado[this.listado.length - 1].id + 1 : 1;
      this.listado.push({id: id, nombre: provincia});
      this.idProvincia = id;
    }
  }

  // tslint:disable:member-ordering
  idiomas = [
    { codigo: 'es', region: 'España' },
    { codigo: 'pt', region: 'Portuges' },
    { codigo: 'en-US', region: 'USA' }
  ];
  idioma = this.idiomas[0].codigo;
  resultados: any[] = [];
  valCalculadora = 123;
  // tslint:enable:member-ordering
  ponResultado(origen: string, valor: any) {
    this.resultados.push({
      pos: this.resultados.length + 1,
      origen: origen,
      valor: valor
    });
  }

}
