import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-financial-approvals',
  templateUrl: './financial-approvals.component.html',
  styleUrls: ['./financial-approvals.component.scss'],
})
export class FinancialApprovalsComponent implements AfterViewInit {
  StateApprovalChart!: echarts.ECharts;
  SchemeApprovalChart!: echarts.ECharts;
  AverageTicketChart!: echarts.ECharts;
  ProductApprovalChart!: echarts.ECharts;
  FinancialApprovalTATChart!: echarts.ECharts;
  ConversionChart!: echarts.ECharts;

  trendStateApprovalChart!: echarts.ECharts;
  trendAverageApprovalChart!: echarts.ECharts;
  trendSchemeApprovalChart!: echarts.ECharts;
  trendProductApprovalChart!: echarts.ECharts;
  trendConversionApprovalChart!: echarts.ECharts;
  trendFinancialTatApprovalChart!: echarts.ECharts;

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
  monthFilters: string[] = ['Month to Date', 'Three month'];
  selectedState: string = 'Pan India';
  selectedFilter: string = 'September';
  selectedTrendFilter: string = 'Month to Date';
  showContent!: boolean;

  stateApprovalOption: any;
  averageApprovalOption: any;
  schemeApprovalOption: any;
  productApprovalOption: any;
  financialTatOption: any;
  conversionOption: any;

  trendStateApprovalOption: any;
  trendAverageApprovalOption: any;
  trendSchemeApprovalOption: any;
  trendProductApprovalOption: any;
  trendConversionOption: any;
  trendFinancialTatOption: any;

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
      this.StateApprovalChart = echarts.init(
        document.getElementById('StateWiseApprovalChart') as HTMLDivElement
      );

      this.SchemeApprovalChart = echarts.init(
        document.getElementById('SchemeApproval') as HTMLDivElement
      );

      this.ProductApprovalChart = echarts.init(
        document.getElementById('ProductApproval') as HTMLDivElement
      );

      this.AverageTicketChart = echarts.init(
        document.getElementById('Average-Ticket-size') as HTMLDivElement
      );

      this.FinancialApprovalTATChart = echarts.init(
        document.getElementById('Financial-approval-TAT') as HTMLDivElement
      );

      this.ConversionChart = echarts.init(
        document.getElementById('Conversion') as HTMLDivElement
      );

