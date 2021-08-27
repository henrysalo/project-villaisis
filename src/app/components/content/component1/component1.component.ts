import { Cliente } from '../../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiclientService } from "../../../services/apiclient.service";

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
