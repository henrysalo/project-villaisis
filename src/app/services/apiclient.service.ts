import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: "root"
})
export class ApiclientService {
  URL_API2= 'https://ctd-todo-api.herokuapp.com/v1/tasks';
  AUTHO= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbnJ5c2Fsb3h4eEBnbWFpbC5jb20iLCJpZCI6Mjg3LCJpYXQiOjE2Mjg0NTA2NTB9.Xq8qlLhtMdXmFnmghBvr3Dnro5Pi-PwXi-8AxbLhbWQ';

  constructor(private http: HttpClient) { }

  createUser(user:any){
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": this.AUTHO
    })
    return this.http.post(this.URL_API2, user, {headers});
  }

}
