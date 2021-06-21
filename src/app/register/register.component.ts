import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  public Statedata:any;
  public Countrydata:any;
  public url : any = ""
  public userData:any;

  constructor( private fb: FormBuilder, private myser:MyserviceService , private router:Router ) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      userImg:['',Validators.required],
      firstName:['',[Validators.required,Validators.minLength(2)]],
      secondName:['',[Validators.required,Validators.minLength(2)]],
      userEmail:['',[Validators.required,Validators.email]],
      userMobileNo:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      ages:['',Validators.required],
      userState:['',Validators.required],
      userCountry:['',Validators.required],
      address:['',[Validators.required,Validators.minLength(2)]],
    })

    this.myser.selectData("statedata").subscribe(
      (res)=>{
          console.log(res)
          this.Statedata = res;
      })

      this.myser.selectData("countrydata").subscribe(
        (res)=>{
            console.log(res)
            this.Countrydata = res;
        })

  }

    onsubmit(){
      console.log(this.registerForm.value);
  
      this.myser.postData("userDetails", this.registerForm.value).subscribe((res)=>{
        console.log(res);
        this.router.navigate(['/'])
      }) 

      localStorage.setItem("uid",this.userData[0]['id'])
      localStorage.setItem("uname",this.userData[0]['firstName'])

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
