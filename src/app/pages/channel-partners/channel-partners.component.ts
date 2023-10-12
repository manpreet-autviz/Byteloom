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
      RmName: '1231',
      EmpCode: 'PCH',
      Area: 'CHANDIGARH',
      Branch: 'CLUSTER',
      TotalLogins: 'Amit Verma',
      TotalDisbursal: 'PRODUCT NAME',
      State: 'HOME LOAN',
      Target: '09/25/2023',
      Delinquency: '68',
    },
    {
      SNo: 2,
      RmName: '1232',
      EmpCode: 'NCR',
      Area: 'DELHI',
      Branch: 'CLUSTER',
      TotalLogins: 'Vivek Singh',
      TotalDisbursal: 'PRODUCT NAME',
      State: 'SBL',
      Target: '09/25/2023',
      Delinquency: '40',
    },
    {
      SNo: 3,
      RmName: '1233',
      EmpCode: 'NCR',
      Area: 'DELHI',
      Branch: 'CLUSTER',
      TotalLogins: 'Kritish Gujral',
      TotalDisbursal: 'PRODUCT NAME',
      State: 'SBL',
      Target: '09/25/2023',
      Delinquency: '65',
    },
    {
      SNo: 4,
      RmName: '1234',
      EmpCode: 'RAJASTHAN',
      Area: 'JAIPUR',
      Branch: 'CLUSTER',
      TotalLogins: 'Monica',
      TotalDisbursal: 'PRODUCT NAME',
      State: 'SBL',
      Target: '09/25/2023',
      Delinquency: '55',
    },
    {
      SNo: 5,
      RmName: '1235',
      EmpCode: 'GUJRAT',
      Area: 'AHMEDABAD',
      Branch: 'CLUSTER',
      TotalLogins: 'Amit Badana',
      TotalDisbursal: 'PRODUCT NAME',
      State: 'LAP',
      Target: '09/25/2023',
      Delinquency: '52',
    },
    {
      SNo: 6,
      RmName: '1236',
      EmpCode: 'SURAT',
      Area: 'RUNDH',
      Branch: 'CLUSTER',
      TotalLogins: 'Shilpa Kumari',
      TotalDisbursal: 'PRODUCT NAME',
      State: 'BL',
      Target: '09/25/2023',
      Delinquency: '54',
    },
    {
      SNo: 7,
      RmName: '1237',
      EmpCode: 'MP',
      Area: 'INDORE',
      Branch: 'CLUSTER',
      TotalLogins: 'Khushagar',
      TotalDisbursal: 'PRODUCT NAME',
      State: 'LAP',
      Target: '09/25/2023',
      Delinquency: '63',
    },
    {
      SNo: 8,
      RmName: '1238',
      EmpCode: 'MP',
      Area: 'UJJAIN',
      Branch: 'CLUSTER',
      TotalLogins: 'Jaswinder Singh',
      TotalDisbursal: 'PRODUCT NAME',
      State: 'HOME LOAN',
      Target: '09/25/2023',
      Delinquency: '55',
    },
    {
      SNo: 9,
      RmName: '1239',
      EmpCode: 'MAHARASHTRA',
      Area: 'MUMBAI',
      Branch: 'CLUSTER',
      TotalLogins: 'Mohit Dogra',
      TotalDisbursal: 'PRODUCT NAME',
      State: 'SBL',
      Target: '09/25/2023',
      Delinquency: '65',
    },
    {
      SNo: 10,
      RmName: '1240',
      EmpCode: 'MAHARASHTRA',
      Area: 'MUMBAI',
      Branch: 'CLUSTER',
      TotalLogins: 'Rahul Saini',
      TotalDisbursal: 'PRODUCT NAME',
      State: 'SBL',
      Target: '09/25/2023',
      Delinquency: '25',
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
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        $(this.elementRef.nativeElement.querySelector('#table')).DataTable({
          lengthChange: false,
          searching: false,
          ordering: false
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
