import { Cliente } from '../../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiclientService } from "../../../services/apiclient.service";


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  nuevoCliente : string = ''

  constructor(private subirCliente: ApiclientService) { }

  ngOnInit(): void {
  }

  usuarioLoggeado={
    Nombre: localStorage.getItem('nombre'),
    Apellido: localStorage.getItem('apellido'),
    Email: localStorage.getItem('email'),
    Foto: localStorage.getItem('foto'),
  }

  clienteForm = new FormGroup({
    Nombre:new FormControl(""),
    Apellido:new FormControl(""),
    Email:new FormControl(""),
    Celular:new FormControl(""),
    Tipo: new FormControl("")
  })

  tamanos = ['Cristales de Sábila', 'Pencas al por mayor',
  'Sábila ornamental'];

model = new Cliente(
  `${this.usuarioLoggeado.Nombre}`,
  `${this.usuarioLoggeado.Apellido}`,
  '',
  `${this.usuarioLoggeado.Email}`,
  this.tamanos[0]);


submitted = false;
onSubmit() { 
  this.submitted = true;
  this.nuevoCliente=(
    `${this.model.Nombre}`+' '+
    `${this.model.Apellido}`+' '+
    `${this.model.Celular}`+' '+
    `${this.model.Email}`+' '+
    `${this.model.Tipo}`)
  this.subirCliente.createUser({description:`${this.nuevoCliente}`,completed:"false"}).subscribe(data=>{console.log(data)})
  localStorage.clear()
  alert('Información enviada, estaremos en contacto')
  location.reload();
}
}
