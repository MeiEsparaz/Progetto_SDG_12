import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { PaginaComponent } from './pagina/pagina.component';
import { NtypeComponent } from './ntype/ntype.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    PaginaComponent,
    NtypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
