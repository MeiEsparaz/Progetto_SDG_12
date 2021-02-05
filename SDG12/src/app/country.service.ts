import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }
  SearchCountry(query: string)
  const url ='';
      let obsCountry = this.http.get(url);
      return obsCountry;
    }

      getCountry(id: string) {
    const url = ``;
    console.log(this.http.get(url));
    return this.http.get(url);
  }
}
