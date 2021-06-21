import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  public path="http://localhost:3000/"
  constructor( private httpObj:HttpClient ) { }

  showFunction() {
    // console.log('showing values from API')
    console.log(this.httpObj)
    let ans=this.httpObj.get('https://jsonplaceholder.typicode.com/users')
    console.log(ans,typeof(ans));
    return ans
  }

  selectData(keyname:any){
    return this.httpObj.get(this.path+keyname)
  }

  postData(keyname:any,varObj:any)
  {
    console.log(keyname,varObj)
    return this.httpObj.post(this.path+keyname,varObj)
  }

  deleteData(keyname:any){
    return this.httpObj.delete(this.path+keyname)
    //delte( localhost:3000/category/4)
  }

  updateData(keyname:any,varObj:any){
    // console.log(keyname);
    // console.log(varObj);
    return this.httpObj.put(this.path+keyname,varObj);
    //localhost:3000/category/3
  }

}
