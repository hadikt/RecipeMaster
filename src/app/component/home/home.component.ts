import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { recipes } from 'model/receipies';
import { Subject } from 'rxjs';
import { FoodServiceService } from 'src/app/service/food-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  data!:recipes[]

  constructor(private service:FoodServiceService ,activateroute:ActivatedRoute,private router:Router){

  }
  ngOnInit(): void {
    this.foods('ap')
  }
  foods(res:string){
   this.service.getrecipe(res).subscribe(val=>{
    this.data=val
    console.log(this.data);

})
  }
  searchfuc(id:string){
    if(id)
  this.router.navigateByUrl(`/food/`+id)
  }
  }
