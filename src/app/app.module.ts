import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CommonAppModule } from './common-app/common-app.module';
import { ClientesModule } from './clientes/clientes.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { IndraCoreModule, LoggerService, ERROR_LEVEL } from 'src/indra-core';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule,
    IndraCoreModule, CommonAppModule, ClientesModule, ProveedoresModule
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
