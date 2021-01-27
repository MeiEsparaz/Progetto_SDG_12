import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountryComponent} from './country/country.component';
import {NtypeComponent} from './ntype/ntype.component';
import {PaginaComponent} from './pagina/pagina.component';


const routes: Routes = [
{ path: 'pagina', component: PaginaComponent },
{ path: 'country', component: CountryComponent },
{ path: 'ntype', component: NtypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
