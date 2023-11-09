import { ChangeDetectorRef, Component } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-disbursal',
  templateUrl: './disbursal.component.html',
  styleUrls: ['./disbursal.component.scss'],
})
export class DisbursalComponent {
  DisbursalAchievementChart!: echarts.ECharts;
  IRPFChart!: echarts.ECharts;
  StateDisbursalChart!: echarts.ECharts;
  SchemeDisbursalChart!: echarts.ECharts;
  AverageTicketChart!: echarts.ECharts;
  ProductDisbursalChart!: echarts.ECharts;
  loginDisbursalRatioChart!: echarts.ECharts;
  DisbursalTatChart!: echarts.ECharts;

  trendDisbursalAchievementChart!: echarts.ECharts;
  trendStateDisbursalChart!: echarts.ECharts;
  trendAverageDisbursalChart!: echarts.ECharts;
  trendSchemeDisbursalChart!: echarts.ECharts;
  trendProductDisbursalChart!: echarts.ECharts;
  trendLoginDisbursalRatioChart!: echarts.ECharts;
  trendDisbursalTatChart!: echarts.ECharts;
  trendIrPfChart!: echarts.ECharts;

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
  monthFilters: string[] = ['Year to Date', 'Three months'];
  selectedState: string = 'Pan India';
  selectedFilter: string = 'September';
  selectedTrendFilter: string = 'Year to Date';
  showContent!: boolean;

  disbursalAchievementOption: any;
  irrPFInsOption: any;
  stateDisbursalOption: any;
  averageDisbursalOption: any;
  schemeDisbursalOption: any;
  productDisbursalOption: any;
  loginDisbursalRatioOption: any;
  disbursalTatOption: any;

  trendDisbursalAchievementOption: any;
  trendStateDisbursalOption: any;
  trendAverageDisbursalOption: any;
  trendSchemeDisbursalOption: any;
  trendProductDisbursalOption: any;
  trendLoginDisbursalRatioOption: any;
  trendDisbursalTatOption: any;
  trendIrPfOption: any;

  public isToggled = false;
  constructor(private cdRef: ChangeDetectorRef) {}
  ngAfterViewInit(): void {
    this.initializeChart();
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
      this.DisbursalAchievementChart = echarts.init(
        document.getElementById('Disbursal-Achievement-Chart') as HTMLDivElement
      );

      this.StateDisbursalChart = echarts.init(
        document.getElementById('StateWisedisbursalChart') as HTMLDivElement
      );

      this.SchemeDisbursalChart = echarts.init(
        document.getElementById('Schemedisbursal') as HTMLDivElement
      );

      this.ProductDisbursalChart = echarts.init(
        document.getElementById('Productdisbursal') as HTMLDivElement
      );

      this.AverageTicketChart = echarts.init(
        document.getElementById('Average-Ticket-size') as HTMLDivElement
      );

      this.loginDisbursalRatioChart = echarts.init(
        document.getElementById('login-disbursal-ratio') as HTMLDivElement
      );

      this.DisbursalTatChart = echarts.init(
        document.getElementById('Disbursal-tat') as HTMLDivElement
      );

      this.IRPFChart = echarts.init(
        document.getElementById('Disbursal-Irr-pf-insurance') as HTMLDivElement
      );

      this.disbursalAchievementOption = {
        tooltip: {

          formatter: function (params:any) {
  
            return `Number of Files: 2000<br/>Amount in Cr: 234 <br/>${params.value}%`;
  
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
              formatter: '{value}%',
              color: 'inherit',
              fontSize:  13.5,
            },
            data: [
              {
                value: 70,
              },
            ],
          },
        ],
      };

      this.stateDisbursalOption = {
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
            return `No of Files: ${barValue}<br> Amount in cr: ${randomAmount}`;
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
          axisTick: {
            show: false, // Hide tick lines
          },
          min: 10,
          max: 150,
          interval: 20,
          name: 'Amount (in Rs. Crore)',
          nameLocation: 'start',
          nameGap: -150,
          nameTextStyle: {
            fontWeight: 600,
            fontSize:14,
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
          data: [
            'Maharashtra',
            'MP',
            'Gujarat',
            'Rajasthan',
            'NCR',
            'PCH',
          ],
        },
        series: [
          {
            barWidth: 15,
            type: 'bar',
            data: [55, 45, 75, 50, 70, 57],
            itemStyle: {
              color: '#F8913D',
            },
          },
        ],
      };

