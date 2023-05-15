import { Component } from '@angular/core';
import { personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public personajes : personaje [] = [
    {nombre : "Goku", poder : 20000}
  ];
  public obtenNuevoPersonaje(personaje : personaje) : void{
    console.log(personaje);
  }
}
