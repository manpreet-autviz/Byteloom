import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import * as echarts from 'echarts';
declare var $: any;

@Component({
  selector: 'app-otc-pdd',
  templateUrl: './otc-pdd.component.html',
  styleUrls: ['./otc-pdd.component.scss']
})
export class OtcPddComponent {
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

 
  TotalReportChart!: echarts.ECharts;
  CriticalNonCriticalChart!: echarts.ECharts;
  OwnerWiseChart!: echarts.ECharts;
  DaysWiseOTCChart!: echarts.ECharts;
 

  TotalReportOption:any;
  CriticalNonCriticalOption:any;
  OwnerWiseOption:any;
  DaysWiseOTCOption:any;

  constructor(
    private elementRef: ElementRef,
    private cdRef: ChangeDetectorRef
  ) {}

  onFilterChange(selectedValue: string) {}

  onStateChange(selectedValue: string) {}

  ngAfterViewInit(): void {
    this.initializeChart();
  }

  ngOnDestroy() {
    const table = $(
      this.elementRef.nativeElement.querySelector('#table')
    ).DataTable();
    table.destroy();
  }
  initializeChart() {
 

    this.TotalReportChart = echarts.init(
      document.getElementById('Total-Report-Chart') as HTMLDivElement
    );
    this.CriticalNonCriticalChart = echarts.init(
      document.getElementById('Critical-NonCritical-Chart') as HTMLDivElement
    );
    this.OwnerWiseChart = echarts.init(
      document.getElementById('owner-wise-chart') as HTMLDivElement
    );
    this.OwnerWiseChart = echarts.init(
      document.getElementById('Days-wise-otc') as HTMLDivElement
    );


    this.TotalReportOption = {
      title: {
        text: '',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: [],
        top: '10',
      },
      xAxis: {
        type: 'category',
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
        axisLabel: {
          interval: 0,
          rotate: -45,
          overflow: 'break',
        },
      },
      yAxis: {
        type: 'value',
        min: 200,
        max: 1800,
        interval: 200,
        name: 'Value',
        axisLine: {
          show: false,
        },
      },
      series: [
        {
          name: 'Category 1',
          type: 'bar',
          stack: 'barStack',
          barWidth: '25%', // Adjust the bar width as needed
          data: [320, 330, 430, 540, 630,960,1100,1400],
          itemStyle: {
            color: '#00EB97', // Color for Category 1
          },
        },
        {
          name: 'Category 2',
          type: 'bar',
          stack: 'barStack',
          barWidth: '25%', // Adjust the bar width as needed
          data: [320, 700, 960, 1050, 1250,1400,1600,1780],
          itemStyle: {
            color: '#7460EE', // Color for Category 2
          },
        },
      ],
    };

    this.CriticalNonCriticalOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: [
          'Critical',
          'Non-Critical',
         
        ],
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
          name: 'Critical',
          type: 'bar',
          data: [65, 65, 65, 65, 65, 65, 65, 225],
          label: {
            show: true,
            position: 'right',
            formatter: '{c} Cr',
          },
          itemStyle: {
            color: '#3C7EBE', // Set the color for the first bar series (IRR)
          },
        },
        {
          name: 'Non-Critical',
          type: 'bar',
          data: [40, 40, 40, 40, 40, 40, 40, 80],
          label: {
            show: true,
            position: 'right',
            formatter: '{c}%',
          },
          itemStyle: {
            color: '#5BC8EF', // Set the color for the first bar series (IRR)
          },
        },
        
    
      ],
    };

    this.OwnerWiseOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: [
          'Credit',
          'Sales',
         
        ],
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
          name: 'Credit',
          type: 'bar',
          data: [65, 65, 65, 65, 65, 65, 65, 225],
          label: {
            show: true,
            position: 'right',
            formatter: '{c} Cr',
          },
          itemStyle: {
            color: '#3C7EBE', // Set the color for the first bar series (IRR)
          },
        },
        {
          name: 'Sales',
          type: 'bar',
          data: [40, 40, 40, 40, 40, 40, 40, 80],
          label: {
            show: true,
            position: 'right',
            formatter: '{c}%',
          },
          itemStyle: {
            color: '#5BC8EF', // Set the color for the first bar series (IRR)
          },
        },
        
    
      ],
    };

    this.TotalReportChart.setOption(this.TotalReportOption);
    this.CriticalNonCriticalChart.setOption(this.CriticalNonCriticalOption)
    this.OwnerWiseChart.setOption(this.OwnerWiseOption)
  }
}
