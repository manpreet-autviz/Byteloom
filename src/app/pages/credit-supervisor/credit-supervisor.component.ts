import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
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
  monthFilters: string[] = ['Month to Date', 'Three month'];
  selectedState: string = 'Pan India';
  selectedFilter: string = 'September';
  selectedTrendFilter: string = 'Month to Date';
  showContent!: boolean;

  stateApprovalOption: any;

  public isToggled = false;
  constructor(private cdRef: ChangeDetectorRef) {}

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
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          
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
            boundaryGap: false,
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
    console.log(selectedValue);
  }

  onStateChange(selectedValue: string) {
    console.log(selectedValue);
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
}
