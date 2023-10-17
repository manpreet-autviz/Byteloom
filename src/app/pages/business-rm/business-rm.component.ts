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
      this.PotentialLostBusinessChart = echarts.init(
        document.getElementById('Potential-lost-business') as HTMLDivElement
      );
      this.DistributionMixChart = echarts.init(
        document.getElementById('Distribution-mix') as HTMLDivElement
      );

      this.SourceLoginChart = echarts.init(
        document.getElementById('source-login-chart') as HTMLDivElement
      );
      

      this.PotentialLostBusinessOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          data: ['CNI', 'Cancellation'],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          splitLine: {
            show: false,
          },

          boundaryGap: [0, 0.01],
          axisLabel: {
            show: false, // Set this to false to hide x-axis labels
          },
        },
        yAxis: {
          type: 'category',
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          data: [
            'Maharashtra',
            'MP',
            'Gujarat',
            'Rajasthan',
            'NCR',
            'Haryana',
            'Punjab',
            'Pan India',
          ],
        },

        series: [
          {
            name: 'CNI',
            type: 'bar',
            data: [40, 40, 40, 40, 40, 40, 40, 80],
            label: {
              show: true,
              position: 'right',
              formatter: '{c}%',
            },
            itemStyle: {
              color: '#3C7EBE', // Set the color for the first bar series (IRR)
              borderRadius: 10,
            },
          },
          {
            name: 'Cancellation',
            type: 'bar',
            data: [65, 65, 65, 65, 65, 65, 65, 225],
            label: {
              show: true,
              position: 'right',
              formatter: '{c} Cr',
            },
            itemStyle: {
              color: '#5BC8EF', // Set the color for the first bar series (IRR)
              borderRadius: 10,
            },
          },
        ],
      };

      this.DistributionMixOption = {
        tooltip: {
          trigger: 'item',
          formatter: (params: any) => {
  
            let tooltipText = '';
  
            if (params.name === 'Home Loan') {
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
          top: '2%',
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
              { value: 45, name: 'Home Loan', itemStyle: { color: '#7C41DA' } },
              { value: 20, name: 'LAP', itemStyle: { color: '#07A14E' } },
              { value: 10, name: 'BL', itemStyle: { color: '#636363' } },
              { value: 25, name: 'SBL', itemStyle: { color: '#F99B00' } },
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
          top: '5%',
          left: 'center',
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 2,
            },
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
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
                  color: '#3ADA84',
                },
              },
              {
                value: 20,
                name: 'Power Partner',
                itemStyle: {
                  color: '#FF821C',
                },
              },
              {
                value: 10,
                name: 'DSA',
                itemStyle: {
                  color: 'rgba(5, 83, 22, 0.65)',
                },
              },
              {
                value: 20,
                name: 'Other',
                itemStyle: {
                  color: '#0B9DE8',
                },
              },
            ],
          },
        ],
      };

      this.PotentialLostBusinessChart.setOption(
        this.PotentialLostBusinessOption
      );

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
