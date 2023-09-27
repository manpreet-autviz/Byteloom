import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-tat-analysis',
  templateUrl: './tat-analysis.component.html',
  styleUrls: ['./tat-analysis.component.scss'],
})
export class TatAnalysisComponent {
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

  progressValue1: number = 80;
  progressValue2: number = 12;
  progressValue3: number = 8;
  minValue1: number = 80;
  maxValue1: number = 75;
  minValue2: number = 10;
  maxValue2: number = 12;
  minValue3: number = 6;
  maxValue3: number = 8;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.initializeChart();
  }

  initializeChart() {}

  onFilterChange(selectedValue: string) {
    const totalPercent = 100;
    
    // Generate random values within the min and max ranges
    this.progressValue1 = this.getRandomValue(this.minValue1, this.maxValue1);
    this.progressValue2 = this.getRandomValue(this.minValue2, this.maxValue2);
    this.progressValue3 = this.getRandomValue(this.minValue3, this.maxValue3);
    
    // Adjust the values to ensure the total percentage is 100
    const currentTotal = this.progressValue1 + this.progressValue2 + this.progressValue3;
    const difference = totalPercent - currentTotal;
    
    if (difference !== 0) {
      // Distribute the difference among the progress bars
      const distribution = difference / 3;
      this.progressValue1 += distribution;
      this.progressValue2 += distribution;
      this.progressValue3 += distribution;
    }
  }

  private getRandomValue(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }

  onStateChange(selectedValue: string) {
    const totalPercent = 100;
    
    // Generate random values within the min and max ranges
    this.progressValue1 = this.getRandomValue(this.minValue1, this.maxValue1);
    this.progressValue2 = this.getRandomValue(this.minValue2, this.maxValue2);
    this.progressValue3 = this.getRandomValue(this.minValue3, this.maxValue3);
    
    // Adjust the values to ensure the total percentage is 100
    const currentTotal = this.progressValue1 + this.progressValue2 + this.progressValue3;
    const difference = totalPercent - currentTotal;
    
    if (difference !== 0) {
      // Distribute the difference among the progress bars
      const distribution = difference / 3;
      this.progressValue1 += distribution;
      this.progressValue2 += distribution;
      this.progressValue3 += distribution;
    }
  }

  toggleContent() {}
}
