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
  bgClass = false;
  colorClass = false;
  tamanioClass = true;
  borderMarginClass = true;
}