      this.averageDisbursalOption = {
        tooltip: {
          trigger: 'axis',
          
          formatter: (params: any) => {
            
            const dataIndex = params[0].dataIndex;
            const avgNoOfFile = [100, 80, 70, 50, 90][dataIndex];
            const amountInCr = [13.5, 11.5, 12.5, 10][dataIndex];
            const avgTicketSize = [11, 8, 6, 12, 10, 7, 9];
            const avgTicket = avgTicketSize[dataIndex];

            // Create the tooltip content with the actual value and random amount
            return `Avg no. of files : ${avgNoOfFile}<br> Amount in Cr: ${amountInCr}<br> Active RMs: ${avgTicket}`;
          },
        },
        responsive: true,
        xAxis: {
          type: 'category',

          data: ['HL', 'LAP', 'BL', 'SBL'],
          axisLabel: {
            interval: 0,
            rotate: -45,
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
          min: 8,
          max: 15,
          interval: 1,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false, // Hide tick lines
          },
          splitLine: {
            show: false,
          },
          name: 'Amount (in Rs. Lacs)',
          nameLocation: 'middle',
          nameGap: 20,
          nameTextStyle: {
            fontWeight: 600,
            fontSize:14,
          },
        },
        series: [
          {
            barWidth: 15,
            data: [13.5, 11.5, 12.5, 10],
            type: 'bar',
            itemStyle: {
              color: '#0747A6',
            },
          },
        ],
      };

