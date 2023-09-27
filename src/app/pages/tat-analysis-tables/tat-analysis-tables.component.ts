import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-tat-analysis-tables',
  templateUrl: './tat-analysis-tables.component.html',
  styleUrls: ['./tat-analysis-tables.component.scss']
})
export class TatAnalysisTablesComponent {
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
  showContent!: boolean;



  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.initializeChart();
  }

  initializeChart() {}

  onFilterChange(selectedValue: string) {
    
  }

 

  onStateChange(selectedValue: string) {
    
   
  }

  toggleContent() {}
}

