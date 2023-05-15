import { Component, EventEmitter, Output } from '@angular/core';
import { personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  public personajeAdd: personaje[]= [
    { nombre : '', poder : 0} 
  ];
  @Output()
  public nuevoPersonaje : EventEmitter<personaje> = new EventEmitter();

   public emitPersonaje() : void{
    this.nuevoPersonaje.emit(this.personajeAdd[0]);
   }
}
