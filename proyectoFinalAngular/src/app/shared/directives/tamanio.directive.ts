import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTamanio]'
})
export class TamanioDirective {
  @Input('appTamanio') fuenteTamanio!: string;
  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.fontSize = this.fuenteTamanio;   
  }
}
