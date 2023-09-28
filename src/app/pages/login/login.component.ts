import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import * as echarts from 'echarts';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    events: this.generateRandomEvents(),
  };

  StateChart!: echarts.ECharts;
  AverageStateChart!: echarts.ECharts;
  SchemeLoginsChart!: echarts.ECharts;
  ProductLoginsChart!: echarts.ECharts;
  SourceChart!: echarts.ECharts;

  trendStateChart!: echarts.ECharts;
  trendAverageStateChart!: echarts.ECharts;
  trendSchemeLoginsChart!: echarts.ECharts;
  trendProductLoginsChart!: echarts.ECharts;
  trendSourceChart!: echarts.ECharts;
  monthFilters: string[] = ['Month to Date', 'Three month'];
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
  selectedTrendFilter: string = 'Month to Date';
  selectedState: string = 'Pan India';
  selectedFilter: string = 'September';
  showContent!: boolean;
  stateOption: any;
  averageStateOption: any;
  schemeloginsOption: any;
  productloginsOption: any;
  sourceOption: any;
  trendStateOption: any;
  trendAverageStateOption: any;
  trendSchemeloginsOption: any;
  trendProductloginsOption: any;
  trendSourceOption: any;

  public isToggled = false;
  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.initializeChart();
  }

  generateRandomEvents() {
    const today = new Date();
    const startDate = new Date(today.getFullYear(), today.getMonth(), 1); // 1st day of the current month
    const endDate = today;

    const events = [];

    const maxValue = 150;
    const minValue = 101;
    while (startDate <= endDate) {
      const randomValue = Math.floor(
        Math.random() * (maxValue - minValue + 1) + minValue
      );

      events.push({
        title: `${randomValue}`,
        start: new Date(startDate),
        allDay: true, // Set allDay to true to remove the time
      });

      startDate.setDate(startDate.getDate() + 1); // Move to the next day
    }

    return events;
  }

  toggle(): void {
    this.isToggled = !this.isToggled;
    setTimeout(() => {
      this.initializeChart();
    }, 0);
    this.cdRef.detectChanges();
  }

  initializeChart() {
    if (!this.isToggled) {
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

      this.stateOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          formatter: (params: any) => {
            const dataIndex = params[0].dataIndex;
            const barValue = params[0].value;
            const randomAmounts = [350, 145, 167, 370, 290, 300, 320, 550];
            const randomAmount = randomAmounts[dataIndex];

            // Create the tooltip content with the actual value and random amount
            return `No of Files: ${barValue}<br> Amount(Cr): ${randomAmount}`;
          },
        },
        responsive: true, 
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
          axisLine: {
            show: true,
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
          axisLine: {
            show: true,
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
            barWidth: 20,
            type: 'bar',
            data: [1700, 500, 600, 1900, 700, 800, 1000, 4000],
            itemStyle: {
              color: '#0747a6',
            },
          },
        ],
      };

      this.averageStateOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        responsive: true, 
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
          axisLine: {
            show: true,
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
          axisLine: {
            show: true,
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
            barWidth: 20,
            type: 'bar',
            data: [10, 7, 5, 13, 9, 8, 7, 15],
            itemStyle: {
              color: '#18A838',
            },
          },
        ],
      };

      this.schemeloginsOption = {
        tooltip: {
          trigger: 'item',
        },
        responsive: true, 
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
                formatter: '{c}%',
                fontSize: 16,
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 27, name: 'Top-Up', itemStyle: { color: '#FF7629' } },
              { value: 45, name: 'Fresh', itemStyle: { color: '#FF7629' } },
              { value: 26, name: 'BT', itemStyle: { color: '#94DD1D' } },
            ],
          },
        ],
      };

      this.productloginsOption = {
        tooltip: {
          trigger: 'item',
        },
        responsive: true, 
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
                formatter: '{c}%',
                fontSize: 16,
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 45, name: 'Home Loan', itemStyle: { color: '#7C41DA' } },
              { value: 20, name: 'LAP', itemStyle: { color: '#F99B00' } },
              { value: 10, name: 'BL', itemStyle: { color: '#636363' } },
              { value: 25, name: 'SBL', itemStyle: { color: '#0B9DE8' } },
            ],
          },
        ],
      };

      this.sourceOption = {
        responsive: true, 
        xAxis: {
          type: 'category',
          data: ['Direct', 'DSA', 'Power Partner', 'Saathi', 'Online Partner'],
          axisLabel: {
            interval: 0,
            rotate: 0,
            overflow: 'break',
          },
        },
        yAxis: {
          name: 'PERCENTAGE',
          nameLocation: 'middle',
          nameGap: 30,

          nameTextStyle: {
            fontWeight: 700,
          },
          type: 'value',
          axisLine: {
            show: true,
          },
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

      this.AverageStateChart.setOption(this.averageStateOption);
      this.StateChart.setOption(this.stateOption);
      this.SchemeLoginsChart.setOption(this.schemeloginsOption);
      this.ProductLoginsChart.setOption(this.productloginsOption);
      this.SourceChart.setOption(this.sourceOption);
    } else {
      this.trendStateChart = echarts.init(
        document.getElementById('trendStateWiseChart') as HTMLDivElement
      );
      this.trendAverageStateChart = echarts.init(
        document.getElementById('trendAverageStateWiseChart') as HTMLDivElement
      );

      this.trendSchemeLoginsChart = echarts.init(
        document.getElementById('trendSchemeLogins') as HTMLDivElement
      );

      this.trendProductLoginsChart = echarts.init(
        document.getElementById('trendProductLogins') as HTMLDivElement
      );

      this.trendSourceChart = echarts.init(
        document.getElementById('trendSource') as HTMLDivElement
      );

      this.trendStateOption = {
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
          data: [
            'Punjab',
            'Haryana',
            'NCR',
            'Rajasthan',
            'Gujarat',
            'MP',
            'Maharashtra',
          ],
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
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
              'Jan',
              'Feb',
              'Mar',
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: true,
            },
            min: 500,
            max: 4000,
            interval: 500,
            name: 'NUMBER OF FILES',
            nameLocation: 'middle',
            nameGap: 43,
          },
        ],
        series: [
          {
            name: 'Punjab',
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
            data: [500, 800, 1000, 1300, 1600, 1800],
          },
          {
            name: 'Haryana',
            type: 'line',

            areaStyle: {
              opacity: 0,
            },
            emphasis: {
              focus: 'series',
              areaStyle: {
                opacity: 1, // Reduce opacity on hover to make it semi-transparent
              },
            },
            data: [600, 1000, 1200, 1500, 1700, 1900],
          },
          {
            name: 'NCR',
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
            data: [800, 1300, 1500, 1900, 2100, 2300],
          },
          {
            name: 'Rajasthan',
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
            data: [950, 1500, 1650, 1980, 2200, 2500],
          },
          {
            name: 'Gujarat',
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
            data: [1000, 1500, 1800, 2100, 2500, 3000],
          },
          {
            name: 'MP',
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
            data: [1100, 1600, 1900, 2300, 2700, 3200],
          },
          {
            name: 'Maharashtra',
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
            data: [1400, 1900, 2100, 2700, 3000, 3800],
          },
        ],
      };
      this.trendAverageStateOption = {
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
          data: [
            'Punjab',
            'Haryana',
            'NCR',
            'Rajasthan',
            'Gujarat',
            'MP',
            'Maharashtra',
          ],
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
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
              'Jan',
              'Feb',
              'Mar',
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: true,
            },
            min: 2,
            max: 20,
            interval: 2,
            name: 'NUMBER OF FILES',
            nameLocation: 'middle',
            nameGap: 43,
          },
        ],
        series: [
          {
            name: 'Punjab',
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
            data: [2, 3, 3.9, 4, 4.2, 4.5],
          },
          {
            name: 'Haryana',
            type: 'line',

            areaStyle: {
              opacity: 0,
            },
            emphasis: {
              focus: 'series',
              areaStyle: {
                opacity: 1, // Reduce opacity on hover to make it semi-transparent
              },
            },
            data: [3, 3.5, 4, 4.5, 4.9, 5],
          },
          {
            name: 'NCR',
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
            data: [4, 4.5, 5, 5.5, 5.9, 6],
          },
          {
            name: 'Rajasthan',
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
            data: [5, 5.5, 6, 6.5, 6.9, 7],
          },
          {
            name: 'Gujarat',
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
            data: [6, 6.5, 7, 7.5, 7.9, 8],
          },
          {
            name: 'MP',
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
            data: [7, 7.5, 8, 8.5, 8.9, 9],
          },
          {
            name: 'Maharashtra',
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
            data: [8, 8.5, 9, 9.5, 9.9, 10],
          },
        ],
      };
      this.trendProductloginsOption = {
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
          data: ['Home Loan', 'LAP', 'BL', 'SBL'],
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
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
              'Jan',
              'Feb',
              'Mar',
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: true,
            },
            min: 500,
            max: 4000,
            interval: 500,
            name: 'NUMBER OF FILES',
            nameLocation: 'middle',
            nameGap: 43,
          },
        ],
        series: [
          {
            name: 'Home Loan',
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
            data: [300, 332, 401, 454, 490, 530, 610],
          },
          {
            name: 'LAP',
            type: 'line',

            areaStyle: {
              opacity: 0,
            },
            emphasis: {
              focus: 'series',
              areaStyle: {
                opacity: 1, // Reduce opacity on hover to make it semi-transparent
              },
            },
            data: [420, 432, 501, 534, 590, 630, 720],
          },
          {
            name: 'BL',
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
            data: [500, 532, 601, 654, 690, 730, 810],
          },
          {
            name: 'SBL',
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
            data: [620, 632, 701, 734, 890, 930, 1020],
          },
        ],
      };
      this.trendSchemeloginsOption = {
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
          data: ['Top Up', 'Fresh', 'BT'],
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
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
              'Jan',
              'Feb',
              'Mar',
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: true,
            },
            min: 500,
            max: 4000,
            interval: 500,
            name: 'NUMBER OF FILES',
            nameLocation: 'middle',
            nameGap: 43,
          },
        ],
        series: [
          {
            name: 'Top Up',
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
            data: [520, 732, 901, 1134, 1490, 2130, 3210],
          },
          {
            name: 'Fresh',
            type: 'line',

            areaStyle: {
              opacity: 0,
            },
            emphasis: {
              focus: 'series',
              areaStyle: {
                opacity: 1, // Reduce opacity on hover to make it semi-transparent
              },
            },
            data: [720, 1382, 1791, 2534, 2990, 3230, 3810],
          },
          {
            name: 'BT',
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
            data: [750, 1232, 2101, 2854, 3190, 3730, 3910],
          },
        ],
      };
      this.trendSourceOption = {
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
          data: ['Direct', 'DSA', 'Power Partner', 'Saathi', 'Online Partner'],
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
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
              'Jan',
              'Feb',
              'Mar',
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: true,
            },
            min: 10,
            max: 110,
            interval: 10,
            name: 'NUMBER OF FILES',
            nameLocation: 'middle',
            nameGap: 43,
          },
        ],
        series: [
          {
            name: 'Direct',
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
            data: [31, 45, 56, 76, 89, 96, 105],
          },
          {
            name: 'DSA',
            type: 'line',

            areaStyle: {
              opacity: 0,
            },
            emphasis: {
              focus: 'series',
              areaStyle: {
                opacity: 1, // Reduce opacity on hover to make it semi-transparent
              },
            },
            data: [41, 47, 59, 78, 91, 97, 106],
          },
          {
            name: 'Power Partner',
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
            data: [42, 48, 60, 79, 92, 98, 107],
          },
          {
            name: 'Saathi',
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
            data: [43, 49, 62, 81, 94, 100, 108],
          },
          {
            name: 'Online Partner',
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
            data: [49, 55, 65, 85, 96, 103, 109],
          },
        ],
      };

      this.trendStateChart.setOption(this.trendStateOption);
      this.trendAverageStateChart.setOption(this.trendAverageStateOption);
      this.trendSchemeLoginsChart.setOption(this.trendSchemeloginsOption);
      this.trendProductLoginsChart.setOption(this.trendProductloginsOption);
      this.trendSourceChart.setOption(this.trendSourceOption);
    }
  }

  onFilterChange(selectedValue: string) {
    console.log(selectedValue);
    this.generateStateRandomData();
    this.generateAverageStateRandomData();
    this.generateSchemeRandomData();
    this.generateProductRandomData();
    this.generateSourceRandomData();
  }
  generateRandomAmount(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  onStateChange(selectedValue: string) {
    console.log(selectedValue);
    this.generateStateRandomData();
    this.generateAverageStateRandomData();
    this.generateSchemeRandomData();
    this.generateProductRandomData();
    this.generateSourceRandomData();
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }

  generateStateRandomData() {
    const minValues = [1500, 250, 400, 1700, 500, 600, 800, 2500];
    const maxValues = [1700, 500, 600, 1900, 700, 800, 1000, 4000];

    const newData = minValues.map((min, index) => {
      const max = maxValues[index];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
    this.stateOption.series[0].data = newData;
    this.StateChart.setOption(this.stateOption);
  }

  generateAverageStateRandomData() {
    const minValues = [7, 5, 2, 11, 6, 4, 5, 13];
    const maxValues = [10, 7, 5, 13, 9, 8, 7, 15];

    const newData = minValues.map((min, index) => {
      const max = maxValues[index];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
    this.averageStateOption.series[0].data = newData;
    this.AverageStateChart.setOption(this.averageStateOption);
  }
  generateSchemeRandomData() {
    const newData = [
      {
        value: this.getRandomValue(22, 27),
        name: 'Top-Up',
        itemStyle: { color: '#FF7629' },
      },
      {
        value: this.getRandomValue(40, 45),
        name: 'Fresh',
        itemStyle: { color: '#FF0000' },
      },
      {
        value: this.getRandomValue(23, 26),
        name: 'BT',
        itemStyle: { color: '#94DD1D' },
      },
    ];

    // Update the pie chart data with the new random values
    this.schemeloginsOption.series[0].data = newData;
    this.SchemeLoginsChart.setOption(this.schemeloginsOption);
  }

  getRandomValue(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateProductRandomData() {
    const newData = [
      {
        value: this.getRandomValue(41, 45),
        name: 'Home Loan',
        itemStyle: { color: '#7C41DA' },
      },
      {
        value: this.getRandomValue(17, 20),
        name: 'LAP',
        itemStyle: { color: '#F99B00' },
      },
      {
        value: this.getRandomValue(7, 10),
        name: 'BL',
        itemStyle: { color: '#636363' },
      },
      {
        value: this.getRandomValue(22, 25),
        name: 'SBL',
        itemStyle: { color: '#0B9DE8' },
      },
    ];

    // Update the pie chart data with the new random values
    this.productloginsOption.series[0].data = newData;
    this.ProductLoginsChart.setOption(this.productloginsOption);
  }

  generateSourceRandomData() {
    const newData = [
      { value: this.getRandomValue(33, 37), itemStyle: { color: '#07A14E' } },
      { value: this.getRandomValue(15, 20), itemStyle: { color: '#FB8C00' } },
      { value: this.getRandomValue(11, 16), itemStyle: { color: '#6659F7' } },
      { value: this.getRandomValue(11, 16), itemStyle: { color: '#2962FF' } },
      { value: this.getRandomValue(13, 15), itemStyle: { color: '#CAEDFF' } },
    ];
    this.sourceOption.series[0].data = newData;
    this.SourceChart.setOption(this.sourceOption);
  }

  ontrendStateChange(selectedValue: string) {
    console.log(selectedValue);
    this.TrendgenerateStateRandomData(selectedValue);
    this.TrendgenerateAverageStateRandomData(selectedValue);
    this.TrendgenerateSchemeRandomData(selectedValue);
    this.TrendgenerateProductRandomData(selectedValue);
    this.TrendgenerateSourceRandomData(selectedValue);
  }

  onTrendFilterChange(selectedValue: string) {
    this.TrendgenerateStateRandomData(selectedValue);
    this.TrendgenerateAverageStateRandomData(selectedValue);
    this.TrendgenerateSchemeRandomData(selectedValue);
    this.TrendgenerateProductRandomData(selectedValue);
    this.TrendgenerateSourceRandomData(selectedValue);
  }

  TrendgenerateStateRandomData(selectedValue: string) {
    if (selectedValue === 'Three month') {
      const newAxisdata = ['Jul', 'Aug', 'Sep'];
      this.trendStateOption.xAxis[0].data = newAxisdata;
      const StateminValues = [550, 1000, 2500];
      const StatemaxValues = [1000, 2000, 3500];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendStateOption.series[0].data = newData;
      this.trendStateChart.setOption(this.trendStateOption);
    } else {
      const newAxisdata = [
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'Jan',
        'Feb',
        'Mar',
      ];
      this.trendStateOption.xAxis[0].data = newAxisdata;
      const StateminValues = [550, 1000, 2500, 3000, 3500];
      const StatemaxValues = [1000, 2000, 3500, 4000, 4000];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendStateOption.series[0].data = newData;
      this.trendStateChart.setOption(this.trendStateOption);
    }
  }

  TrendgenerateAverageStateRandomData(selectedValue: string) {
    if (selectedValue === 'Three month') {
      const newAxisdata = ['Jul', 'Aug', 'Sep'];
      this.trendAverageStateOption.xAxis[0].data = newAxisdata;
      const StateminValues = [10.7, 12.5, 14];
      const StatemaxValues = [11, 13, 15];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendAverageStateOption.series[0].data = newData;
      this.trendAverageStateChart.setOption(this.trendAverageStateOption);
    } else {
      const newAxisdata = [
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'Jan',
        'Feb',
        'Mar',
      ];
      this.trendAverageStateOption.xAxis[0].data = newAxisdata;
      const StateminValues = [10.7, 11.5, 12.2, 13.4, 14];
      const StatemaxValues = [11, 12, 13, 14, 15];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendAverageStateOption.series[0].data = newData;
      this.trendAverageStateChart.setOption(this.trendAverageStateOption);
    }
  }

  TrendgenerateSchemeRandomData(selectedValue: string) {
    if (selectedValue === 'Three month') {
      const newAxisdata = ['Jul', 'Aug', 'Sep'];
      this.trendSchemeloginsOption.xAxis[0].data = newAxisdata;
      const StateminValues = [550, 1000, 2500];
      const StatemaxValues = [1000, 2000, 3500];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendSchemeloginsOption.series[0].data = newData;
      this.trendSchemeLoginsChart.setOption(this.trendSchemeloginsOption);
    } else {
      const newAxisdata = [
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'Jan',
        'Feb',
        'Mar',
      ];
      this.trendSchemeloginsOption.xAxis[0].data = newAxisdata;
      const StateminValues = [550, 1000, 2500, 3000, 3500];
      const StatemaxValues = [1000, 2000, 3500, 4000, 4000];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendSchemeloginsOption.series[0].data = newData;
      this.trendSchemeLoginsChart.setOption(this.trendSchemeloginsOption);
    }
  }

  TrendgenerateProductRandomData(selectedValue: string) {
    if (selectedValue === 'Three month') {
      const newAxisdata = ['Jul', 'Aug', 'Sep'];
      this.trendProductloginsOption.xAxis[0].data = newAxisdata;
      const StateminValues = [550, 1000, 2500];
      const StatemaxValues = [1000, 2000, 3500];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendProductloginsOption.series[0].data = newData;
      this.trendProductLoginsChart.setOption(this.trendProductloginsOption);
    } else {
      const newAxisdata = [
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'Jan',
        'Feb',
        'Mar',
      ];
      this.trendProductloginsOption.xAxis[0].data = newAxisdata;
      const StateminValues = [550, 1000, 2500, 3000, 3500];
      const StatemaxValues = [1000, 2000, 3500, 4000, 4000];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendProductloginsOption.series[0].data = newData;
      this.trendProductLoginsChart.setOption(this.trendProductloginsOption);
    }
  }
  TrendgenerateSourceRandomData(selectedValue: string) {
    if (selectedValue === 'Three month') {
      const newAxisdata = ['Jul', 'Aug', 'Sep'];
      this.trendSourceOption.xAxis[0].data = newAxisdata;
      const StateminValues = [40.6, 45, 49];
      const StatemaxValues = [46, 47, 50];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendSourceOption.series[0].data = newData;
      this.trendSourceChart.setOption(this.trendSourceOption);
    } else {
      const newAxisdata = [
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'Jan',
        'Feb',
        'Mar',
      ];
      this.trendSourceOption.xAxis[0].data = newAxisdata;
      const StateminValues = [40.5, 43, 45.5, 46, 48];
      const StatemaxValues = [43, 45, 47, 47.5, 50];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendSourceOption.series[0].data = newData;
      this.trendSourceChart.setOption(this.trendSourceOption);
    }
  }
}


