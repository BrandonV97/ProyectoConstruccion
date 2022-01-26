import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http:HttpClient) { }

  public getRoles(){
    const url=`http://localhost:3000/roles`
    return this.http.get(url)
  }

  // public deletePizza(piz_id:any){
  //   const url=`http://localhost:4000/pizzas?piz_id=`+piz_id
  //   return this.http.delete(url)
  // }

  public createRoles(body:any){
    const url=`http://localhost:3000/roles`
    return this.http.post(url,body)
  }

  public deleteRol(rol_id:any){
    const url=`http://localhost:3000/rolesd?rol_id=`+rol_id
    return this.http.put(url,rol_id)
  }


  public putUpdateRol(body:any){
    const url=`http://localhost:3000/roles`
    return this.http.put(url,body)
  }

}
