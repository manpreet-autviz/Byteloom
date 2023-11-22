import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import * as echarts from 'echarts';

@Component({
  selector: 'app-credit-cm',
  templateUrl: './credit-cm.component.html',
  styleUrls: ['./credit-cm.component.scss'],
})
export class CreditCmComponent {
  PotentialLostBusinessChart!: echarts.ECharts;
  DistributionMixChart!: echarts.ECharts;
  SourceLoginChart!: echarts.ECharts;
  IrrPfInsuranceChart!: echarts.ECharts;

  PotentialLostBusinessOption: any;
  DistributionMixOption: any;
  SourceLoginOption: any;
  IrrPfInsuranceOption: any;

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
  monthFilters: string[] = ['Year to Date', 'Three months'];
  selectedState: string = 'Pan India';
 selectedFilter: string = 'November';
  selectedTrendFilter: string = 'Year to Date';
  showContent!: boolean;

  stateApprovalOption: any;

  public isToggled = false;
  constructor(private cdRef: ChangeDetectorRef,private router: Router) {}

  ngAfterViewInit(): void {
    this.initializeChart();
  }

  toggle(): void {
    this.isToggled = !this.isToggled;
    setTimeout(() => {
      this.initializeChart();
    }, 0);
    this.cdRef.detectChanges();
  }

  initializeChart() {
    if (!this.isToggled) {
  
    } else {
    }
  }

  onFilterChange(selectedValue: string) {
    (selectedValue);
  }

  onStateChange(selectedValue: string) {
    (selectedValue);
  }

  generateRandomAmount(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }

  getRandomValue(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ontrendStateChange(selectedValue: string) {}

  onTrendFilterChange(selectedValue: string) {}
  openlist(){
    this.router.navigate(['/work-in-progress-table', 'Pending OTCs']);
  }
}
