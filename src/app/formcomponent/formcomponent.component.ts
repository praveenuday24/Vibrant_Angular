import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent implements OnInit {
  genders=["male","female"];
  postData:any;
  signUpForm!: FormGroup;
  actionType:any="";
  constructor(private http : HttpClient,private loginService : LoginServiceService,private router :Router) { }

  ngOnInit(): void {
    this.signUpForm= new FormGroup({
      'userPrimeData': new FormGroup({
        'first_name': new FormControl(null,[Validators.required]),
        'last_name': new FormControl(null,[Validators.required]),
        'username': new FormControl(null,[Validators.required]),
        'email' : new FormControl(null,[Validators.required,Validators.email]),
        'gender' : new FormControl('male'),
      }),
      'phone' : new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      'address' : new FormControl(null,[Validators.required]),
      'pincode' : new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
    })
    if(this.loginService.formActionType == "update"){
      this.signUpForm.patchValue({
        'userPrimeData':{
          'first_name':this.loginService.currentUpdatingUserDetails.first_name,
          'lastn_name':this.loginService.currentUpdatingUserDetails.last_name,
          'email' :this.loginService.currentUpdatingUserDetails.email
        }
      });
      this.actionType=this.loginService.formActionType;
    }
    if(!(this.loginService.formActionType == "update")){
      this.actionType="create";
    }
  }
  onSubmit(){
    if(!(this.loginService.formActionType == "update")){
      this.postData = this.signUpForm.value.userPrimeData;
      this.http.post('https://reqres.in/api/users', this.postData).subscribe(data => {
          // console.log(data);
          alert("User Created");
      })
      this.postData.avatar=this.loginService.userList[0].avatar;
      this.loginService.userList.push(this.postData);
      this.router.navigate(['/home']);
    }
    if(this.loginService.formActionType == "update"){
      this.loginService.updateUserData(this.signUpForm.value);
      this.router.navigate(['/home']);
      alert("User Updated");
    }
  }

}
