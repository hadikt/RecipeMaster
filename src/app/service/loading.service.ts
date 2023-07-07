import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
isloading=new Subject<boolean>
  constructor() { }

 show(){
  this.isloading.next(true)
 }
 hide(){
  this.isloading.next(false)
 }

}
