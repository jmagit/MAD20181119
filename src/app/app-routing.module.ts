import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PersonasListComponent, PersonasViewComponent, PersonasEditComponent, PersonasAddComponent } from './personas/personas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './login/services';
import { BlogListComponent, BlogAddComponent, BlogEditComponent, BlogViewComponent } from './blog/blog.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'inicio', component: HomeComponent},
  {path: 'demos', component: DemosComponent},
  {path: 'chisme/de/hacer/numeros', component: CalculadoraComponent},
  {path: 'personas', component: PersonasListComponent },
  {path: 'personas/add', component: PersonasAddComponent, canActivate: [AuthGuard] },
  {path: 'personas/:id/edit', component: PersonasEditComponent, canActivate: [AuthGuard] },
  {path: 'personas/:id', component: PersonasViewComponent },
  {path: 'personas/:id/:kk', component: PersonasViewComponent },
  {path: 'empleados', children: [
    {path: '', component: PersonasListComponent },
    {path: 'add', component: PersonasAddComponent },
    {path: ':id/edit', component: PersonasEditComponent },
    {path: ':id', component: PersonasViewComponent },
    {path: ':id/:kk', component: PersonasViewComponent },
  ]},
  {path: 'pepito/grillo', redirectTo: '/personas/2' },
  {path: 'config', loadChildren: './config/config.module#ConfigModule' },
  { path: 'blog', children: [
    { path: '', component: BlogListComponent},
    { path: 'add', component: BlogAddComponent},
    { path: ':id/edit', component: BlogEditComponent},
    { path: ':id', component: BlogViewComponent},
    { path: ':id/:kk', component: BlogViewComponent},
  ]},
  {path: '404.html', component: PageNotFoundComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
