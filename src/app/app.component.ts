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
  clases = ['color-fondo', 'color-fuente', 'tamanio-fuente', 'border-margin'];
}
