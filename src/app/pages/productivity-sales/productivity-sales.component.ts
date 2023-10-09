import { AfterViewInit,ElementRef, NgZone, Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import * as echarts from 'echarts';
declare var $: any;
@Component({
  selector: 'app-productivity-sales',
  templateUrl: './productivity-sales.component.html',
  styleUrls: ['./productivity-sales.component.scss'],
})
export class ProductivitySalesComponent implements  AfterViewInit, OnDestroy  {
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

  AvgRMCharts!: echarts.ECharts;
  TargetAchievementCharts!: echarts.ECharts;
  SourceLoginFilesChart!: echarts.ECharts;
  FTRChart!: echarts.ECharts;
  PotentialLostChart!: echarts.ECharts;
  ConversionChart!: echarts.ECharts;
  RMChart!: echarts.ECharts;

  AvgRMOption: any;
  TargetAchievementOption: any;
  SourceLoginFilesOption: any;
  FTROption:any;
  PotentialLostOptions:any;
  ConversionOption:any;
  RMOption:any;

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

  constructor(private elementRef: ElementRef, private zone: NgZone,private cdRef: ChangeDetectorRef) {}

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
          ordering: false
        });
      }, 0);
    });
    
    this.initializeChart();
    
  }


  ngOnDestroy() {
    const table = $(this.elementRef.nativeElement.querySelector('#table')).DataTable();
    table.destroy();
  }
  initializeChart() {
    this.AvgRMCharts = echarts.init(
      document.getElementById('AvgRM-Chart') as HTMLDivElement
    );

    this.TargetAchievementCharts = echarts.init(
      document.getElementById('target-achievement-Chart') as HTMLDivElement
    );

    this.SourceLoginFilesChart = echarts.init(
      document.getElementById('Source-Login-Files-Chart') as HTMLDivElement
    );

    this.FTRChart = echarts.init(
      document.getElementById('FTR-Chart') as HTMLDivElement
    );

    this.PotentialLostChart = echarts.init(
      document.getElementById('Potential-Lost-Chart') as HTMLDivElement
    );

    this.ConversionChart = echarts.init(
      document.getElementById('Conversion-chart') as HTMLDivElement
    );

    this.RMChart= echarts.init(
      document.getElementById('RM-chart') as HTMLDivElement
    );

    this.AvgRMOption = {
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
        data: ['Login ', 'Disbursal '],
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
          min: 2,
          max: 8,
          interval: 2,
          name: 'NO OF FILES ',
          nameLocation: 'middle',
          nameGap: 43,
          axisLabel: {
            margin: 1,
          },
        },
      ],
      series: [
        {
          name: 'Login',
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
          data: [2, 3, 2.5, 4, 4.5, 5, 5.5, 6],
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
          data: [6, 5.5, 6.5, 4, 7, 6.5, 7.5, 8],
        },
      ],
    };

    this.TargetAchievementOption = {
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
            fontSize: 15,
          },
          data: [
            {
              value: 70,
            },
          ],
        },
      ],
    };

    this.SourceLoginFilesOption = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
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
              value: 35,
              name: 'Direct ',
              itemStyle: {
                color: '#3ADA84',
              },
            },
            {
              value: 20,
              name: 'Power Partner',
              itemStyle: {
                color: 'rgba(5, 83, 22, 0.65)',
              },
            },
            {
              value: 10,
              name: 'DSA',
              itemStyle: {
                color: '#0B9DE8',
              },
            },
            {
              value: 20,
              name: 'Other',
              itemStyle: {
                color: '#FF821C',
              },
            },
          ],
        },
      ],
    };

    this.FTROption = {
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
            rotate: 45,
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
          min: 10,
          max: 100,
          interval: 10,
          name: 'PERCENTAGE ',
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
          data: [85,84,86,89,93,91,95,97],
          itemStyle: {
            color: '#07A14E',
          },
        },
      
      ],
    };

    this.PotentialLostOptions = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: [
          'CNI',
          'Cancellation',
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
          name: 'CNI ',
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
          name: 'Cancellation ',
          type: 'bar',
          data: [65, 65, 65, 65, 65, 65, 65, 225],
          label: {
            show: true,
            position: 'right',
            formatter: '{c} Cr',
          },
          itemStyle: {
            color: '#5281FF',
          },
        },
       
      ],
    };

    this.ConversionOption = {
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
            color: '#07A14E',
          },
        },
      ],
    };

    this.RMOption = {
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
            rotate: 45,
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
          min: 10,
          max: 100,
          interval: 10,
          name: 'PERCENTAGE ',
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
          data: [85,84,86,89,93,91,95,97],
          
        },
      
      ],
    };

    this.AvgRMCharts.setOption(this.AvgRMOption);

    this.TargetAchievementCharts.setOption(this.TargetAchievementOption);

    this.SourceLoginFilesChart.setOption(this.SourceLoginFilesOption);

    this.FTRChart.setOption(this.FTROption);

    this.PotentialLostChart.setOption(this.PotentialLostOptions);

    this.ConversionChart.setOption(this.ConversionOption);

    this.RMChart.setOption(this.RMOption);
  }
}
