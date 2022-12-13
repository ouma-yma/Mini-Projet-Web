import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsingleService {
  REST_API: string = 'http://localhost:4001/allCommentaires';

  constructor(private http:HttpClient) { }

  createOrder(order:any){
    return this.http.post('http://localhost:4001/createOrder',order)
  }
  createCommentaire(commentaire:any){
    return this.http.post('http://localhost:4001/createCommentaire',commentaire)
  }
  getNumber(number: Number){
    return this.http.post('http://localhost:4001/CommentaireNumber', number)
  }
  getAllCommentaire(){
    return this.http.get(`${this.REST_API}`)
  }
}

