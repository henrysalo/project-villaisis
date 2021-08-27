import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiclientService } from "../../services/apiclient.service";
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from "./login/login.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  imports: [
    CommonModule,
    SocialLoginModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    LoginComponent,
    ContactoComponent    
  ],
  declarations: [
    LoginComponent,
    ContactoComponent
  ],
  providers:[
    ApiclientService,
        {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '166338706885-62e6viosj2i0g7g90itrr773kone4ud1.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ]
})
export class UserModule { }
