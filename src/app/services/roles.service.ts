import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http:HttpClient) { }

  public getRoles(){
    const url=`http://localhost:7000/roles`
    return this.http.get(url)
  }

  public createRoles(body:any){
    const url=`http://localhost:7000/roles`
    return this.http.post(url,body)
  }

  public deleteRol(body:any){
    const url=`http://localhost:7000/rolesd/`
    return this.http.put(url,body)
  }


  public putUpdateRol(body:any){
    const url=`http://localhost:7000/roles`
    return this.http.put(url,body)
  }

}
