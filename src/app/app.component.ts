import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Fruta {
  name: string;
  icon: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Directivas en Angular';
  bgClass = false;
  colorClass = false;
  tamanioClass = true;
  borderClass = false;
  
  frutas : Fruta[] = [
    {name:'Manzana Roja',icon:'🍎'},
    {name:'Uvas',icon:'🍇'},
    {name:'Platano',icon:'🍌'},
    {name:'Fresa',icon:'🍓'},
    {name:'Limon',icon:'🍋'},
    {name:'Sandia',icon:'🍉'},
    {name:'Naranja',icon:'🍊'}
  ];

  operador = false;

  index = (fruta: Fruta) => {
    const index = this.frutas.findIndex(x => x.name === fruta.name);
    console.log(index);
    if (index % 2 === 0){
      this.bgClass = true;
      this.borderClass = false;
      console.log(this.bgClass);
    }else{
      this.bgClass = false;
      this.borderClass = true;
      console.log(this.bgClass);
    }
  }
}
