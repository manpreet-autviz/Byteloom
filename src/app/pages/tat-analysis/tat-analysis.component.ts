import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tat-analysis',
  templateUrl: './tat-analysis.component.html',
  styleUrls: ['./tat-analysis.component.scss'],
})
export class TatAnalysisComponent {
  states: string[] = [
    'Pan India',
    'PCH',
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
    'October',
    'November',
    // 'Select custom'
  ];

  selectedState: string = 'Pan India';
  selectedFilter: string = 'September';
  showContent!: boolean;

  progressValue1: number = 85;
  progressValue2: number = 12;
  progressValue3: number = 8;
  minValue1: number = 75;
  maxValue1: number = 80;
  minValue2: number = 10;
  maxValue2: number = 12;
  minValue3: number = 6;
  maxValue3: number = 8;

  constructor(private cdRef: ChangeDetectorRef,private router:Router) {}

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
    this.progressValue1 = parseInt(this.progressValue1.toFixed(0), 10);
    this.progressValue2 = parseInt(this.progressValue2.toFixed(0), 10);
    this.progressValue3 = parseInt(this.progressValue3.toFixed(0), 10);

  }

  private getRandomValue(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
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

  navigateToLoginToPD(){
    this.router.navigate(['/tat-table', 'Login to PD TAT ']);
  }
  navigateToLoginToFinancial(){
    this.router.navigate(['/tat-table', 'Login to financial approvals TAT  ']);
  }
  navigateToQuerycompletionTAT(){
    this.router.navigate(['/tat-table', 'Query completion TAT   ']);
  }
  navigateToFinalapprovalTAT(){
    this.router.navigate(['/tat-table', 'Final approvals TAT  ']);
  }

  navigateToDisbursalTAT (){
    this.router.navigate(['/tat-table', 'Disbursal TAT ']);
  }

  navigateToTechnicalTAT (){
    this.router.navigate(['/tat-table', 'Technical TAT  ']);
  }

  LegalTAT(){
    this.router.navigate(['/tat-table', 'Legal TAT ']);
  }

}
