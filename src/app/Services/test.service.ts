import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()


export class TestService {
 ///construyendo el login v11.5.6

  private baseUrl = 'http://127.0.0.1:8000/api';

  
  constructor( private http: HttpClient) { }

   //login(data){
    //return this.http.post(`${baseUrl}/login`, data)
   //}

   login(data) {
      return this.http.post(`${this.baseUrl}/login`, data)
    }
}
