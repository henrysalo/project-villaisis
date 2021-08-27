import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { SharedModule } from './shared/shared.module';
import { UserModule } from './components/user/user.module';
import { ContentModule } from './components/content/content.module';
import { ApiclientService } from './services/apiclient.service';
import { FormActivateByLoginService } from './services/form-activate-by-login.service';

import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    ContentModule,
    UserModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [
    ApiclientService,
    FormActivateByLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
