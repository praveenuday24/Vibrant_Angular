import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface loginModel{
  mailId: string,
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  userLoginDetail:loginModel={
    mailId:"praveenuday24@gmail.com",
    password:"qwerty"
  }
  formActionType:string="";
  private loginSuccess=false;
  loginValue : Subject<boolean> = new Subject<boolean>();
  updateUserDetails:any={};
  userList:any=[];
  constructor(private http: HttpClient) { 

  }

  toggleLoginAuthentication(value:boolean){
    this.loginSuccess=value;
    this.loginValue.next(this.loginSuccess);
  }

  getUsersList(){
     this.http.get("https://reqres.in/api/users?page=2").subscribe(response=>{
      this.userList=response;
      this.userList=(this.userList.data);
    });;
  }

  getDetailsOnUpdate(user:any){
   this.updateUserDetails=user;
   this.updateUserData(user);
  }

  updateUserData(userData:any){
    this.http.post("https://reqres.in/api/user"+userData.id,userData).subscribe(data => {
      console.log(data);
  })
  }

  
}
