import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartCabService {

  constructor(private http:HttpClient) { }

  url= 'http://localhost:7000/cartCab'


  public getCartCab(){
    return this.http.get(this.url)
  }

  public CreateCartCab(body:any){
    return this.http.post(this.url,body)
  }

  public UpdateCartCab(body:any){
    return this.http.put(this.url,body)
  }
  

}