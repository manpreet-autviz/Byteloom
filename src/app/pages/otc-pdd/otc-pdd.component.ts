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
    this.DaysWiseOTCChart = echarts.init(
      document.getElementById('Days-wise-otc') as HTMLDivElement
    );


    this.TotalReportOption = {
      title: {
        text: '',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
        formatter: '{c}',
      },
      legend: {
        data: [
          'Critical',
          'Non-Critical',],
        top: '10',
      },

      xAxis: {
        type: 'category',
        axisTick: {
          show: false, 
        },
        data: [
          'Maharashtra',
          'MP',
          'Gujarat',
          'Rajasthan',
          'NCR',
          'PCH',
          'Pan India',
        ],
        axisLabel: {
          interval: 0,
          rotate: -45,
          overflow: 'break',
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        min: 200,
        max: 1800,
        interval: 200,
        name: 'Number',
        nameLocation: 'middle',
        nameGap: 40,
        
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: 'Category 1',
          type: 'bar',
          
          stack: 'barStack',
          barWidth: '25%', // Adjust the bar width as needed
          data: [1400,1100,960,630,540,430,320],
          itemStyle: {
            color: '#00EB97',
             // Color for Category 1
          },
        },
        {
          name: 'Category 2',
          type: 'bar',
          stack: 'barStack',
          barWidth: '25%', // Adjust the bar width as needed
          data: [1780,1600,1400,1250,1050,960,320],
          itemStyle: {
            color: '#7460EE',
            borderRadius: 4,// Color for Category 2
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
        axisTick: {
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
          'PCH',
          'Pan India',
        ],
      },

      series: [
        {
          name: 'Critical',
          type: 'bar',
          data: [65, 65, 65, 65, 65, 65, 225],
          label: {
            show: true,
            position: 'right',
            formatter: '{c} Cr',
          },
          itemStyle: {
            color: '#3C7EBE',
            borderRadius: 15, // Set the color for the first bar series (IRR)
          },
        },
        {
          name: 'Non-Critical',
          type: 'bar',
          data: [40, 40, 40, 40, 40, 40, 80],
          label: {
            show: true,
            position: 'right',
            formatter: '{c}%',
          },
          itemStyle: {
            color: '#5BC8EF',
            borderRadius: 15,  // Set the color for the first bar series (IRR)
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
        axisTick: {
          show: false, 
        },
        data: [
          'Maharashtra',
          'MP',
          'Gujarat',
          'Rajasthan',
          'NCR',
          'PCH',
          'Pan India',
        ],
      },

      series: [
        {
          name: 'Credit',
          type: 'bar',
          data: [65, 65, 65, 65, 65, 65, 225],
          label: {
            show: true,
            position: 'right',
            formatter: '{c} Cr',
          },
          itemStyle: {
            color: '#3C7EBE',
            borderRadius: 15,  // Set the color for the first bar series (IRR)
          },
        },
        {
          name: 'Sales',
          type: 'bar',
          data: [40, 40, 40, 40, 40, 40, 80],
          label: {
            show: true,
            position: 'right',
            formatter: '{c}%',
          },
          itemStyle: {
            color: '#5BC8EF',
            borderRadius: 15,  // Set the color for the first bar series (IRR)
          },
        },
        
    
      ],
    };

    this.DaysWiseOTCOption = {
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: ['product', '0-45 Days', '46-90 Days', '90+ Days'],
        source: [
          { product: 'Pan India', '0-45 Days': 75, '46-90 Days': 46, '90+ Days': 62 },
          { product: 'PCH', '0-45 Days': 76, '46-90 Days': 46, '90+ Days': 62 },
          { product: 'NCR', '0-45 Days': 85, '46-90 Days': 43, '90+ Days': 60 },
          { product: 'Rajasthan', '0-45 Days': 80, '46-90 Days': 46, '90+ Days': 62 },
          { product: 'Gujarat', '0-45 Days': 83, '46-90 Days': 46, '90+ Days': 62 },
          { product: 'MP', '0-45 Days': 78, '46-90 Days': 46, '90+ Days': 62 },
          { product: 'Maharashtra', '0-45 Days': 83, '46-90 Days': 46, '90+ Days': 62 },
        ],
      },
      xAxis: {
        type: 'category',
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false, 
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          rotate: -45,
          overflow: 'break',
        },
      },
      yAxis: {
        min: 10,
        max: 100,
        interval: 10,
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          formatter: '{value}',
          margin: 1,
        },
        name: 'PERCENTAGE',
        nameLocation: 'middle',
        nameGap: 25,
      },
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [
        {
          type: 'bar',
          itemStyle: {
            color: '#7460EE', // Set the color for the first bar series (IRR)
          },
        },
        {
          type: 'bar',
          itemStyle: {
            color: '#00EB97', // Set the color for the first bar series (IRR)
          },
        },
        {
          type: 'bar',
          itemStyle: {
            color: '#F85656', // Set the color for the first bar series (IRR)
          },
        },
      ],
    };

    this.TotalReportChart.setOption(this.TotalReportOption);
    this.CriticalNonCriticalChart.setOption(this.CriticalNonCriticalOption)
    this.OwnerWiseChart.setOption(this.OwnerWiseOption)
    this.DaysWiseOTCChart.setOption(this.DaysWiseOTCOption)
  }
}
