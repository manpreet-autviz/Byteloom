import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cheques-summary',
  templateUrl: './cheques-summary.component.html',
  styleUrls: ['./cheques-summary.component.scss']
})
export class ChequesSummaryComponent {
  states: string[] = [
    'Pan India',
    'Punjab',
    'Haryana',
    'NCR',
    'Rajasthan',
    'Gujarat',
    'MP',
    'Maharashtra',
  ];
  filters: string[] = [
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    // 'Select custom'
  ];
  selectedState: string = 'Pan India';
  selectedFilter: string = 'September';
  constructor(
    private elementRef: ElementRef,
    private cdRef: ChangeDetectorRef
  ) {}

  onFilterChange(selectedValue: string) {}

  onStateChange(selectedValue: string) {}
}
