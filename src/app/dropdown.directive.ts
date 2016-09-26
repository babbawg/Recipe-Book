import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbdropdown]'
})
export class DropdownDirective {

  private isOpened = false;

  @HostBinding('class.open') get opened(){
    return this.isOpened;
  }
  @HostListener('mouseover') open() {
    this.isOpened = true;
  }
  @HostListener('mouseleave') close() {
    this.isOpened = false;
  }
}
