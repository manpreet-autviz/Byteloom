import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  ElementRef,
  NgZone,
  Component,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import * as echarts from 'echarts';
declare var $: any;
@Component({
  selector: 'app-productivity-sales',
  templateUrl: './productivity-sales.component.html',
  styleUrls: ['./productivity-sales.component.scss'],
})
export class ProductivitySalesComponent implements AfterViewInit, OnDestroy {
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
  FTROption: any;
  PotentialLostOptions: any;
  ConversionOption: any;
  RMOption: any;
  DisbursalNumber: number = 100;
  DisbursalJsonData:any;
  data = [
    {
      SNo: 1,
      RmName: 'Nikhil Rana',
      EmpCode: '0123',
      Area: 'Karnal',
      Branch: 'Rohtak',
      TotalLogins: '1200',
      TotalDisbursal: '120',
      State: 'PCH',
      Target: '115',
      Delinquency: '1.2',
    },
    {
      SNo: 2,
      RmName: 'Manjeet Kaur',
      EmpCode: '0124',
      Area: 'Indore',
      Branch: 'Indore',
      TotalLogins: '1400',
      TotalDisbursal: '140',
      State: 'MP',
      Target: '110',
      Delinquency: '1.1',
    },
    {
      SNo: 3,
      RmName: 'Randeep hodda',
      EmpCode: '0125',
      Area: 'Mumbai',
      Branch: 'Navi Mumbai',
      TotalLogins: '1500',
      TotalDisbursal: '100',
      State: 'Maharashtra',
      Target: '105',
      Delinquency: '0.9',
    },
    {
      SNo: 4,
      RmName: 'Kishor Kumar',
      EmpCode: '0126',
      Area: 'Mumbai',
      Branch: 'Navi Mumbai',
      TotalLogins: '1290',
      TotalDisbursal: '90',
      State: 'Maharashtra',
      Target: '98',
      Delinquency: '0.7',
    },
    {
      SNo: 5,
      RmName: 'Amarjeet',
      EmpCode: '0127',
      Area: 'Jaipur',
      Branch: 'Jaipur',
      TotalLogins: '1000',
      TotalDisbursal: '110',
      State: 'Rajasthan',
      Target: '95',
      Delinquency: '0.65',
    },
    {
      SNo: 6,
      RmName: 'Vivek Gupta',
      EmpCode: '0128',
      Area: 'Chandigarh',
      Branch: 'Ambala',
      TotalLogins: '1400',
      TotalDisbursal: '95',
      State: 'PCH',
      Target: '93',
      Delinquency: '0.65',
    },
    {
      SNo: 7,
      RmName: 'Rashmika Sen',
      EmpCode: '0129',
      Area: 'Chandigarh',
      Branch: 'Chandigarh',
      TotalLogins: '1200',
      TotalDisbursal: '150',
      State: 'PCH',
      Target: '90',
      Delinquency: '0.5',
    },
    {
      SNo: 8,
      RmName: 'Rahul Saini',
      EmpCode: '0130',
      Area: 'Chandigarh',
      Branch: 'Ambala',
      TotalLogins: '1400',
      TotalDisbursal: '145',
      State: 'PCH',
      Target: '85',
      Delinquency: '0.35',
    },
    {
      SNo: 9,
      RmName: 'Kiran Sen',
      EmpCode: '0131',
      Area: 'Jaipur',
      Branch: 'Jaipur',
      TotalLogins: '1000',
      TotalDisbursal: '125',
      State: 'Rajasthan',
      Target: '75',
      Delinquency: '0.3',
    },
    {
      SNo: 10,
      RmName: 'Anushaka Sen',
      EmpCode: '0132',
      Area: 'Indore',
      Branch: 'Indore',
      TotalLogins: '1250',
      TotalDisbursal: '120',
      State: 'MP',
      Target: '66',
      Delinquency: '0.2',
    },
    // Add more data as needed
  ];

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone,
    private cdRef: ChangeDetectorRef,
    private http: HttpClient,
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