      this.stateApprovalOption = {
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
          min: 10,
          max: 90,
          interval: 10,
          name: 'Amount (in Rs. Crore)',
          nameLocation: 'middle',
          nameGap: 25,
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
            
          ],
        },
        series: [
          {
            barWidth: 20,
            type: 'bar',
            data: [70, 65, 50, 30, 40, 50],
            itemStyle: {
              color: '#6096B4',
            },
          },
        ],
      };

      this.averageApprovalOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          formatter: (params: any) => {
            
            const dataIndex = params[0].dataIndex;
            const avgNoOfFile = [100, 80, 70, 50, 90][dataIndex];
            const amountInCr = [12, 16, 10.3, 8.6, 5.7][dataIndex];
            const avgTicketSize = [11, 8, 6, 12, 10, 7, 9];
            const avgTicket = avgTicketSize[dataIndex];

            // Create the tooltip content with the actual value and random amount
            return `Avg no. of files : ${avgNoOfFile}<br> Amount in Cr: ${amountInCr}<br> Active RMs: ${avgTicket}`;
          },
        },
        xAxis: {
          type: 'category',
          axisTick: {
            show: false, 
          },
          axisLine: {
            show: false,
          },
          data: ['All Products', 'Home Loan', 'LAP', 'BL', 'SBL'],
          axisLabel: {
            interval: 0,
            rotate: -45,
            overflow: 'break',
          },
        },
        yAxis: {
          type: 'value',
          min: 2,
          max: 16,
          interval: 2,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          name: 'Amount (in Rs. Lacs)',
          nameLocation: 'middle',
          nameGap: 25,
          nameTextStyle: {
            fontWeight: 600,
            fontSize:14,
          },
        },
        series: [
          {
            barWidth: 20,
            data: [12, 16, 10.3, 8.6, 5.7],
            type: 'bar',
            itemStyle: {
              color: '#55BBCC',
            },
          },
        ],
      };

      this.schemeApprovalOption = {
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
              { value: 45, name: 'Fresh', itemStyle: { color: '#F6C342' } },
              { value: 27, name: 'Top-Up', itemStyle: { color: '#6C757D' } },
              { value: 26, name: 'BT', itemStyle: { color: '#198754' } },
            ],
          },
        ],
      };

      this.productApprovalOption = {
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

      this.conversionOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          formatter: (params: any) => {
            
            const dataIndex = params[0].dataIndex;
            const Login = [100, 80, 70, 50, 90][dataIndex];
            const Approved = [50, 30, 35, 55, 90][dataIndex];
            const percent = [50, 36, 44, 40, 45];
            const percentage = percent [dataIndex];

            // Create the tooltip content with the actual value and random amount
            return `Login: ${Login} <br/> Approved : ${Approved}<br> %: ${percentage}`;
          },
        },
        xAxis: {
          type: 'category',
          axisTick: {
            show: false, 
          },
          axisLine: {
            show: false,
          },
          data: ['All Products', 'Home Loan', 'LAP', 'BL', 'SBL'],
          axisLabel: {
            interval: 0,
            rotate: -45,
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
            
            barWidth: 20,
            data: [50, 36, 44, 40, 45],
            type: 'bar',
            itemStyle: {
              color: '#8675A9',
            },
          },
        ],
      };

      this.financialTatOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          formatter: (params: any) => {
            
            const dataIndex = params[0].dataIndex;
            const avgNoOfFile = [100, 80, 70, 50, 90][dataIndex];
            const days  = [9, 6, 7, 8, 6];
            const Days = days [dataIndex];

            // Create the tooltip content with the actual value and random amount
            return `Avg no. of files : ${avgNoOfFile}<br> Days: ${Days}`;
          },
        },
        xAxis: {
          type: 'category',
          axisTick: {
            show: false, 
          },
          axisLine: {
            show: false,
          },
          data: ['All Products', 'Home Loan', 'LAP', 'BL', 'SBL'],
          axisLabel: {
            interval: 0,
            rotate: -45,
            overflow: 'break',
          },
        },
        yAxis: {
          type: 'value',
          min: 1,
          max: 12,
          interval: 1,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          name: 'Days',
          nameLocation: 'middle',
          nameGap: 25,
          nameTextStyle: {
            fontWeight: 600,
            fontSize:14,
          },
        },
        series: [
          {
            barWidth: 20,
            data: [9, 6, 7, 8, 6],
            type: 'bar',
            itemStyle: {
              color: '#0747A6',
            },
          },
        ],
      };

      this.StateApprovalChart.setOption(this.stateApprovalOption);
      this.AverageTicketChart.setOption(this.averageApprovalOption);
      this.SchemeApprovalChart.setOption(this.schemeApprovalOption);
      this.ProductApprovalChart.setOption(this.productApprovalOption);
      this.ConversionChart.setOption(this.conversionOption);
      this.FinancialApprovalTATChart.setOption(this.financialTatOption);
    } else {
      this.trendStateApprovalChart = echarts.init(
        document.getElementById('trendStateApprovalWiseChart') as HTMLDivElement
      );
      this.trendAverageApprovalChart = echarts.init(
        document.getElementById('trend-Average-Ticket-size') as HTMLDivElement
      );

      this.trendFinancialTatApprovalChart = echarts.init(
        document.getElementById(
          'trend-Financial-approval-TAT'
        ) as HTMLDivElement
      );

      this.trendSchemeApprovalChart = echarts.init(
        document.getElementById('trendSchemeApproval') as HTMLDivElement
      );

      this.trendProductApprovalChart = echarts.init(
        document.getElementById('trendProductApproval') as HTMLDivElement
      );

      this.trendConversionApprovalChart = echarts.init(
        document.getElementById('trendConversion') as HTMLDivElement
      );

      this.trendStateApprovalOption = {
        title: {},
        responsive: true, 
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
            max: 120,
            interval: 10,
            name: 'Amount  ( in  Rs. Crore )',
            nameLocation: 'middle',
            nameGap: 30,
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
            data: [37, 46, 48, 52, 57, 69, 75],
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
            data: [40, 50, 53, 58, 63, 73, 79],
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
            data: [43, 54, 59, 62, 67, 85, 90],
          },
        ],
      };

      this.trendProductApprovalOption = {
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
        responsive: true, 
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
            min: 10,
            max: 120,
            interval: 10,
            name: 'Amount ( in Rs. Crore )',
            nameLocation: 'middle',
            nameGap:  30,
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
            data: [30, 35, 45, 50, 58, 65, 70],
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
            data: [37, 46, 48, 52, 57, 69, 74],
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
            data: [39, 48, 50, 55, 60, 70, 75],
          },
        ],
      };

      this.trendSchemeApprovalOption = {
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
        responsive: true, 
        legend: {
          data: ['Fresh', 'Top Up',  'BT'],
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
            max: 100,
            interval: 10,
            name: 'Percentage %',
            nameLocation: 'middle',
            nameGap:  25,
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

      this.trendAverageApprovalOption = {
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
        responsive: true, 
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
            min: 10,
            max: 15,
            interval: 1,
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
            data: [11.1, 11.5, 11.9, 12, 12.3, 12.5, 12.9],
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
            data: [11.3, 11.6, 12, 12.4, 12.6, 12.9, 13],
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
            data: [11.5, 11.9, 13.4, 13.9, 14, 14.2, 14.6],
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
            data: [11.7, 12, 12.5, 13, 13.3, 13.9, 14.9],
          },
        ],
      };

      this.trendFinancialTatOption = {
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
        responsive: true, 
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
            min: 15,
            max: 1,
            interval: 2,
            name: 'Days',
            nameLocation: 'middle',
            nameGap:  25,
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
            data: [2, 3, 5, 7, 8, 8.5, 9],
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
            data: [3, 3.5, 4, 4.5, 5, 5.5, 6],
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
            data: [4, 5, 6, 7, 8, 9, 10],
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
            data: [5, 6, 7, 8, 9, 10, 11],
          },
        ],
      };

      this.trendConversionOption = {
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
        responsive: true, 
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
            min: 40,
            max: 50,
            interval: 2,
            name: 'Percentage %',
            nameLocation: 'middle',
            nameGap:  20,
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
            data: [42.5, 43, 43.9, 44, 44.5, 45, 45.5],
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
            data: [42.6, 43, 44, 44.4, 44.9, 45.3, 45.7],
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
            data: [42.7, 43.3, 44.5, 44.9, 45.1, 45.6, 46],
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
            data: [42.9, 43.7, 44.6, 45, 45.8, 46, 47],
          },
        ],
      };

      this.trendStateApprovalChart.setOption(this.trendStateApprovalOption);
      this.trendAverageApprovalChart.setOption(this.trendAverageApprovalOption);
      this.trendSchemeApprovalChart.setOption(this.trendSchemeApprovalOption);
      this.trendProductApprovalChart.setOption(this.trendProductApprovalOption);
      this.trendConversionApprovalChart.setOption(this.trendConversionOption);
      this.trendFinancialTatApprovalChart.setOption(
        this.trendFinancialTatOption
      );
    }
  }

  onFilterChange(selectedValue: string) {
    console.log(selectedValue);
    this.generateStateRandomData();
    this.generateAverageStateRandomData();
    this.generateSchemeRandomData();
    this.generateProductRandomData();
    this.generateConversionRandomData();
    this.generateFinancialTatRandomdata();
  }

  onStateChange(selectedValue: string) {
    console.log(selectedValue);
    this.generateStateRandomData();
    this.generateAverageStateRandomData();
    this.generateSchemeRandomData();
    this.generateProductRandomData();
    this.generateConversionRandomData();
    this.generateFinancialTatRandomdata();
  }

  generateRandomAmount(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }

  generateStateRandomData() {
    const minValues = [67, 62, 48, 27, 37, 46];
    const maxValues = [70, 65, 50, 30, 40, 50];

    const newData = minValues.map((min, index) => {
      const max = maxValues[index];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
    this.stateApprovalOption.series[0].data = newData;
    this.StateApprovalChart.setOption(this.stateApprovalOption);
  }

  generateAverageStateRandomData() {
    const minValues = [7, 5, 3, 11, 6, 4, 5, 13];
    const maxValues = [10, 7, 5, 13, 9, 8, 7, 15];

    const newData = minValues.map((min, index) => {
      const max = maxValues[index];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
    this.averageApprovalOption.series[0].data = newData;
    this.AverageTicketChart.setOption(this.averageApprovalOption);
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
    this.schemeApprovalOption.series[0].data = newData;
    this.SchemeApprovalChart.setOption(this.schemeApprovalOption);
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
    this.productApprovalOption.series[0].data = newData;
    this.ProductApprovalChart.setOption(this.productApprovalOption);
  }

  generateConversionRandomData() {
    const newData = [
      { value: this.getRandomValue(40, 50) },
      { value: this.getRandomValue(30, 40) },
      { value: this.getRandomValue(40, 50) },
      { value: this.getRandomValue(30, 40) },
      { value: this.getRandomValue(40, 50) },
    ];
    this.conversionOption.series[0].data = newData;
    this.ConversionChart.setOption(this.conversionOption);
  }

  generateFinancialTatRandomdata() {
    const minValues = [7, 5, 3, 11, 6, 4, 5, 13];
    const maxValues = [10, 7, 5, 13, 9, 8, 7, 15];

    const newData = minValues.map((min, index) => {
      const max = maxValues[index];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
    this.financialTatOption.series[0].data = newData;
    this.FinancialApprovalTATChart.setOption(this.financialTatOption);
  }

  getRandomValue(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ontrendStateChange(selectedValue: string){
    console.log(selectedValue)
    this.TrendgenerateStateRandomData(selectedValue);
    this.TrendgenerateAverageStateRandomData(selectedValue);
    this.TrendgenerateSchemeRandomData(selectedValue);
    this.TrendgenerateProductRandomData(selectedValue);
    this.TrendgenerateConversionRandomData(selectedValue);
    this.TrendgenerateFinancialTatRandomdata(selectedValue);
  }

  onTrendFilterChange(selectedValue: string) {
    this.TrendgenerateStateRandomData(selectedValue);
    this.TrendgenerateAverageStateRandomData(selectedValue);
    this.TrendgenerateSchemeRandomData(selectedValue);
    this.TrendgenerateProductRandomData(selectedValue);
    this.TrendgenerateConversionRandomData(selectedValue);
    this.TrendgenerateFinancialTatRandomdata(selectedValue);
  }

  TrendgenerateStateRandomData(selectedValue: string) {
    if (selectedValue === 'Three month') {
      const newAxisdata = ['Jul', 'Aug', 'Sep', 'Oct'];
      this.trendStateApprovalOption.xAxis[0].data = newAxisdata;
      const StateminValues = [55, 60, 64, 74];
      const StatemaxValues = [60, 67, 78, 88];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendStateApprovalOption.series[0].data = newData;
      this.trendStateApprovalChart.setOption(this.trendStateApprovalOption);
    }
    else{
      const newAxisdata = [ 'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',];
      this.trendStateApprovalOption.xAxis[0].data = newAxisdata;
      const StateminValues = [55, 60, 64,68,75, 85];
      const StatemaxValues = [60, 67, 78,83,90, 95];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendStateApprovalOption.series[0].data = newData;
      this.trendStateApprovalChart.setOption(this.trendStateApprovalOption);
    }
  }

  TrendgenerateAverageStateRandomData(selectedValue: string) {
    console.log("here",selectedValue)
    if (selectedValue === 'Three month') {
      const newAxisdata = ['Jul', 'Aug', 'Sep', 'Oct'];
      this.trendAverageApprovalOption.xAxis[0].data = newAxisdata;
      const StateminValues = [10.7, 12.5, 14, 24];
      const StatemaxValues = [11, 13, 15, 25];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendAverageApprovalOption.series[0].data = newData;
      this.trendAverageApprovalChart.setOption(this.trendAverageApprovalOption);
    }
    else{
      const newAxisdata = [ 'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',];
      this.trendAverageApprovalOption.xAxis[0].data = newAxisdata;
      const StateminValues = [10.7, 11.5,12.2,13.4, 14, 24];
      const StatemaxValues = [11,12, 13,14, 15, 25];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendAverageApprovalOption.series[0].data = newData;
      this.trendAverageApprovalChart.setOption(this.trendAverageApprovalOption);
    }
  }
  TrendgenerateSchemeRandomData(selectedValue: string) {
    if (selectedValue === 'Three month') {
      const newAxisdata = ['Jul', 'Aug', 'Sep', 'Oct'];
      this.trendSchemeApprovalOption.xAxis[0].data = newAxisdata;
      const StateminValues = [55, 60, 64, 74];
      const StatemaxValues = [60, 67, 78, 85];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendSchemeApprovalOption.series[0].data = newData;
      this.trendSchemeApprovalChart.setOption(this.trendSchemeApprovalOption);
    }
    else{
      const newAxisdata = [ 'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',];
      this.trendSchemeApprovalOption.xAxis[0].data = newAxisdata;
      const StateminValues = [55, 60, 64,68,75, 85];
      const StatemaxValues = [60, 67, 78,83,90, 95];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendSchemeApprovalOption.series[0].data = newData;
      this.trendSchemeApprovalChart.setOption(this.trendSchemeApprovalOption);
    }
  }

  TrendgenerateProductRandomData(selectedValue: string) {
    if (selectedValue === 'Three month') {
      const newAxisdata = ['Jul', 'Aug', 'Sep', 'Oct'];
      this.trendProductApprovalOption.xAxis[0].data = newAxisdata;
      const StateminValues = [55, 60, 64, 74];
      const StatemaxValues = [60, 67, 78, 80];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendProductApprovalOption.series[0].data = newData;
      this.trendProductApprovalChart.setOption(this.trendProductApprovalOption);
    }
    else{
      const newAxisdata = [ 'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',];
      this.trendProductApprovalOption.xAxis[0].data = newAxisdata;
      const StateminValues = [55, 60, 64,68,75, 80];
      const StatemaxValues = [60, 67, 78,83,90, 95];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendProductApprovalOption.series[0].data = newData;
      this.trendProductApprovalChart.setOption(this.trendProductApprovalOption);
    }
  }
  TrendgenerateConversionRandomData(selectedValue: string) {
    if (selectedValue === 'Three month') {
      const newAxisdata = ['Jul', 'Aug', 'Sep', 'Oct'];
      this.trendConversionOption.xAxis[0].data = newAxisdata;
      const StateminValues = [40.6, 45, 49, 55];
      const StatemaxValues = [46, 47, 50, 60];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendConversionOption.series[0].data = newData;
      this.trendConversionApprovalChart.setOption(this.trendConversionOption);
    }
    else{
      const newAxisdata = [ 'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
    ];
      this.trendConversionOption.xAxis[0].data = newAxisdata;
      const StateminValues = [40.5, 43, 45.5,46,48,55];
      const StatemaxValues = [43, 45, 47,47.5,50,60];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendConversionOption.series[0].data = newData;
      this.trendConversionApprovalChart.setOption(this.trendConversionOption);
    }
  }

  TrendgenerateFinancialTatRandomdata(selectedValue: string) {
    if (selectedValue === 'Three month') {
      const newAxisdata = ['Jul', 'Aug', 'Sep', 'Oct'];
      this.trendFinancialTatOption.xAxis[0].data = newAxisdata;
      const StateminValues = [55, 60, 64, 74];
      const StatemaxValues = [60, 67, 78, 85];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendFinancialTatOption.series[0].data = newData;
      this.trendFinancialTatApprovalChart.setOption(this.trendFinancialTatOption);
    }
    else{
      const newAxisdata = [ 'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
    ];
      this.trendFinancialTatOption.xAxis[0].data = newAxisdata;
      const StateminValues = [55, 60, 64,68,75,80];
      const StatemaxValues = [60, 67, 78,83,90,95];

      const newData = StateminValues.map((min, index) => {
        const max = StatemaxValues[index];
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.trendFinancialTatOption.series[0].data = newData;
      this.trendFinancialTatApprovalChart.setOption(this.trendFinancialTatOption);
    }
  }
}
