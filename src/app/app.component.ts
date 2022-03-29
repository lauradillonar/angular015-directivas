import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directivas en Angular';
  cartas = [
    {palo: 'corazones', valor: 'A', icono: '♥'},  //  &hearts;
    {palo: 'picas', valor: '3', icono: '♠'},      //  &spades;
    {palo: 'diamantes', valor: 'K', icono: '♦'},  //  &diams;
    {palo: 'trebol', valor: 'Q', icono: '♣'}      //  &clubs;
  ];

  palo: string = '';
  valor: string = '';
  icono: string = '';

  saveItem():void{
    this.cartas.push(
      {
        palo: this.palo,
        valor: this.valor,
        icono: this.icono
      }
    );
    console.log('Objeto añadido al array de objetos.');
  }
}
