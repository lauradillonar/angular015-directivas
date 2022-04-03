import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorPicker]'
})
export class ColorPickerDirective {

  constructor() { 
    console.log("Directiva creada correctamente");
  }

  @HostListener('dblclick') dobleclick():void{
    console.log('%c' + 'Has hecho doble click', 'color:red');
  }

  @HostListener('click') oneClick():void{
    console.log('%c'+ 'Has hecho un click', 'color:blue');
  }
}
