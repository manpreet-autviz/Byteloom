import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import * as echarts from 'echarts';
declare var $: any;
@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.scss'],
})
export class TechnicalComponent {
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

  TatChart!: echarts.ECharts;
  TotalReportChart!: echarts.ECharts;
  TMChart!: echarts.ECharts;
 
  TMOption: any;
  TotalReportOption:any;
  TatOption: any;

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
    this.TatChart = echarts.init(
      document.getElementById('tat-Chart') as HTMLDivElement
    );

    this.TMChart = echarts.init(
      document.getElementById('TM-wise-vetting') as HTMLDivElement
    );

    this.TotalReportChart = echarts.init(
      document.getElementById('Total-Report-Chart') as HTMLDivElement
    );

    this.TatOption = {
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
        data: ['Report', 'Vetting'],
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
          boundaryGap: false,
          data: [
            'Pan India',
            'Punjab',
            'Haryana',
            'NCR',
            'Rajasthan',
            'Gujarat',
            'MP',
            'Maharashtra',
          ],
          axisLabel: {
            interval: 0,
            rotate: 75,
            overflow: 'break',
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: false,
          },
          min: 5,
          max: 30,
          interval: 5,
          name: 'DAYS',
          nameLocation: 'middle',
          nameGap: 43,
          axisLabel: {
            margin: 1,
          },
        },
      ],
      series: [
        {
          name: 'Report',
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
          data: [10, 13, 12.5, 14, 14.5, 15, 15.5, 16],
          itemStyle: {
            color: '#333333',
          },
        },
        {
          name: 'Vetting',
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
          data: [17, 15, 18.5, 19, 17.5, 20, 22, 25],
          itemStyle: {
            color: '#FE5419',
          },
        },
      ],
    };

    this.TMOption = {
      title: {},
      tooltip: {
        trigger: 'item',
      },

      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: [50, 130],

          data: [
            {
              value: 16,
              name: 'K Rahul',
              itemStyle: {
                color: '#33B27D',
              },
            },
            {
              value: 29,
              name: 'Harpreet kaur',
              itemStyle: {
                color: '#518AFE',
              },
            },

            {
              value: 13,
              name: 'Manoj Tiwary',
              itemStyle: {
                color: '#0067FF',
              },
            },
            {
              value: 8,
              name: 'Ankit Sharma',
              itemStyle: {
                color: '#5D6C83',
              },
            },
            {
              value: 9,
              name: 'Rahul Thakur',
              itemStyle: {
                color: '#A294F9',
              },
            },
            {
              value: 6,
              name: 'Vikram Saini',
              itemStyle: {
                color: '#00B8DA',
              },
            },
            {
              value: 5,
              name: 'Saurabh Kumar',
              itemStyle: {
                color: '#33B27D',
              },
            },
            {
              value: 10,
              name: 'Vivek Singh',
              itemStyle: {
                color: '#FFAB00',
              },
            },
            {
              value: 12,
              name: 'Aniket Sharma',
              itemStyle: {
                color: '#FF5531',
              },
            },
            {
              value: 14,
              name: 'Rohani Sharma',
              itemStyle: {
                color: '#FFA155',
              },
            },
            {
              value: 11,
              name: 'Priynka Negi',
              itemStyle: {
                color: '#FF5531',
              },
            },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
          labelLine: {
            show: false, // Set this to false to remove lines connecting slices to labels
          },
          label: {
            show: false, // Set this to false to hide labels on pie chart slices
          },
          itemStyle: {
            normal: {
              borderColor: 'white',
              borderWidth: 2,
            },
            emphasis: {
              borderColor: 'white',
              borderWidth: 2,
            },
          },
        },
      ],
    };

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

    // Create your chart using the above option object

    this.TatChart.setOption(this.TatOption);
    this.TMChart.setOption(this.TMOption);
    this.TotalReportChart.setOption(this.TotalReportOption);
  }
}
