import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl ('', Validators.required),
    password: new FormControl ('', Validators.required)
  });
  socialUser = new SocialUser ;
  isLoggedin: boolean = false; 
  inside:any=localStorage.getItem("login")
  
  
  @Output() newItemEvent = new EventEmitter<any>();

  user={
    firstName: 'this.socialUser.firstName',
    lastName: 'this.socialUser.lastName',
    id: 'this.socialUser.id',
    photoUrl: 'this.socialUser.photoUrl'
  }

  
  constructor(
    private socialAuthService: SocialAuthService,
    private route: Router
  ) { }

  ngOnInit() {
    this.socialAuthService.authState.subscribe(async (user:any) => {
      this.socialUser = user;
      localStorage.setItem(`nombre`,`${this.socialUser.firstName}`)
      localStorage.setItem(`apellido`,`${this.socialUser.lastName}`)
      localStorage.setItem(`email`,`${this.socialUser.email}`)
      localStorage.setItem(`foto`,`${this.socialUser.photoUrl}`)
      this.isLoggedin = (user != null);
      if(this.isLoggedin){
        localStorage.setItem('login','true')
        this.route.navigate(['contacto'])
      }
      this.inside=localStorage.getItem("login")
    });     
  }

  loginWithGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  
  logOut(): void {
    this.socialAuthService.signOut();
    this.route.navigate(['home'])
    localStorage.clear()
    this.inside=localStorage.getItem("login")
  }
}




