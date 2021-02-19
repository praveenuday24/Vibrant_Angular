import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { LoginComponentComponent } from './login-component/login-component.component';

const routes: Routes = [
  {path:"" , component:LoginComponentComponent},
  {path:"home" , component:HomecomponentComponent},
  {path:"form" , component:FormcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
