import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listaBotones:any[]=[{
    nombre: "Cristales de sabila",
    link: "component1"
  },{
    nombre: "Pencas por mayor",
    link: "component2"
  },{
    nombre: "Sabila ornamental",
    link: "component3"
  }];

}
