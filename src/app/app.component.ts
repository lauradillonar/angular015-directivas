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
  cartas: Icono[] = [
    {icono: '♥'},  //  &hearts;
    {icono: '♠'},  //  &spades;
    {icono: '♦'},  //  &diams;
    {icono: '♣'}   //  &clubs;
  ];
  randomColor = true;

  getColor(): string {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    console.log(color);
    return '#'+color;
  }
}
