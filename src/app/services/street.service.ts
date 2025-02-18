import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootModel } from '../models/root.model';

@Injectable({
  providedIn: 'root'
})
export class StreetService {

   constructor(private http: HttpClient) {}

   getjson(): Observable<RootModel> {
     let url: string = 'https://localhost:7010/api/Street';
     return this.http.get<RootModel>(url);
   }
}
