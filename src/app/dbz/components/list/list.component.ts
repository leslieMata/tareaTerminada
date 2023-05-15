import { Component, Input } from '@angular/core';
import { personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public personajeList : personaje[] =[{
    nombre : " Vegeta",
    poder : 20000
  }];
}