      this.schemeDisbursalOption = {
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
              { value: 45, name: 'Fresh', itemStyle: { color: '#F6C342' } },
              { value: 27, name: 'Top-Up', itemStyle: { color: '#6C757D ' } },
              { value: 26, name: 'BT', itemStyle: { color: '#198754' } },
            ],
          },
        ],
      };

      this.productDisbursalOption = {
        tooltip: {
          trigger: 'item',
          formatter: (params: any) => {

            let tooltipText = '';
  
            if (params.name === 'HL') {
  
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
              { value: 45, name: 'HL', itemStyle: { color: '#7C41DA' } },
              { value: 20, name: 'LAP', itemStyle: { color: '#F99B00' } },
              { value: 10, name: 'BL', itemStyle: { color: '#636363' } },
              { value: 25, name: 'SBL', itemStyle: { color: '#0B9DE8' } },
            ],
          },
        ],
      };

      this.irrPFInsOption = {
        legend: {},
        tooltip: {
          formatter: function (params:any) {

            return `
  
              Product: ${params.data.product}<br/>
  
              IRR: ${params.data.IRR}%<br/>
  
              PF: ${params.data.PF}%<br/>
  
              Insurance: ${params.data.Insurance}%
  
            `;
  
          },
        },
        dataset: {
          dimensions: ['product', 'IRR', 'PF', 'Insurance'],
          source: [
            { product: 'All Products', IRR: 13, PF: 3.5, Insurance: 3 },
            { product: 'HL', IRR: 12.5, PF: 3, Insurance: 2.7 },
            { product: 'LAP', IRR: 14, PF: 4, Insurance: 2.4 },
            { product: 'BL', IRR: 12.9, PF: 3.7, Insurance: 2.4 },
            { product: 'SBL', IRR: 16, PF: 3.7, Insurance: 3 },
          ],
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            interval: 0,
            rotate: -45,
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
          min: 2,
          max: 16,
          interval: 2,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false, // Hide tick lines
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            formatter: '{value}',
            margin: 1,
          },
          name: 'Percentage %',
          nameLocation: 'middle',
          nameGap: 20,
          nameTextStyle: {
            fontWeight: 600,
            fontSize:14,
          },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          {
            type: 'bar',
            itemStyle: {
              color: '#636363', // Set the color for the first bar series (IRR)
            },
          },
          {
            type: 'bar',
            itemStyle: {
              color: '#F99B00', // Set the color for the first bar series (IRR)
            },
          },
          {
            type: 'bar',
            itemStyle: {
              color: '#4FC3F7', // Set the color for the first bar series (IRR)
            },
          },
        ],
      };

      this.disbursalTatOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          formatter: (params: any) => {
            
            const dataIndex = params[0].dataIndex;
            const avgNoOfFile = [100, 80, 70, 50, 90][dataIndex];
            const days = [15, 13, 10, 9, 7];
            const Days = days[dataIndex];

            // Create the tooltip content with the actual value and random amount
            return `No. of files : ${avgNoOfFile}<br> Days: ${Days}`;
          },
        },
        xAxis: {
          type: 'category',

          data: ['All Products', 'HL', 'LAP', 'BL', 'SBL'],
          axisLabel: {
            interval: 0,
            rotate: -45,
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
          min: 2,
          max: 20,
          interval: 2,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false, // Hide tick lines
          },
          name: 'Days',
          nameLocation: 'middle',
          nameGap: 20,
          nameTextStyle: {
            fontWeight: 600,
            fontSize:14,
          },
        },
        series: [
          {
            barWidth: 15,
            data: [15, 13, 10, 9, 7],
            type: 'bar',
            itemStyle: {
              color: '#5BC8EF',
            },
          },
        ],
      };

      this.loginDisbursalRatioOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          formatter: (params: any) => {
            const dataIndex = params[0].dataIndex;
            const noOfFiles = [350, 145, 167, 370, 290][dataIndex];
            const percent = [70, 54, 43, 40, 50][dataIndex];
            const randomAmounts = [350, 145, 167, 370, 290];
            const randomAmount = randomAmounts[dataIndex];

            // Create the tooltip content with the actual value and random amount
            return `No of Files: ${noOfFiles}<br> Amount in cr: ${randomAmount}<br/>%: ${percent}`;
          },
        },
        xAxis: {
          type: 'category',

          data: ['All Products', 'HL', 'LAP', 'BL', 'SBL'],
          axisLabel: {
            interval: 0,
            rotate: -45,
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
          name: 'Percentage %',
          nameLocation: 'middle',
          nameGap: 20,
          axisLabel: {
            formatter: '{value}',
            margin: 1,
          },
          nameTextStyle: {
            fontWeight: 600,
            fontSize:14,
          },
        },
        series: [
          {
            barWidth: 15,
            data: [70, 54, 43, 40, 50],
            type: 'bar',
            itemStyle: {
              color: '#5D5BCC',
            },
          },
        ],
      };

      this.DisbursalAchievementChart.setOption(this.disbursalAchievementOption);
      this.IRPFChart.setOption(this.irrPFInsOption);
      this.StateDisbursalChart.setOption(this.stateDisbursalOption);
      this.AverageTicketChart.setOption(this.averageDisbursalOption);
      this.SchemeDisbursalChart.setOption(this.schemeDisbursalOption);
      this.ProductDisbursalChart.setOption(this.productDisbursalOption);
      this.DisbursalTatChart.setOption(this.disbursalTatOption);
      this.loginDisbursalRatioChart.setOption(this.loginDisbursalRatioOption);
    } else {
      this.trendDisbursalAchievementChart = echarts.init(
        document.getElementById('trendDisbursalAchievement') as HTMLDivElement
      );
      this.trendStateDisbursalChart = echarts.init(
        document.getElementById('trendStateWiseDisbursal') as HTMLDivElement
      );
      this.trendAverageDisbursalChart = echarts.init(
        document.getElementById('Disbursal-trend-Average-Ticket-size') as HTMLDivElement
      );

      this.trendLoginDisbursalRatioChart = echarts.init(
        document.getElementById('trendLoginDisbursalRatio') as HTMLDivElement
      );

      this.trendSchemeDisbursalChart = echarts.init(
        document.getElementById('trendSchemedisbursal') as HTMLDivElement
      );

      this.trendProductDisbursalChart = echarts.init(
        document.getElementById('trendProductdisbursal') as HTMLDivElement
      );

      this.trendDisbursalTatChart = echarts.init(
        document.getElementById('trendDisbursalTat') as HTMLDivElement
      );
      this.trendIrPfChart = echarts.init(
        document.getElementById('trendIrPFIns') as HTMLDivElement
      );

      this.trendDisbursalAchievementOption = {
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
            boundaryGap: true,
            data: [
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
            ],
            axisLabel: {
              formatter: '{value}',
              margin: 30, // Add a margin of 15 pixels above the labels
            },
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
            max: 100,
            interval: 10,
            name: 'Percentage %',
            nameLocation: 'middle',
            nameGap: 20,
            axisLabel: {
              formatter: '{value}',
              margin: 1,
            },
            nameTextStyle: {
              fontWeight: 600,
              fontSize:14,
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
            data: [90, 93, 94, 92, 99, 100, 110],
          },
        ],
      };

      this.trendStateDisbursalOption = {
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
            splitLine:{
              show: false,
            },
            boundaryGap: true,
            data: [
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
            ],
            axisLabel: {
              formatter: '{value}',
              margin: 30, // Add a margin of 15 pixels above the labels
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: false,
            },
            min: 10,
            max: 100,
            interval: 10,
            name: 'Amount ( in Rs. Crore)  ',
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
            data: [12, 15, 25, 30, 35, 45, 55],
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
            data: [30, 35, 45, 50, 58, 65, 75],
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
            data: [35, 45, 47, 50, 55, 67, 77],
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
            data: [37, 46, 48, 52, 57, 69, 79],
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
            data: [39, 48, 50, 55, 60, 70, 80],
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
            data: [40, 50, 53, 58, 63, 73, 83],
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
            data: [43, 54, 59, 62, 67, 85, 95],
          },
        ],
      };

      this.trendProductDisbursalOption = {
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
            labelLine:{
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine:{
              show: false,
            },
            boundaryGap: true,
            data: [
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
            ],
            axisLabel: {
              formatter: '{value}',
              margin: 30, // Add a margin of 15 pixels above the labels
            },
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
            max: 100,
            interval: 10,
            name: 'Percentage %',
            nameLocation: 'middle',
            nameGap: 20,
            axisLabel: {
              formatter: '{value}',
              margin: 1,
            },
            nameTextStyle: {
              fontWeight: 600,
              fontSize:14,
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
            data: [12, 15, 25, 30, 35, 45, 55],
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
            data: [30, 35, 45, 50, 58, 65, 75],
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
            data: [37, 46, 48, 52, 57, 69, 79],
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
            data: [39, 48, 50, 55, 60, 70, 80],
          },
        ],
      };

      this.trendSchemeDisbursalOption = {
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
            labelLine:{
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine:{
              show: false,
            },
            boundaryGap: true,
            data: [
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
            ],
            axisLabel: {
              formatter: '{value}',
              margin: 30, // Add a margin of 15 pixels above the labels
            },
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
            max: 100,
            interval: 10,
            name: 'Percentage %',
            nameLocation: 'middle',
            nameGap: 20,
            axisLabel: {
              formatter: '{value}',
              margin: 1,
            },
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
            data: [15, 20, 25, 30, 35, 40, 45],
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
            data: [20, 25, 30, 35, 40, 45, 50],
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
            data: [25, 30, 35, 40, 45, 50, 55],
          },
        ],
      };

      this.trendAverageDisbursalOption = {
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
            labelLine:{
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine:{
              show: false,
            },
            boundaryGap: true,
            data: [
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
            ],
            axisLabel: {
              formatter: '{value}',
              margin: 30, // Add a margin of 15 pixels above the labels
            },
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
            min: 12,
            max: 18,
            interval: 1,
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
            data: [12.1, 12.5, 12.9, 13, 13.3, 13.5, 13.9],
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
            data: [12.3, 12.6, 13, 13.4, 13.6, 13.9, 14],
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
            data: [12.5, 12.9, 14.4, 14.9, 15, 15.2, 15.6],
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
            data: [12.7, 13, 13.5, 14, 14.3, 14.9, 15],
          },
        ],
      };

      this.trendLoginDisbursalRatioOption = {
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
            labelLine:{
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine:{
              show: false,
            },
            boundaryGap: true,
            data: [
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
            ],
            axisLabel: {
              formatter: '{value}',
              margin: 30, // Add a margin of 15 pixels above the labels
            },
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
            max: 100,
            interval: 10,
            name: 'Percentage %' ,
            nameLocation: 'middle',
            nameGap: 20,
            axisLabel: {
              formatter: '{value}',
              margin: 1,
            },
            nameTextStyle: {
              fontWeight: 600,
              fontSize:14,
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
            data: [12, 15, 25, 30, 35, 45, 55],
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
            data: [30, 35, 45, 50, 58, 65, 75],
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
            data: [37, 46, 48, 52, 57, 69, 79],
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
            data: [39, 48, 50, 55, 60, 70, 80],
          },
        ],
      };

      this.trendDisbursalTatOption = {
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
            labelLine:{
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine:{
              show: false,
            },
            boundaryGap: true,
            data: [
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
            ],
            axisLabel: {
              formatter: '{value}',
              margin: 30, // Add a margin of 15 pixels above the labels
            },
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
            min: 5,
            max: 20,
            interval: 2,
            name: 'Percentage %',
            nameLocation: 'middle',
            nameGap: 20,
            axisLabel: {
              formatter: '{value}',
              margin: 1,
            },
            nameTextStyle: {
              fontWeight: 600,
              fontSize:14,
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
            data: [5, 6, 6.5, 7.9, 8, 8.5, 9, 9.5],
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
            data: [6.6, 7, 7.2, 7.4, 8.9, 8.3, 9.7],
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
            data: [7.7, 8.3, 8.5, 8.9, 9.1, 9.6, 10],
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
            data: [9, 9.7, 7.6, 10, 10.8, 11, 12],
          },
        ],
      };

      this.trendIrPfOption = {
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
          data: ['IRR', 'PF', 'Insurance'],
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
            boundaryGap: true,
            data: [
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
            ],
            axisLabel: {
              formatter: '{value}',
              margin: 30, // Add a margin of 15 pixels above the labels
            },
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
            max: 15,
            interval: 2,
            name: 'Percentage %',
            nameLocation: 'middle',
            nameGap: 20,
            axisLabel: {
              formatter: '{value}',
              margin: 1,
            },
            nameTextStyle: {
              fontWeight: 600,
              fontSize:14,
            },
          },
        ],
        series: [
          {
            name: 'IRR',
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
            data: [12, 13, 12.5, 14, 14.5, 15, 20],
          },
          {
            name: 'PF',
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
            data: [2.3, 2.5, 2.4, 2.9, 2.8, 3, 4],
          },
          {
            name: 'Insurance',
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
            data: [3.2, 3.4, 3.3, 3.7, 3.6, 3.9, 4.5],
          },
        ],
      };

      this.trendDisbursalAchievementChart.setOption(
        this.trendDisbursalAchievementOption
      );
      this.trendStateDisbursalChart.setOption(this.trendStateDisbursalOption);
      this.trendAverageDisbursalChart.setOption(
        this.trendAverageDisbursalOption
      );
      this.trendSchemeDisbursalChart.setOption(this.trendSchemeDisbursalOption);
      this.trendProductDisbursalChart.setOption(
        this.trendProductDisbursalOption
      );
      this.trendDisbursalTatChart.setOption(this.trendDisbursalTatOption);
      this.trendLoginDisbursalRatioChart.setOption(
        this.trendLoginDisbursalRatioOption
      );
      this.trendIrPfChart.setOption(this.trendIrPfOption);
    }
  }
  onFilterChange(selectedValue: string) {
    this.generateDisbursalAchievement();
    this.generateIrrPF();
    this.generateStateRandomData();
    this.generateAverageStateRandomData();
    this.generateSchemeRandomData();
    this.generateProductRandomData();
    this.generateloginDisbursalRatioRandomData();
    this.generateDisbursalTatRandomdata();
  }

  onStateChange(selectedValue: string) {
    this.generateDisbursalAchievement();
    this.generateIrrPF();
    this.generateStateRandomData();
    this.generateAverageStateRandomData();
    this.generateSchemeRandomData();
    this.generateProductRandomData();
    this.generateloginDisbursalRatioRandomData();
    this.generateDisbursalTatRandomdata();
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }

  generateDisbursalAchievement() {
    const minValue = 70;
    const maxValue = 90;

    const randomValue = +(
      Math.random() * (maxValue - minValue) +
      minValue
    ).toFixed(2);

    this.DisbursalAchievementChart.setOption({
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

  generateIrrPF() {
    // Define the minimum and maximum values for the y-axis

    const randomData = [
      {
        product: 'All Products',
        IRR: this.getRandomValue(12, 16),
        PF: this.getRandomValue(2.3, 4),
        Insurance: this.getRandomValue(2.3, 3),
      },
      {
        product: 'HL',
        IRR: this.getRandomValue(12, 16),
        PF: this.getRandomValue(2.3, 4),
        Insurance: this.getRandomValue(2.3, 3),
      },
      {
        product: 'LAP',
        IRR: this.getRandomValue(12, 16),
        PF: this.getRandomValue(2.3, 4),
        Insurance: this.getRandomValue(2.3, 3),
      },
      {
        product: 'BL',
        IRR: this.getRandomValue(12, 16),
        PF: this.getRandomValue(2.3, 4),
        Insurance: this.getRandomValue(2.3, 3),
      },
      {
        product: 'SBL',
        IRR: this.getRandomValue(12, 16),
        PF: this.getRandomValue(2.3, 4),
        Insurance: this.getRandomValue(2.3, 3),
      },
    ];

    // Update the option object with the new data
    this.irrPFInsOption = {
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: ['product', 'IRR', 'PF', 'Insurance'],
        source: randomData, // Use the generated random data
      },
      xAxis: { type: 'category' },

      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [
        {
          type: 'bar',
          itemStyle: {
            color: '#636363', // Set the color for the first bar series (IRR)
          },
        },
        {
          type: 'bar',
          itemStyle: {
            color: '#F99B00', // Set the color for the second bar series (PF)
          },
        },
        {
          type: 'bar',
          itemStyle: {
            color: '#4FC3F7', // Set the color for the third bar series (Insurance)
          },
        },
      ],
    };

    this.IRPFChart.setOption(this.irrPFInsOption);
  }

  generateStateRandomData() {
    const minValues = [23, 35, 25, 45, 20, 21, 22, 130];
    const maxValues = [25, 39, 27, 50, 32, 22, 25, 150];

    const newData = minValues.map((min, index) => {
      const max = maxValues[index];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
    this.stateDisbursalOption.series[0].data = newData;
    this.StateDisbursalChart.setOption(this.stateDisbursalOption);
  }

  generateAverageStateRandomData() {
    const minValues = [8.2, 8.5, 9, 9.2, 11, 11.4, 12.5, 13];
    const maxValues = [10, 10, 11, 11.9, 12, 12, 13, 15];

    const newData = minValues.map((min, index) => {
      const max = maxValues[index];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
    this.averageDisbursalOption.series[0].data = newData;
    this.AverageTicketChart.setOption(this.averageDisbursalOption);
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
        itemStyle: { color: '#00E1EF' },
      },
      {
        value: this.getRandomValue(23, 26),
        name: 'BT',
        itemStyle: { color: '#94DD1D' },
      },
    ];

    // Update the pie chart data with the new random values
    this.schemeDisbursalOption.series[0].data = newData;
    this.SchemeDisbursalChart.setOption(this.schemeDisbursalOption);
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
    this.productDisbursalOption.series[0].data = newData;
    this.ProductDisbursalChart.setOption(this.productDisbursalOption);
  }

  generateloginDisbursalRatioRandomData() {
    const newData = [
      { value: this.getRandomValue(40, 50) },
      { value: this.getRandomValue(30, 40) },
      { value: this.getRandomValue(40, 50) },
      { value: this.getRandomValue(30, 40) },
      { value: this.getRandomValue(40, 50) },
    ];
    this.loginDisbursalRatioOption.series[0].data = newData;
    this.loginDisbursalRatioChart.setOption(this.loginDisbursalRatioOption);
  }

  generateDisbursalTatRandomdata() {
    const minValues = [7, 5, 3, 11, 6, 4, 5, 13];
    const maxValues = [10, 7, 5, 13, 9, 8, 7, 15];

    const newData = minValues.map((min, index) => {
      const max = maxValues[index];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
    this.disbursalTatOption.series[0].data = newData;
    this.DisbursalTatChart.setOption(this.disbursalTatOption);
  }

  getRandomValue(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ontrendStateChange(selectedValue: string) {
    this.TrendgenerateDisbursalAchievement(selectedValue);
    this.TrendgenerateProductRandomData(selectedValue);
    this.TrendgenerateSchemeRandomData(selectedValue);
    this.TrendgenerateAverageStateRandomData(selectedValue);
    this.TrendgenerateStateRandomData(selectedValue);
    this.TrendgenerateDisbursalTatRandomdata(selectedValue);
    this.TrendgenerateloginDisbursalRatioRandomData(selectedValue);
    this.TrendgenerateIRPFRandomdata(selectedValue);
  }

  onTrendFilterChange(selectedValue: string) {
    this.TrendgenerateDisbursalAchievement(selectedValue);
    this.TrendgenerateProductRandomData(selectedValue);
    this.TrendgenerateSchemeRandomData(selectedValue);
    this.TrendgenerateAverageStateRandomData(selectedValue);
    this.TrendgenerateStateRandomData(selectedValue);
    this.TrendgenerateDisbursalTatRandomdata(selectedValue);
    this.TrendgenerateloginDisbursalRatioRandomData(selectedValue);
    this.TrendgenerateIRPFRandomdata(selectedValue);
  }

  TrendgenerateDisbursalAchievement(selectedValue: string) {
    if (selectedValue === 'Three months') {
      const newAxisdata = ['Jul', 'Aug', 'Sep', 'Oct'];
      this.trendDisbursalAchievementOption.xAxis[0].data = newAxisdata;
      const StateminValues = [91, 94, 97,100];
      const StatemaxValues = [95, 97, 100,110];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendDisbursalAchievementOption.series[0].data = newData;
      this.trendDisbursalAchievementChart.setOption(
        this.trendDisbursalAchievementOption
      );
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
      this.trendDisbursalAchievementOption.xAxis[0].data = newAxisdata;
      const StateminValues = [91, 93, 96, 96, 98, 100];
      const StatemaxValues = [93, 95.5, 97, 5, 98, 100,105];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendDisbursalAchievementOption.series[0].data = newData;
      this.trendDisbursalAchievementChart.setOption(
        this.trendDisbursalAchievementOption
      );
    }
  }

  TrendgenerateProductRandomData(selectedValue: string) {
    if (selectedValue === 'Three months') {
      const newAxisdata = ['Jul', 'Aug', 'Sep', 'Oct'];
      this.trendProductDisbursalOption.xAxis[0].data = newAxisdata;
      const StateminValues = [55, 60, 64, 74];
      const StatemaxValues = [60, 67, 78, 88];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendProductDisbursalOption.series[0].data = newData;
      this.trendProductDisbursalChart.setOption(
        this.trendProductDisbursalOption
      );
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
      this.trendProductDisbursalOption.xAxis[0].data = newAxisdata;
      const StateminValues = [55, 60, 64, 68, 75, 85];
      const StatemaxValues = [60, 67, 78, 83, 90, 100];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendProductDisbursalOption.series[0].data = newData;
      this.trendProductDisbursalChart.setOption(
        this.trendProductDisbursalOption
      );
    }
  }

  TrendgenerateSchemeRandomData(selectedValue: string) {
    if (selectedValue === 'Three months') {
      const newAxisdata = ['Jul', 'Aug', 'Sep', 'Oct'];
      this.trendSchemeDisbursalOption.xAxis[0].data = newAxisdata;
      const StateminValues = [55, 60, 64, 74];
      const StatemaxValues = [60, 67, 78, 85];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendSchemeDisbursalOption.series[0].data = newData;
      this.trendSchemeDisbursalChart.setOption(this.trendSchemeDisbursalOption);
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
      this.trendSchemeDisbursalOption.xAxis[0].data = newAxisdata;
      const StateminValues = [55, 60, 64, 68, 75, 85];
      const StatemaxValues = [60, 67, 78, 83, 90, 95];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendSchemeDisbursalOption.series[0].data = newData;
      this.trendSchemeDisbursalChart.setOption(this.trendSchemeDisbursalOption);
    }
  }

  TrendgenerateAverageStateRandomData(selectedValue: string) {
    if (selectedValue === 'Three months') {
      const newAxisdata = ['Jul', 'Aug', 'Sep', 'Oct'];
      this.trendAverageDisbursalOption.xAxis[0].data = newAxisdata;
      const StateminValues = [12.7, 13.5, 15, 25];
      const StatemaxValues = [14, 15, 18, 25];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendAverageDisbursalOption.series[0].data = newData;
      this.trendAverageDisbursalChart.setOption(
        this.trendAverageDisbursalOption
      );
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
      this.trendAverageDisbursalOption.xAxis[0].data = newAxisdata;
      const StateminValues = [10.7, 11.5, 12.2, 13.4, 14, 20];
      const StatemaxValues = [11, 12, 13, 14, 15, 25];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendAverageDisbursalOption.series[0].data = newData;
      this.trendAverageDisbursalChart.setOption(
        this.trendAverageDisbursalOption
      );
    }
  }

  TrendgenerateStateRandomData(selectedValue: string) {
    if (selectedValue === 'Three months') {
      const newAxisdata = ['Jul', 'Aug', 'Sep', 'Oct'];
      this.trendStateDisbursalOption.xAxis[0].data = newAxisdata;
      const StateminValues = [55, 60, 64, 75];
      const StatemaxValues = [60, 67, 78, 85];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendStateDisbursalOption.series[0].data = newData;
      this.trendStateDisbursalChart.setOption(this.trendStateDisbursalOption);
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
      this.trendStateDisbursalOption.xAxis[0].data = newAxisdata;
      const StateminValues = [55, 60, 64, 68, 75, 80];
      const StatemaxValues = [60, 67, 78, 83, 90, 85];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendStateDisbursalOption.series[0].data = newData;
      this.trendStateDisbursalChart.setOption(this.trendStateDisbursalOption);
    }
  }

  TrendgenerateDisbursalTatRandomdata(selectedValue: string) {
    if (selectedValue === 'Three months') {
      const newAxisdata = ['Jul', 'Aug', 'Sep', 'Oct'];
      this.trendDisbursalTatOption.xAxis[0].data = newAxisdata;
      const StateminValues = [6, 7, 12, 15];
      const StatemaxValues = [9, 10, 18, 20];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendDisbursalTatOption.series[0].data = newData;
      this.trendDisbursalTatChart.setOption(this.trendDisbursalTatOption);
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
      this.trendDisbursalTatOption.xAxis[0].data = newAxisdata;
      const StateminValues = [6, 7, 12, 15, 18, 20];
      const StatemaxValues = [9, 10, 14, 17, 20, 25];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendDisbursalTatOption.series[0].data = newData;
      this.trendDisbursalTatChart.setOption(this.trendDisbursalTatOption);
    }
  }

  TrendgenerateloginDisbursalRatioRandomData(selectedValue: string) {
    if (selectedValue === 'Three months') {
      const newAxisdata = ['Jul', 'Aug', 'Sep', 'Oct'];
      this.trendLoginDisbursalRatioOption.xAxis[0].data = newAxisdata;
      const StateminValues = [55, 60, 64, 70];
      const StatemaxValues = [60, 67, 78, 85];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendLoginDisbursalRatioOption.series[0].data = newData;
      this.trendLoginDisbursalRatioChart.setOption(
        this.trendLoginDisbursalRatioOption
      );
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
      this.trendLoginDisbursalRatioOption.xAxis[0].data = newAxisdata;
      const StateminValues = [55, 60, 64, 68, 75, 80];
      const StatemaxValues = [60, 67, 78, 83, 90, 95];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendLoginDisbursalRatioOption.series[0].data = newData;
      this.trendLoginDisbursalRatioChart.setOption(
        this.trendLoginDisbursalRatioOption
      );
    }
  }

  TrendgenerateIRPFRandomdata(selectedValue: string) {
    if (selectedValue === 'Three months') {
      const newAxisdata = ['Jul', 'Aug', 'Sep', 'Oct'];
      this.trendIrPfOption.xAxis[0].data = newAxisdata;
      const StateminValues = [2.3, 2.5, 12, 15];
      const StatemaxValues = [3, 4, 15, 20];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendIrPfOption.series[0].data = newData;
      this.trendIrPfChart.setOption(this.trendIrPfOption);
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
      this.trendIrPfOption.xAxis[0].data = newAxisdata;
      const StateminValues = [2.3, 2.5, 3, 4, 12, 15, 20];
      const StatemaxValues = [3, 4, 4.5, 5, 15, 20, 25];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendIrPfOption.series[0].data = newData;
      this.trendIrPfChart.setOption(this.trendIrPfOption);
    }
  }
}
