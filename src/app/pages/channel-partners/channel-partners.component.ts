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
      leadNo: '1231',
      state: 'PCH',
      branchName: 'CHANDIGARH',
      cluster: 'CLUSTER',
      customerName: 'Amit Verma',
      productName: 'PRODUCT NAME',
      Scheme: 'HOME LOAN',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 2,
      leadNo: '1232',
      state: 'NCR',
      branchName: 'DELHI',
      cluster: 'CLUSTER',
      customerName: 'Vivek Singh',
      productName: 'PRODUCT NAME',
      Scheme: 'SBL',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 3,
      leadNo: '1233',
      state: 'NCR',
      branchName: 'DELHI',
      cluster: 'CLUSTER',
      customerName: 'Kritish Gujral',
      productName: 'PRODUCT NAME',
      Scheme: 'SBL',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 4,
      leadNo: '1234',
      state: 'RAJASTHAN',
      branchName: 'JAIPUR',
      cluster: 'CLUSTER',
      customerName: 'Monica',
      productName: 'PRODUCT NAME',
      Scheme: 'SBL',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 5,
      leadNo: '1235',
      state: 'GUJRAT',
      branchName: 'AHMEDABAD',
      cluster: 'CLUSTER',
      customerName: 'Amit Badana',
      productName: 'PRODUCT NAME',
      Scheme: 'LAP',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 6,
      leadNo: '1236',
      state: 'SURAT',
      branchName: 'RUNDH',
      cluster: 'CLUSTER',
      customerName: 'Shilpa Kumari',
      productName: 'PRODUCT NAME',
      Scheme: 'BL',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 7,
      leadNo: '1237',
      state: 'MP',
      branchName: 'INDORE',
      cluster: 'CLUSTER',
      customerName: 'Khushagar',
      productName: 'PRODUCT NAME',
      Scheme: 'LAP',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 8,
      leadNo: '1238',
      state: 'MP',
      branchName: 'UJJAIN',
      cluster: 'CLUSTER',
      customerName: 'Jaswinder Singh',
      productName: 'PRODUCT NAME',
      Scheme: 'HOME LOAN',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 9,
      leadNo: '1239',
      state: 'MAHARASHTRA',
      branchName: 'MUMBAI',
      cluster: 'CLUSTER',
      customerName: 'Mohit Dogra',
      productName: 'PRODUCT NAME',
      Scheme: 'SBL',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 10,
      leadNo: '1240',
      state: 'MAHARASHTRA',
      branchName: 'MUMBAI',
      cluster: 'CLUSTER',
      customerName: 'Rahul Saini',
      productName: 'PRODUCT NAME',
      Scheme: 'SBL',
      LoginDate: '09/25/2023',
    },
    // Add more data as needed
  ];

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone,
    private cdRef: ChangeDetectorRef
  ) {}

  onFilterChange(selectedValue: string) {}

  onStateChange(selectedValue: string) {}

  setActiveButton(button: string) {
    setTimeout(() => {
      this.initializeChart();
    }, 0);
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
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: ['state', 'Total Number of CP’s', 'Active CP’s', ],
       
        source: [
          { state: 'Pan India', 'Total Number of CP’s': 1410,  'Active CP’s': 1250  },
          { state: 'Punjab', 'Total Number of CP’s': 1400, 'Active CP’s': 1230  },
          { state: 'Haryana', 'Total Number of CP’s': 1450, 'Active CP’s': 1370  },
          { state: 'NCR', 'Total Number of CP’s': 1400, 'Active CP’s': 1190 },
          { state: 'Rajasthan', 'Total Number of CP’s': 1480, 'Active CP’s': 1350 },
          { state: 'Gujarat', 'Total Number of CP’s': 1400, 'Active CP’s': 1190 },
          { state: 'MP', 'Total Number of CP’s': 1430, 'Active CP’s': 1340},
          { state: 'Maharashtra', 'Total Number of CP’s': 1400, 'Active CP’s': 1260 },
        ],
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          interval: 0,
          rotate: -45,
          overflow: 'break',
        },
      },
      yAxis: {
        min: 1000,
        max: 1500,
        interval: 100,
        axisLine: {
          show: true,
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
            color: '#F85656', // Set the color for the first bar series (IRR)
          },
        },
        {
          type: 'bar',
          itemStyle: {
            color: '#7460EE', // Set the color for the first bar series (IRR)
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

          // Create the tooltip content with the actual value and random amount
          return ` ${barValue}`;
        },
      },
      xAxis: {
        type: 'category',

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
          rotate: 45,
          overflow: 'break',
        },
      },
      yAxis: {
        type: 'value',
        min: 20,
        max: 35,
        interval: 2,
        axisLine: {
          show: true,
        },
        splitLine: {
          show: false,
        },
        name: 'NUMBER OF CPs',
        nameLocation: 'middle',
        nameGap: 25,
        axisLabel: {
          formatter: '{value}',
          margin: 1,
        },
      },
      series: [
        {
          barWidth: 20,
          data: [26, 31, 28, 31, 27, 31, 27, 31],
          type: 'bar',
          itemStyle: {
            color: '#FB8C00',
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

          // Create the tooltip content with the actual value and random amount
          return ` ${barValue}%`;
        },
      },
      xAxis: {
        type: 'category',

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
          rotate: 45,
          overflow: 'break',
        },
      },
      yAxis: {
        type: 'value',
        min: 15,
        max: 22,
        interval: 1,
        axisLine: {
          show: true,
        },
        splitLine: {
          show: false,
        },
        name: '% OF TOTAL DISBURSAL',
        nameLocation: 'middle',
        nameGap: 25,
        axisLabel: {
          formatter: '{value}',
          margin: 1,
        },
      },
      series: [
        {
          barWidth: 20,
          data: [18, 20.5, 19, 20.5, 18.5, 20.5, 18.5, 20.5],
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
          const barValue = params[0].value;

          // Create the tooltip content with the actual value and random amount
          return ` ${barValue}%`;
        },
      },
      xAxis: {
        type: 'category',

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
          rotate: 45,
          overflow: 'break',
        },
      },
      yAxis: {
        type: 'value',
        min: 0.75,
        max: 1.25,
        interval: 0.1,
        axisLine: {
          show: true,
        },
        splitLine: {
          show: false,
        },
        name: 'DELINQUENCY IN %',
        nameLocation: 'middle',
        nameGap: 25,
        axisLabel: {
          formatter: '{value}',
          margin: 1,
        },
      },
      series: [
        {
          barWidth: 20,
          data: [0.95, 1.15, 1.05, 1.15, 1.03, 1.15, 1.03, 1.15],
          type: 'bar',
          itemStyle: {
            color: '#7460EE',
          },
        },
      ],
    };

    this.CPDetailsChart.setOption(this.CPDetailsOption);
    this.CPLoginsChart.setOption(this.CPLoginsOption);
    this.CPDisbursalChart.setOption(this.CPDisbursalOption);
    this.CPOfDelinquencyChart.setOption(this.CPOfDelinquencyOption);
  }
}
