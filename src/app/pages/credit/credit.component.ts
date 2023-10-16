import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
} from '@angular/core';
import * as echarts from 'echarts';
declare var $: any;

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss'],
})
export class CreditComponent {
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

  AvgCMFilesChart!: echarts.ECharts;
  SCMWorkloadChart!: echarts.ECharts;
  ConversionRatioChart!: echarts.ECharts;
  ActicityTatReportChart!: echarts.ECharts;
  EDChart!: echarts.ECharts;
  FTRFilesChart!: echarts.ECharts;

  AvgCMFilesOption: any;
  SCMWorkloadOption: any;
  ConversionRatioOption: any;
  ActicityTatReportOption: any;
  EDOption: any;
  FTRFilesOption: any;

  data = [
    {
      SNo: 1,
      CmName: '1231',
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
      CmName: '1232',
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
      CmName: '1233',
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
      CmName: '1234',
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
      CmName: '1235',
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
      CmName: '1236',
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
      CmName: '1237',
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
      CmName: '1238',
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
      CmName: '1239',
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
      CmName: '1240',
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
    this.AvgCMFilesChart = echarts.init(
      document.getElementById('Avg-CM-Files-Chart') as HTMLDivElement
    );

    this.SCMWorkloadChart = echarts.init(
      document.getElementById('SCM-work-load-Chart') as HTMLDivElement
    );

    this.ConversionRatioChart = echarts.init(
      document.getElementById('Conversion-Chart') as HTMLDivElement
    );

    this.ActicityTatReportChart = echarts.init(
      document.getElementById('Activity-TAT-report') as HTMLDivElement
    );
    this.EDChart = echarts.init(
      document.getElementById('ED-Chart') as HTMLDivElement
    );

    this.FTRFilesChart = echarts.init(
      document.getElementById('FTR-Files-Chart') as HTMLDivElement
    );

    this.AvgCMFilesOption = {
      legend: {
        data: ['PD', 'Approval', 'Disbursal'],
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
        data: [
          'Maharashtra',
          'MP',
          'Gujarat',
          'Rajasthan',
          'NCR',
          'PCH',
          'Pan India',
        ],
      },

      series: [
        {
          name: 'PD',
          type: 'bar',
          data: [25, 28, 15, 14, 8, 18, 25],
          label: {
            show: true,
            position: 'right',
            formatter: '{c}',
          },
          itemStyle: {
            color: '#AD8B73',
            borderRadius: 10,
          },
        },
        {
          name: 'Approval',
          type: 'bar',
          data: [14, 13, 13, 13, 10, 20, 14],
          label: {
            show: true,
            position: 'right',
            formatter: '{c}',
          },
          itemStyle: {
            color: '#CEAB93',
            borderRadius: 10,
          },
        },
        {
          name: 'Disbursal',
          type: 'bar',
          data: [12, 26, 27, 27, 12, 11, 12],
          label: {
            show: true,
            position: 'right',
            formatter: '{c}',
          },
          itemStyle: {
            color: '#EEE3CB',
            borderRadius: 10,
          },
        },
      ],
    };

    this.SCMWorkloadOption = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c}%',
      },
      legend: {
        top: '3%',
        left: 'center',
      },
      series: [
        {
          type: 'pie',
          radius: ['25%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 0,
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold',
              formatter: '{c}%',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: 40,
              name: 'Manoj Rana',
              itemStyle: {
                color: '#7D6E83',
              },
            },
            {
              value: 10,
              name: 'Vikram Singh',
              itemStyle: {
                color: '#636363',
              },
            },
            {
              value: 15,
              name: 'Vivek Singh',
              itemStyle: {
                color: '#DBA39A',
              },
            },
            {
              value: 20,
              name: 'Riya Sen',
              itemStyle: {
                color: '#DF7861',
              },
            },
            {
              value: 25,
              name: 'Vishal Singh',
              itemStyle: {
                color: '#ECB390',
              },
            },
          ],
        },
      ],
    };

    this.ConversionRatioOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: (params: any) => {
          const barValue = params[0].value;
          const dataIndex = params[0].dataIndex;
          const login = [405, 456, 707, 770, 489, 675, 459];
          const randomLogin = login[dataIndex];
          const approved = [205, 256, 307, 370, 389, 475, 459];
          const randomapproved = approved[dataIndex];
          // Create the tooltip content with the actual value and random amount
          return `Login: ${randomLogin}<br>Approved: ${randomapproved}<br>${barValue}%`;
        },
      },
      xAxis: {
        type: 'category',

        data: ['All Products', 'Home Loan', 'LAP', 'BL', 'SBL'],
        axisLabel: {
          interval: 0,
          rotate: 45,
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
        min: 10,
        max: 70,
        interval: 10,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false, // Hide tick lines
        },
        splitLine: {
          show: false,
        },
        name: 'PERCENTAGE%',
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
          data: [50, 36, 44, 40, 45],
          type: 'bar',
          itemStyle: {
            color: '#7D6E83',
          },
        },
      ],
    };

    this.ActicityTatReportOption = {
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
          const files = [405, 456, 707, 770, 89, 675, 459];
          const randomFiles = files[dataIndex];
          // Create the tooltip content with the actual value and random amount
          return `No of Files: ${randomFiles} <br>Days:${barValue}  `;
        },
      },
      legend: {
        data: ['PD', 'Approval', 'Disbursal'],
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
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false, // Hide tick lines
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false, // Hide tick lines
          },
          splitLine: {
            show: false,
          },
          min: 1,
          max: 6,
          interval: 1,
          name: 'DAYS',
          nameLocation: 'middle',
          nameGap: 8,
          axisLabel: {
            margin: 1,
          },
        },
      ],
      series: [
        {
          name: 'PD',
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
          data: [3, 2.8, 3.2, 3.1, 2.8, 2.8, 3],
          itemStyle: {
            color: '#9D76C1',
          },
        },
        {
          name: 'Approval',
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
          data: [2.3, 2.1, 2.2, 2, 2.3, 2.4, 2.1],
          itemStyle: {
            color: '#A2D5F2',
          },
        },
        {
          name: 'Disbursal',
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
          data: [1.8, 1.9, 1.7, 1.5, 1.9, 1.8, 1.7],
          itemStyle: {
            color: '#07689F',
          },
        },
      ],
    };

    this.EDOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: (params: any) => {
          const barValue = params[0].value;
          const dataIndex = params[0].dataIndex;
          const amount = [405, 456, 707, 770, 89, 675, 459];
          const randomAmount = amount[dataIndex];
          // Create the tooltip content with the actual value and random amount
          return `Amount in Crs: ${randomAmount} <br>${barValue}%  `;
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
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false, // Hide tick lines
        },
      },
      yAxis: {
        type: 'value',
        min: 1.7,
        max: 2.5,
        interval: 0.1,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false, // Hide tick lines
        },
        splitLine: {
          show: false,
        },
        name: 'PERCENTAGE%',
        nameLocation: 'middle',
        nameGap: 15,
        axisLabel: {
          formatter: '{value}',
          margin: 1,
        },
      },
      series: [
        {
          barWidth: 20,
          data: [2.4, 2.2, 2.2, 2.2, 2.2, 2.15, 2.1, 2.2],
          type: 'bar',
          itemStyle: {
            color: '#DF7861',
          },
        },
      ],
    };

    this.FTRFilesOption = {
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
         
          // Create the tooltip content with the actual value and random amount
          return `${barValue} % `;
        },
      },
      legend: {
        data: [],
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
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false, // Hide tick lines
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false, // Hide tick lines
          },
          splitLine: {
            show: false,
          },
          min: 60,
          max: 85,
          interval: 5,
          name: 'DAYS',
          nameLocation: 'middle',
          nameGap: 20,
          axisLabel: {
            margin: 1,
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
          data: [75, 77, 76, 79, 83, 80, 82],
          itemStyle: {
            color: '#F0B86E',
          },
        },
      ],
    };

    this.AvgCMFilesChart.setOption(this.AvgCMFilesOption);
    this.SCMWorkloadChart.setOption(this.SCMWorkloadOption);
    this.ConversionRatioChart.setOption(this.ConversionRatioOption);
    this.ActicityTatReportChart.setOption(this.ActicityTatReportOption);
    this.EDChart.setOption(this.EDOption);
    this.FTRFilesChart.setOption(this.FTRFilesOption);
  }
}
