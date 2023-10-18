import { Component, ElementRef } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  option!: echarts.EChartsOption;
  DisbursalAchievementChart!: echarts.ECharts;
  disbursalAchievementOption: any;
  trendDisbursalAchievementChart!: echarts.ECharts;
  trendDisbursalAchievementOption: any;
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
  loginTotalAmount: number = 550;
  loginTotalFiles: number = 3050;
  financialTotalAmount: number = 175;
  financialTotalFiles: number = 1500;
  disbursalTotalAmount: number = 150;
  disbursalTotalFiles: number = 1200;
  finalTotalFiles:number = 1000;
  finalTotalAmount:number = 150

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
  ngAfterViewInit(): void {
    this.initializeChart();
  }
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

  initializeChart(){
    this.DisbursalAchievementChart = echarts.init(
      document.getElementById('Disbursal-Achievement-Chart') as HTMLDivElement
    );
    this.disbursalAchievementOption = {
      tooltip: {

        formatter: function (params:any) {

          return `Number of Files: 2000<br/>Amount in Cr: 234 <br/>${params.value}%`;

        },

      },
      series: [
        {
          type: 'gauge',
          responsive: true,
          axisLine: {
            lineStyle: {
              width: 25,
              color: [
                [0.6, '#FF0000'],
                [0.8, '#FF821C'],
                [1, '#047136'],
              ],
            },
          },
          pointer: {
            itemStyle: {
              color: 'auto',
            },
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2,
            },
          },
          splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
              color: '#fff',
              width: 4,
            },
          },
          axisLabel: {
            color: 'inherit',
            distance: 40,
            fontSize: 8,
            formatter: function (value: any) {
              if (value % 20 === 0) {
                return value + '%';
              } else {
                return '';
              }
            },
          },
          detail: {
            valueAnimation: true,
            formatter: '{value} %',
            color: 'inherit',
            fontSize: 22,
          },
          data: [
            {
              value: 70,
            },
          ],
        },
      ],
    };
    this.DisbursalAchievementChart.setOption(this.disbursalAchievementOption);
    this.trendDisbursalAchievementChart = echarts.init(
      document.getElementById('trendDisbursalAchievement') as HTMLDivElement
      );
      this.trendDisbursalAchievementOption = {
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
        legend: {},
   
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            axisLine: {
              show: false,
            },
            labelLine:{
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine:{
              show: false,
            },
            boundaryGap: false,
            data: [
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: false,
            },
            splitLine:{
              show: false,
            },
            min: 10,
            max: 100,
            interval: 10,
            name: 'Percentage %',
            nameLocation: 'middle',
            nameGap: 30,
            axisLabel: {
              formatter: '{value}%',
              margin: 1,
            },
            nameTextStyle: {
              fontWeight: 600,
              fontSize:14,
            },
          },
        ],
        series: [
          {
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
            data: [90, 93, 94, 92, 99, 100, 110],
          },
        ],
      };
      this.trendDisbursalAchievementChart.setOption(
        this.trendDisbursalAchievementOption
      );
  }
  generateDisbursalAchievement() {
    const minValue = 10;
    const maxValue = 90;

    const randomValue = +(
      Math.random() * (maxValue - minValue) +
      minValue
    ).toFixed(2);

    this.DisbursalAchievementChart.setOption({
      series: [
        {
          data: [
            {
              value: randomValue,
            },
          ],
        },
      ],
    });
  }
  onFilterChange(selectedValue: string) {
    this.generateDisbursalAchievement();
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
    this.finalTotalAmount = +(Math.random() * 15).toFixed(2);
    this.finalTotalFiles = +(Math.random() * 15).toFixed(1);

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
    this.finalTotalAmount =  +(
      Math.random() * (this.maxDisbursalAmountValue - this.minDisbursalAmountValue) +
      this.minDisbursalAmountValue
    ).toFixed(2);
    this.finalTotalFiles =  +(
      Math.random() * (this.maxDisbursalFileValue - this.minDisbursalFileValue) +
      this.minDisbursalFileValue
    ).toFixed(0);
  }

  onStateChange(selectedValue: string) {
    this.generateDisbursalAchievement();
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
