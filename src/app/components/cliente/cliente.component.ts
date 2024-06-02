import { Component } from '@angular/core';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  
  public logOut() {
    localStorage.clear();
    console.log("entro al logOut")
  }

}

