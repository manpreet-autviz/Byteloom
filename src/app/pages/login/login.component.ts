import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import * as echarts from 'echarts';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
const today = new Date();
const currentMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
const currentMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
const customValidRange = {
  start: '2023-09-01', // Define the start date you want to display
  end: '2023-09-30', // Define the end date you want to display
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    visibleRange: {
      start: new Date(), // Start from the current date
      end: new Date(new Date().getFullYear(), new Date().getMonth(), 1), // End at the first day of the current month
    },
    // weekends: true,

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
  monthFilters: string[] = ['Year to Date', 'Three months'];
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
  branches: string[] = [];
  clusters: string[] = [];
  selectedTrendFilter: string = 'Year to Date';
  selectedState: string = 'Pan India';
  selectedFilter: string = 'November';

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
  IMDChart!: echarts.ECharts;

  IMDOption: any;

  selectedCluster: string = 'All';
  selectedBranch: string = 'All';

  public isToggled = false;
  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.initializeChart();
    this.customizeDateCells();
  }

  customizeDateCells() {
    const dateCells = document.querySelectorAll('.fc-day');
    dateCells.forEach((cell) => {
      const date = cell.getAttribute('data-date');
      if (date && date >= '2023-11-06' && date <= '2023-11-11') {
        const element = cell as HTMLElement; // Cast to HTMLElement
        element.style.backgroundColor = '#D6F7E5';
      }
    });
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

      this.IMDChart = echarts.init(
        document.getElementById('login-IMD-chart') as HTMLDivElement
      );

      this.stateOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          formatter: (params: any) => {
            const dataIndex = params[0].dataIndex;
            const barValue = params[0].value * 1000;
            const randomAmounts = [350, 145, 167, 370, 290, 300, 320, 550];
            const randomAmount = randomAmounts[dataIndex];

            // Create the tooltip content with the actual value and random amount
            return `No. of Files: ${barValue}<br> Amount in Cr: ${randomAmount}`;
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
            show: false,
          },

          min: 0,
          max: 1.0,
          interval: 0.2,
          name: 'Number of files (in thousand)',

          nameLocation: 'start',
          nameGap: -200,
          nameTextStyle: {
            fontWeight: 600,
            fontSize: 14,
            align: 'right',
            verticalAlign: 'top',
            padding: [30, 0, 0, 0],
          },
        },
        yAxis: {
          type: 'category',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false, // Hide tick lines
          },
          data: ['Maharashtra', 'MP', 'Gujarat', 'Rajasthan', 'NCR', 'PCH'],
        },
        series: [
          {
            barWidth: 15,
            type: 'bar',
            data: [0.397, 0.7, 0.8, 0.915, 0.458, 0.244],
            itemStyle: {
              color: '#5BC8EF',
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
          formatter: (params: any) => {
            const dataIndex = params[0].dataIndex;
            const files = [11, 8, 6, 12, 10, 7, 9];
            const avgNoOfFile = files[dataIndex];
            const amount = [35, 20, 24, 67, 32, 21, 23];
            const amountInCr = amount[dataIndex];
            const randomAmount = [77, 75, 76, 79, 80, 77, 89];

            const activeRMs = randomAmount[dataIndex];

            // Create the tooltip content with the actual value and random amount
            return `Avg no. of files : ${avgNoOfFile}<br> Amount in Cr: ${amountInCr}<br> Active RMs: ${activeRMs}`;
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
            show: false,
          },
          min: 0,
          max: 15,
          interval: 1,
          name: 'Number of files',
          nameLocation: 'start',
          nameGap: -110,
          nameTextStyle: {
            fontWeight: 600,
            fontSize: 14,
            align: 'right',
            verticalAlign: 'top',
            padding: [30, 0, 0, 0],
          },
          axisLabel: {
            //margin: 45,  Add top margin to the x-axis label
          },
        },
        yAxis: {
          type: 'category',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false, // Hide tick lines
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
            barWidth: 15,
            type: 'bar',
            data: [11, 8, 6, 12, 10, 7, 9],
            itemStyle: {
              color: '#3C7EBE',
            },
          },
        ],
      };

      this.schemeloginsOption = {
        tooltip: {
          trigger: 'item',
          formatter: (params: any) => {
            let tooltipText = '';

            if (params.name === 'BT') {
              tooltipText = 'No. of files: 1000 <br/> Amount in Cr: 45';
            } else if (params.name === 'Top-Up') {
              tooltipText = 'No. of files: 700 <br/> Amount in Cr: 27';
            } else if (params.name === 'Fresh') {
              tooltipText = 'No. of files: 800 <br/> Amount in Cr: 26';
            }

            return tooltipText;
          },
        },
        responsive: true,
        legend: {
          top: '-1%',
          left: 'center',
        },
        series: [
          {
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
              { value: 65, name: 'Fresh', itemStyle: { color: '#f6c342' } },
              { value: 27, name: 'Top-Up', itemStyle: { color: '#6c757d' } },
              { value: 26, name: 'BT', itemStyle: { color: '#198754' } },
            ],
          },
        ],
      };

      this.productloginsOption = {
        tooltip: {
          trigger: 'item',
          formatter: (params: any) => {
            let tooltipText = '';

            if (params.name === 'HL') {
              tooltipText = 'No. of files: 1000 <br/> Amount in Cr: 150';
            } else if (params.name === 'LAP') {
              tooltipText = 'No. of files: 700 <br/> Amount in Cr: 100';
            } else if (params.name === 'BL') {
              tooltipText = 'No. of files: 800 <br/> Amount in Cr: 120';
            } else if (params.name === 'SBL') {
              tooltipText = 'No. of files: 900 <br/> Amount in Cr: 135';
            }

            return tooltipText;
          },
        },
        responsive: true,
        legend: {
          top: '-1%',
          left: 'center',
        },
        series: [
          {
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
              { value: 55, name: 'HL', itemStyle: { color: '#7C41DA' } },
              { value: 15, name: 'LAP', itemStyle: { color: '#F99B00' } },
              { value: 10, name: 'BL', itemStyle: { color: '#636363' } },
              { value: 20, name: 'SBL', itemStyle: { color: '#0B9DE8' } },
            ],
          },
        ],
      };

      this.IMDOption = {
        tooltip: {
          trigger: 'item',
          formatter: (params: any) => {
            let tooltipText = '';

            if (params.name === 'Online') {
              tooltipText = 'No. of files: 1000 <br/> Percentage : 25';
            } else if (params.name === 'Cheque') {
              tooltipText = 'No. of files: 700 <br/> Percentage : 35';
            } else if (params.name === 'Cash') {
              tooltipText = 'No. of files: 800 <br/> Percentage : 10';
            } else if (params.name === 'UPI') {
              tooltipText = 'No. of files: 900 <br/> Percentage : 30';
            }

            return tooltipText;
          },
        },
        responsive: true,
        legend: {
          top: '-1%',
          left: 'center',
          // doesn't perfectly work with our tricks, disable it
          // selectedMode: false,
          // borderRadius: 50,
        },
        series: [
          {
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
              { value: 25, name: 'Online', itemStyle: { color: '#7C41DA' } },
              { value: 35, name: 'Cheque', itemStyle: { color: '#FB8C00' } },
              { value: 10, name: 'Cash', itemStyle: { color: '#07A14E' } },
              { value: 30, name: 'UPI', itemStyle: { color: '#636363' } },
            ],
            value: 1048 + 735 + 580 + 484 + 300,
          },
        ],
      };

      this.sourceOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          formatter: (params: any) => {
            const dataIndex = params[0].dataIndex;
            const values = params[0].value;
            const barValue = [1525, 610, 305, 305, 305][dataIndex];
            // const randomAmounts = [2000, 700, 800, 2100, 1000, 1500];
            // const randomAmount = randomAmounts[dataIndex];

            // Create the tooltip content with the actual value and random amount
            return `No. of Files: ${barValue} <br> Percentage: ${values}%`;
          },
        },
        responsive: true,
        xAxis: {
          type: 'category',
          axisTick: {
            show: false, // Hide tick lines
          },
          axisLine: {
            show: false,
          },
          data: ['Direct', 'DSA', 'P.P.', 'Saathi', 'Online/Tele'],
          axisLabel: {
            interval: 0,
            rotate: 0,
            overflow: 'break',
          },
        },
        yAxis: {
          name: 'Percentage %',
          nameLocation: 'middle',
          nameGap: 20,
          nameTextStyle: {
            fontWeight: 600,
            fontSize: 14,
          },

          type: 'value',
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          min: 0,
          max: 70,
          interval: 10,
          axisLabel: {
            formatter: '{value}',
            margin: 1,
          },
        },
        series: [
          {
            data: [
              { value: 50, itemStyle: { color: '#6096B4' } },
              { value: 20, itemStyle: { color: '#46CDCF' } },
              { value: 10, itemStyle: { color: '#F0997D' } },
              { value: 10, itemStyle: { color: 'rgba(41, 98, 255, 0.42)' } },
              { value: 10, itemStyle: { color: '#CAEDFF' } },
            ],
            barWidth: 30,
            type: 'bar',
          },
        ],
      };

      this.AverageStateChart.setOption(this.averageStateOption);
      this.StateChart.setOption(this.stateOption);
      this.SchemeLoginsChart.setOption(this.schemeloginsOption);
      this.ProductLoginsChart.setOption(this.productloginsOption);
      this.SourceChart.setOption(this.sourceOption);
      this.IMDChart.setOption(this.IMDOption);
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
          data: ['PCH', 'NCR', 'Rajasthan', 'Gujarat', 'MP', 'Maharashtra'],
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
            labelLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },

            boundaryGap: true,
            data: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
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
            min: 0,
            max: 1.0,
            interval: 0.2,
            name: 'Number of files (In Thousands)',
            nameLocation: 'middle',
            nameGap: 25,
            nameTextStyle: {
              fontWeight: 600,
              fontSize: 14,
            },
          },
        ],
        series: [
          {
            name: 'PCH',
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
            data: [0.244, 0.214, 0.183, 0.259, 0.244, 0.244, 0.275, 0.244],
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
            data: [0.458, 0.488, 0.427, 0.458, 0.61, 0.58, 0.397, 0.427],
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
            data: [0.915, 0.854, 0.958, 0.671, 0.915, 0.915, 0.946, 0.915],
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
            data: [0.366, 0.366, 0.305, 0.366, 0.458, 0.488, 0.427, 0.397],
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
            data: [0.671, 0.763, 0.702, 0.732, 0.458, 0.549, 0.61, 0.671],
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
            data: [0.397, 0.397, 0.366, 0.564, 0.366, 0.396, 0.397],
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
          data: ['PCH', 'NCR', 'Rajasthan', 'Gujarat', 'MP', 'Maharashtra'],
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

            boundaryGap: true,
            data: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
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
            min: 1,
            max: 10,
            interval: 1,
            name: 'Number of files',
            nameLocation: 'middle',
            nameGap: 25,
            nameTextStyle: {
              fontWeight: 600,
              fontSize: 14,
            },
          },
        ],
        series: [
          {
            name: 'PCH',
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
            data: [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
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
            data: [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
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
            data: [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
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
            data: [4.2, 4.5, 5, 5.2, 4.9, 4.7, 4.2, 4.5],
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
            data: [3.5, 3.2, 3, 3.9, 4.1, 4, 4.5, 4],
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
            data: [3.8, 4, 3.5, 4.3, 4.3, 4.5, 3.9, 4],
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
          data: ['HL', 'LAP', 'BL', 'SBL'],
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
            labelLine: {
              show: false,
            },

            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            boundaryGap: true,
            data: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
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
            min: 0,
            max: 1.0,
            interval: 0.2,
            name: 'Number of files (In Thousands)',
            nameLocation: 'middle',
            nameGap: 25,
            nameTextStyle: {
              fontWeight: 600,
              fontSize: 14,
            },
          },
        ],
        series: [
          {
            name: 'HL',
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
            data: [0.915, 0.854, 0.999, 0.671, 0.915, 0.915, 0.946, 0.915],
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
            data: [0.458, 0.488, 0.427, 0.458, 0.61, 0.58, 0.397, 0.427],
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
            data: [0.244, 0.214, 0.183, 0.259, 0.244, 0.244, 0.275, 0.244],
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
            data: [0.366, 0.336, 0.305, 0.366, 0.458, 0.488, 0.427, 0.397],
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
          data: ['Fresh', 'Top Up', 'BT'],
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
            labelLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            boundaryGap: true,
            data: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
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
            min: 0,
            max: 1.0,
            interval: 0.2,
            name: 'Number of files (In Thousands)',
            nameLocation: 'middle',
            nameGap: 25,
            nameTextStyle: {
              fontWeight: 600,
              fontSize: 14,
            },
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
            data: [0.915, 0.854, 0.999, 0.671, 0.915, 0.915, 0.946, 0.915],
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
            data: [0.458, 0.488, 0.427, 0.458, 0.61, 0.58, 0.397, 0.427],
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
            data: [0.244, 0.214, 0.183, 0.259, 0.244, 0.244, 0.275, 0.244],
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
          data: ['Direct', 'DSA', 'P.P.', 'Saathi', 'Online/Tele'],
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
            labelLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            boundaryGap: true,
            data: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
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
            min: 100,
            max: 1100,
            interval: 100,
            name: 'Number of files',
            nameLocation: 'middle',
            nameGap: 25,
            nameTextStyle: {
              fontWeight: 600,
              fontSize: 14,
            },
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
            data: [915, 854, 1068, 671, 915, 915, 946, 915],
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
            data: [229, 256, 214, 224, 336, 275, 189, 229],
          },
          {
            name: 'P.P.',
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
            data: [183, 171, 320, 168, 305, 305, 189, 122],
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
            data: [229, 214, 320, 112, 244, 290, 189, 229],
          },
          {
            name: 'Online/Tele',
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
            data: [122, 114, 142, 134, 122, 122, 205, 122],
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
    (selectedValue);
    this.generateStateFilterRandomData();
    this.generateAverageStateFilterRandomData();
    this.generateSchemeRandomData();
    this.generateProductRandomData();
    this.generateSourceRandomData();
  }
  generateRandomAmount(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  onRegionChange(region: string) {
    this.selectedState = region;
    this.clusters = this.getClusters(region);
    // this.selectedCluster = this.clusters[0] || '';
    this.branches = [];
    this.generateStateRandomData(region);
    this.generateAverageStateRandomData(region);
    this.generateSchemeRandomData();
    this.generateProductRandomData();
    this.generateSourceRandomData();
    this.generateRandomEvents();
  }
  getClusters(region: string): string[] {
    if (region === 'PCH') {
      return ['Chandigarh', 'Ludhiana', 'Karnal'];
    } else if (region === 'NCR') {
      return ['Delhi', 'Gurgaon'];
    } else if (region === 'Rajasthan') {
      return ['Jaipur', 'Udaipur', 'Ajmer', 'Kota'];
    } else if (region === 'Gujarat') {
      return ['Ahmedabad', 'Surat', 'Rajkot', 'Vadodara'];
    } else if (region === 'MP') {
      return ['Indore', 'Bhopal', 'Gwalior', 'Jabalpur'];
    } else if (region === 'Maharashtra') {
      return ['Mumbai', 'Pune', 'Nashik', 'Nagpur'];
    } else {
      return [];
    }
  }

  onClusterChange(cluster: string) {
    this.selectedCluster = cluster;
    // this.selectedBranch = this.branches[0] || '';
    this.branches = this.getBranches(this.selectedState, cluster);
    this.generateClusterRandomData(this.selectedState, cluster);
    this.generateAverageClusterRandomData(this.selectedState, cluster);
    this.generateSchemeRandomData();
    this.generateProductRandomData();
    this.generateSourceRandomData();
    this.generateRandomEvents();
  }

  getBranches(region: string, cluster: string): string[] {
    if (region === 'PCH') {
      if (cluster === 'Chandigarh') {
        return ['Chandigarh', 'Ambala', 'Patiala'];
      } else if (cluster === 'Ludhiana') {
        return ['Ludhiana', 'Jalandhar', 'Moga'];
      } else if (cluster === 'Karnal') {
        return ['Karnal', 'Rohtak', 'Panipat'];
      }
    } else if (region === 'NCR') {
      if (cluster === 'Delhi') {
        return ['Janakpuri', 'Laxmi Nagar', 'Sahibabad'];
      } else if (cluster === 'Gurgaon') {
        return ['Gurgoan', 'Faridabad', 'Meerut'];
      }
    } else if (region === 'Rajasthan') {
      if (cluster === 'Jaipur') {
        return ['Jaipur', 'Sikar Road', 'Behror'];
      } else if (cluster === 'Ajmer') {
        return ['Ajmer', 'Kekri', 'Merta'];
      } else if (cluster === 'Udaipur') {
        return ['Rajsamand', 'Banswara', 'Udaipur'];
      } else if (cluster === 'Kota') {
        return [];
      }
    } else if (region === 'Gujarat') {
      if (cluster === 'Ahmedabad') {
        return ['Ahmedabad', 'Gandhinagar', 'Sanand'];
      } else if (cluster === 'Surat') {
        return ['Surat', 'Kadodara', 'Rundh'];
      } else if (cluster === 'Rajkot') {
        return ['Rajkot', 'Jamnagar', 'Junagadh'];
      } else if (cluster === 'Vadodara') {
        return ['Vadodara', 'Anand', 'Dabhoi'];
      }
    } else if (region === 'Maharashtra') {
      if (cluster === 'Mumbai') {
        return ['Navi Mumbai', 'Thane', 'Kalyan'];
      } else if (cluster === 'Nashik') {
        return ['Nashik', 'Malegaon', 'Sinnar'];
      } else if (cluster === 'Pune') {
        return ['Pune', 'Bhor', 'Shikrapur'];
      } else if (cluster === 'Nagpur') {
        return ['Nagpur', 'Amravati', 'Gondia'];
      }
    } else if (region === 'MP') {
      if (cluster === 'Indore') {
        return ['Indore', 'Ujjain', 'Dewas'];
      } else if (cluster === 'Gwalior') {
        return ['Gwalior', 'Morena', 'Bhind'];
      } else if (cluster === 'Bhopal') {
        return ['Bhopal', 'Vidisha', 'Sehore'];
      } else if (cluster === 'Jabalpur') {
        return ['Jabalpur', 'Sihora', 'Mandla'];
      }
    }

    return []; // Default case: return an empty array if no match is found
  }

  onBranchChange(branch: string, cluster: string) {
    this.selectedCluster = cluster;
    this.selectedBranch = branch;
    this.randomStatebranchChange(branch);
    this.randomAveragebranchChange(branch);
    this.generateRandomEvents();
  }

  onStateChange(selectedValue: string) {
    (selectedValue);
    this.onRegionChange(selectedValue);
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }

  randomStatebranchChange(branch: string) {
    let yAxisLabels: string[] = [];
    let minValues: any[] = [];
    let maxValues: any[] = [];
    let newData: number[] = [];
    yAxisLabels = [branch];
    newData = [0.85];
    if (newData.length === 0) {
      // Generate random data if newData array is empty
      newData = minValues.map((min, index) => {
        const max = maxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
    }

    this.stateOption.yAxis.data = yAxisLabels;
    this.stateOption.series[0].data = newData;
    this.StateChart.setOption(this.stateOption);
  }
  randomAveragebranchChange(branch: string) {
    let yAxisLabels: string[] = [];
    let minValues: any[] = [];
    let maxValues: any[] = [];
    let newData: number[] = [];
    yAxisLabels = [branch];

    newData = [0.85];
    if (newData.length === 0) {
      // Generate random data if newData array is empty
      newData = minValues.map((min, index) => {
        const max = maxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
    }

    this.averageStateOption.yAxis.data = yAxisLabels;
    this.averageStateOption.series[0].data = newData;
    this.AverageStateChart.setOption(this.averageStateOption);
  }

  generateStateRandomData(region: string) {
    let yAxisLabels: string[] = [];
    let minValues: any[] = [];
    let maxValues: any[] = [];
    let newData: number[] = [];
    if (region === 'PCH') {
      yAxisLabels = ['Chandigarh', 'Ludhiana', 'Karnal'];
      newData = [0.85, 0.63, 0.51];
    } else if (region === 'NCR') {
      yAxisLabels = ['Delhi', 'Gurgaon'];
      newData = [0.275, 0.183];
    } else if (region === 'Rajasthan') {
      yAxisLabels = ['Jaipur', 'Udaipur', 'Ajmer', 'Kota'];
      newData = [0.32, 0.192, 0.238, 0.165];
    } else if (region === 'Gujarat') {
      yAxisLabels = ['Ahmedabad', 'Surat', 'Rajkot', 'Vadodara'];
      minValues = [1.9, 0.6, 0.7, 2.0];
      maxValues = [2.0, 0.7, 0.8, 2.1];
    } else if (region === 'MP') {
      yAxisLabels = ['Indore', 'Bhopal', 'Gwalior', 'Jabalpur'];
      minValues = [1.9, 0.6, 0.7, 2.0];
      maxValues = [2.0, 0.7, 0.8, 2.1];
    } else if (region === 'Maharashtra') {
      yAxisLabels = ['Mumbai', 'Pune', 'Nashik', 'Nagpur'];
      newData = [0.8, 0.83, 0.103, 0.71];
    }

    if (newData.length === 0) {
      // Generate random data if newData array is empty
      newData = minValues.map((min, index) => {
        const max = maxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
    }

    this.stateOption.yAxis.data = yAxisLabels;
    this.stateOption.series[0].data = newData;
    this.StateChart.setOption(this.stateOption);
  }

  generateClusterRandomData(region: string, cluster: string) {
    let yAxisLabels: string[] = [];
    let minValues: any[] = [];
    let maxValues: any[] = [];
    let newClusterData: number[] = [];
    if (region === 'PCH') {
      if (cluster === 'Chandigarh') {
        yAxisLabels = ['Chandigarh', 'Ambala', 'Patiala'];
        newClusterData = [0.34, 0.24, 0.27];
      } else if (cluster === 'Ludhiana') {
        yAxisLabels = ['Ludhiana', 'Jalandhar', 'Moga'];
        newClusterData = [0.25, 0.18, 0.2];
      } else if (cluster === 'Karnal') {
        yAxisLabels = ['Karnal', 'Rohtak', 'Panipat'];
        newClusterData = [0.21, 0.14, 0.16];
      }
    } else if (region === 'NCR') {
      if (cluster === 'Delhi') {
        yAxisLabels = ['Janakpuri', 'Laxmi Nagar', 'Sahibabad'];
        newClusterData = [0.11, 0.77, 0.88];
      } else if (cluster === 'Gurgaon') {
        yAxisLabels = ['Gurgoan', 'Faridabad', 'Meerut'];
        newClusterData = [0.73, 0.51, 0.59];
      }
    } else if (region === 'Rajasthan') {
      if (cluster === 'Jaipur') {
        yAxisLabels = ['Jaipur', 'Sikar Road', 'Behror'];
        newClusterData = [0.128, 0.9, 0.102];
      } else if (cluster === 'Ajmer') {
        yAxisLabels = ['Ajmer', 'Kekri', 'Merta'];
        newClusterData = [0.95, 0.67, 0.76];
      } else if (cluster === 'Udaipur') {
        yAxisLabels = ['Rajsamand', 'Banswara', 'Udaipur'];
        newClusterData = [0.77, 0.54, 0.61];
      } else if (cluster === 'Kota') {
        yAxisLabels = [];
      }
    } else if (region === 'Gujarat') {
      if (cluster === 'Ahmedabad') {
        yAxisLabels = ['Ahmedabad', 'Gandhinagar', 'Sanand'];
        minValues = [1.9, 0.6, 0.7];
        maxValues = [2.0, 0.7, 0.8];
      } else if (cluster === 'Surat') {
        yAxisLabels = ['Surat', 'Kadodara', 'Rundh'];
        minValues = [1.9, 0.6, 0.7];
        maxValues = [2.0, 0.7, 0.8];
      } else if (cluster === 'Rajkot') {
        yAxisLabels = ['Rajkot', 'Jamnagar', 'Junagadh'];
        minValues = [1.9, 0.6, 0.7];
        maxValues = [2.0, 0.7, 0.8];
      } else if (cluster === 'Vadodara') {
        yAxisLabels = ['Vadodara', 'Anand', 'Dabhoi'];
        minValues = [1.9, 0.6, 0.7];
        maxValues = [2.0, 0.7, 0.8];
      }
    } else if (region === 'Maharashtra') {
      if (cluster === 'Mumbai') {
        yAxisLabels = ['Navi Mumbai', 'Thane', 'Kalyan'];
        newClusterData = [0.56, 0.39, 0.44];
      } else if (cluster === 'Nashik') {
        yAxisLabels = ['Nashik', 'Malegaon', 'Sinnar'];
        newClusterData = [0.41, 0.29, 0.33];
      } else if (cluster === 'Pune') {
        yAxisLabels = ['Pune', 'Bhor', 'Shikrapur'];
        newClusterData = [0.33, 0.23, 0.27];
      } else if (cluster === 'Nagpur') {
        yAxisLabels = ['Nagpur', 'Amravati', 'Gondia'];
        newClusterData = [0.29, 0.2, 0.23];
      }
    } else if (region === 'MP') {
      if (cluster === 'Indore') {
        yAxisLabels = ['Indore', 'Ujjain', 'Dewas'];
        minValues = [1.9, 0.6, 0.7];
        maxValues = [2.0, 0.7, 0.8];
      } else if (cluster === 'Gwalior') {
        yAxisLabels = ['Gwalior', 'Morena', 'Bhind'];
        minValues = [1.9, 0.6, 0.7];
        maxValues = [2.0, 0.7, 0.8];
      } else if (cluster === 'Bhopal') {
        yAxisLabels = ['Bhopal', 'Vidisha', 'Sehore'];
        minValues = [1.9, 0.6, 0.7];
        maxValues = [2.0, 0.7, 0.8];
      } else if (cluster === 'Jabalpur') {
        yAxisLabels = ['Jabalpur', 'Sihora', 'Mandla'];
        minValues = [1.9, 0.6, 0.7];
        maxValues = [2.0, 0.7, 0.8];
      }
    }

    if (newClusterData.length === 0) {
      // Generate random data if newData array is empty
      newClusterData = minValues.map((min, index) => {
        const max = maxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
    }

    this.stateOption.yAxis.data = yAxisLabels;
    this.stateOption.series[0].data = newClusterData;

    this.StateChart.setOption(this.stateOption);
    (this.StateChart.setOption(this.stateOption));
  }

  generateAverageStateRandomData(region: string) {
    // const minValues = [7, 5, 3, 11, 7, 4, 5];
    // const maxValues = [11, 8, 6, 12, 10, 7, 9];
    let yAxisLabels: string[] = [];
    let minValues: any[] = [];
    let maxValues: any[] = [];
    if (region === 'PCH') {
      yAxisLabels = ['Chandigarh', 'Ludhiana', 'Karnal'];
      minValues = [7, 5, 3];
      maxValues = [11, 8, 6];
    } else if (region === 'NCR') {
      yAxisLabels = ['Delhi', 'Gurgaon'];
      minValues = [7, 5];
      maxValues = [11, 8];
    } else if (region === 'Rajasthan') {
      yAxisLabels = ['Jaipur', 'Udaipur', 'Ajmer', 'Kota'];
      minValues = [7, 5, 3, 11];
      maxValues = [11, 8, 6, 12];
    } else if (region === 'Gujarat') {
      yAxisLabels = ['Ahmedabad', 'Surat', 'Rajkot', 'Vadodara'];
      minValues = [7, 5, 3, 11];
      maxValues = [11, 8, 6, 12];
    } else if (region === 'MP') {
      yAxisLabels = ['Indore', 'Bhopal', 'Gwalior', 'Jabalpur'];
      minValues = [7, 5, 3, 11];
      maxValues = [11, 8, 6, 12];
    } else if (region === 'Maharashtra') {
      yAxisLabels = ['Mumbai', 'Pune', 'Nashik', 'Nagpur'];
      minValues = [7, 5, 3, 11];
      maxValues = [11, 8, 6, 12];
    }

    const newData = minValues.map((min, index) => {
      const max = maxValues[index];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
    this.averageStateOption.yAxis.data = yAxisLabels;
    this.averageStateOption.series[0].data = newData;
    this.AverageStateChart.setOption(this.averageStateOption);
  }

  generateAverageClusterRandomData(region: string, cluster: string) {
    let yAxisLabels: string[] = [];
    let minValues: any[] = [];
    let maxValues: any[] = [];
    if (region === 'PCH') {
      if (cluster === 'Chandigarh') {
        yAxisLabels = ['Chandigarh', 'Ambala', 'Patiala'];
        minValues = [7, 5, 3];
        maxValues = [11, 8, 6];
      } else if (cluster === 'Ludhiana') {
        yAxisLabels = ['Ludhiana', 'Jalandhar', 'Moga'];
        minValues = [7, 5, 3];
        maxValues = [11, 8, 6];
      } else if (cluster === 'Karnal') {
        yAxisLabels = ['Karnal', 'Rohtak', 'Panipat'];
        minValues = [7, 5, 3];
        maxValues = [11, 8, 6];
      }
    } else if (region === 'NCR') {
      if (cluster === 'Delhi') {
        yAxisLabels = ['Janakpuri', 'Laxmi Nagar', 'Sahibabad'];
        minValues = [7, 5, 3];
        maxValues = [11, 8, 6];
      } else if (cluster === 'Gurgaon') {
        yAxisLabels = ['Gurgoan', 'Faridabad', 'Meerut'];
        minValues = [7, 5, 3];
        maxValues = [11, 8, 6];
      }
    } else if (region === 'Rajasthan') {
      if (cluster === 'Jaipur') {
        yAxisLabels = ['Jaipur', 'Sikar Road', 'Behror'];
        minValues = [7, 5, 3];
        maxValues = [11, 8, 6];
      } else if (cluster === 'Ajmer') {
        yAxisLabels = ['Ajmer', 'Kekri', 'Merta'];
        minValues = [7, 5, 3];
        maxValues = [11, 8, 6];
      } else if (cluster === 'Udaipur') {
        yAxisLabels = ['Rajsamand', 'Banswara', 'Udaipur'];
        minValues = [7, 5, 3];
        maxValues = [11, 8, 6];
      } else if (cluster === 'Kota') {
        yAxisLabels = [];
        minValues = [7, 5, 3];
        maxValues = [11, 8, 6];
      }
    } else if (region === 'Gujarat') {
      if (cluster === 'Ahmedabad') {
        yAxisLabels = ['Ahmedabad', 'Gandhinagar', 'Sanand'];
        minValues = [7, 5, 3];
        maxValues = [11, 8, 6];
      } else if (cluster === 'Surat') {
        yAxisLabels = ['Surat', 'Kadodara', 'Rundh'];
        minValues = [7, 5, 3];
        maxValues = [11, 8, 6];
      } else if (cluster === 'Rajkot') {
        yAxisLabels = ['Rajkot', 'Jamnagar', 'Junagadh'];
        minValues = [7, 5, 3];
        maxValues = [11, 8, 6];
      } else if (cluster === 'Vadodara') {
        yAxisLabels = ['Vadodara', 'Anand', 'Dabhoi'];
        minValues = [7, 5, 3];
        maxValues = [11, 8, 6];
      }
    } else if (region === 'Maharashtra') {
      if (cluster === 'Mumbai') {
        yAxisLabels = ['Navi Mumbai', 'Thane', 'Kalyan'];
        minValues = [7, 5, 3];
        maxValues = [11, 8, 6];
      } else if (cluster === 'Nashik') {
        yAxisLabels = ['Nashik', 'Malegaon', 'Sinnar'];
        minValues = [7, 5, 3];
        maxValues = [11, 8, 6];
      } else if (cluster === 'Pune') {
        yAxisLabels = ['Pune', 'Bhor', 'Shikrapur'];
        minValues = [7, 5, 3];
        maxValues = [11, 8, 6];
      } else if (cluster === 'Nagpur') {
        yAxisLabels = ['Nagpur', 'Amravati', 'Gondia'];
        minValues = [7, 5, 3];
        maxValues = [11, 8, 6];
      }
    } else if (region === 'MP') {
      if (cluster === 'Indore') {
        yAxisLabels = ['Indore', 'Ujjain', 'Dewas'];
        minValues = [7, 5, 3];
        maxValues = [11, 8, 6];
      } else if (cluster === 'Gwalior') {
        yAxisLabels = ['Gwalior', 'Morena', 'Bhind'];
        minValues = [7, 5, 3];
        maxValues = [11, 8, 6];
      } else if (cluster === 'Bhopal') {
        yAxisLabels = ['Bhopal', 'Vidisha', 'Sehore'];
        minValues = [7, 5, 3];
        maxValues = [11, 8, 6];
      } else if (cluster === 'Jabalpur') {
        yAxisLabels = ['Jabalpur', 'Sihora', 'Mandla'];
        minValues = [7, 5, 3];
        maxValues = [11, 8, 6];
      }
    }

    const newData = minValues.map((min, index) => {
      const max = maxValues[index];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
    this.averageStateOption.yAxis.data = yAxisLabels;
    this.averageStateOption.series[0].data = newData;
    this.AverageStateChart.setOption(this.averageStateOption);
  }

  generateStateFilterRandomData() {
    const minValues = [1.9, 0.6, 0.7, 2.0, 0.9, 1.4];
    const maxValues = [2.0, 0.7, 0.8, 2.1, 1.0, 1.5];

    const newData = minValues.map((min, index) => {
      const max = maxValues[index];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
    (newData);
    this.stateOption.series[0].data = newData;
    this.StateChart.setOption(this.stateOption);
  }
  generateAverageStateFilterRandomData() {
    const minValues = [7, 5, 3, 11, 7, 4, 5];
    const maxValues = [11, 8, 6, 12, 10, 7, 9];

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
        itemStyle: { color: '#6C757D' },
      },
      {
        value: this.getRandomValue(40, 45),
        name: 'Fresh',
        itemStyle: { color: '#F6C342' },
      },
      {
        value: this.getRandomValue(23, 26),
        name: 'BT',
        itemStyle: { color: '#198754' },
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
        name: 'HL',
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
    this.selectedState = selectedValue;
    this.clusters = this.getClusters(selectedValue);
    // this.selectedCluster = this.clusters[0] || '';
    this.branches = [];
    this.TrendgenerateStateRandomData(
      this.selectedState,
      this.selectedTrendFilter
    );
    this.TrendgenerateAverageStateRandomData(
      this.selectedState,
      this.selectedTrendFilter
    );
    this.TrendgenerateSchemeRandomData(
      this.selectedState,
      this.selectedTrendFilter
    );
    this.TrendgenerateProductRandomData(
      this.selectedState,
      this.selectedTrendFilter
    );
    this.TrendgenerateSourceRandomData(
      this.selectedState,
      this.selectedTrendFilter
    );
  }
  ontrendClusterChange(cluster: string) {
    this.branches = this.getBranches(this.selectedState, cluster);
    this.TrendgenerateClusterRandomData(
      this.selectedState,
      cluster,
      this.selectedTrendFilter
    );
    this.TrendgenerateAverageClusterRandomData(
      this.selectedState,
      cluster,
      this.selectedTrendFilter
    );
    this.TrendgenerateSchemeRandomData(
      this.selectedState,
      this.selectedTrendFilter
    );
    this.TrendgenerateProductRandomData(
      this.selectedState,
      this.selectedTrendFilter
    );
    this.TrendgenerateSourceRandomData(
      this.selectedState,
      this.selectedTrendFilter
    );
  }
  ontrendBranchChange(branch: string) {
    this.TrendgenerateStateRandomData(
      this.selectedState,
      this.selectedTrendFilter
    );
    this.TrendgenerateAverageStateRandomData(
      this.selectedState,
      this.selectedTrendFilter
    );
    this.TrendgenerateSchemeRandomData(
      this.selectedState,
      this.selectedTrendFilter
    );
    this.TrendgenerateProductRandomData(
      this.selectedState,
      this.selectedTrendFilter
    );
    this.TrendgenerateSourceRandomData(
      this.selectedState,
      this.selectedTrendFilter
    );
  }

  onTrendFilterChange(selectedValue: string) {
    this.selectedTrendFilter = selectedValue;
    this.TrendgenerateStateRandomData(
      this.selectedState,
      this.selectedTrendFilter
    );
    this.TrendgenerateAverageStateRandomData(
      this.selectedState,
      this.selectedTrendFilter
    );
    this.TrendgenerateSchemeRandomData(
      this.selectedState,
      this.selectedTrendFilter
    );
    this.TrendgenerateProductRandomData(
      this.selectedState,
      this.selectedTrendFilter
    );
    this.TrendgenerateSourceRandomData(
      this.selectedState,
      this.selectedTrendFilter
    );
  }

  TrendgenerateStateRandomData(region: string, selectedTrendFilter: string) {
    if (selectedTrendFilter === 'Three months') {
      const newAxisdata = ['Sep', 'Oct', 'Nov'];
      this.trendStateOption.xAxis[0].data = newAxisdata;
      const StateminValues = [
        [0.183, 0.244, 0.263], // Min values for Sep
        [0.397, 0.427, 0.58],
        [0.671, 0.946, 0.915],
        [0.488, 0.427, 0.397],
        [0.549, 0.61, 0.671],
        [0.274, 0.396, 0.397],
      ];

      const StatemaxValues = [
        [0.214, 0.259, 0.275], // Max values for Sep
        [0.4, 0.458, 0.61],
        [0.658, 0.948, 0.918],
        [0.49, 0.429, 0.4],
        [0.561, 0.612, 0.673],
        [0.276, 0.398, 0.399],
      ];

      this.trendStateOption.series.forEach((series: any, index: any) => {
        // Check if StateminValues and StatemaxValues are defined for the current index
        if (StateminValues[index] && StatemaxValues[index]) {
          // Check if series.data is defined
          series.data = StateminValues[index].map((min, i) => {
            // Check if StatemaxValues[index][i] is defined
            const max = StatemaxValues[index][i];
            return Math.floor(Math.random() * (max - min + 1)) + min;
          });
        } else {
          console.error(
            `StateminValues or StatemaxValues is undefined for index ${index}`
          );
        }
      });
      this.trendStateChart.setOption(this.trendStateOption);
    } else {
      const newAxisData = [
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
      ];
      this.trendStateOption.xAxis[0].data = newAxisData;

      let legend: string[] = [];
      let cityData: number[][] = [];
      if (region === 'Pan India') {
        (legend = ['PCH', 'NCR', 'Rajasthan', 'Gujarat', 'MP', 'Maharashtra']),
          (cityData = [
            [0.244, 0.214, 0.183, 0.259, 0.244, 0.244, 0.275, 0.244],
            [0.458, 0.488, 0.427, 0.458, 0.61, 0.58, 0.397, 0.427],
            [0.915, 0.854, 0.958, 0.671, 0.915, 0.915, 0.946, 0.915],
            [0.366, 0.366, 0.305, 0.366, 0.458, 0.488, 0.427, 0.397],
            [0.671, 0.763, 0.702, 0.732, 0.458, 0.549, 0.61, 0.671],
            [0.397, 0.397, 0.366, 0.564, 0.366, 0.396, 0.397],
          ]);
      } else if (region === 'PCH') {
        legend = ['Chandigarh', 'Ludhiana', 'Karnal'];
        cityData = [
          [0.105, 0.09, 0.096, 0.114, 0.111, 0.096, 0.099, 0.1],
          [0.078, 0.096, 0.066, 0.06, 0.084, 0.066, 0.09, 0.083],
          [0.063, 0.054, 0.075, 0.045, 0.054, 0.069, 0.06, 0.057],
        ];
      } else if (region === 'NCR') {
        legend = ['Delhi', 'Gurgaon'];
        cityData = [
          [0.105, 0.09, 0.096, 0.114, 0.111, 0.096, 0.099, 0.1],
          [0.078, 0.096, 0.066, 0.06, 0.084, 0.066, 0.09, 0.083],
        ];
      } else if (region === 'Rajasthan') {
        legend = ['Jaipur', 'Udaipur', 'Ajmer', 'Kota'];
        cityData = [
          [0.105, 0.09, 0.096, 0.114, 0.111, 0.096, 0.099, 0.1],
          [0.078, 0.096, 0.066, 0.06, 0.084, 0.066, 0.09, 0.083],
          [0.063, 0.054, 0.075, 0.045, 0.054, 0.069, 0.06, 0.057],
          [0.054, 0.06, 0.063, 0.081, 0.051, 0.069, 0.051, 0.06],
        ];
      } else if (region === 'Gujarat') {
        legend = ['Ahmedabad', 'Surat', 'Rajkot', 'Vadodara'];
        cityData = [
          [0.105, 0.09, 0.096, 0.114, 0.111, 0.096, 0.099, 0.1],
          [0.078, 0.096, 0.066, 0.06, 0.084, 0.066, 0.09, 0.083],
          [0.063, 0.054, 0.075, 0.045, 0.054, 0.069, 0.06, 0.057],
          [0.054, 0.06, 0.063, 0.081, 0.051, 0.069, 0.051, 0.06],
        ];
      } else if (region === 'MP') {
        legend = ['Indore', 'Bhopal', 'Gwalior', 'Jabalpur'];
        cityData = [
          [0.105, 0.09, 0.096, 0.114, 0.111, 0.096, 0.099, 0.1],
          [0.078, 0.096, 0.066, 0.06, 0.084, 0.066, 0.09, 0.083],
          [0.063, 0.054, 0.075, 0.045, 0.054, 0.069, 0.06, 0.057],
          [0.054, 0.06, 0.063, 0.081, 0.051, 0.069, 0.051, 0.06],
        ];
      } else if (region === 'Maharashtra') {
        legend = ['Mumbai', 'Pune', 'Nashik', 'Nagpur'];
        cityData = [
          [0.105, 0.09, 0.096, 0.114, 0.111, 0.096, 0.099, 0.1],
          [0.078, 0.096, 0.066, 0.06, 0.084, 0.066, 0.09, 0.083],
          [0.063, 0.054, 0.075, 0.045, 0.054, 0.069, 0.06, 0.057],
          [0.054, 0.06, 0.063, 0.081, 0.051, 0.069, 0.051, 0.06],
        ];
      }

      this.trendStateOption.series = legend.map((city, index) => ({
        name: city,
        type: 'line',
        areaStyle: { opacity: 0 },
        emphasis: {
          focus: 'series',
          areaStyle: { opacity: 0.5 },
        },
        data: cityData[index],
      }));
      this.trendStateChart.clear();
      this.trendStateOption.legend.data = legend;
      this.trendStateChart.setOption(this.trendStateOption);
      this.trendStateChart.resize(); // Resize the chart
    }
  }

  TrendgenerateClusterRandomData(
    region: string,
    cluster: string,
    selectedTrendFilter: string
  ) {
    if (selectedTrendFilter === 'Three months') {
      const newAxisdata = ['Sep', 'Oct', 'Nov'];
      this.trendStateOption.xAxis[0].data = newAxisdata;
      const StateminValues = [
        [0.183, 0.244, 0.263], // Min values for Sep
        [0.397, 0.427, 0.58],
        [0.671, 0.946, 0.915],
        [0.488, 0.427, 0.397],
        [0.549, 0.61, 0.671],
        [0.274, 0.396, 0.397],
      ];

      const StatemaxValues = [
        [0.214, 0.259, 0.275], // Max values for Sep
        [0.4, 0.458, 0.61],
        [0.658, 0.948, 0.918],
        [0.49, 0.429, 0.4],
        [0.561, 0.612, 0.673],
        [0.276, 0.398, 0.399],
      ];

      this.trendStateOption.series.forEach((series: any, index: any) => {
        if (StateminValues[index] && StatemaxValues[index]) {
          series.data = StateminValues[index].map((min, i) => {
            const max = StatemaxValues[index][i];
            return Math.floor(Math.random() * (max - min + 1)) + min;
          });
        } else {
          console.error(
            `StateminValues or StatemaxValues is undefined for index ${index}`
          );
        }
      });
      this.trendStateChart.setOption(this.trendStateOption);
    } else {
      const newAxisData = [
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
      ];
      this.trendStateOption.xAxis[0].data = newAxisData;

      let yAxisLabels: string[] = [];
      let cityData: number[][] = [];

      if (region === 'PCH') {
        if (cluster === 'Chandigarh') {
          yAxisLabels = ['Chandigarh', 'Ambala', 'Patiala'];
          cityData = [
            [0.048, 0.045, 0.05, 0.052, 0.044, 0.053, 0.047, 0.046],
            [0.033, 0.035, 0.036, 0.038, 0.034, 0.032, 0.03, 0.04],
            [0.039, 0.04, 0.034, 0.03, 0.042, 0.035, 0.043, 0.034],
          ];
        } else if (cluster === 'Ludhiana') {
          yAxisLabels = ['Ludhiana', 'Jalandhar', 'Moga'];
          cityData = [
            [0.048, 0.045, 0.05, 0.052, 0.044, 0.053, 0.047, 0.046],
            [0.033, 0.035, 0.036, 0.038, 0.034, 0.032, 0.03, 0.04],
            [0.039, 0.04, 0.034, 0.03, 0.042, 0.035, 0.043, 0.034],
          ];
        } else if (cluster === 'Karnal') {
          yAxisLabels = ['Karnal', 'Rohtak', 'Panipat'];
          cityData = [
            [0.048, 0.045, 0.05, 0.052, 0.044, 0.053, 0.047, 0.046],
            [0.033, 0.035, 0.036, 0.038, 0.034, 0.032, 0.03, 0.04],
            [0.039, 0.04, 0.034, 0.03, 0.042, 0.035, 0.043, 0.034],
          ];
        }
      } else if (region === 'NCR') {
        if (cluster === 'Delhi') {
          yAxisLabels = ['Janakpuri', 'Laxmi Nagar', 'Sahibabad'];
          cityData = [
            [0.048, 0.045, 0.05, 0.052, 0.044, 0.053, 0.047, 0.046],
            [0.033, 0.035, 0.036, 0.038, 0.034, 0.032, 0.03, 0.04],
            [0.039, 0.04, 0.034, 0.03, 0.042, 0.035, 0.043, 0.034],
          ];
        } else if (cluster === 'Gurgaon') {
          yAxisLabels = ['Gurgoan', 'Faridabad', 'Meerut'];
          cityData = [
            [0.048, 0.045, 0.05, 0.052, 0.044, 0.053, 0.047, 0.046],
            [0.033, 0.035, 0.036, 0.038, 0.034, 0.032, 0.03, 0.04],
            [0.039, 0.04, 0.034, 0.03, 0.042, 0.035, 0.043, 0.034],
          ];
        }
      } else if (region === 'Rajasthan') {
        if (cluster === 'Jaipur') {
          yAxisLabels = ['Jaipur', 'Sikar Road', 'Behror'];
          cityData = [
            [0.048, 0.045, 0.05, 0.052, 0.044, 0.053, 0.047, 0.046],
            [0.033, 0.035, 0.036, 0.038, 0.034, 0.032, 0.03, 0.04],
            [0.039, 0.04, 0.034, 0.03, 0.042, 0.035, 0.043, 0.034],
          ];
        } else if (cluster === 'Ajmer') {
          yAxisLabels = ['Ajmer', 'Kekri', 'Merta'];
          cityData = [
            [0.048, 0.045, 0.05, 0.052, 0.044, 0.053, 0.047, 0.046],
            [0.033, 0.035, 0.036, 0.038, 0.034, 0.032, 0.03, 0.04],
            [0.039, 0.04, 0.034, 0.03, 0.042, 0.035, 0.043, 0.034],
          ];
        } else if (cluster === 'Udaipur') {
          yAxisLabels = ['Rajsamand', 'Banswara', 'Udaipur'];
          cityData = [
            [0.048, 0.045, 0.05, 0.052, 0.044, 0.053, 0.047, 0.046],
            [0.033, 0.035, 0.036, 0.038, 0.034, 0.032, 0.03, 0.04],
            [0.039, 0.04, 0.034, 0.03, 0.042, 0.035, 0.043, 0.034],
          ];
        } else if (cluster === 'Kota') {
          yAxisLabels = [];
          cityData = [];
        }
      } else if (region === 'Gujarat') {
        if (cluster === 'Ahmedabad') {
          yAxisLabels = ['Ahmedabad', 'Gandhinagar', 'Sanand'];
          cityData = [
            [0.048, 0.045, 0.05, 0.052, 0.044, 0.053, 0.047, 0.046],
            [0.033, 0.035, 0.036, 0.038, 0.034, 0.032, 0.03, 0.04],
            [0.039, 0.04, 0.034, 0.03, 0.042, 0.035, 0.043, 0.034],
          ];
        } else if (cluster === 'Surat') {
          yAxisLabels = ['Surat', 'Kadodara', 'Rundh'];
          cityData = [
            [0.048, 0.045, 0.05, 0.052, 0.044, 0.053, 0.047, 0.046],
            [0.033, 0.035, 0.036, 0.038, 0.034, 0.032, 0.03, 0.04],
            [0.039, 0.04, 0.034, 0.03, 0.042, 0.035, 0.043, 0.034],
          ];
        } else if (cluster === 'Rajkot') {
          yAxisLabels = ['Rajkot', 'Jamnagar', 'Junagadh'];
          cityData = [
            [0.048, 0.045, 0.05, 0.052, 0.044, 0.053, 0.047, 0.046],
            [0.033, 0.035, 0.036, 0.038, 0.034, 0.032, 0.03, 0.04],
            [0.039, 0.04, 0.034, 0.03, 0.042, 0.035, 0.043, 0.034],
          ];
        } else if (cluster === 'Vadodara') {
          yAxisLabels = ['Vadodara', 'Anand', 'Dabhoi'];
          cityData = [
            [0.048, 0.045, 0.05, 0.052, 0.044, 0.053, 0.047, 0.046],
            [0.033, 0.035, 0.036, 0.038, 0.034, 0.032, 0.03, 0.04],
            [0.039, 0.04, 0.034, 0.03, 0.042, 0.035, 0.043, 0.034],
          ];
        }
      } else if (region === 'Maharashtra') {
        if (cluster === 'Mumbai') {
          yAxisLabels = ['Navi Mumbai', 'Thane', 'Kalyan'];
          cityData = [
            [0.048, 0.045, 0.05, 0.052, 0.044, 0.053, 0.047, 0.046],
            [0.033, 0.035, 0.036, 0.038, 0.034, 0.032, 0.03, 0.04],
            [0.039, 0.04, 0.034, 0.03, 0.042, 0.035, 0.043, 0.034],
          ];
        } else if (cluster === 'Nashik') {
          yAxisLabels = ['Nashik', 'Malegaon', 'Sinnar'];
          cityData = [
            [0.048, 0.045, 0.05, 0.052, 0.044, 0.053, 0.047, 0.046],
            [0.033, 0.035, 0.036, 0.038, 0.034, 0.032, 0.03, 0.04],
            [0.039, 0.04, 0.034, 0.03, 0.042, 0.035, 0.043, 0.034],
          ];
        } else if (cluster === 'Pune') {
          yAxisLabels = ['Pune', 'Bhor', 'Shikrapur'];
          cityData = [
            [0.048, 0.045, 0.05, 0.052, 0.044, 0.053, 0.047, 0.046],
            [0.033, 0.035, 0.036, 0.038, 0.034, 0.032, 0.03, 0.04],
            [0.039, 0.04, 0.034, 0.03, 0.042, 0.035, 0.043, 0.034],
          ];
        } else if (cluster === 'Nagpur') {
          yAxisLabels = ['Nagpur', 'Amravati', 'Gondia'];
          cityData = [
            [0.048, 0.045, 0.05, 0.052, 0.044, 0.053, 0.047, 0.046],
            [0.033, 0.035, 0.036, 0.038, 0.034, 0.032, 0.03, 0.04],
            [0.039, 0.04, 0.034, 0.03, 0.042, 0.035, 0.043, 0.034],
          ];
        }
      } else if (region === 'MP') {
        if (cluster === 'Indore') {
          yAxisLabels = ['Indore', 'Ujjain', 'Dewas'];
          cityData = [
            [0.048, 0.045, 0.05, 0.052, 0.044, 0.053, 0.047, 0.046],
            [0.033, 0.035, 0.036, 0.038, 0.034, 0.032, 0.03, 0.04],
            [0.039, 0.04, 0.034, 0.03, 0.042, 0.035, 0.043, 0.034],
          ];
        } else if (cluster === 'Gwalior') {
          yAxisLabels = ['Gwalior', 'Morena', 'Bhind'];
          cityData = [
            [0.048, 0.045, 0.05, 0.052, 0.044, 0.053, 0.047, 0.046],
            [0.033, 0.035, 0.036, 0.038, 0.034, 0.032, 0.03, 0.04],
            [0.039, 0.04, 0.034, 0.03, 0.042, 0.035, 0.043, 0.034],
          ];
        } else if (cluster === 'Bhopal') {
          yAxisLabels = ['Bhopal', 'Vidisha', 'Sehore'];
          cityData = [
            [0.048, 0.045, 0.05, 0.052, 0.044, 0.053, 0.047, 0.046],
            [0.033, 0.035, 0.036, 0.038, 0.034, 0.032, 0.03, 0.04],
            [0.039, 0.04, 0.034, 0.03, 0.042, 0.035, 0.043, 0.034],
          ];
        } else if (cluster === 'Jabalpur') {
          yAxisLabels = ['Jabalpur', 'Sihora', 'Mandla'];
          cityData = [
            [0.048, 0.045, 0.05, 0.052, 0.044, 0.053, 0.047, 0.046],
            [0.033, 0.035, 0.036, 0.038, 0.034, 0.032, 0.03, 0.04],
            [0.039, 0.04, 0.034, 0.03, 0.042, 0.035, 0.043, 0.034],
          ];
        }
      }

      this.trendStateOption.series = yAxisLabels.map((city, index) => ({
        name: city,
        type: 'line',
        areaStyle: { opacity: 0 },
        emphasis: {
          focus: 'series',
          areaStyle: { opacity: 0.5 },
        },
        data: cityData[index],
      }));
      this.trendStateChart.clear();
      this.trendStateOption.legend.data = yAxisLabels;
      this.trendStateChart.setOption(this.trendStateOption);
      this.trendStateChart.resize(); // Resize the chart
    }
  }

  TrendgenerateAverageStateRandomData(
    region: string,
    selectedTrendFilter: string
  ) {
    if (selectedTrendFilter === 'Three months') {
      const newAxisdata = ['Sep', 'Oct', 'Nov'];
      this.trendAverageStateOption.xAxis[0].data = newAxisdata;
      const StateminValues = [
        [6, 5.25, 5.5], // Min values for Sep
        [6.1, 5.75, 6],
        [6, 5.5, 6],
        [4.7, 4.2, 4.5],
        [4, 4.5, 4],
        [4.5, 3.9, 4],
      ];

      const StatemaxValues = [
        [7, 6.25, 6.5], // Min values for Sep
        [7.1, 6.75, 7],
        [7, 6.5, 7],
        [5.7, 5.2, 5.5],
        [5, 5.5, 5],
        [5.5, 4.9, 5],
      ];

      this.trendAverageStateOption.series.forEach((series: any, index: any) => {
        if (StateminValues[index] && StatemaxValues[index]) {
          series.data = StateminValues[index].map((min, i) => {
            const max = StatemaxValues[index][i];
            return Math.floor(Math.random() * (max - min + 1)) + min;
          });
        } else {
          console.error(
            `StateminValues or StatemaxValues is undefined for index ${index}`
          );
        }
      });
      this.trendAverageStateChart.setOption(this.trendAverageStateOption);
    } else {
      const newAxisData = [
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
      ];
      this.trendAverageStateOption.xAxis[0].data = newAxisData;

      let legend: string[] = [];
      let cityData: number[][] = [];
      if (region === 'Pan India') {
        (legend = ['PCH', 'NCR', 'Rajasthan', 'Gujarat', 'MP', 'Maharashtra']),
          (cityData = [
            [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
            [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
            [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
            [4.2, 4.5, 5, 5.2, 4.9, 4.7, 4.2, 4.5],
            [3.5, 3.2, 3, 3.9, 4.1, 4, 4.5, 4],
            [3.8, 4, 3.5, 4.3, 4.3, 4.5, 3.9, 4],
          ]);
      } else if (region === 'PCH') {
        legend = ['Chandigarh', 'Ludhiana', 'Karnal'];
        cityData = [
          [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
          [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
          [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
        ];
      } else if (region === 'NCR') {
        legend = ['Delhi', 'Gurgaon'];
        cityData = [
          [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
          [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
        ];
      } else if (region === 'Rajasthan') {
        legend = ['Jaipur', 'Udaipur', 'Ajmer', 'Kota'];
        cityData = [
          [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
          [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
          [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          [4.2, 4.5, 5, 5.2, 4.9, 4.7, 4.2, 4.5],
        ];
      } else if (region === 'Gujarat') {
        legend = ['Ahmedabad', 'Surat', 'Rajkot', 'Vadodara'];
        cityData = [
          [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
          [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
          [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          [4.2, 4.5, 5, 5.2, 4.9, 4.7, 4.2, 4.5],
        ];
      } else if (region === 'MP') {
        legend = ['Indore', 'Bhopal', 'Gwalior', 'Jabalpur'];
        cityData = [
          [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
          [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
          [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          [4.2, 4.5, 5, 5.2, 4.9, 4.7, 4.2, 4.5],
        ];
      } else if (region === 'Maharashtra') {
        legend = ['Mumbai', 'Pune', 'Nashik', 'Nagpur'];
        cityData = [
          [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
          [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
          [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          [4.2, 4.5, 5, 5.2, 4.9, 4.7, 4.2, 4.5],
        ];
      }

      this.trendAverageStateOption.series = legend.map((city, index) => ({
        name: city,
        type: 'line',
        areaStyle: { opacity: 0 },
        emphasis: {
          focus: 'series',
          areaStyle: { opacity: 0.5 },
        },
        data: cityData[index],
      }));
      this.trendAverageStateChart.clear();
      this.trendAverageStateOption.legend.data = legend;
      this.trendAverageStateChart.setOption(this.trendAverageStateOption);
      this.trendAverageStateChart.resize(); // Resize the chart
    }
  }

  TrendgenerateAverageClusterRandomData(
    region: string,
    cluster: string,
    selectedTrendFilter: string
  ) {
    if (selectedTrendFilter === 'Three months') {
      const newAxisdata = ['Sep', 'Oct', 'Nov'];
      this.trendAverageStateOption.xAxis[0].data = newAxisdata;
      const StateminValues = [
        [6, 5.25, 5.5], // Min values for Sep
        [6.1, 5.75, 6],
        [6, 5.5, 6],
        [4.7, 4.2, 4.5],
        [4, 4.5, 4],
        [4.5, 3.9, 4],
      ];

      const StatemaxValues = [
        [7, 6.25, 6.5], // Min values for Sep
        [7.1, 6.75, 7],
        [7, 6.5, 7],
        [5.7, 5.2, 5.5],
        [5, 5.5, 5],
        [5.5, 4.9, 5],
      ];

      this.trendAverageStateOption.series.forEach((series: any, index: any) => {
        if (StateminValues[index] && StatemaxValues[index]) {
          series.data = StateminValues[index].map((min, i) => {
            const max = StatemaxValues[index][i];
            return Math.floor(Math.random() * (max - min + 1)) + min;
          });
        } else {
          console.error(
            `StateminValues or StatemaxValues is undefined for index ${index}`
          );
        }
      });
      this.trendAverageStateChart.setOption(this.trendAverageStateOption);
    } else {
      const newAxisData = [
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
      ];
      this.trendAverageStateOption.xAxis[0].data = newAxisData;

      let yAxisLabels: string[] = [];
      let cityData: number[][] = [];

      if (region === 'PCH') {
        if (cluster === 'Chandigarh') {
          yAxisLabels = ['Chandigarh', 'Ambala', 'Patiala'];
          cityData = [
            [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
            [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
            [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          ];
        } else if (cluster === 'Ludhiana') {
          yAxisLabels = ['Ludhiana', 'Jalandhar', 'Moga'];
          cityData = [
            [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
            [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
            [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          ];
        } else if (cluster === 'Karnal') {
          yAxisLabels = ['Karnal', 'Rohtak', 'Panipat'];
          cityData = [
            [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
            [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
            [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          ];
        }
      } else if (region === 'NCR') {
        if (cluster === 'Delhi') {
          yAxisLabels = ['Janakpuri', 'Laxmi Nagar', 'Sahibabad'];
          cityData = [
            [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
            [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
            [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          ];
        } else if (cluster === 'Gurgaon') {
          yAxisLabels = ['Gurgoan', 'Faridabad', 'Meerut'];
          cityData = [
            [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
            [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
            [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          ];
        }
      } else if (region === 'Rajasthan') {
        if (cluster === 'Jaipur') {
          yAxisLabels = ['Jaipur', 'Sikar Road', 'Behror'];
          cityData = [
            [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
            [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
            [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          ];
        } else if (cluster === 'Ajmer') {
          yAxisLabels = ['Ajmer', 'Kekri', 'Merta'];
          cityData = [
            [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
            [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
            [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          ];
        } else if (cluster === 'Udaipur') {
          yAxisLabels = ['Rajsamand', 'Banswara', 'Udaipur'];
          cityData = [
            [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
            [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
            [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          ];
        } else if (cluster === 'Kota') {
          yAxisLabels = [];
          cityData = [];
        }
      } else if (region === 'Gujarat') {
        if (cluster === 'Ahmedabad') {
          yAxisLabels = ['Ahmedabad', 'Gandhinagar', 'Sanand'];
          cityData = [
            [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
            [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
            [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          ];
        } else if (cluster === 'Surat') {
          yAxisLabels = ['Surat', 'Kadodara', 'Rundh'];
          cityData = [
            [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
            [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
            [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          ];
        } else if (cluster === 'Rajkot') {
          yAxisLabels = ['Rajkot', 'Jamnagar', 'Junagadh'];
          cityData = [
            [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
            [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
            [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          ];
        } else if (cluster === 'Vadodara') {
          yAxisLabels = ['Vadodara', 'Anand', 'Dabhoi'];
          cityData = [
            [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
            [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
            [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          ];
        }
      } else if (region === 'Maharashtra') {
        if (cluster === 'Mumbai') {
          yAxisLabels = ['Navi Mumbai', 'Thane', 'Kalyan'];
          cityData = [
            [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
            [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
            [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          ];
        } else if (cluster === 'Nashik') {
          yAxisLabels = ['Nashik', 'Malegaon', 'Sinnar'];
          cityData = [
            [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
            [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
            [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          ];
        } else if (cluster === 'Pune') {
          yAxisLabels = ['Pune', 'Bhor', 'Shikrapur'];
          cityData = [
            [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
            [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
            [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          ];
        } else if (cluster === 'Nagpur') {
          yAxisLabels = ['Nagpur', 'Amravati', 'Gondia'];
          cityData = [
            [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
            [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
            [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          ];
        }
      } else if (region === 'MP') {
        if (cluster === 'Indore') {
          yAxisLabels = ['Indore', 'Ujjain', 'Dewas'];
          cityData = [
            [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
            [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
            [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          ];
        } else if (cluster === 'Gwalior') {
          yAxisLabels = ['Gwalior', 'Morena', 'Bhind'];
          cityData = [
            [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
            [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
            [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          ];
        } else if (cluster === 'Bhopal') {
          yAxisLabels = ['Bhopal', 'Vidisha', 'Sehore'];
          cityData = [
            [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
            [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
            [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          ];
        } else if (cluster === 'Jabalpur') {
          yAxisLabels = ['Jabalpur', 'Sihora', 'Mandla'];
          cityData = [
            [3, 3.5, 4, 4.5, 5, 6, 5.25, 5.5],
            [4, 4.1, 4.2, 4.7, 4.8, 6.1, 5.75, 6],
            [5, 5.2, 5.3, 3.8, 4.9, 6, 5.5, 6],
          ];
        }
      }

      this.trendAverageStateOption.series = yAxisLabels.map((city, index) => ({
        name: city,
        type: 'line',
        areaStyle: { opacity: 0 },
        emphasis: {
          focus: 'series',
          areaStyle: { opacity: 0.5 },
        },
        data: cityData[index],
      }));
      this.trendAverageStateChart.clear();
      this.trendAverageStateOption.legend.data = yAxisLabels;
      this.trendAverageStateChart.setOption(this.trendAverageStateOption);
      this.trendAverageStateChart.resize(); // Resize the chart
    }
  }

  TrendgenerateSchemeRandomData(
    selectedState: string,
    selectedTrendFilter: string
  ) {
    if (selectedTrendFilter === 'Three months') {
      const newAxisdata = ['Sep', 'Oct', 'Nov'];
      this.trendSchemeloginsOption.xAxis[0].data = newAxisdata;
      const StateminValues = [
        [0.915, 0.946, 0.915], // Min values for Sep
        [0.58, 0.397, 0.427],
        [0.244, 0.275, 0.244],
      ];

      const StatemaxValues = [
        [0.917, 0.948, 0.917], // Min values for Sep
        [0.582, 0.399, 0.429],
        [0.246, 0.277, 0.246],
      ];

      this.trendSchemeloginsOption.series.forEach((series: any, index: any) => {
        if (StateminValues[index] && StatemaxValues[index]) {
          series.data = StateminValues[index].map((min, i) => {
            const max = StatemaxValues[index][i];
            return Math.floor(Math.random() * (max - min + 1)) + min;
          });
        } else {
          console.error(
            `StateminValues or StatemaxValues is undefined for index ${index}`
          );
        }
      });
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
      ];
      this.trendSchemeloginsOption.xAxis[0].data = newAxisdata;

      this.trendStateOption.xAxis[0].data = newAxisdata;
      let StateminValues: any[] = [];
      let StatemaxValues: any[] = [];
      if (selectedState === 'Pan India') {
        StateminValues = [
          [0.915, 0.854, 0.999, 0.671, 0.915, 0.915, 0.946, 0.915], // Min values for Sep
          [0.458, 0.488, 0.427, 0.458, 0.61, 0.58, 0.397, 0.427],
          [0.244, 0.214, 0.183, 0.259, 0.244, 0.244, 0.275, 0.244],
        ];

        StatemaxValues = [
          [0.917, 0.855, 0.999, 0.673, 0.917, 0.917, 0.948, 0.917], // Min values for Sep
          [0.46, 0.49, 0.429, 0.46, 0.612, 0.582, 0.399, 0.429],
          [0.246, 0.216, 0.185, 0.261, 0.246, 0.246, 0.277, 0.246],
        ];
      } else {
        StateminValues = [
          [0.183, 0.171, 0.214, 0.2, 0.183, 0.183, 0.189, 0.183], // Min values for Sep
          [0.046, 0.049, 0.043, 0.046, 0.061, 0.058, 0.04, 0.043],
          [0.024, 0.021, 0.018, 0.026, 0.024, 0.024, 0.027, 0.024],
        ];

        StatemaxValues = [
          [0.185, 0.173, 0.216, 0.202, 0.185, 0.185, 0.191, 0.185], // Min values for Sep
          [0.048, 0.051, 0.045, 0.048, 0.063, 0.06, 0.042, 0.045],
          [0.026, 0.023, 0.02, 0.028, 0.026, 0.026, 0.029, 0.026],
        ];
      }
      this.trendSchemeloginsOption.series.forEach((series: any, index: any) => {
        if (StateminValues[index] && StatemaxValues[index]) {
          series.data = StateminValues[index].map(
            (min: number, i: string | number) => {
              const max = StatemaxValues[index][i];
              return Math.floor(Math.random() * (max - min + 1)) + min;
            }
          );
        } else {
          console.error(
            `StateminValues or StatemaxValues is undefined for index ${index}`
          );
        }
      });
      this.trendSchemeLoginsChart.setOption(this.trendSchemeloginsOption);
    }
  }

  TrendgenerateProductRandomData(
    selectedState: string,
    selectedTrendFilter: string
  ) {
    if (selectedTrendFilter === 'Three months') {
      const newAxisdata = ['Sep', 'Oct', 'Nov'];
      this.trendProductloginsOption.xAxis[0].data = newAxisdata;
      const StateminValues = [
        [0.915, 0.946, 0.915], // Min values for Sep
        [0.58, 0.397, 0.427],
        [0.244, 0.275, 0.244],
        [ 0.488, 0.427, 0.397],
      ];

      const StatemaxValues = [
        [0.917, 0.948, 0.917], // Min values for Sep
        [0.582, 0.399, 0.429],
        [0.246, 0.277, 0.246],
        [ 0.49, 0.429, 0.399],
      ];

      this.trendProductloginsOption.series.forEach(
        (series: any, index: any) => {
          if (StateminValues[index] && StatemaxValues[index]) {
            series.data = StateminValues[index].map((min, i) => {
              const max = StatemaxValues[index][i];
              return Math.floor(Math.random() * (max - min + 1)) + min;
            });
          } else {
            console.error(
              `StateminValues or StatemaxValues is undefined for index ${index}`
            );
          }
        }
      );
      this.trendProductLoginsChart.setOption(this.trendProductloginsOption);
    } else {
      const newAxisdata = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

      this.trendProductloginsOption.xAxis[0].data = newAxisdata;
      let StateminValues: any[] = [];
      let StatemaxValues: any[] = [];
      if (selectedState === 'Pan India') {
        StateminValues = [
          [0.915, 0.854, 0.999, 0.671, 0.915, 0.915, 0.946, 0.915],
          [0.458, 0.488, 0.427, 0.458, 0.61, 0.58, 0.397, 0.427],
          [0.244, 0.214, 0.183, 0.259, 0.244, 0.244, 0.275, 0.244],
          [0.366, 0.336, 0.305, 0.366, 0.458, 0.488, 0.427, 0.397],
        ];

        StatemaxValues = [
          [0.917, 0.855, 0.999, 0.673, 0.917, 0.917, 0.948, 0.917], // Min values for Sep
          [0.46, 0.49, 0.429, 0.46, 0.612, 0.582, 0.399, 0.429],
          [0.246, 0.216, 0.185, 0.261, 0.246, 0.246, 0.277, 0.246],
          [0.368, 0.338, 0.307, 0.368, 0.46, 0.49, 0.429, 0.399],
        ];
      } else {
        StateminValues = [
          [0.16, 0.17, 0.18, 0.19, 0.165, 0.175, 0.185, 0.195], // Min values for Sep
          [0.078, 0.096, 0.085, 0.078, 0.084, 0.066, 0.09, 0.078],
          [0.063, 0.054, 0.075, 0.045, 0.054, 0.069, 0.06, 0.057],
          [0.054, 0.06, 0.063, 0.081, 0.051, 0.069, 0.051, 0.06],
        ];

        StatemaxValues = [
          [0.162, 0.172, 0.182, 0.192, 0.167, 0.177, 0.187, 0.197], // Min values for Sep
          [0.08, 0.097, 0.087, 0.08, 0.086, 0.068, 0.092, 0.08],
          [0.065, 0.056, 0.077, 0.047, 0.056, 0.071, 0.062, 0.059],
          [0.056, 0.062, 0.065, 0.083, 0.053, 0.071, 0.053, 0.062],
        ];
      }
      this.trendProductloginsOption.series.forEach(
        (series: any, index: any) => {
          if (StateminValues[index] && StatemaxValues[index]) {
            series.data = StateminValues[index].map(
              (min: number, i: string | number) => {
                const max = StatemaxValues[index][i];
                return Math.floor(Math.random() * (max - min + 1)) + min;
              }
            );
          } else {
            console.error(
              `StateminValues or StatemaxValues is undefined for index ${index}`
            );
          }
        }
      );
      this.trendProductLoginsChart.setOption(this.trendProductloginsOption);
    }
  }
  TrendgenerateSourceRandomData(
    selectedState: string,
    selectedTrendFilter: string
  ) {
    if (selectedTrendFilter === 'Three months') {
      const newAxisdata = ['Sep', 'Oct', 'Nov'];
      this.trendSourceOption.xAxis[0].data = newAxisdata;
      const StateminValues = [
        [ 915, 946, 915],
        [ 275, 189, 229],
        [ 122, 205, 122],
        [ 290, 189, 229],
        [ 305, 189, 122]
      ];

      const StatemaxValues = [
        [ 917, 948, 917],
        [ 277, 191, 231],
        [ 124, 207, 124],
        [ 292, 191, 231],
        [ 307, 191, 124]
      ];

      this.trendSourceOption.series.forEach((series: any, index: any) => {
        if (StateminValues[index] && StatemaxValues[index]) {
          series.data = StateminValues[index].map((min, i) => {
            const max = StatemaxValues[index][i];
            return Math.floor(Math.random() * (max - min + 1)) + min;
          });
        } else {
          console.error(
            `StateminValues or StatemaxValues is undefined for index ${index}`
          );
        }
      });
      this.trendSourceChart.setOption(this.trendSourceOption);
    } else {
      const newAxisdata = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
      this.trendSourceOption.xAxis[0].data = newAxisdata;

      let StateminValues: any[] = [];
      let StatemaxValues: any[] = [];
      if (selectedState === 'Pan India') {
        StateminValues = [
          [915, 854, 1068, 671, 915, 915, 946, 915],
          [229, 256, 214, 224, 336, 275, 189, 229],
          [122, 114, 142, 134, 122, 122, 205, 122],
          [229, 214, 320, 112, 244, 290, 189, 229],
          [183, 171, 320, 168, 305, 305, 189, 122]
      ];

        StatemaxValues = [
          [917, 856, 1070, 673, 917, 917, 948, 917],
          [231, 258, 216, 226, 337, 277, 191, 231],
          [124, 116, 144, 136, 124, 124, 207, 124],
          [231, 216, 322, 114, 246, 292, 191, 231],
          [185, 173, 322, 170, 307, 307, 191, 124]
        ];
      } else {
        const newYAxisConfig = {
          min: 0,
          max: 220,
          interval: 20,
        };
        
        this.trendSourceOption.yAxis[0] = {
          ...this.trendSourceOption.yAxis[0],
          ...newYAxisConfig,
        };
        StateminValues = [
          [183,171,214,134,183,183,189,183], // Min values for Sep
          [46,51,43,45,67,55,38,46],
          [37,34,64,34,61,61,38,24],
          [46,43,64,22,49,58,38,46],
          [24,23,28,27,24,24,41,24]
        ];

        StatemaxValues = [
          [185,173,216,136,185,185,191,185], // Min values for Sep
          [47,53,45,47,69,57,40,48],
          [39,36,66,36,63,63,40,26],
          [48,45,66,24,51,60,40,48],
          [26,25,30,29,26,26,43,26]
        ];
      }
      this.trendSourceOption.series.forEach((series: any, index: any) => {
        if (StateminValues[index] && StatemaxValues[index]) {
          series.data = StateminValues[index].map(
            (min: number, i: string | number) => {
              const max = StatemaxValues[index][i];
              return Math.floor(Math.random() * (max - min + 1)) + min;
            }
          );
        } else {
          console.error(
            `StateminValues or StatemaxValues is undefined for index ${index}`
          );
        }
      });
      this.trendSourceChart.setOption(this.trendSourceOption);
    }
  }
}
