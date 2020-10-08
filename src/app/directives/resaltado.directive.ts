import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private _elementRef : ElementRef ) { 
  }

  @Input('appResaltado') micolor:string;

  @HostListener('mouseenter') mouseEntro(){
    this.resaltar(this.micolor);
  }

  @HostListener('mouseleave') mouseDejo(){
    this.resaltar(null);
  }

  private resaltar( color: string = "yellow"){
    this._elementRef.nativeElement.style.backgroundColor = color;
  }

}
