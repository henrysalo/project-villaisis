import { LoginComponent } from './../components/user/login/login.component';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class FormActivateByLoginService implements CanActivate {

  constructor(private router:Router) { }
  
  canActivate(){
    if(!((localStorage.getItem('login')=='true'))){
      console.log(localStorage.getItem('login'));
      console.log('No estás loggeado');
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
