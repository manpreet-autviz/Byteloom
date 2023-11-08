import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
} from '@angular/core';
import * as echarts from 'echarts';
declare var $: any;
@Component({
  selector: 'app-channel-partners',
  templateUrl: './channel-partners.component.html',
  styleUrls: ['./channel-partners.component.scss'],
})
export class ChannelPartnersComponent {
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
  selectedFilter: string = 'September';
  isActiveButton: string = 'button1';

  CPLoginsChart!: echarts.ECharts;
  CPDisbursalChart!: echarts.ECharts;
  CPOfDelinquencyChart!: echarts.ECharts;
  CPDetailsChart!: echarts.ECharts;

  CPLoginsOption: any;
  CPDisbursalOption: any;
  CPOfDelinquencyOption: any;
  CPDetailsOption: any;

  data = [
    {
      SNo: 1,
      CpName: 'Nikhil Rana',
      CpCode: '0123',
      Area: 'Karnal',
      Branch: 'Rohtak',
      TotalLogins: '1200',
      TotalDisbursal: '120',
      State: 'PCH',
      Target: '90',
      Delinquency: '0.65',
    },
    {
      SNo: 2,
      CpName: 'Manjeet Kaur',
      CpCode: '0124',
      Area: 'Indore',
      Branch: 'Indore',
      TotalLogins: '1400',
      TotalDisbursal: '140',
      State: 'MP',
      Target: '95',
      Delinquency: '0.7',
    },
    {
      SNo: 3,
      CpName: 'Randeep hodda',
      CpCode: '0125',
      Area: 'Mumbai',
      Branch: 'Navi Mumbai',
      TotalLogins: '1500',
      TotalDisbursal: '100',
      State: 'Maharashtra',
      Target: '105',
      Delinquency: '1.2',
    },
    {
      SNo: 4,
      CpName: 'Kishor Kumar',
      CpCode: '0126',
      Area: 'Mumbai',
      Branch: 'Navi Mumbai',
      TotalLogins: '1290',
      TotalDisbursal: '90',
      State: 'Maharashtra',
      Target: '85',
      Delinquency: '0.3',
    },
    {
      SNo: 5,
      CpName: 'Amarjeet',
      CpCode: '0127',
      Area: 'Jaipur',
      Branch: 'Jaipur',
      TotalLogins: '1000',
      TotalDisbursal: '110',
      State: 'Rajasthan',
      Target: '110',
      Delinquency: '0.5',
    },
    {
      SNo: 6,
      CpName: 'Vivek Gupta',
      CpCode: '0128',
      Area: 'Chandigarh',
      Branch: 'Ambala',
      TotalLogins: '1400',
      TotalDisbursal: '95',
      State: 'PCH',
      Target: '75',
      Delinquency: '0.65',
    },
    {
      SNo: 7,
      CpName: 'Rashmika Sen',
      CpCode: '0129',
      Area: 'Chandigarh',
      Branch: 'Chandigarh',
      TotalLogins: '1200',
      TotalDisbursal: '150',
      State: 'PCH',
      Target: '93',
      Delinquency: '0.9',
    },
    {
      SNo: 8,
      CpName: 'Rahul Saini',
      CpCode: '0130',
      Area: 'Chandigarh',
      Branch: 'Ambala',
      TotalLogins: '1400',
      TotalDisbursal: '145',
      State: 'PCH',
      Target: '66',
      Delinquency: '1.1',
    },
    {
      SNo: 9,
      CpName: 'Kiran Sen',
      CpCode: '0131',
      Area: 'Jaipur',
      Branch: 'Jaipur',
      TotalLogins: '1000',
      TotalDisbursal: '125',
      State: 'Rajasthan',
      Target: '115',
      Delinquency: '0.35',
    },
    {
      SNo: 10,
      CpName: 'Anushaka Sen',
      CpCode: '0132',
      Area: 'Indore',
      Branch: 'Indore',
      TotalLogins: '1250',
      TotalDisbursal: '120',
      State: 'MP',
      Target: '98',
      Delinquency: '0.2',
    },
    // Add more data as needed
  ];

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone,
    private cdRef: ChangeDetectorRef
  ) {}

  setActiveButton(button: string) {
    setTimeout(() => {
      this.initializeChart();
    }, 0);
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        $(this.elementRef.nativeElement.querySelector('#table')).DataTable({
          lengthChange: false,
          searching: false,
          ordering: false,
        });
      }, 0);
    });
    this.cdRef.detectChanges();
    this.isActiveButton = button;
  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        $(this.elementRef.nativeElement.querySelector('#table')).DataTable({
          lengthChange: false,
          searching: false,
          ordering: false,
        });
      }, 0);
    });

    this.initializeChart();
  }

  ngOnDestroy() {
    const table = $(
      this.elementRef.nativeElement.querySelector('#table')
    ).DataTable();
    table.destroy();
  }
  initializeChart() {
    this.CPLoginsChart = echarts.init(
      document.getElementById('CP-Logins-Chart') as HTMLDivElement
    );

    this.CPDisbursalChart = echarts.init(
      document.getElementById('CP-Disbursal-Chart') as HTMLDivElement
    );
    this.CPOfDelinquencyChart = echarts.init(
      document.getElementById('Delinquency-of-CPs') as HTMLDivElement
    );

    this.CPDetailsChart = echarts.init(
      document.getElementById('CP-Detail-Chart') as HTMLDivElement
    );

    this.CPDetailsOption = {
      legend: {
        textStyle: {
          color: '#333',
        },
        itemWidth: 20, // Adjust the width of legend items
        itemHeight: 20,
        borderRadius: 10,
      },
      tooltip: {},
      dataset: {
        dimensions: ['state', 'Total Number of CPs', 'Active CPs'],

        source: [
          {
            state: 'Pan India',
            'Total Number of CPs': 1410,
            'Active CPs': 1250,
          },
          {
            state: 'Punjab',
            'Total Number of CPs': 1400,
            'Active CPs': 1230,
          },
          {
            state: 'Haryana',
            'Total Number of CPs': 1450,
            'Active CPs': 1370,
          },
          { state: 'NCR', 'Total Number of CPs': 1400, 'Active CPs': 1190 },
          {
            state: 'Rajasthan',
            'Total Number of CPs': 1480,
            'Active CPs': 1350,
          },
          {
            state: 'Gujarat',
            'Total Number of CPs': 1400,
            'Active CPs': 1190,
          },
          { state: 'MP', 'Total Number of CPs': 1430, 'Active CPs': 1340 },
          {
            state: 'Maharashtra',
            'Total Number of CPs': 1400,
            'Active CPs': 1260,
          },
        ],
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          interval: 0,
          rotate: -45,
          overflow: 'break',
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
      yAxis: {
        min: 1000,
        max: 1500,
        interval: 100,
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
        name: 'Number of CPs',
        nameLocation: 'middle',
        nameGap: 35,
        nameTextStyle: {
          fontWeight: 600,
          fontSize: 14,
        },
      },

      series: [
        {
          type: 'bar',
          itemStyle: {
            color: '#3282B8',
          },
        },
        {
          type: 'bar',
          itemStyle: {
            color: '#3FC1C9',
          },
        },
      ],
    };

    this.CPLoginsOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: (params: any) => {
          const barValue = params[0].value;
          const totalLogin = 340;
          const dataIndex = params[0].dataIndex;
          const percentage = [40, 45, 70, 77, 89, 67, 45];
          const randomPerc = percentage[dataIndex];
          // Create the tooltip content with the actual value and random amount
          return `CP login: ${barValue} <br>Total Login:${totalLogin} <br>  ${randomPerc}% `;
        },
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
          rotate: 45,
          overflow: 'break',
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        min: 20,
        max: 35,
        interval: 2,
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        name: 'Number of CPs',
        nameLocation: 'middle',
        nameGap: 25,
        nameTextStyle: {
          fontWeight: 600,
          fontSize: 14,
        },
        axisLabel: {
          formatter: '{value}',
          margin: 1,
        },
      },
      series: [
        {
          barWidth: 20,
          data: [26, 31, 28, 31, 31, 27, 31],
          type: 'bar',
          itemStyle: {
            color: '#DBA39A',
          },
        },
      ],
    };

    this.CPDisbursalOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: (params: any) => {
          const barValue = params[0].value;
          const total = 340;
          const dataIndex = params[0].dataIndex;
          const amount = [140, 145, 170, 177, 189, 167, 245];
          const disbursalAmount = amount[dataIndex];

          return `Total disbursal (amount in Cr): ${total} <br>CP disbursal (amount in Cr) :${disbursalAmount} <br>  ${barValue}% `;
        },
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
          rotate: 45,
          overflow: 'break',
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        min: 5,
        max: 30,
        interval: 5,
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        name: '% of Total Disbursal',
        nameLocation: 'middle',
        nameGap: 25,
        nameTextStyle: {
          fontWeight: 600,
          fontSize: 14,
        },
        axisLabel: {
          formatter: '{value}',
          margin: 1,
        },
      },
      series: [
        {
          barWidth: 20,
          data: [18, 20.5, 19, 18.5, 20.5, 18.5, 20.5],
          type: 'bar',
          itemStyle: {
            color: '#0747A6',
          },
        },
      ],
    };

    this.CPOfDelinquencyOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: (params: any) => {
          const overallValue = params[0].value;
          const cpValue = params[1].value;

          return `Overall: ${overallValue}%<br>CP: ${cpValue}%`;
        },
      },
      legend: {
        data: ['Overall', 'CP'],
        textStyle: {
          color: '#333',
        },
        itemWidth: 20,
        itemHeight: 20,
        borderRadius: 10,
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
          rotate: 45,
          overflow: 'break',
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        min: 0.75,
        max: 1.25,
        interval: 0.1,
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        name: 'Delinquency in %',
        nameLocation: 'middle',
        nameGap: 25,
        nameTextStyle: {
          fontWeight: 600,
          fontSize: 14,
        },
        axisLabel: {
          formatter: '{value}',
          margin: 1,
        },
      },
      series: [
        {
          name: 'Overall',
          barWidth: 20,
          data: [0.95, 1.15, 1.05, 1.15, 1.03, 1.15, 1.03],
          type: 'bar',
          itemStyle: {
            color: '#8675A9',
          },
        },
        {
          name: 'CP',
          barWidth: 20,
          data: [0.9, 1.17, 1.01, 1.18, 1.0, 1.17, 1.0],
          type: 'bar',
          itemStyle: {
            color: '#D2BEFB',
          },
        },
      ],
    };

    this.CPDetailsChart.setOption(this.CPDetailsOption);
    this.CPLoginsChart.setOption(this.CPLoginsOption);
    this.CPDisbursalChart.setOption(this.CPDisbursalOption);
    this.CPOfDelinquencyChart.setOption(this.CPOfDelinquencyOption);
  }

  onFilterChange(selectedValue: string) {
    this.generateConversionRandomData();
    this.generateCpLoginRandomData();
    this.generateCpDeliRandomData();
    this.generateCpDetailsRandomData();
  }

  onStateChange(selectedValue: string) {
    this.generateConversionRandomData();
    this.generateCpLoginRandomData();
    this.generateCpDeliRandomData();
    this.generateCpDetailsRandomData();
  }

  generateConversionRandomData() {
    const newData = [
      { value: this.getRandomValue(15, 20), itemStyle: { color: '#0747A6' } },
      { value: this.getRandomValue(15, 20), itemStyle: { color: '#0747A6' } },
      { value: this.getRandomValue(15, 20), itemStyle: { color: '#0747A6' } },
      { value: this.getRandomValue(15, 20), itemStyle: { color: '#0747A6' } },
      { value: this.getRandomValue(15, 20), itemStyle: { color: '#0747A6' } },
      { value: this.getRandomValue(15, 20), itemStyle: { color: '#0747A6' } },
      { value: this.getRandomValue(15, 20), itemStyle: { color: '#0747A6' } },
    ];
    this.CPDisbursalOption.series[0].data = newData;
    this.CPDisbursalChart.setOption(this.CPDisbursalOption);
  }
  generateCpLoginRandomData() {
    const newData = [
      { value: this.getRandomValue(26, 30), itemStyle: { color: '#DBA39A' } },
      { value: this.getRandomValue(26, 30), itemStyle: { color: '#DBA39A' } },
      { value: this.getRandomValue(26, 30), itemStyle: { color: '#DBA39A' } },
      { value: this.getRandomValue(26, 30), itemStyle: { color: '#DBA39A' } },
      { value: this.getRandomValue(26, 30), itemStyle: { color: '#DBA39A' } },
      { value: this.getRandomValue(26, 30), itemStyle: { color: '#DBA39A' } },
      { value: this.getRandomValue(26, 30), itemStyle: { color: '#DBA39A' } },
    ];
    this.CPLoginsOption.series[0].data = newData;
    this.CPLoginsChart.setOption(this.CPLoginsOption);
  }

  generateCpDeliRandomData() {
    const minDelinquency = 0.95;
    const maxDelinquency = 1.15;

    // Generate random values for the series data within the specified range
    const randomOverallData = Array.from({ length: 7 }, () =>
      this.getRandomValue(minDelinquency, maxDelinquency)
    );
    const randomCPData = Array.from({ length: 7 }, () =>
      this.getRandomValue(minDelinquency, maxDelinquency)
    );

    this.CPOfDelinquencyOption.series[0].data = randomOverallData;
    this.CPOfDelinquencyOption.series[1].data = randomCPData;

    this.CPOfDelinquencyChart.setOption(this.CPOfDelinquencyOption);
  }
  generateCpDetailsRandomData() {
    const minDelinquency = 1300;
    const maxDelinquency = 1400;

    // Generate random values for the series data within the specified range
    const randomOverallData = Array.from({ length: 7 }, () =>
      this.getRandomValue(minDelinquency, maxDelinquency)
    );
    const randomCPData = Array.from({ length: 7 }, () =>
      this.getRandomValue(minDelinquency, maxDelinquency)
    );

    this.CPDetailsOption.series[0].data = randomOverallData;
    this.CPDetailsOption.series[1].data = randomCPData;

    this.CPDetailsChart.setOption(this.CPDetailsOption);
  }
  getRandomValue(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
