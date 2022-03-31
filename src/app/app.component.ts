import { Component } from '@angular/core';

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
  cartas: Icono[] = [
    {icono: '♥'},  //  &hearts;
    {icono: '♠'},  //  &spades;
    {icono: '♦'},  //  &diams;
    {icono: '♣'}   //  &clubs;
  ];
}
