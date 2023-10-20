import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import * as echarts from 'echarts';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
const today = new Date();
const currentMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
const currentMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
const customValidRange = {
  start: '2023-09-01', // Define the start date you want to display
  end: '2023-09-30',   // Define the end date you want to display
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
  IMDChart!: echarts.ECharts;

  IMDOption: any;

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
      if (date && date >= '2023-10-16' && date <= '2023-10-20') {
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

    return events
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
        document.getElementById('IMD-chart') as HTMLDivElement
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
          max: 4000,
          interval: 500,
          name: 'Number of files',
          nameLocation: 'middle',
          nameGap: 30,
          nameTextStyle: {
            fontWeight: 600,
            fontSize:14,
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
            'PCH'
          ],
        },
        series: [
          {
            barWidth: 20,
            type: 'bar',
            data: [2000, 700, 800, 2100, 1000, 1500],
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
            const avgNoOfFile = 100;
            const amountInCr = 10;
            const dataIndex = params[0].dataIndex;
            const randomAmount = [11, 8, 6, 12, 10, 7, 9];
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
          nameLocation: 'middle',
          nameGap: 30,
          nameTextStyle: {
            fontWeight: 600,
            fontSize:14,
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
            barWidth: 20,
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
  
              tooltipText = 'No. of files: 1000 <br/> Amount in Cr: 45'  ;
  
            } else if (params.name === 'Top-Up') {
  
              tooltipText = 'No. of files: 700 <br/> Amount in Cr: 27' ;
  
            } else if (params.name === 'Fresh') {
  
              tooltipText = 'No. of files: 800 <br/> Amount in Cr: 26' ;
  
            }
  
            return tooltipText;
  
          },
        },
        responsive: true, 
        legend: {
          top: '5%',
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
              { value: 45, name: 'Fresh', itemStyle: { color: '#f6c342' } },
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
  
              tooltipText = 'No. of files: 1000 <br/> Amount in Cr: 45'  ;
  
            } else if (params.name === 'LAP') {
  
              tooltipText = 'No. of files: 700 <br/> Amount in Cr: 20' ;
  
            } else if (params.name === 'BL') {
  
              tooltipText = 'No. of files: 800 <br/> Amount in Cr: 10' ;
  
            } else if (params.name === 'SBL') {
  
              tooltipText = 'No. of files: 900 <br/> Amount in Cr: 25' ;
  
            }
  
            return tooltipText;
  
          },
        },
        responsive: true, 
        legend: {
          top: '5%',
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
              { value: 45, name: 'Home Loan', itemStyle: { color: '#7C41DA' } },
              { value: 20, name: 'LAP', itemStyle: { color: '#F99B00' } },
              { value: 10, name: 'BL', itemStyle: { color: '#636363' } },
              { value: 25, name: 'SBL', itemStyle: { color: '#0B9DE8' } },
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
  
              tooltipText = 'No. of files: 1000 <br/> Percentage : 16.65'  ;
  
            } else if (params.name === 'Cheque') {
  
              tooltipText = 'No. of files: 700 <br/> Percentage : 11.68' ;
  
            } else if (params.name === 'Cash') {
  
              tooltipText = 'No. of files: 800 <br/> Percentage : 9.21' ;
  
            } else if (params.name === 'UPI') {
  
              tooltipText = 'No. of files: 900 <br/> Percentage : 12.46' ;
  
            }
  
            return tooltipText;
  
          }, 
        },
        legend: {
          top: '5%',
          left: 'center',
          // doesn't perfectly work with our tricks, disable it
          selectedMode: false,
          borderRadius:50,
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '70%'],
            // adjust the start angle
            startAngle: 180,
            labelLine: {
              show: false, // Set this property to false to hide label lines
            },
            label: {
              show: false, // Set this property to false to hide labels
            },
            data: [
              { value: 1048, name: 'Online', itemStyle: { color: '#7C41DA' } },
              { value: 735, name: 'Cheque', itemStyle: { color: '#FB8C00' } },
              { value: 580, name: 'Cash', itemStyle: { color: '#07A14E' } },
              { value: 784, name: 'UPI', itemStyle: { color: '#636363' } },
  
              {
                // make an record to fill the bottom 50%
                value: 1048 + 735 + 580 + 484 + 300,
                itemStyle: {
                  // stop the chart from rendering this piece
                  color: 'none',
                  decal: {
                    symbol: 'none',
                  },
                },
                label: {
                  show: false,
                },
              },
            ],
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
            const barValue = [37, 20, 16, 16, 15][dataIndex];
            const randomAmounts = [2000, 700, 800, 2100, 1000, 1500];
            const randomAmount = randomAmounts[dataIndex];

            // Create the tooltip content with the actual value and random amount
            return `No of Files: ${barValue}<br> Amount: ${randomAmount}`;
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
          data: ['Direct', 'DSA', 'Power Partner', 'Saathi', 'Online Partner'],
          axisLabel: {
            interval: 0,
            rotate: -45,
            overflow: 'break',
          },
        },
        yAxis: {
          name: 'Percentage %',
          nameLocation: 'middle',
          nameGap: 25,
          nameTextStyle: {
            fontWeight: 600,
            fontSize:14,
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
              { value: 37, itemStyle: { color: '#6096B4' } },
              { value: 20, itemStyle: { color: '#46CDCF' } },
              { value: 16, itemStyle: { color: '#F0997D' } },
              { value: 16, itemStyle: { color: 'rgba(41, 98, 255, 0.42)' } },
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
            labelLine:{
              show: false,
            },
            axisTick: {
              show: false,
            },
         
            boundaryGap: false,
            data: [
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: false,
            },
            splitLine:{
              show: false,
            },
            min: 500,
            max: 4000,
            interval: 500,
            name: 'Number of files',
            nameLocation: 'middle',
            nameGap: 43,
            nameTextStyle: {
              fontWeight: 600,
              fontSize:14,
            },
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
            data: [500, 800, 1000, 1300, 1600, 1800, 1900],
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
            data: [600, 1000, 1200, 1500, 1700, 1900, 2000],
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
            data: [800, 1300, 1500, 1900, 2100, 2300, 2400],
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
            data: [950, 1500, 1650, 1980, 2200, 2500, 2600],
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
            data: [1000, 1500, 1800, 2100, 2500, 3000, 3100],
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
            data: [1100, 1600, 1900, 2300, 2700, 3200, 3300],
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
            data: [1400, 1900, 2100, 2700, 3000, 3800, 3900],
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
          
            boundaryGap: false,
            data: [
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: false,
            },
            splitLine:{
              show: false,
            },
            min: 2,
            max: 20,
            interval: 2,
            name: 'Number of files',
            nameLocation: 'middle',
            nameGap: 20,
            nameTextStyle: {
              fontWeight: 600,
              fontSize:14,
            },
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
            data: [2, 3, 3.9, 4, 4.2, 4.5, 5.5],
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
            data: [3, 3.5, 4, 4.5, 4.9, 5, 6],
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
            data: [4, 4.5, 5, 5.5, 5.9, 6, 7],
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
            data: [5, 5.5, 6, 6.5, 6.9, 7, 8],
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
            data: [6, 6.5, 7, 7.5, 7.9, 8, 9],
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
            data: [7, 7.5, 8, 8.5, 8.9, 9, 10],
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
            data: [8, 8.5, 9, 9.5, 9.9, 10, 11],
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
            labelLine:{
              show: false,
            },

            axisTick: {
              show: false,
            },
            splitLine:{
              show: false,
            },
            boundaryGap: false,
            data: [
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: false,
            },
            splitLine:{
              show: false,
            },
            min: 500,
            max: 4000,
            interval: 500,
            name: 'Number of files',
            nameLocation: 'middle',
            nameGap: 43,
            nameTextStyle: {
              fontWeight: 600,
              fontSize:14,
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
            data: [300, 332, 401, 454, 490, 530, 610, 710],
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
            data: [420, 432, 501, 534, 590, 630, 720, 820],
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
            data: [500, 532, 601, 654, 690, 730, 810, 900],
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
            data: [620, 632, 701, 734, 890, 930, 1020, 2020],
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
          data: ['Fresh' , 'Top Up','BT'],
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
            labelLine:{
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine:{
              show: false,
            },
            boundaryGap: false,
            data: [
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: false,
            },
            splitLine:{
              show: false,
            },
            min: 500,
            max: 4000,
            interval: 500,
            name: 'Number of files',
            nameLocation: 'middle',
            nameGap: 43,
            nameTextStyle: {
              fontWeight: 600,
              fontSize:14,
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
            labelLine:{
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine:{
              show: false,
            },
            boundaryGap: false,
            data: [
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: false,
            },
            splitLine:{
              show: false,
            },
            min: 10,
            max: 110,
            interval: 10,
            name: 'Number of files',
            nameLocation: 'middle',
            nameGap: 43,
            nameTextStyle: {
              fontWeight: 600,
              fontSize:14,
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
    const minValues = [1900, 600, 700, 2000, 900, 1400];
    const maxValues = [2000, 700, 800, 2100, 1000, 1500];

    const newData = minValues.map((min, index) => {
      const max = maxValues[index];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
    this.stateOption.series[0].data = newData;
    this.StateChart.setOption(this.stateOption);
  }

  generateAverageStateRandomData() {
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
      const newAxisdata = ['Jul', 'Aug', 'Sep', 'Oct'];
      this.trendStateOption.xAxis[0].data = newAxisdata;
      const StateminValues = [550, 1000, 2500, 2600];
      const StatemaxValues = [1000, 2000, 3500, 3000];

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
      ];
      this.trendStateOption.xAxis[0].data = newAxisdata;
      const StateminValues = [550, 1000, 2500, 3000, 3500, 4000];
      const StatemaxValues = [1000, 2000, 3500, 4000, 4000, 4500];

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
      const newAxisdata = ['Jul', 'Aug', 'Sep' , 'Oct'];
      this.trendAverageStateOption.xAxis[0].data = newAxisdata;
      const StateminValues = [10.7, 12.5, 14, 15];
      const StatemaxValues = [11, 13, 15, 16];

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
      ];
      this.trendAverageStateOption.xAxis[0].data = newAxisdata;
      const StateminValues = [10.7, 11.5, 12.2, 13.4, 14, 15];
      const StatemaxValues = [11, 12, 13, 14, 15, 16];

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
      const newAxisdata = ['Jul', 'Aug', 'Sep', 'Oct'];
      this.trendSchemeloginsOption.xAxis[0].data = newAxisdata;
      const StateminValues = [550, 1000, 2500, 3000];
      const StatemaxValues = [1000, 2000, 3500, 4000];

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
      ];
      this.trendSchemeloginsOption.xAxis[0].data = newAxisdata;
      const StateminValues = [550, 1000, 2500, 3000, 3500, 4000];
      const StatemaxValues = [1000, 2000, 3500, 4000, 4000, 4500];

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
      const newAxisdata = ['Jul', 'Aug', 'Sep', 'Oct'];
      this.trendProductloginsOption.xAxis[0].data = newAxisdata;
      const StateminValues = [550, 1000, 2500, 3000];
      const StatemaxValues = [1000, 2000, 3500, 4000];

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
      ];
      this.trendProductloginsOption.xAxis[0].data = newAxisdata;
      const StateminValues = [550, 1000, 2500, 3000, 3500, 4000];
      const StatemaxValues = [1000, 2000, 3500, 4000, 4000, 4500];

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
      const newAxisdata = ['Jul', 'Aug', 'Sep', 'Oct'];
      this.trendSourceOption.xAxis[0].data = newAxisdata;
      const StateminValues = [40.6, 45, 49, 50];
      const StatemaxValues = [46, 47, 50, 60];

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
      ];
      this.trendSourceOption.xAxis[0].data = newAxisdata;
      const StateminValues = [40.5, 43, 45.5, 46, 48, 50];
      const StatemaxValues = [43, 45, 47, 47.5, 50, 60];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendSourceOption.series[0].data = newData;
      this.trendSourceChart.setOption(this.trendSourceOption);
   
    }
  }
}


