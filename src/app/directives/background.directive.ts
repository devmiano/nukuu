import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackground]',
})
export class BackgroundDirective {
  constructor(private elem: ElementRef) {}
  gradientFire = 'linear-gradient(114.63deg, #ff7f11 41.82%, #e54f6d 85.03%)';
  gradientIce = ' linear-gradient(115.75deg, #56e39f 33.73%, #12eaea 82.99%)';

  @HostListener('click') onClicks() {
    this.divDeco('gradientFire');
  }
  @HostListener('dblclick') onDoubleClicks() {
    this.divDeco('gradientIce');
  }
  private divDeco(action: string) {
    this.elem.nativeElement.style.background = action;
  }
}
