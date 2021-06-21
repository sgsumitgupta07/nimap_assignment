import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public addressdata: any;

  constructor( private myser : MyserviceService ) { }

  ngOnInit(): void {

    this.myser.selectData("addressdata").subscribe(
      (res)=>{
          console.log(res) 
          this.addressdata = res;
      })

  }

}
