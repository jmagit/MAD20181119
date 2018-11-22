import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config/config.component';
import { DatosComponent } from './datos/datos.component';
import { PreferenciasComponent } from './preferencias/preferencias.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: ConfigComponent, pathMatch: 'full' },
  {path: 'datos', component: DatosComponent},
  {path: 'pref', component: PreferenciasComponent},
];

@NgModule({
  declarations: [ConfigComponent, DatosComponent, PreferenciasComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ConfigModule { }
