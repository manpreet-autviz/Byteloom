import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-business-rm',
  templateUrl: './business-rm.component.html',
  styleUrls: ['./business-rm.component.scss'],
})
export class BusinessRMComponent {
  PotentialLostBusinessChart!: echarts.ECharts;
  DistributionMixChart!: echarts.ECharts;
  SourceLoginChart!: echarts.ECharts;

  PotentialLostBusinessOption: any;
  DistributionMixOption:any;
  SourceLoginOption:any;

  progressValue1: number = 50;
  progressValue2: number = 5;
  progressValue3: number = 45;
  minValue1: number = 80;
  maxValue1: number = 75;
  minValue2: number = 10;
  maxValue2: number = 12;
  minValue3: number = 6;
  maxValue3: number = 8;

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
  selectedFilter: string = 'September';
  selectedTrendFilter: string = 'Year to Date';
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

      this.DistributionMixChart = echarts.init(
        document.getElementById('buisness-Distribution-mix') as HTMLDivElement
      );

      this.SourceLoginChart = echarts.init(
        document.getElementById('source-login-chart') as HTMLDivElement
      );
      



      this.DistributionMixOption = {
        tooltip: {
          trigger: 'item',
          formatter: (params: any) => {
  
            let tooltipText = '';
  
            if (params.name === 'HL') {
              tooltipText = 'No. of files: 1000 <br/> Amount in Cr: 450';
            } else if (params.name === 'LAP') {
              tooltipText = 'No. of files: 700 <br/> Amount in Cr: 270';
            } else if (params.name === 'BL') {
              tooltipText = 'No. of files: 800 <br/> Amount in Cr: 269';
            } else if (params.name === 'SBL') {
              tooltipText = 'No. of files: 1600 <br/> Amount in Cr: 268';
            }
  
            return tooltipText;
          },
        },
        responsive: true, 
        legend: {
          top: '-2%',
          left: 'center',
        },
        series: [
          {
            type: 'pie',
            radius: ['30%', '80%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                formatter: '{c}%',
                fontSize: 16,
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 45, name: 'HL', itemStyle: { color: '#146C94' } },
              { value: 20, name: 'LAP', itemStyle: { color: '#AFD3E2' } },
              { value: 10, name: 'BL', itemStyle: { color: '#91C8E4' } },
              { value: 25, name: 'SBL', itemStyle: { color: '#19A7CE' } },
            ],
          },
        ],
      };

      this.SourceLoginOption = {
        tooltip: {
          trigger: 'item',
          formatter: (params: any) => {
  
            let tooltipText = '';
  
            if (params.name === 'Direct') {
              tooltipText = 'No. of files: 1000 <br/> Amount in Cr: 450';
            } else if (params.name === 'Power Partner') {
              tooltipText = 'No. of files: 700 <br/> Amount in Cr: 270';
            } else if (params.name === 'DSA') {
              tooltipText = 'No. of files: 800 <br/> Amount in Cr: 269';
            } else if (params.name === 'Other') {
              tooltipText = 'No. of files: 1600 <br/> Amount in Cr: 268';
            }
  
            return tooltipText;
          },
        },
        legend: {
          top: '-2%',
          left: 'center',
        },
        series: [
          {
            type: 'pie',
            radius: ['30%', '80%'],
            avoidLabelOverlap: false,
           
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold',
                formatter: '{c}%',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: 35,
                name: 'Direct',
                itemStyle: {
                  color: '#7D6E83',
                },
              },
              {
                value: 20,
                name: 'Power Partner',
                itemStyle: {
                  color: '#DBA39A',
                },
              },
              {
                value: 10,
                name: 'DSA',
                itemStyle: {
                  color: '#ECB390',
                },
              },
              {
                value: 20,
                name: 'Other',
                itemStyle: {
                  color: '#DF7861',
                },
              },
            ],
          },
        ],
      };



      this.DistributionMixChart.setOption(
        this.DistributionMixOption
      );
      this.SourceLoginChart.setOption(
        this.SourceLoginOption
      );
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
