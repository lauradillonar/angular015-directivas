import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorPicker]'
})
export class ColorPickerDirective {
  color = '';

  @Input('appColorPicker') propertiesDiv: {
    bgColor: string,
    textColor: string
  } = {
    bgColor: '',
    textColor: ''
  };

  constructor(private miElemento: ElementRef) { 
    console.log(miElemento);
    console.log("Directiva creada correctamente");
  }

  @HostListener('click') oneClick():void{
    this.changeBackGround (this.propertiesDiv.bgColor);
    this.changeColor(this.propertiesDiv.textColor);
    console.log('%c'+ 'Has hecho un click', 'color:blue');
  }

  changeBackGround(color: string):void{
    this.miElemento.nativeElement.style.backgroundColor = color;
  }

  changeColor(color: string):void{
    this.miElemento.nativeElement.style.color = color;
  }
}
