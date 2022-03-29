import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directivas en Angular';
  cartas = [
    {palo: 'corazones', valor: 'A'},
    {palo: 'picas', valor: '3'},
    {palo: 'diamantes', valor: 'K'},
    {palo: 'trebol', valor: 'Q'}
  ];
}
