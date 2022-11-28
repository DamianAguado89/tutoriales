import { Directive, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[DarthClickOutside]'
})
export class DarthClickOutsideDirective {

  @Input() clickOutsideEnabled: boolean = true;
  @Input() clickOutsideDelay: number;

  @Output() clickOutside: EventEmitter<MouseEvent>;

  constructor(
    private elementRef: ElementRef
  ) {
    this.clickOutside = new EventEmitter<MouseEvent>();
  }

  @HostListener('document:click',['$event'])
  public onDocumentClick(event: MouseEvent){
    if(this.clickOutsideEnabled){
      const target = event.target as HTMLElement;
      if(target && !this.elementRef.nativeElement.contains(target)){
        if(this.clickOutsideDelay){
          setTimeout(()=>{
            this.clickOutside.emit(event);
          }, this.clickOutsideDelay)
        }else{
          this.clickOutside.emit(event);
        }
      }
    }
  }

}
