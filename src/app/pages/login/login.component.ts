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
            return `No of Files: ${barValue}<br> Amount in Cr: ${randomAmount}`;
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

            if (params.name === 'Home Loan') {
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
              { value: 55, name: 'Home Loan', itemStyle: { color: '#7C41DA' } },
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
            return `No of Files: ${barValue} <br> Percentage: ${values}%`;
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
            min: 0.5,
            max: 4.0,
            interval: 0.5,
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
            data: [0.6, 1.0, 1.2, 1.5, 1.7, 1.9, 2.0, 2.3],
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
            data: [0.8, 1.3, 1.5, 1.9, 2.1, 2.3, 2.4, 3],
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
            data: [0.95, 1.5, 1.65, 1.98, 2.2, 2.5, 2.6, 3.1],
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
            data: [1.0, 1.5, 1.8, 2.1, 2.5, 3.0, 3.1, 3.5],
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
            data: [1.1, 1.6, 1.9, 2.3, 2.7, 3.2, 3.3, 3.9],
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
            data: [1.4, 1.9, 2.1, 2.7, 3.0, 3.8, 3.9, 4.0],
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
            min: 2,
            max: 20,
            interval: 2,
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
            data: [3, 3.5, 4, 4.5, 4.9, 5, 6, 6.5],
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
            data: [4, 4.5, 5, 5.5, 5.9, 6, 7, 6.9],
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
            data: [5, 5.5, 6, 6.5, 6.9, 7, 8, 8.5],
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
            data: [6, 6.5, 7, 7.5, 7.9, 8, 9, 9.9],
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
            data: [7, 7.5, 8, 8.5, 8.9, 9, 10, 10.6],
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
            data: [8, 8.5, 9, 9.5, 9.9, 10, 11, 12],
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
            min: 0.5,
            max: 4.0,
            interval: 0.5,
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
            data: [2, 2.5, 1.8, 2.8, 3, 3.2, 2.9, 3.4],
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
            data: [0.9, 1.9, 2.5, 1.7, 2.4, 3, 2.9, 3.4],
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
            data: [0.8, 1.5, 2.2, 2.7, 2.4, 3.3, 2.9, 3.4],
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
            data: [1, 1.5, 2.5, 2.9, 2.4, 3.6, 2.8, 3.7],
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
            min: 0.5,
            max: 4.0,
            interval: 0.5,
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
            data: [0.9, 1.9, 2.5, 1.7, 2.4, 3, 2.9, 3.4],
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
            data: [2.2, 2.9, 2.5, 3.1, 2.4, 2.5, 1.9, 2.4],
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
            data: [1, 1.5, 2.5, 2.9, 2.4, 3.6, 2.8, 3.7],
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
            min: 10,
            max: 110,
            interval: 10,
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
            data: [55, 65, 70, 76, 100, 89, 95, 107],
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
            data: [41, 47, 59, 78, 91, 97, 106, 108],
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
            data: [42, 48, 60, 79, 92, 98, 107, 109],
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
            data: [43, 49, 62, 81, 94, 100, 108, 110],
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
            data: [49, 55, 65, 85, 96, 103, 109, 110],
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
    console.log(selectedValue);
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
    console.log(this.StateChart.setOption(this.stateOption));
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
    console.log(newData);
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
      const StateminValues = [0.55, 1.0, 2.5];
      const StatemaxValues = [1.0, 2.0, 3.5];

      this.trendStateOption.series.forEach((series: any, index: any) => {
        series.data = StateminValues.map((min, i) => {
          const max = StatemaxValues[i];
          return Math.floor(Math.random() * (max - min + 1)) + min;
        });
      });
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
      ];
      this.trendStateOption.xAxis[0].data = newAxisdata;
      const StateminValues1 = [0.55, 1.0, 2.0, 2.5, 3.1, 3.5, 3.7, 3.9];
      const StatemaxValues1 = [0.57, 1.2, 2.2, 2.7, 3.3, 3.7, 3.9, 4.0];
      const StateminValues2 = [0.59, 1.1, 2.2, 2.5, 3.3, 3.7, 3.8, 3.9];
      const StatemaxValues2 = [1.0, 1.3, 2.5, 2.7, 3.5, 3.8, 3.9, 4.0];
      const StateminValues3 = [1.0, 1.3, 1.5, 2.2, 2.3, 3.1, 3.5, 3.6];
      const StatemaxValues3 = [1.2, 1.5, 1.7, 2.5, 2.6, 3.3, 3.7, 3.9];
      const StateminValues4 = [1.1, 1.4, 1.7, 2.1, 2.5, 3.2, 3.6, 3.7];
      const StatemaxValues4 = [1.3, 1.6, 1.9, 2.3, 2.7, 3.4, 3.8, 3.9];
      const StateminValues5 = [1.4, 1.6, 2.3, 2.2, 3.1, 3.3, 3.6, 3.8];
      const StatemaxValues5 = [1.5, 1.7, 2.4, 2.5, 3.2, 3.5, 3.7, 4.0];

      // Assuming you have the 'region' variable indicating the selected region/state

      // let legend: any[] = [];
      // let newData: any[] = [];

      // if (region === 'PCH') {
      //   legend = ['Chandigarh', 'Ludhiana', 'Karnal'];
      //   newData = [0.85, 0.63, 0.51];
      // } else if (region === 'NCR') {
      //   legend = ['Delhi', 'Gurgaon'];
      //   newData = [0.275, 0.183];
      // } else if (region === 'Rajasthan') {
      //   legend = ['Jaipur', 'Udaipur', 'Ajmer', 'Kota'];
      //   newData = [0.32, 0.192, 0.238, 0.165];
      // } else if (region === 'Gujarat') {
      //   legend = ['Ahmedabad', 'Surat', 'Rajkot', 'Vadodara'];
      //   newData = [1.9, 0.6, 0.7, 2.0]; // Modify these values based on your requirements
      // } else if (region === 'MP') {
      //   legend = ['Indore', 'Bhopal', 'Gwalior', 'Jabalpur'];
      //   newData = [1.9, 0.6, 0.7, 2.0]; // Modify these values based on your requirements
      // } else if (region === 'Maharashtra') {
      //   legend = ['Mumbai', 'Pune', 'Nashik', 'Nagpur'];
      //   newData = [0.8, 0.83, 0.103, 0.71];
      // }

      // // Update the series data based on the selected region
      // this.trendStateOption.series = legend.map((city, index) => {
      //   return {
      //     name: city,
      //     type: 'line',
      //     areaStyle: {
      //       opacity: 0,
      //     },
      //     emphasis: {
      //       focus: 'series',
      //       areaStyle: {
      //         opacity: 0.5, // Reduce opacity on hover to make it semi-transparent
      //       },
      //     },
      //     data: [newData[index]], // Set the data for each city based on the newData array
      //   };
      // });

      // // Update the legend data
      // this.trendStateOption.legend.data = legend;
      // this.trendStateChart.setOption(this.trendStateOption);

      const newData1 = StateminValues1.map((min, index) => {
        const max = StatemaxValues1[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendStateOption.series[0].data = newData1;
      this.trendStateChart.setOption(this.trendStateOption);
      const newData2 = StateminValues2.map((min, index) => {
        const max = StatemaxValues2[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendStateOption.series[1].data = newData2;
      this.trendStateChart.setOption(this.trendStateOption);
      const newData3 = StateminValues3.map((min, index) => {
        const max = StatemaxValues3[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendStateOption.series[2].data = newData3;
      this.trendStateChart.setOption(this.trendStateOption);

      const newData4 = StateminValues4.map((min, index) => {
        const max = StatemaxValues4[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendStateOption.series[3].data = newData4;
      this.trendStateChart.setOption(this.trendStateOption);

      const newData5 = StateminValues5.map((min, index) => {
        const max = StatemaxValues5[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendStateOption.series[4].data = newData5;
      this.trendStateChart.setOption(this.trendStateOption);
    }
  }

  TrendgenerateAverageStateRandomData(
    region: string,
    selectedTrendFilter: string
  ) {
    console.log(region);
    if (selectedTrendFilter === 'Three months') {
      const newAxisdata = ['Sep', 'Oct', 'Nov'];
      this.trendAverageStateOption.xAxis[0].data = newAxisdata;
      const StateminValues = [12.5, 14, 15];
      const StatemaxValues = [13, 15, 16];

      this.trendAverageStateOption.series.forEach((series: any, index: any) => {
        series.data = StateminValues.map((min, i) => {
          const max = StatemaxValues[i];
          return Math.floor(Math.random() * (max - min + 1)) + min;
        });
      });
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
      ];
      this.trendAverageStateOption.xAxis[0].data = newAxisdata;
      this.trendStateOption.xAxis[0].data = newAxisdata;
      const StateminValues1 = [2, 4, 6, 8, 10.12, 14, 16];
      const StatemaxValues1 = [3, 5, 7, 9, 11.13, 15, 17];
      const StateminValues2 = [3, 5, 7, 9, 11.13, 15, 17];
      const StatemaxValues2 = [4, 6, 9, 11, 14, 16, 18, 20];
      const StateminValues3 = [3.5, 5.5, 7.5, 9.5, 11.5, 13.5, 15.5, 17.5];
      const StatemaxValues3 = [3.7, 5.7, 7.7, 9.7, 11.7, 13.7, 15.7, 17.7];
      const StateminValues4 = [3.9, 5.9, 7.9, 9.9, 11.9, 13.9, 15.9, 17.9];
      const StatemaxValues4 = [4, 6, 9, 11, 14, 16, 18, 19];
      const StateminValues5 = [3, 5, 7, 9, 11.13, 15, 17];
      const StatemaxValues5 = [3.5, 5.5, 7.5, 9.5, 11.5, 13.5, 15.5, 17.5];

      const newData1 = StateminValues1.map((min, index) => {
        const max = StatemaxValues1[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendAverageStateOption.series[0].data = newData1;
      this.trendAverageStateChart.setOption(this.trendAverageStateOption);

      const newData2 = StateminValues2.map((min, index) => {
        const max = StatemaxValues2[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendAverageStateOption.series[1].data = newData2;
      this.trendAverageStateChart.setOption(this.trendAverageStateOption);

      const newData3 = StateminValues3.map((min, index) => {
        const max = StatemaxValues3[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendAverageStateOption.series[2].data = newData3;
      this.trendAverageStateChart.setOption(this.trendAverageStateOption);

      const newData4 = StateminValues4.map((min, index) => {
        const max = StatemaxValues4[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendAverageStateOption.series[3].data = newData4;
      this.trendAverageStateChart.setOption(this.trendAverageStateOption);

      const newData5 = StateminValues5.map((min, index) => {
        const max = StatemaxValues5[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendAverageStateOption.series[4].data = newData5;
      this.trendAverageStateChart.setOption(this.trendAverageStateOption);
    }
  }

  TrendgenerateSchemeRandomData(
    selectedState: string,
    selectedTrendFilter: string
  ) {
    if (selectedTrendFilter === 'Three months') {
      const newAxisdata = ['Sep', 'Oct', 'Nov'];
      this.trendSchemeloginsOption.xAxis[0].data = newAxisdata;
      const StateminValues = [0.55, 1.0, 2.5];
      const StatemaxValues = [1.0, 2.0, 3.5];

      this.trendSchemeloginsOption.series.forEach((series: any, index: any) => {
        series.data = StateminValues.map((min, i) => {
          const max = StatemaxValues[i];
          return Math.floor(Math.random() * (max - min + 1)) + min;
        });
      });
      this.trendSchemeLoginsChart.setOption(this.trendSchemeloginsOption);
    } else {
      const newAxisdata = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
      this.trendSchemeloginsOption.xAxis[0].data = newAxisdata;

      this.trendStateOption.xAxis[0].data = newAxisdata;
      const StateminValues1 = [0.55, 1.0, 2.0, 2.5, 3.1, 3.5, 3.7, 3.9];
      const StatemaxValues1 = [0.57, 1.2, 2.2, 2.7, 3.3, 3.7, 3.9, 4.0];
      const StateminValues2 = [0.59, 1.1, 2.2, 2.5, 3.3, 3.7, 3.8, 3.9];
      const StatemaxValues2 = [1.0, 1.3, 2.5, 2.7, 3.5, 3.8, 3.9, 4.0];
      const StateminValues3 = [1.0, 1.3, 1.5, 2.2, 2.3, 3.1, 3.5, 3.6];
      const StatemaxValues3 = [1.2, 1.5, 1.7, 2.5, 2.6, 3.3, 3.7, 3.9];

      const newData1 = StateminValues1.map((min, index) => {
        const max = StatemaxValues1[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendSchemeloginsOption.series[0].data = newData1;
      this.trendSchemeLoginsChart.setOption(this.trendSchemeloginsOption);
      const newData2 = StateminValues2.map((min, index) => {
        const max = StatemaxValues2[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendSchemeloginsOption.series[1].data = newData2;
      this.trendSchemeLoginsChart.setOption(this.trendSchemeloginsOption);
      const newData3 = StateminValues3.map((min, index) => {
        const max = StatemaxValues3[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendSchemeloginsOption.series[2].data = newData3;
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
      const StateminValues = [0.55, 1.0, 2.5];
      const StatemaxValues = [1.0, 2.0, 3.5];

      this.trendProductloginsOption.series.forEach(
        (series: any, index: any) => {
          series.data = StateminValues.map((min, i) => {
            const max = StatemaxValues[i];
            return Math.floor(Math.random() * (max - min + 1)) + min;
          });
        }
      );
      this.trendProductLoginsChart.setOption(this.trendProductloginsOption);
    } else {
      const newAxisdata = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

      this.trendProductloginsOption.xAxis[0].data = newAxisdata;
      const StateminValues1 = [0.55, 1.0, 2.0, 2.5, 3.1, 3.5, 3.7, 3.9];
      const StatemaxValues1 = [0.57, 1.2, 2.2, 2.7, 3.3, 3.7, 3.9, 4.0];
      const StateminValues2 = [0.59, 1.1, 2.2, 2.5, 3.3, 3.7, 3.8, 3.9];
      const StatemaxValues2 = [1.0, 1.3, 2.5, 2.7, 3.5, 3.8, 3.9, 4.0];
      const StateminValues3 = [1.0, 1.3, 1.5, 2.2, 2.3, 3.1, 3.5, 3.6];
      const StatemaxValues3 = [1.2, 1.5, 1.7, 2.5, 2.6, 3.3, 3.7, 3.9];
      const StateminValues4 = [1.1, 1.4, 1.7, 2.1, 2.5, 3.2, 3.6, 3.7];
      const StatemaxValues4 = [1.3, 1.6, 1.9, 2.3, 2.7, 3.4, 3.8, 3.9];

      const newData1 = StateminValues1.map((min, index) => {
        const max = StatemaxValues1[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendProductloginsOption.series[0].data = newData1;
      this.trendProductLoginsChart.setOption(this.trendProductloginsOption);

      const newData2 = StateminValues2.map((min, index) => {
        const max = StatemaxValues2[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendProductloginsOption.series[1].data = newData2;
      this.trendProductLoginsChart.setOption(this.trendProductloginsOption);

      const newData3 = StateminValues3.map((min, index) => {
        const max = StatemaxValues3[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendProductloginsOption.series[2].data = newData3;
      this.trendProductLoginsChart.setOption(this.trendProductloginsOption);

      const newData4 = StateminValues4.map((min, index) => {
        const max = StatemaxValues4[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendProductloginsOption.series[3].data = newData4;
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
      const StateminValues = [45, 49, 50];
      const StatemaxValues = [47, 50, 60];

      this.trendSourceOption.series.forEach((series: any, index: any) => {
        series.data = StateminValues.map((min, i) => {
          const max = StatemaxValues[i];
          return Math.floor(Math.random() * (max - min + 1)) + min;
        });
      });
      this.trendSourceChart.setOption(this.trendSourceOption);
    } else {
      const newAxisdata = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
      this.trendSourceOption.xAxis[0].data = newAxisdata;
      const StateminValues1 = [55, 58, 63, 67, 72, 75, 79, 81];
      const StatemaxValues1 = [57, 59, 64, 69, 73, 76, 80, 82];
      const StateminValues2 = [59, 63, 65, 67, 69, 73, 75, 77];
      const StatemaxValues2 = [60, 64, 67, 68, 71, 75, 76, 80];
      const StateminValues3 = [61, 64, 69, 70, 73, 76, 77, 82];
      const StatemaxValues3 = [64, 65, 72, 74, 76, 78, 79, 84];

      const newData1 = StateminValues1.map((min, index) => {
        const max = StatemaxValues1[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendSourceOption.series[0].data = newData1;
      this.trendSourceChart.setOption(this.trendSourceOption);
      const newData2 = StateminValues2.map((min, index) => {
        const max = StatemaxValues2[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendSourceOption.series[1].data = newData2;
      this.trendSourceChart.setOption(this.trendSourceOption);
      const newData3 = StateminValues3.map((min, index) => {
        const max = StatemaxValues3[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendSourceOption.series[2].data = newData3;
      this.trendSourceChart.setOption(this.trendSourceOption);
    }
  }
}
