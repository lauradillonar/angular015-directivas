import { ChangeDetectionStrategy, Component } from '@angular/core';

interface PropDiv {
  bgColor: string;
  textColor: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Directivas en Angular';
  propertiesDiv: {
    bgColor: string,
    textColor: string
  } = {
    bgColor: '',
    textColor: ''
  };
}
