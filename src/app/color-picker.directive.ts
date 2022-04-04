import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorPicker]'
})
export class ColorPickerDirective {
  color = '';

  @Input('appColorPicker') propertiesDiv: string = "#dddddd";

  constructor(private miElemento: ElementRef) { 
    console.log(miElemento);
    console.log("Directiva creada correctamente");
  }

  @HostListener('change') onChange():void{
    this.changeBackGround (this.propertiesDiv);
    console.log('%c'+ 'El color ha cambiado', 'color:blue');
  }

  changeBackGround(color: string):void{
    this.miElemento.nativeElement.style.backgroundColor = color;
  }
}
