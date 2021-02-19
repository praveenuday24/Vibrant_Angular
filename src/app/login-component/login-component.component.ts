import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})


export class LoginComponentComponent implements OnInit {
  
  loginMailId: string="";
  loginPassword: string="";
  loginform!: FormGroup;
  constructor(private loginService : LoginServiceService, private router :Router) { }

  ngOnInit(): void {
    this.loginform= new FormGroup({
        'mailId': new FormControl(null,[Validators.required]),
        'password': new FormControl(null,[Validators.required])
      })
  }

  onSubmit(){
    this.loginMailId=this.loginform.value.mailId;
    this.loginPassword=this.loginform.value.password;
    if((this.loginMailId == this.loginService.userLoginDetail.mailId) && (this.loginPassword == this.loginService.userLoginDetail.password)){
      this.loginService.toggleLoginAuthentication(true);
      this.router.navigate(['/home']);
    }
    else{
      this.loginService.toggleLoginAuthentication(false);
    }
  }

}
