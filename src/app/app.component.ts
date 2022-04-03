import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Icono {
  icono: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Directivas en Angular';
  
  frutas = [
    {name:'Manzana Roja',icon:'🍎'},
    {name:'Uvas',icon:'🍇'},
    {name:'Platano',icon:'🍌'},
    {name:'Fresa',icon:'🍓'},
    {name:'Limon',icon:'🍋'},
    {name:'Sandia',icon:'🍉'},
    {name:'Naranja',icon:'🍊'}
  ];
}
