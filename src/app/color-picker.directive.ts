import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorPicker]'
})
export class ColorPickerDirective {

  constructor(private miElemento: ElementRef) { 
    console.log("Directiva creada correctamente");
  }

  @HostListener('dblclick') dobleclick():void{
    this.changeBackGround('red');
    this.changeColor ('black');
    console.log('%c' + 'Has hecho doble click', 'color:red');
  }

  @HostListener('click') oneClick():void{
    this.changeBackGround ('blue');
    this.changeColor('white');
    console.log('%c'+ 'Has hecho un click', 'color:blue');
  }

  changeBackGround(color: string):void{
    this.miElemento.nativeElement.style.backgroundColor = color;
  }

  changeColor(color: string):void{
    this.miElemento.nativeElement.style.color = color;
  }
}
