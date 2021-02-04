import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

 
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

}
