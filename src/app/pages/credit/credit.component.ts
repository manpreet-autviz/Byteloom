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
  styleUrls: ['./credit.component.scss']
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
  isActiveButton: string = 'button';

  AvgCMFilesChart!: echarts.ECharts;
  SCMWorkloadChart!: echarts.ECharts;
  ConversionRatioChart!: echarts.ECharts;
  ActicityTatReportChart!: echarts.ECharts;
  EDChart!: echarts.ECharts;
  FTRFilesChart!: echarts.ECharts;

  AvgCMFilesOption:any;
  SCMWorkloadOption:any
  ConversionRatioOption:any;
  ActicityTatReportOption:any;
  EDOption:any;
  FTRFilesOption:any;

  data = [
    {
      SNo: 1,
      CMName: 'Nikhil Rana',
      EmpCode: '0123',
      branchName: 'CHANDIGARH',
      Area: 'Nikhil Rana',
      State: 'Nikhil Rana',
      TotalPD: '1200',
      TotalApproval: '120',
      TotalDisbursal: '44',
      PercentEd:69
    },
    {
      SNo: 2,
      CMName: 'Manjit Kaur',
      EmpCode: '0124',
      branchName: 'Rohtak',
      Area: 'Manjit Kaur',
      State: 'AManjit Kaur',
      TotalPD: '1400',
      TotalApproval: '140',
      TotalDisbursal: '25',
      PercentEd:40
    },
    {
      SNo: 1,
      CMName: '1231',
      EmpCode: 'PCH',
      branchName: 'CHANDIGARH',
      Area: 'CLUSTER',
      State: 'Amit Verma',
      TotalPD: 'PRODUCT NAME',
      TotalApproval: 'HOME LOAN',
      TotalDisbursal: '09/25/2023',
      PercentEd:69
    },
    {
      SNo: 1,
      CMName: '1231',
      EmpCode: 'PCH',
      branchName: 'CHANDIGARH',
      Area: 'CLUSTER',
      State: 'Amit Verma',
      TotalPD: 'PRODUCT NAME',
      TotalApproval: 'HOME LOAN',
      TotalDisbursal: '09/25/2023',
      PercentEd:69
    },
    {
      SNo: 1,
      CMName: '1231',
      EmpCode: 'PCH',
      branchName: 'CHANDIGARH',
      Area: 'CLUSTER',
      State: 'Amit Verma',
      TotalPD: 'PRODUCT NAME',
      TotalApproval: 'HOME LOAN',
      TotalDisbursal: '09/25/2023',
      PercentEd:69
    },
    {
      SNo: 1,
      CMName: '1231',
      EmpCode: 'PCH',
      branchName: 'CHANDIGARH',
      Area: 'CLUSTER',
      State: 'Amit Verma',
      TotalPD: 'PRODUCT NAME',
      TotalApproval: 'HOME LOAN',
      TotalDisbursal: '09/25/2023',
      PercentEd:69
    },
    {
      SNo: 1,
      CMName: '1231',
      EmpCode: 'PCH',
      branchName: 'CHANDIGARH',
      Area: 'CLUSTER',
      State: 'Amit Verma',
      TotalPD: 'PRODUCT NAME',
      TotalApproval: 'HOME LOAN',
      TotalDisbursal: '09/25/2023',
      PercentEd:69
    },
    {
      SNo: 1,
      CMName: '1231',
      EmpCode: 'PCH',
      branchName: 'CHANDIGARH',
      Area: 'CLUSTER',
      State: 'Amit Verma',
      TotalPD: 'PRODUCT NAME',
      TotalApproval: 'HOME LOAN',
      TotalDisbursal: '09/25/2023',
      PercentEd:69
    },
    {
      SNo: 1,
      CMName: '1231',
      EmpCode: 'PCH',
      branchName: 'CHANDIGARH',
      Area: 'CLUSTER',
      State: 'Amit Verma',
      TotalPD: 'PRODUCT NAME',
      TotalApproval: 'HOME LOAN',
      TotalDisbursal: '09/25/2023',
      PercentEd:69
    },
    {
      SNo: 1,
      CMName: '1231',
      EmpCode: 'PCH',
      branchName: 'CHANDIGARH',
      Area: 'CLUSTER',
      State: 'Amit Verma',
      TotalPD: 'PRODUCT NAME',
      TotalApproval: 'HOME LOAN',
      TotalDisbursal: '09/25/2023',
      PercentEd:69
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
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: [
          'PD',
          'Approval',
          'Disbursal',
        ],
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
          'Haryana',
          'Punjab',
          'Pan India',
        ],
      },

      series: [
        {
          name: 'PD',
          type: 'bar',
          data: [40, 40, 40, 40, 40, 40, 40, 80],
          label: {
            show: true,
            position: 'right',
            formatter: '{c}%',
          },
          itemStyle: {
            color: '#F49494',
          },
        },
        {
          name: 'Approval',
          type: 'bar',
          data: [65, 65, 65, 65, 65, 65, 65, 225],
          label: {
            show: true,
            position: 'right',
            formatter: '{c} Cr',
          },
          itemStyle: {
            color: '#3ADA84',
          },
        },
        {
          name: 'Disbursal',
          type: 'bar',
          data: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 6000],
          label: {
            show: true,
            position: 'right',
            formatter: '{c} ',
          },
          itemStyle: {
            color: '#5281FF',
          },
        },
      ],
    };

    this.SCMWorkloadOption = {
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
            color: '#3ADA84',
          },
          progress: {
            show: true,
            width: 40,
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
            fontSize: 15,
            fontWeight: 'bolder',
            formatter: 'No of files {value}',
            color: 'inherit',
          },
          data: [
            {
              value: 200,
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

          // Create the tooltip content with the actual value and random amount
          return ` ${barValue}`;
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
      },
      yAxis: {
        type: 'value',
        min: 10,
        max: 70,
        interval: 10,
        axisLine: {
          show: true,
        },
        splitLine: {
          show: false,
        },
        name: 'PERCENTAGE',
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
            color: '#5D5BCC',
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
      },
      legend: {
        data: ['PD','Approval', 'Disbursal'],
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
            show: true,
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
          data: [10, 13, 12.5, 14, 14.5, 15, 15.5, 16],
          itemStyle: {
            color: '#7460EE',
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
          data: [17, 15, 18.5, 19, 17.5, 20, 22, 25],
          itemStyle: {
            color: '#333333',
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
          data: [18, 19.5, 16.5, 24, 27, 26.5, 27.5, 28],
          itemStyle: {
            color: '#FE5419',
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

          // Create the tooltip content with the actual value and random amount
          return ` ${barValue}`;
        },
      },
      xAxis: {
        type: 'category',

        data: ['Pan India',
        'Punjab',
        'Haryana',
        'NCR',
        'Rajasthan',
        'Gujarat',
        'MP',
        'Maharashtra',],
        axisLabel: {
          interval: 0,
          rotate: 45,
          overflow: 'break',
        },
      },
      yAxis: {
        type: 'value',
        min: 1.7,
        max: 2.5,
        interval: 0.1,
        axisLine: {
          show: true,
        },
        splitLine: {
          show: false,
        },
        name: 'PERCENTAGE',
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
          data: [2.4, 2.2, 2.2, 2.2, 2.2,2.15,2.1,2.2],
          type: 'bar',
          itemStyle: {
            color: '#FE5419',
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
            show: true,
          },
          min: 60,
          max: 85,
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
          data: [75, 77, 76, 79, 83, 80, 82, 84],
          itemStyle: {
            color: '#FE5419',
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
