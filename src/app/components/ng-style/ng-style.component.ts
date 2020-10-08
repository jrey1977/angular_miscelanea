import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Este texto sirve para probar cosas
    </p>
    <button class="btn btn-primary mr-2" (click)="tamano = tamano - 5">
        <i class="fa fa-minus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamano = tamano + 5">
        <i class="fa fa-plus"></i>
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamano:number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
