import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appImportnatText]'
})
export class ImportnatTextDirective {

  constructor(private e1: ElementRef) {
    e1.nativeElement.style.background = "yellow";
  }
}
