import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { main, recipes } from 'model/receipies';
import { FoodServiceService } from 'src/app/service/food-service.service';
import { Observable } from 'rxjs';
import { __param } from 'tslib';
@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent {
  foods!:recipes
  id!:string
  // @Input()data?:recipes
constructor(private activatedroute:ActivatedRoute,private service:FoodServiceService){
 this.activatedroute.params.subscribe((param)=>{
  service.getfood(param['url']).subscribe(val=>{
    this.foods=val
    console.log(this.foods);

  })
 })

}
}
