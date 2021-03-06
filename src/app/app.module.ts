import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeEs, 'es', localeEsExtra);

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CommonAppModule } from './common-app/common-app.module';
import { ClientesModule } from './clientes/clientes.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { IndraCoreModule, LoggerService, ERROR_LEVEL } from 'src/indra-core';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';
import { NotificationComponent } from './notification/notification.component';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PERSONAS_COMPONENTS } from './personas/personas.component';
import { LoginComponent } from './login/login.component';
import { PersonasViewModelService, PersonasViewModelDAOService } from './personas/personas.service';
import { LoggingInterceptor, AuthInterceptor } from './login/services';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BLOG_COMPONENT } from './blog/blog.component';
import {EditorModule} from 'primeng/editor';
import {InplaceModule} from 'primeng/inplace';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemosComponent,
    NotificationComponent,
    DinamicoComponent,
    CalculadoraComponent,
    PERSONAS_COMPONENTS,
    LoginComponent,
    MenuComponent,
    PageNotFoundComponent,
    BLOG_COMPONENT
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule,
    IndraCoreModule, CommonAppModule, ClientesModule, ProveedoresModule,
    EditorModule, InplaceModule,
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: PersonasViewModelService, useClass: PersonasViewModelDAOService },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
