import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartDetService {

  constructor(private http:HttpClient) { }

  //agregar metodos
  public getFactDet(id:any){
    const url=`http://localhost:7000/cartDet?cart_cab_id=1`+id
    return this.http.get(url)
  }
  
  public CreateCartDet(body:any){
    const url=`http://localhost:7000/cartDet`
    return this.http.post(url,body)
  }
  


}
