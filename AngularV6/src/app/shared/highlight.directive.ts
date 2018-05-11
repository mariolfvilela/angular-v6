import {
  Directive, HostListener, HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: any = 'white';
  @Input('highlight') highlightColor: any = 'yellow';

  constructor() { }

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
