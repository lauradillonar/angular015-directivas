import { Component } from '@angular/core';

interface Carta {
  palo: string;
  valor: string;
  icono: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Directivas en Angular';
  cartas: Carta[] = [
    {palo: 'corazones', valor: 'A', icono: '♥'},  //  &hearts;
    {palo: 'picas', valor: '3', icono: '♠'},      //  &spades;
    {palo: 'diamantes', valor: 'K', icono: '♦'},  //  &diams;
    {palo: 'trebol', valor: 'Q', icono: '♣'}      //  &clubs;
  ];

  palo: string = '';
  valor: string = '';
  icono: string = '';


  eliminar(carta: Carta):void{
    const indice = this.cartas.indexOf(carta);

    this.cartas.splice(indice, 1);
    this.cartas.indexOf(carta);

    console.log('Item: ' + indice + ' ha sido eliminado ' + carta);
  }

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
