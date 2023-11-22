import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import * as echarts from 'echarts';
declare var $: any;
@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss'],
})
export class LegalComponent {
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
  TMChart!: echarts.ECharts;
 
  TMOption: any;
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
      document.getElementById('legal-tat-Chart') as HTMLDivElement
    );

    this.TMChart = echarts.init(
      document.getElementById('legal-TM-wise-vetting') as HTMLDivElement
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
          const files = [4050, 4560, 7070,7700,8900,6750,4590];
          const randomFiles = files[dataIndex];
          
          // Create the tooltip content with the actual value and random amount
          return `No. of files:${randomFiles}<br>Days:${barValue} `;
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
          axisTick: {
            show: false, // Hide tick lines
          },
          axisLine: {
            show: false,
          },
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
          axisTick: {
            show: false, // Hide tick lines
          },
          min: 1,
          max: 6,
          interval: 1,
          name: 'Days',
          nameLocation: 'middle',
          nameGap: 9,
          nameTextStyle: {
            fontWeight: 600,
            fontSize:12,
          },
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
          data: [3.3, 3.5, 3.3, 2.8, 4.2, 3.8, 3.2],
          itemStyle: {
            color: '#9D76C1',
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
          data: [1.8, 2.2, 2.3, 2.5, 1.5, 1.4, 1.2],
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
          name: 'Access From',
          type: 'pie',
          radius: [50, 130],

          data: [
            {
              value: 15,
              name: 'K Rahul',
              itemStyle: {
                color: '#9D76C1',
              },
            },
            {
              value: 16,
              name: 'Harpreet kaur',
              itemStyle: {
                color: '#7D6E83',
              },
            },

            {
              value: 18,
              name: 'Manoj Tiwary',
              itemStyle: {
                color: '#A75D5D',
              },
            },
            {
              value: 12,
              name: 'Ankit Sharma',
              itemStyle: {
                color: '#DBA39A',
              },
            },
            {
              value: 10,
              name: 'Rahul Thakur',
              itemStyle: {
                color: '#DF7861',
              },
            },
            {
              value: 15,
              name: 'Vikram Saini',
              itemStyle: {
                color: '#ECB390',
              },
            },
            {
              value: 14,
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
            position: 'center',
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

    this.TatChart.setOption(this.TatOption);
    this.TMChart.setOption(this.TMOption);
   
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
  onFilterChange(selectedValue: string) {}

  onStateChange(selectedValue: string) {
    this.generateActivityTat();
    this.generateTimData();
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
}
