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
  currentUserDetails:any={};
  formActionType:string="";
  private loginSuccess=false;
  loginValue : Subject<boolean> = new Subject<boolean>();
  currentUpdatingUserDetails:any={};
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
   this.currentUpdatingUserDetails=user;
  }

  updateUserData(updateUserDetails:any){
    this.currentUserDetails=this.currentUpdatingUserDetails;
    this.http.post("https://reqres.in/api/user"+this.currentUserDetails.id,updateUserDetails).subscribe(data => {
      // console.log(data);
  });
  var currentId=this.currentUserDetails.id;

  var index = this.userList.findIndex((p: { id: number; }) => p.id == currentId);
  this.userList[index].first_name=updateUserDetails.userPrimeData.first_name;
  this.userList[index].last_name=updateUserDetails.userPrimeData.last_name;
  this.userList[index].email=updateUserDetails.userPrimeData.email;

  }

  
}
