import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  public getProductos(){
    const url=`http://localhost:7000/products`
    return this.http.get(url)
  }


  public createProductos(body:any){
    const url=`http://localhost:7000/products`
    return this.http.post(url,body)
  }

  public deleteProducto(body:any){
    const url=`http://localhost:7000/productsd/`
    return this.http.put(url,body)
  }


  public updateProducto(body:any){
    const url=`http://localhost:7000/products`
    return this.http.put(url,body)
  }

}
