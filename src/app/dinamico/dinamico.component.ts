import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DemosComponent } from '../demos/demos.component';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { PersonasComponent } from '../personas/personas.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css'],
  entryComponents: [HomeComponent, DemosComponent, CalculadoraComponent,
    PersonasComponent ],
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'Personas', componente: PersonasComponent },
    { texto: 'Inicio', componente: HomeComponent},
    { texto: 'Demos', componente: DemosComponent },
    { texto: 'Calculadora', componente: CalculadoraComponent },
  ];

  seleccionado = this.menu[0].componente;

  constructor() { }

  ngOnInit() {
  }

  selecionar(indice: number) {
    this.seleccionado = this.menu[indice].componente;
  }
}
