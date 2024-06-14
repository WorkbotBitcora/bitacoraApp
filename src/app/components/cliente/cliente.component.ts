import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{
  nombreUsuario : string = "";
  
  ngOnInit(): void {
    this.nombreUsuario = localStorage.getItem('username')|| "SIN NOMBRE" ;
  }
  
  public logOut() {
    localStorage.clear();
    console.log("entro al logOut")
  }

}

