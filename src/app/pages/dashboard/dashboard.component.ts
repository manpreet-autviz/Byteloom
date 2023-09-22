import { Component, ElementRef } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  option!: echarts.EChartsOption;
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
    'September'
  ];
  selectedState: string = 'Pan India';
  selectedFilter: string = 'September';
  IrrChart!: echarts.ECharts;
  pfChart!: echarts.ECharts;
  loginTotalAmount: number = 3.95;
  loginTotalFiles: number = 3050;
  financialTotalAmount: number = 3.2;
  financialTotalFiles: number = 2080;
  disbursalTotalAmount: number = 3.05;
  disbursalTotalFiles: number = 2080;

  minLoginAmountValue = 350; 
  maxLoginAmountValue = 500; 

  minLoginFileValue = 3000; 
  maxLoginFileValue = 4000; 

  minFinancialAmountValue = 110; 
  maxFinancialAmountValue = 145; 

  minFinancialFileValue = 1350; 
  maxFinancialFileValue = 1800;

  minDisbursalAmountValue = 90; 
  maxDisbursalAmountValue = 120;

  minDisbursalFileValue = 1100; 
  maxDisbursalFileValue = 1400;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.IrrChart = echarts.init(
      document.getElementById('IrrChartValue') as HTMLDivElement
    );
    this.pfChart = echarts.init(
      document.getElementById('PfChartValue') as HTMLDivElement
    );

    const IrrOption = {
      series: [
        {
          type: 'gauge',
          center: ['50%', '60%'],
          startAngle: 220,
          endAngle: -40,
          min: 0,
          max: 15,
          splitNumber: 12,
          itemStyle: {
            color: '#FF821C',
          },
          progress: {
            show: true,
            width: 15,
          },

          pointer: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              width: 15,
            },
          },
          axisTick: {
            show: false,
            distance: -45,
            splitNumber: 5,
            lineStyle: {
              width: 2,
              color: '#999',
            },
          },
          splitLine: {
            show: false,
            distance: -52,
            length: 14,
            lineStyle: {
              width: 3,
              color: '#999',
            },
          },
          axisLabel: {
            show: false,
            distance: -20,
            color: '#999',
            fontSize: 20,
          },
          anchor: {
            show: false,
          },
          title: {
            show: false,
          },
          detail: {
            valueAnimation: true,
            width: '60%',
            lineHeight: 10,
            borderRadius: 8,
            offsetCenter: [0, '-15%'],
            fontSize: 10,
            fontWeight: 'bolder',
            formatter: '{value}%',
            color: 'inherit',
          },
          data: [
            {
              value: 3,
            },
          ],
        },
      ],
    };

    const pfOption = {
      series: [
        {
          type: 'gauge',
          center: ['50%', '60%'],
          startAngle: 220,
          endAngle: -40,
          min: 0,
          max: 15,
          splitNumber: 12,
          itemStyle: {
            color: '#7E74FB',
          },
          progress: {
            show: true,
            width: 15,
          },

          pointer: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              width: 15,
            },
          },
          axisTick: {
            show: false,
            distance: -45,
            splitNumber: 5,
            lineStyle: {
              width: 2,
              color: '#999',
            },
          },
          splitLine: {
            show: false,
            distance: -52,
            length: 14,
            lineStyle: {
              width: 3,
              color: '#999',
            },
          },
          axisLabel: {
            show: false,
            distance: -20,
            color: '#999',
            fontSize: 20,
          },
          anchor: {
            show: false,
          },
          title: {
            show: false,
          },
          detail: {
            valueAnimation: true,
            width: '60%',
            lineHeight: 20,
            borderRadius: 8,
            offsetCenter: [0, '-15%'],
            fontSize: 10,
            fontWeight: 'bolder',
            formatter: '{value}%',
            color: 'inherit',
          },
          data: [
            {
              value: 3,
            },
          ],
        },
      ],
    };
    this.IrrChart.setOption(IrrOption);
    this.pfChart.setOption(pfOption);
  }

  onFilterChange(selectedValue: string) {
    const random = +(Math.random() * 15).toFixed(1);
    this.IrrChart.setOption<echarts.EChartsOption>({
      series: [
        {
          data: [
            {
              value: random,
            },
          ],
        },
        {
          data: [
            {
              value: random,
            },
          ],
        },
      ],
    });
    this.pfChart.setOption<echarts.EChartsOption>({
      series: [
        {
          data: [
            {
              value: random,
            },
          ],
        },
        {
          data: [
            {
              value: random,
            },
          ],
        },
      ],
    });
    this.loginTotalAmount = +(Math.random() * 15).toFixed(2);
    this.loginTotalFiles = +(Math.random() * 15).toFixed(1);
    this.financialTotalAmount = +(Math.random() * 15).toFixed(2);
    this.financialTotalFiles = +(Math.random() * 15).toFixed(1);
    this.disbursalTotalAmount = +(Math.random() * 15).toFixed(2);
    this.disbursalTotalFiles = +(Math.random() * 15).toFixed(1);

    this.loginTotalAmount = +(
      Math.random() * (this.maxLoginAmountValue - this.minLoginAmountValue) +
      this.minLoginAmountValue
    ).toFixed(2);
    this.loginTotalFiles =  +(
      Math.random() * (this.maxLoginFileValue - this.minLoginFileValue) +
      this.minLoginFileValue
    ).toFixed(0);
  
    this.financialTotalAmount =  +(
      Math.random() * (this.maxFinancialAmountValue - this.minFinancialAmountValue) +
      this.minFinancialAmountValue
    ).toFixed(2);
    this.financialTotalFiles =  +(
      Math.random() * (this.maxFinancialFileValue - this.minFinancialFileValue) +
      this.minFinancialFileValue
    ).toFixed(0);

    this.disbursalTotalAmount =  +(
      Math.random() * (this.maxDisbursalAmountValue - this.minDisbursalAmountValue) +
      this.minDisbursalAmountValue
    ).toFixed(2);
    this.disbursalTotalFiles =  +(
      Math.random() * (this.maxDisbursalFileValue - this.minDisbursalFileValue) +
      this.minDisbursalFileValue
    ).toFixed(0);
  }

  onStateChange(selectedValue: string) {
    const random = +(Math.random() * 15).toFixed(1);
    this.IrrChart.setOption<echarts.EChartsOption>({
      series: [
        {
          data: [
            {
              value: random,
            },
          ],
        },
        {
          data: [
            {
              value: random,
            },
          ],
        },
      ],
    });
    this.pfChart.setOption<echarts.EChartsOption>({
      series: [
        {
          data: [
            {
              value: random,
            },
          ],
        },
        {
          data: [
            {
              value: random,
            },
          ],
        },
      ],
    });

    this.loginTotalAmount = +(
      Math.random() * (this.maxLoginAmountValue - this.minLoginAmountValue) +
      this.minLoginAmountValue
    ).toFixed(2);
    this.loginTotalFiles =  +(
      Math.random() * (this.maxLoginFileValue - this.minLoginFileValue) +
      this.minLoginFileValue
    ).toFixed(0);
  
    this.financialTotalAmount =  +(
      Math.random() * (this.maxFinancialAmountValue - this.minFinancialAmountValue) +
      this.minFinancialAmountValue
    ).toFixed(2);
    this.financialTotalFiles =  +(
      Math.random() * (this.maxFinancialFileValue - this.minFinancialFileValue) +
      this.minFinancialFileValue
    ).toFixed(0);

    this.disbursalTotalAmount =  +(
      Math.random() * (this.maxDisbursalAmountValue - this.minDisbursalAmountValue) +
      this.minDisbursalAmountValue
    ).toFixed(2);
    this.disbursalTotalFiles =  +(
      Math.random() * (this.maxDisbursalFileValue - this.minDisbursalFileValue) +
      this.minDisbursalFileValue
    ).toFixed(0);
  }
}
