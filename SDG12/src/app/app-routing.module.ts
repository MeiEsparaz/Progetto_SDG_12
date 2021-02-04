import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountryComponent} from './country/country.component';
import {PaginaComponent} from './pagina/pagina.component';


const routes: Routes = [
{ path: 'pagina', component: PaginaComponent },
{ path: 'items/:id', component:CountryComponent },
{path: '',   redirectTo: '/pagina', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }