import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Component1Component } from './component1/component1.component'
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';

import { UserModule } from "./../user/user.module";


@NgModule({
  declarations: [
    Component1Component,
    Component2Component,
    Component3Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserModule
  ],
  exports: [
    Component1Component,
    Component2Component,
    Component3Component
  ]
})
export class ContentModule { }
