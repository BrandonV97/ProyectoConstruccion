import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SeccionesService {

  constructor(private http:HttpClient) { }

  public getSecciones(){
    const url=`http://localhost:7000/sections`
    return this.http.get(url)
  }

  // public deletePizza(piz_id:any){
  //   const url=`http://localhost:4000/pizzas?piz_id=`+piz_id
  //   return this.http.delete(url)
  // }

  public createSecciones(body:any){
    const url=`http://localhost:7000/sections`
    return this.http.post(url,body)
  }

  public deleteSecciones(body:any){
    const url=`http://localhost:7000/sectionsd/`
    return this.http.put(url,body)
  }


  public updateSecciones(body:any){
    const url=`http://localhost:7000/sections`
    return this.http.put(url,body)
  }

}
