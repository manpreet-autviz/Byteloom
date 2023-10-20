import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightDays]'
})
export class HighlightDaysDirective implements OnInit {
  @Input()
    highlightDates!: Date[];

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const currentDay = this.el.nativeElement.getAttribute('data-date');
    if (this.highlightDates.includes(new Date(currentDay))) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
      this.el.nativeElement.style.borderRadius = '50%';
    }
  }
}
