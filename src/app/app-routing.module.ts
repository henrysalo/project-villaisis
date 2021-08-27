import { HomeComponent } from './home/home.component';
import { Component1Component } from './components/content/component1/component1.component';
import { Component2Component } from './components/content/component2/component2.component';
import { Component3Component } from './components/content/component3/component3.component';
import { ContactoComponent } from './components/user/contacto/contacto.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormActivateByLoginService } from './services/form-activate-by-login.service';

const routes: Routes = [
  {path: 'component1', component: Component1Component},
  {path: 'component2', component: Component2Component},
  {path: 'component3', component: Component3Component},
  {path: 'contacto', component: ContactoComponent, canActivate: [FormActivateByLoginService]},
  {path: 'home'||'/'||'**', component: HomeComponent},
  {path: ''||'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
