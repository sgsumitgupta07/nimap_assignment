import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public showProfile : any;
  public url : any = ""
  constructor( private myser : MyserviceService ) { }

  ngOnInit(): void {

    var id = localStorage.getItem("uid");
    console.log(id);

    this.myser.selectData("userDetails/"+id).subscribe(
      (res)=>{
          console.log(res)
          this.showProfile = res;
        }
      )

  }

    
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target?.result;
      }
    }
  }
public delete(){
  this.url = null;
}

}
