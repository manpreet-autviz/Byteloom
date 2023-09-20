import { Component } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  StateChart!: echarts.ECharts;
  AverageStateChart!: echarts.ECharts;
  SchemeLoginsChart!: echarts.ECharts;
  ProductLoginsChart!: echarts.ECharts;
  SourceChart!: echarts.ECharts;
  states: string[] = [
    'Punjab',
    'Haryana',
    'NCR',
    'Rajasthan',
    'Gujarat',
    'MP',
    'Maharashtra',
  ];
  filters: string[] = [
    'Last month',
    'Last 3 months',
    'Last 6 months  ',
    // 'Select custom'
  ];
  selectedState: string = 'Punjab';
  selectedFilter: string = 'Last month';
  showContent!: boolean;

  
  constructor() {}

  ngOnInit(): void {
    this.StateChart = echarts.init(
      document.getElementById('StateWiseChart') as HTMLDivElement
    );
    this.AverageStateChart = echarts.init(
      document.getElementById('AverageStateWiseChart') as HTMLDivElement
    );

    this.SchemeLoginsChart = echarts.init(
      document.getElementById('SchemeLogins') as HTMLDivElement
    );

    this.ProductLoginsChart = echarts.init(
      document.getElementById('ProductLogins') as HTMLDivElement
    );

    this.SourceChart = echarts.init(
      document.getElementById('Source') as HTMLDivElement
    );

    const stateOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {},
      grid: {
        top: '3%',
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {
          show: false,
        },
        min: 0,
        max: 4000,
        interval: 500,
        name: 'NUMBER OF FILES',
        nameLocation: 'middle',
        nameGap: 30,
        nameTextStyle: {
          fontWeight: 700,
        },
      },
      yAxis: {
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
      },
      series: [
        {
          barWidth: 20,
          type: 'bar',
          data: [1700, 500, 600, 1900, 700, 800, 1000, 4000],
          itemStyle: {
            color: '#0747a6',
          },
        },
      ],
    };

    const averageStateOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {},
      grid: {
        top: '3%',
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {
          show: false,
        },
        min: 0,
        max: 15,
        interval: 1,
        name: 'NUMBER OF FILES',
        nameLocation: 'middle',
        nameGap: 30,
        nameTextStyle: {
          fontWeight: 700,
        },
      },
      yAxis: {
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
      },
      series: [
        {
          barWidth: 20,
          type: 'bar',
          data: [10,7,5,13,9,8,7,15],
          itemStyle: {
            color: '#18A838',
          },
        },
      ],
    };

    const schemeloginsOption = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Access From',
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
              formatter: '{c}',
              fontSize: 16,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: 'Top-Up', itemStyle: { color: '#FF7629' } },
            { value: 735, name: 'Fresh', itemStyle: { color: '#00E1EF' } },
            { value: 580, name: 'BT', itemStyle: { color: '#94DD1D' } },
          ],
        },
      ],
    };

    const productloginsOption = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Access From',
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
              formatter: '{c}',
              fontSize: 16,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: 'Home Loan', itemStyle: { color: '#7C41DA' } },
            { value: 735, name: 'LAP', itemStyle: { color: '#F99B00' } },
            { value: 580, name: 'BL', itemStyle: { color: '#636363' } },
            { value: 580, name: 'SBL', itemStyle: { color: '#0B9DE8' } },
          ],
        },
      ],
    };

    const sourceOption = {
      xAxis: {
        type: 'category',
        data: ['Direct', 'DSA', 'Power Partner', 'Saathi', 'Online Partner'],
        axisLabel: {
          interval: 0, // Force display all labels
          rotate: 0,   // Rotate the labels if needed
          overflow: 'break', // Enable word wrapping for long labels
         
        }
      },
      yAxis: {
        name: 'PERCENTAGE',
        nameLocation: 'middle',
        nameGap: 30,

        nameTextStyle: {
          fontWeight: 700,
        },
        type: 'value',
        splitLine: {
          show: false,
        },
        min: 0,
        max: 70,
        interval: 10,
        axisLabel: {
          formatter: '{value}%',
          margin: 1,
        },
      },
      series: [
        {
          data: [
            { value: 37, itemStyle: { color: '#07A14E' } },
            { value: 20, itemStyle: { color: '#FB8C00' } },
            { value: 16, itemStyle: { color: '#6659F7' } },
            { value: 16, itemStyle: { color: '#2962FF' } },
            { value: 15, itemStyle: { color: '#CAEDFF' } },
          ],
          barWidth: 40,
          type: 'bar',
        },
      ],
    };

    this.AverageStateChart.setOption(averageStateOption);
    this.StateChart.setOption(stateOption);
    this.SchemeLoginsChart.setOption(schemeloginsOption);
    this.ProductLoginsChart.setOption(productloginsOption);
    this.SourceChart.setOption(sourceOption);
  }

  onFilterChange(selectedValue: string) {}

  onStateChange(selectedValue: string) {
    const random = +(Math.random() * 15).toFixed(1);
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }
}
