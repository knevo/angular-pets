import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[inputColor]'
})
export class InputColorDirective {

  constructor(private el: ElementRef) {
  }

  @Input('inputColor') defaultColor;

  @HostBinding('style.backgroundColor') bgColor;

  @HostListener('keyup') changeBg() {
    this.bgColor = this.defaultColor || this.getRandomColor()
    // this.el.nativeElement.style.backgroundColor = this.getRandomColor()
  }

  private getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
