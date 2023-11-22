import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import * as echarts from 'echarts';

@Component({
  selector: 'app-credit-supervisor',
  templateUrl: './credit-supervisor.component.html',
  styleUrls: ['./credit-supervisor.component.scss'],
})
export class CreditSupervisorComponent {
  TotalApprovalChart!: echarts.ECharts;

  TotalApprovalOption: any;

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
      this.TotalApprovalChart = echarts.init(
        document.getElementById('Total-approval-chart') as HTMLDivElement
      );
      this.TotalApprovalOption = {
        title: {},
        tooltip: {
          trigger: 'axis',
          formatter: (params: any) => {
            const value = params[0].value;
            return `${value}%`;
          },
        },
        legend: {
          data: [],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            boundaryGap: true,
            data: [
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
              'Jan',
              'Feb',
              'Mar',
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            min: 10,
            max: 100,
            interval: 10,
            name: 'Percentage',
            nameLocation: 'middle',
            nameGap: 43,
            nameTextStyle: {
              fontWeight: 600,
              fontSize:14,
            },
            axisLabel: {
              formatter: '{value}%',
              margin: 1,
            },
          },
        ],
        series: [
          {
          
            type: 'line',

            areaStyle: {
              opacity: 0,
            },
            emphasis: {
              focus: 'series',
              areaStyle: {
                opacity: 0.5, // Reduce opacity on hover to make it semi-transparent
              },
            },
            data: [30, 34, 37, 40, 42, 45,50],
          },
       
        ],
      };
      this.TotalApprovalChart.setOption(this.TotalApprovalOption);
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
