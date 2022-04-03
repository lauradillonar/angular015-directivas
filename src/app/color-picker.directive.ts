import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorPicker]'
})
export class ColorPickerDirective {

  constructor(private miElemento: ElementRef) { 
    console.log("Directiva creada correctamente");
  }

  @HostListener('dblclick') dobleclick():void{
    this.miElemento.nativeElement.style.backgroundColor = 'red';
    this.miElemento.nativeElement.style.color = 'black';
    console.log('%c' + 'Has hecho doble click', 'color:red');
  }

  @HostListener('click') oneClick():void{
    this.miElemento.nativeElement.style.backgroundColor = 'blue';
    this.miElemento.nativeElement.style.color = 'white';
    console.log('%c'+ 'Has hecho un click', 'color:blue');
  }
}
