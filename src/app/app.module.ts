import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HeaderComponent } from './header/header.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomecomponentComponent,
    LoginComponentComponent,
    HeaderComponent,
    FormcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
