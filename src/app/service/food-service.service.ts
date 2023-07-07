import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { main, recipes } from 'model/receipies';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor(private http:HttpClient ) {}
  APP_KEY=environment.app_key;
  APP_ID=environment.app_id
   baseurl=environment.base

  getrecipe(input:string):Observable<recipes[]>{
    return this.http.get<main>(this.baseurl,{
      params:{
        app_id:this.APP_ID,
        app_key:this.APP_KEY,
        q:input
      }
    }).pipe(map(res=>res.hits))
  }
  getfood(link:string){
return this.http.get<recipes>(link)
console.log(link);

  }
}
