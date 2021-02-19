
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  isLoginSuccess=false;
  constructor(private loginService : LoginServiceService,private router :Router){
    this.loginService.loginValue.subscribe((value)=>{
      this.isLoginSuccess=value;
    })
  }
  ngOnInit(){
    this.router.navigate(['']);
  }
  
  

}
