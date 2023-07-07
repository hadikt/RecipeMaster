import { Component } from '@angular/core';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  isshow:any=false
constructor(private loading:LoadingService){
  this.isshow = this.loading.isloading
}
}
