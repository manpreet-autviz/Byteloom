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
 selectedFilter: string = 'November';

 
  TotalReportChart!: echarts.ECharts;
  CriticalNonCriticalChart!: echarts.ECharts;
  OwnerWiseChart!: echarts.ECharts;
  DaysWiseOTCChart!: echarts.ECharts;
  OTCHandoverChart!: echarts.ECharts;
 

  TotalReportOption:any;
  CriticalNonCriticalOption:any;
  OwnerWiseOption:any;
  DaysWiseOTCOption:any;
  OTCHandoveroption:any;

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
      document.getElementById('otc-Total-Report-Chart') as HTMLDivElement
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
    this.OTCHandoverChart = echarts.init(
      document.getElementById('otc-handover-chart') as HTMLDivElement
    );


    this.TotalReportOption = {
      title: {
        text: '',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
        formatter: function(params: any[]) {
          let tooltip = params[0].name + '<br>';
          params.forEach(function (item) {
            tooltip += item.seriesName + ': ' + item.value + '<br>';
          });
          return tooltip;
        },
      },
      legend: {
        data: [
          'No. of OTCs',
          'No. of customers',],
        top: '10',
      },

      xAxis: {
        type: 'category',
        axisTick: {
          show: false, 
        },
        data: [  
          'PCH',
          'NCR',
          'Rajasthan',
          'Gujarat',
          'MP',
          'Maharashtra',
 
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
        min: 2,
        max: 18,
        interval: 2,
        name: 'Number (In Hundred)',
        nameLocation: 'middle',
        nameGap: 25,
        nameTextStyle: {
          fontWeight: 600,
          fontSize:12,
        },
        
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: 'No. of customers',
          type: 'bar',
          
          stack: 'barStack',
          barWidth: '25%', // Adjust the bar width as needed
          data: [8,7,9.6,6.3,5.4,4.3],
          itemStyle: {
            color: '#EE9322',
            borderRadius: [0, 0, 4, 4],
          },
        },
        {
          name: 'No. of OTCs',
          type: 'bar',
          stack: 'barStack',
          barWidth: '25%', // Adjust the bar width as needed
          data: [10.5,11,10,12.5,12.5,14.6],
          itemStyle: {
            color: '#3C7EBE',
            borderRadius: [4, 4, 0, 0],// Color for Category 2
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
          'PCH',
          'NCR',
          'Rajasthan',
          'Gujarat',
          'MP',
          'Maharashtra',
 
        ],
      },

      series: [
        {
          name: 'Critical',
          type: 'bar',
          data: [52, 49, 59, 50, 48, 58, 55],
          label: {
            show: true,
            position: 'right',
            formatter: '{c}%',
            fontSize:9,
          },
          itemStyle: {
            color: '#3C7EBE',
            borderRadius: 15, // Set the color for the first bar series (IRR)
          },
        },
        {
          name: 'Non-Critical',
          type: 'bar',
          data: [48, 51, 41, 50, 52, 42, 45],
          label: {
            show: true,
            position: 'right',
            formatter: '{c}%',
            fontSize:9,

          },
          itemStyle: {
            color: '#DAC0A3',
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
          'PCH',
          'NCR',
          'Rajasthan',
          'Gujarat',
          'MP',
          'Maharashtra',
 
        ],
      },

      series: [
        {
          name: 'Credit',
          type: 'bar',
          data: [52, 49, 59, 50, 48, 58, 55],
          label: {
            show: true,
            position: 'right',
            formatter: '{c}%',
            fontSize:9,

          },
          itemStyle: {
            color: '#DAC0A3',
            borderRadius: 15,  // Set the color for the first bar series (IRR)
          },
        },
        {
          name: 'Sales',
          type: 'bar',
          data: [48, 51, 41, 50, 52, 42, 45],
          label: {
            show: true,
            position: 'right',
            formatter: '{c}%',
            fontSize:9,

          },
          itemStyle: {
            color: '#3C7EBE',
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
        name: 'Percentage %',
        nameLocation: 'middle',
        nameGap: 25,
        nameTextStyle: {
          fontWeight: 600,
          fontSize:14,
        },
      },
      series: [
        {
          type: 'bar',
          itemStyle: {
            color: '#DAC0A3', // Set the color for the first bar series (IRR)
          },
        },
        {
          type: 'bar',
          itemStyle: {
            color: '#EE9322', // Set the color for the first bar series (IRR)
          },
        },
        {
          type: 'bar',
          itemStyle: {
            color: '#EF6262', // Set the color for the first bar series (IRR)
          },
        },
      ],
    };

    this.OTCHandoveroption = {
      tooltip: {
        trigger: 'axis',
        formatter: function (params: any[]) {
          let tooltip = params[0].axisValue + '<br>';
          params.forEach(function (item) {
            if (item.seriesType === 'bar') {
              tooltip += 'No. of Files' + ': ' + item.value + ' <br>';
            } else if (item.seriesType === 'line') {
              tooltip += 'Amount(in Lacs.)' + ': ' + item.value;
            }
          });
          return tooltip;
        },
      },

      legend: {
        // data: ['Financial approvals no.', 'Financial approvals amount'],
      },
      xAxis: [
        {
          type: 'category',
          axisLine: {
            show: false,
          },

          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            rotate: -45,
            overflow: 'break',
          },
          data: ['PCH', 'NCR', 'Rajasthan', 'Gujarat', 'MP', 'Maharashtra'],
          axisPointer: {
            type: 'shadow',
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: 'No. of Files',
          nameLocation: 'middle',
          nameGap: 40,
          nameTextStyle: {
            fontWeight: 600,
            fontSize: 14,
          },
          min: 25,
          max: 200,
          interval: 25,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            formatter: '{value} ',
          },
        },
        {
          type: 'value',
          name: 'Amount (In Cr)',
          nameLocation: 'middle',
          nameGap: 40,
          nameTextStyle: {
            fontWeight: 600,
            fontSize: 14,
          },
          min: 0,
          max: 8,
          interval: 1,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            formatter: '{value} ',
          },
        },
      ],
      series: [
        {
         
          barWidth: 20,
          type: 'bar',
          tooltip: {
            valueFormatter: function (value: any) {
              return value;
            },
          },
          data: [45, 84, 168, 67, 123, 73],
          itemStyle: {
            color: '#55BBCC',
          },
        },

        {
          
          type: 'line',

          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value: any) {
              return value;
            },
          },
          data: [1.92, 3.6, 7.2, 2.88, 5.28, 3.12],
          itemStyle: {
            color: '#F0B86E',
          },
        },
      ],
    };

    this.TotalReportChart.setOption(this.TotalReportOption);
    this.CriticalNonCriticalChart.setOption(this.CriticalNonCriticalOption)
    this.OwnerWiseChart.setOption(this.OwnerWiseOption)
    this.DaysWiseOTCChart.setOption(this.DaysWiseOTCOption)
    this.OTCHandoverChart.setOption(this.OTCHandoveroption)
  }
}
