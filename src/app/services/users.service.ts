import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

   url = 'http://localhost:7000/users'

  public getUsers(){
    // const url=`http://localhost:4000/pizzas`
    return this.http.get(this.url)
  }

  public getUsersbyID(id:any){
    // const url=`http://localhost:4000/pizzas`
    return this.http.get(this.url+id)
  }
  public CreateUsers(body:any){
    // const url=`http://localhost:4000/pizzas`
    return this.http.post(this.url,body)
  }
  public UpdateUsers(body:any){
    // const url=`http://localhost:4000/pizzas`
    return this.http.put(this.url,body)
  }

  public deleteRol(body:any){
    const url=this.url+`d/`
    return this.http.put(url,body)
  }

  // public deletePizza(piz_id:any){
  //   const url= this.url+`?piz_id=`+piz_id
  //   return this.http.delete(url)
  // }

 

  

}
