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

  TatChart!: echarts.ECharts;
  TotalReportChart!: echarts.ECharts;
  TMChart!: echarts.ECharts;

  TMOption: any;
  TotalReportOption: any;
  TatOption: any;

  constructor(
    private elementRef: ElementRef,
    private cdRef: ChangeDetectorRef
  ) {}

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
        formatter: (params: any) => {
          const barValue = params[0].value;
          const dataIndex = params[0].dataIndex;
          const files = [4050, 4560, 7070, 7700, 8900, 6750, 4590];
          const randomFiles = files[dataIndex];

          // Create the tooltip content with the actual value and random amount
          return `No. of files:${randomFiles}<br>Days:${barValue} `;
        },
      },
      legend: {
        data: ['Vetting', 'Report'],
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
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          type: 'category',
          boundaryGap: true,
          data: [
            'Pan India',
            'PCH',
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
          min: 1,
          max: 6,
          interval: 1,
          name: 'Days',
          nameLocation: 'middle',
          nameGap: 10,
          nameTextStyle: {
            fontWeight: 600,
            fontSize: 14,
          },
          axisLabel: {
            margin: 1,
          },
          splitLine: {
            show: false,
          },
        },
      ],
      series: [
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
          data: [2, 4, 3, 5, 6, 5, 6],
          itemStyle: {
            color: '#9D76C1',
          },
        },
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
          data: [2, 2, 3, 3, 4, 3, 5],
          itemStyle: {
            color: '#DE8F5F',
          },
        },
      ],
    };

    this.TMOption = {
      title: {},
      tooltip: {
        trigger: 'item',
        formatter: 'No. of Files: {c}',
      },

      series: [
        {
          type: 'pie',
          radius: [50, 130],

          data: [
            {
              value: 16,
              name: 'K Rahul',
              itemStyle: {
                color: '#9D76C1',
              },
            },
            {
              value: 29,
              name: 'Harpreet kaur',
              itemStyle: {
                color: '#7D6E83',
              },
            },

            {
              value: 13,
              name: 'Manoj Tiwary',
              itemStyle: {
                color: '#A75D5D',
              },
            },
            {
              value: 8,
              name: 'Ankit Sharma',
              itemStyle: {
                color: '#DBA39A',
              },
            },
            {
              value: 9,
              name: 'Rahul Thakur',
              itemStyle: {
                color: '#DF7861',
              },
            },
            {
              value: 6,
              name: 'Vikram Saini',
              itemStyle: {
                color: '#ECB390',
              },
            },
            {
              value: 5,
              name: 'Saurabh Kumar',
              itemStyle: {
                color: '#AD8B73',
              },
            },
          ],
          emphasis: {
            label: {
              show: true,
              formatter: '{c}%',
              fontSize: 16,
              fontWeight: 'bold',
            },
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
            show: false,
            position: 'center',
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
        formatter: 'No. of Reports: {c}',
      },
      legend: {
        data: ['Total Reports','Internal Reports'],
        top: '10',
      },
      xAxis: {
        type: 'category',
        data: [
          'Pan India',
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
        axisTick: {
          show: false, // Hide tick lines
        },
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        interval: 20,

        name: 'Percentage %',
        nameLocation: 'middle',
        nameGap: 45,
        nameTextStyle: {
          fontWeight: 600,
          fontSize: 14,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false, // Hide tick lines
        },
      },
      series: [
        {
          name: 'Internal Reports',
          type: 'bar',
          stack: 'barStack',
          barWidth: '25%', // Adjust the bar width as needed
          data: [15, 18, 20, 22, 20, 25, 17],
          itemStyle: {
            color: '#F0997D', // Color for Category 1
          },
        },
        {
          name: 'Total Reports',
          type: 'bar',
          stack: 'barStack',
          barWidth: '25%', // Adjust the bar width as needed
          data: [85, 82, 80, 78, 80, 75, 83],
          itemStyle: {
            color: '#F0B86E', // Color for Category 2
          },
        },
      ],
    };

    // Create your chart using the above option object

    this.TatChart.setOption(this.TatOption);
    this.TMChart.setOption(this.TMOption);
    this.TotalReportChart.setOption(this.TotalReportOption);
  }

  generateActivityTat() {
    // Generate random data within the specified range
    const randomData1 = Array.from({ length: 7 }, () =>
      this.getRandomValue(3, 5)
    );
    const randomData2 = Array.from({ length: 7 }, () =>
      this.getRandomValue(2, 4.5)
    );

    // Update the series data with random data
    this.TatOption.series[0].data = randomData1;
    this.TatOption.series[1].data = randomData2;

    // Set the chart option to update the chart
    this.TatChart.setOption(this.TatOption);
  }

  getRandomValue(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  onFilterChange(selectedValue: string) {
    this.generateActivityTat();
    this.generateTimData();
    this.generateReportData();
  }

  onStateChange(selectedValue: string) {
    this.generateActivityTat();
    this.generateTimData();
    this.generateReportData();
  }
  generateTimData() {
    // Generate random values for each data point within the specified range
    const randomValue1 = this.getRandomValue(15, 16);
    const randomValue2 = this.getRandomValue(28, 29);
    const randomValue3 = this.getRandomValue(13, 14);
    const randomValue4 = this.getRandomValue(8, 9);
    const randomValue5 = this.getRandomValue(9, 10);
    const randomValue6 = this.getRandomValue(6, 7);
    const randomValue7 = this.getRandomValue(5, 6);

    // Update the data values in the series with random values
    this.TMOption.series[0].data = [
      { value: randomValue1, name: 'K Rahul', itemStyle: { color: '#9D76C1' } },
      {
        value: randomValue2,
        name: 'Harpreet kaur',
        itemStyle: { color: '#7D6E83' },
      },
      {
        value: randomValue3,
        name: 'Manoj Tiwary',
        itemStyle: { color: '#A75D5D' },
      },
      {
        value: randomValue4,
        name: 'Ankit Sharma',
        itemStyle: { color: '#DBA39A' },
      },
      {
        value: randomValue5,
        name: 'Rahul Thakur',
        itemStyle: { color: '#DF7861' },
      },
      {
        value: randomValue6,
        name: 'Vikram Saini',
        itemStyle: { color: '#ECB390' },
      },
      {
        value: randomValue7,
        name: 'Saurabh Kumar',
        itemStyle: { color: '#AD8B73' },
      },
    ];

    // Set the chart option to update the chart
    this.TMChart.setOption(this.TMOption);
  }

  generateReportData() {
    const minRange = 200;
    const maxRange = 1800;

    // Generate random data for Category 1 and Category 2
    const category1Data = Array.from({ length: 7 }, () =>
      this.getRandomValue(minRange, maxRange)
    );
    const category2Data = Array.from({ length: 7 }, () =>
      this.getRandomValue(minRange, maxRange)
    );

    // Update the series data with random values
    this.TotalReportOption.series[0].data = category1Data;
    this.TotalReportOption.series[1].data = category2Data;

    // Set the chart option to update the chart
    this.TotalReportChart.setOption(this.TotalReportOption);
  }
}
