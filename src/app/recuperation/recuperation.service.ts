import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecuperationService {

  constructor(private http:HttpClient) {}
   
  addAccount(data:any ){
    return this.http.post('http://localhost:4001/password-reset',data)
  }
}
