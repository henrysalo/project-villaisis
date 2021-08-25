import { HomeComponent } from './home/home.component';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { Component3Component } from './components/component3/component3.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'component1', component: Component1Component},
  {path: 'component2', component: Component2Component},
  {path: 'component3', component: Component3Component},
  {path: 'home'||''||'**', component: HomeComponent},
  {path: ''||'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
