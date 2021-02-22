import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})

export class HomecomponentComponent implements OnInit {

  UsersList:any=[];
  constructor(private http : HttpClient,private router :Router ,private loginService: LoginServiceService) { }
  @Output() updateClicked = new EventEmitter();

  ngOnInit() {
    if(!(this.loginService.userList.length > 1)){
        this.loginService.getUsersList();
        alert("API Called");
    }
  }
  onListUsers(){
    this.UsersList=this.loginService.userList;
  }

  onUpdate(value:any){
    // this.updateClicked.emit(value);
    this.loginService.formActionType= "update";
    this.loginService.getDetailsOnUpdate(value);
    this.router.navigate(['/form']);
  }
  onDelete(id:any,index:any){
    const endpoint = 'https://reqres.in/api/users/' + id;
    this.http.delete(endpoint).subscribe(data => {
      // console.log(data);
  })
    this.UsersList.splice(index,1);
    setTimeout(()=>{
      alert("User Deleted");
    },500)
    
  }
  onCreateUser(){
    this.router.navigate(['/form']);
    this.loginService.formActionType= "create";
  }

}
