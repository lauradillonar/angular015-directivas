import { Directive } from '@angular/core';

@Directive({
  selector: '[appColorPicker]'
})
export class ColorPickerDirective {

  constructor() { 
    console.log("Directiva creada correctamente");
  }

}