  ngOnInit(): void {
    this.getjsonData();
  }
  ngOnDestroy() {
    const table = $(
      this.elementRef.nativeElement.querySelector('#table')
    ).DataTable();
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

    this.RMChart = echarts.init(
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
        data: ['Login', 'Disbursal'],
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
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
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
          min: 2,
          max: 8,
          interval: 2,
          name: 'No. of Files ',
          nameLocation: 'middle',
          nameGap: 20,
          nameTextStyle: {
            fontWeight: 600,
            fontSize: 14,
          },
          axisLabel: {
            margin: 15,
          },
        },
      ],
      series: [
        {
          name: 'Login',
          type: 'line',
          itemStyle: {
            color: '#FB8C00',
          },
          areaStyle: {
            opacity: 0,
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 0.5, // Reduce opacity on hover to make it semi-transparent
            },
          },
          data: [2, 3, 4, 4.5, 5, 5.5, 6],
        },
        {
          name: 'Disbursal',
          type: 'line',
          itemStyle: {
            color: '#07A14E',
          },
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
      tooltip: {
        formatter: function (params: any) {
          return `Number of Files: 2000<br/>Percentage: ${params.value}%`;
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
            distance: 30,
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
        formatter: (params: any) => {
          let tooltipText = '';
          (params);
          if (params.name === 'Direct') {
            tooltipText = 'No. of files: 1000 <br/> Amount in Cr: 450';
          } else if (params.name === 'Power Partner') {
            tooltipText = 'No. of files: 700 <br/> Amount in Cr: 270';
          } else if (params.name === 'DSA') {
            tooltipText = 'No. of files: 800 <br/> Amount in Cr: 269';
          } else if (params.name === 'Other') {
            tooltipText = 'No. of files: 1600 <br/> Amount in Cr: 268';
          }
          return tooltipText;
        },
      },
      legend: {
        top: '1%',
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
              fontSize: 18,
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
                color: '#7C41DA',
              },
            },
            {
              value: 20,
              name: 'Power Partner',
              itemStyle: {
                color: '#F99B00',
              },
            },
            {
              value: 10,
              name: 'DSA',
              itemStyle: {
                color: '#636363',
              },
            },
            {
              value: 20,
              name: 'Other',
              itemStyle: {
                color: '#07A14E',
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
        formatter: (params: any) => {
          const barValue = params[0].value;
          const dataIndex = params[0].dataIndex;
          const files = [1340, 1245, 1370, 1270, 1090, 1160, 1240];
          const randomFiles = files[dataIndex];
          const totalFiles = 1600;
          // Create the tooltip content with the actual value and random amount
          return `No. of Files:${randomFiles} <br> Total Files:${totalFiles} <br>${barValue}`;
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
            rotate: 45,
            overflow: 'break',
          },
          axisLine: {
            show: false,
          },
          axisTick: {
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
          min: 10,
          max: 100,
          interval: 10,
          name: 'Percentage %',
          nameLocation: 'middle',
          nameTextStyle: {
            fontWeight: 600,
            fontSize: 14,
          },
          nameGap: 23,
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
          data: [85, 84, 86, 93, 91, 95, 97],
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
        data: ['CNI', 'Cancellation'],
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
        axisTick: {
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
          name: 'CNI',
          type: 'bar',
          data: [10, 10, 11.5, 11.2, 10.25, 10.5, 12],
          label: {
            show: true,
            position: 'right',
            formatter: '{c}cr',
            fontSize: 9,
          },
          itemStyle: {
            color: '#3C7EBE',
            borderRadius: 50,
          },
          tooltip: {
            trigger: 'axis',
            formatter: function (params: any) {
              let barValue = params[0].value;
              const dataIndex = params[0].dataIndex;
              const disbursal = [40, 45, 67, 77, 89, 56, 67];
              let randomDisbursal = disbursal[dataIndex];
              return `Series: CNI<br>% of Disbursal: ${randomDisbursal}<br>Amount in Cr: ${barValue}`;
            },
          },
        },
        {
          name: 'Cancellation',
          type: 'bar',
          data: [10.02, 10.11, 10.58, 10, 10.1, 10.2, 11],
          label: {
            show: true,
            position: 'right',
            formatter: '{c} Cr',
            fontSize: 9,
          },
          itemStyle: {
            color: '#5BC8EF',
            borderRadius: 50,
          },
          tooltip: {
            trigger: 'axis',
            formatter: function (params: any) {
              let barValue = params[0].value;
              const dataIndex = params[0].dataIndex;
              const disbursal = [45, 40, 67, 72, 86, 56, 60];
              let randomDisbursal = disbursal[dataIndex];
              return `Series: Cancellation<br>% of Disbursal: ${randomDisbursal}<br>Amount in Cr: ${barValue}`;
            },
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
          const dataIndex = params[0].dataIndex;
          const barValue = params[0].value;
          const files = [1340, 745, 670, 770, 890];
          const randomFiles = files[dataIndex];
          const active = [1340, 745, 670, 770, 890];
          const randomActive = active[dataIndex];
          return `No. of Files : ${randomFiles} <br>Amount In Cr: ${randomActive} <br>${barValue}`;
        },
      },
      legend: {
        top: '1%',
        left: 'center',
      },
      xAxis: {
        type: 'category',

        data: ['All ', 'HL', 'LAP', 'BL', 'SBL'],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          rotate: 0,
          overflow: 'break',
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
        splitLine: {
          show: false,
        },
        name: 'Percentage %',
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
          data: [50, 36, 44, 40, 45],
          type: 'bar',
          itemStyle: {
            color: '#5D5BCC',
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
        formatter: (params: any) => {
          const dataIndex = params[0].dataIndex;
          const barValue = params[0].value;
          const budget = [1340, 745, 670, 770, 890, 1290, 340, 908];
          const randomBudget = budget[dataIndex];
          const active = [240, 545, 470, 670, 890, 456, 789, 340];
          const randomActive = active[dataIndex];
          return `Budgeted : ${randomBudget} <br>Active: ${randomActive} <br>${barValue}`;
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
          boundaryGap: true,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
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
          min: 10,
          max: 100,
          interval: 10,
          name: 'Percentage % ',
          nameLocation: 'middle',
          nameGap: 17,
          nameTextStyle: {
            fontWeight: 600,
            fontSize: 14,
          },
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
          data: [85, 84, 86, 93, 91, 95, 97],
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

  onFilterChange(selectedValue: string) {
    this.generateConversionRandomData();
    this.generateDistributionRandomData();
    this.generateDisbursalAchievement();
    this.generateRmData();
    this.generateFtr();
    this.generateAvgRm();
    this.generateDisbursalRandomData(selectedValue)
  }

  onStateChange(selectedValue: string) {
    this.generateConversionRandomData();
    this.generateDistributionRandomData();
    this.generateDisbursalAchievement();
    this.generateRmData();
    this.generateFtr();
    this.generateAvgRm();
    this.generateDisbursalRandomData(selectedValue)
  }

  generateConversionRandomData() {
    const newData = [
      { value: this.getRandomValue(45, 50), itemStyle: { color: '#5D5BCC' } },
      { value: this.getRandomValue(35, 40), itemStyle: { color: '#5D5BCC' } },
      { value: this.getRandomValue(45, 50), itemStyle: { color: '#5D5BCC' } },
      { value: this.getRandomValue(45, 50), itemStyle: { color: '#5D5BCC' } },
      { value: this.getRandomValue(60, 65), itemStyle: { color: '#5D5BCC' } },
    ];
    this.ConversionOption.series[0].data = newData;
    this.ConversionChart.setOption(this.ConversionOption);
  }

  generateDistributionRandomData() {
    const newData = [
      {
        value: this.getRandomValue(41, 45),
        name: 'Direct ',
        itemStyle: { color: '#7C41DA' },
      },
      {
        value: this.getRandomValue(17, 20),
        name: 'Power Partner',
        itemStyle: { color: '#FB8C00' },
      },
      {
        value: this.getRandomValue(7, 10),
        name: 'DSA',
        itemStyle: { color: '#07A14E' },
      },
      {
        value: this.getRandomValue(22, 25),
        name: 'Other',
        itemStyle: { color: '#636363' },
      },
    ];

    // Update the pie chart data with the new random values
    this.SourceLoginFilesOption.series[0].data = newData;
    this.SourceLoginFilesChart.setOption(this.SourceLoginFilesOption);
  }

  generateDisbursalAchievement() {
    const minValue = 70;
    const maxValue = 90;

    const randomValue = +(
      Math.random() * (maxValue - minValue) +
      minValue
    ).toFixed(2);

    this.TargetAchievementCharts.setOption({
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
  generateRmData() {
    const minValue = 80;
    const maxValue = 85;

    // Generate random data within the specified range
    const randomData = Array.from({ length: 7 }, () =>
      this.getRandomValue(minValue, maxValue)
    );

    // Update the series data with random data
    this.RMOption.series[0].data = randomData;

    // Set the chart option to update the chart
    this.RMChart.setOption(this.RMOption);
  }

  generateFtr(){
    const minValue = 80;
    const maxValue = 85;

    // Generate random data within the specified range
    const randomData = Array.from({ length: 7 }, () =>
      this.getRandomValue(minValue, maxValue)
    );

    // Update the series data with random data
    this.FTROption.series[0].data = randomData;

    // Set the chart option to update the chart
    this.FTRChart.setOption(this.FTROption);
  }


  generateAvgRm(){
    const minValue = 4;
    const maxValue = 6;

    // Generate random data within the specified range
    const randomData = Array.from({ length: 7 }, () =>
      this.getRandomValue(minValue, maxValue)
    );

    // Update the series data with random data
    this.AvgRMOption.series[0].data = randomData;

    // Set the chart option to update the chart
    this.AvgRMCharts.setOption(this.AvgRMOption);
  }

  getRandomValue(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getjsonData() {
   
    this.http.get('assets/disbursal-meter.json').subscribe((data: any) => {
      this.DisbursalJsonData = data;
      
    });
  }

  generateDisbursalRandomData(region: any) {
    if (region === 'Pan India') {
      this.DisbursalNumber = 100;
    } else if (
      region === 'PCH' ||
      region === 'NCR' ||
      region === 'Rajasthan' ||
      region === 'Maharashtra'
    ) {
      const selectedRegion = this.DisbursalJsonData.states[region];
      this.DisbursalNumber = selectedRegion?.disbursalMeter;

      
    } else {
      this.DisbursalNumber = +(Math.random() * (20 - 10) + 10).toFixed(2);
    }
  }
}
