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
 selectedFilter: string = 'November';
  selectedTrendFilter: string = 'Year to Date';
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

  selectedCluster: string = 'All';
  selectedBranch: string = 'All';
  branches: string[] = [];
  clusters: string[] = [];

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
        document.getElementById('financialStateWiseApprovalChart') as HTMLDivElement
      );

      this.SchemeApprovalChart = echarts.init(
        document.getElementById('financialSchemeApproval') as HTMLDivElement
      );

      this.ProductApprovalChart = echarts.init(
        document.getElementById('financialProductApproval') as HTMLDivElement
      );

      this.AverageTicketChart = echarts.init(
        document.getElementById('financial-Average-Ticket-size') as HTMLDivElement
      );

      this.FinancialApprovalTATChart = echarts.init(
        document.getElementById('financial-approval-TAT') as HTMLDivElement
      );

      this.ConversionChart = echarts.init(
        document.getElementById('financialConversion') as HTMLDivElement
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
            return `No. of Files: ${randomAmount}<br> Amount in cr: ${barValue}`;
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
          min: 5,
          max: 45,
          interval: 5,
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
            data: [22, 37, 24, 39, 20, 33],
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
          data: ['All', 'HL', 'LAP', 'BL', 'SBL'],
          axisLabel: {
            interval: 0,
            rotate: 0,
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
          nameGap: 20,
          nameTextStyle: {
            fontWeight: 600,
            fontSize:14,
          },
        },
        series: [
          {
            barWidth: 15,
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
  
              tooltipText = 'No. of files: 1000 <br/> Amount in Cr: 65'  ;
  
            } else if (params.name === 'Top-Up') {
  
              tooltipText = 'No. of files: 700 <br/> Amount in Cr: 15' ;
  
            } else if (params.name === 'Fresh') {
  
              tooltipText = 'No. of files: 800 <br/> Amount in Cr: 20' ;
  
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
              { value: 65, name: 'Fresh', itemStyle: { color: '#F6C342' } },
              { value: 15, name: 'Top-Up', itemStyle: { color: '#6C757D' } },
              { value: 20, name: 'BT', itemStyle: { color: '#198754' } },
            ],
          },
        ],
      };

      this.productApprovalOption = {
        tooltip: {
          trigger: 'item',
          formatter: (params: any) => {

            let tooltipText = '';
  
            if (params.name === 'HL') {
  
              tooltipText = 'No. of files: 1000 <br/> Amount in Cr: 60'  ;
  
            } else if (params.name === 'LAP') {
  
              tooltipText = 'No. of files: 700 <br/> Amount in Cr: 12' ;
  
            } else if (params.name === 'BL') {
  
              tooltipText = 'No. of files: 800 <br/> Amount in Cr: 8' ;
  
            } else if (params.name === 'SBL') {
  
              tooltipText = 'No. of files: 900 <br/> Amount in Cr: 20' ;
  
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
              { value: 60, name: 'HL', itemStyle: { color: '#7C41DA' } },
              { value: 12, name: 'LAP', itemStyle: { color: '#F99B00' } },
              { value: 8, name: 'BL', itemStyle: { color: '#636363' } },
              { value: 20, name: 'SBL', itemStyle: { color: '#0B9DE8' } },
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
          data: ['All', 'HL', 'LAP', 'BL', 'SBL'],
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
          data: ['All', 'HL', 'LAP', 'BL', 'SBL'],
          axisLabel: {
            interval: 0,
            rotate: 0,
            overflow: 'break',
          },
        },
        yAxis: {
          type: 'value',
          min: 1,
          max: 12,
          interval: 2,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
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
        document.getElementById('financialtrendStateApprovalWiseChart') as HTMLDivElement
      );
      this.trendAverageApprovalChart = echarts.init(
        document.getElementById('financial-trend-Average-Ticket-size') as HTMLDivElement
      );

      this.trendFinancialTatApprovalChart = echarts.init(
        document.getElementById(
          'financial-trend-Financial-approval-TAT'
        ) as HTMLDivElement
      );

      this.trendSchemeApprovalChart = echarts.init(
        document.getElementById('financialtrendSchemeApproval') as HTMLDivElement
      );

      this.trendProductApprovalChart = echarts.init(
        document.getElementById('financialtrendProductApproval') as HTMLDivElement
      );

      this.trendConversionApprovalChart = echarts.init(
        document.getElementById('financialtrendConversion') as HTMLDivElement
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
            'PCH',
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
              'Nov'
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
            max: 120,
            interval: 10,
            name: 'Amount  ( in  Rs. Crore )',
            nameLocation: 'middle',
            nameGap: 25,
            nameTextStyle: {
              fontWeight: 600,
              fontSize:14,
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
                opacity: 0.5, // Reduce opacity on hover to make it semi-transparent
              },
            },
            data: [12, 15, 25, 30, 35, 45, 55,56],
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
            data: [35, 45, 47, 50, 55, 67, 77,78],
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
            data: [37, 46, 48, 52, 57, 69, 75,76],
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
            data: [39, 48, 50, 55, 60, 70, 80,82],
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
            data: [40, 50, 53, 58, 63, 73, 79,81],
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
            data: [43, 54, 59, 62, 67, 85, 90,92],
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
              'Nov'
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
            max: 120,
            interval: 10,
            name: 'Amount ( in Rs. Crore )',
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
            data: [12, 15, 25, 30, 35, 45, 55,57],
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
            data: [30, 35, 45, 50, 58, 65, 70,72],
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
            data: [37, 46, 48, 52, 57, 69, 74,72],
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
            data: [39, 48, 50, 55, 60, 70, 75,77],
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
          data: ['All','HL', 'LAP', 'BL', 'SBL'],
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
              'Nov'
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
            max: 15,
            interval: 1,
          },
        ],
        series: [
          {
            name: 'All',
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
            data: [11.0, 11.2, 11.3, 12.3, 12.5, 12.7, 13,13.5],
          },
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
            data: [11.1, 11.5, 11.9, 12, 12.3, 12.5, 12.9,13],
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
            data: [11.3, 11.6, 12, 12.4, 12.6, 12.9, 13,13.3],
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
            data: [11.5, 11.9, 13.4, 13.9, 14, 14.2, 14.6,14.8],
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
            data: [11.7, 12, 12.5, 13, 13.3, 13.9, 14.9,15],
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
          data: ['All','HL', 'LAP', 'BL', 'SBL'],
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
              'Nov'
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
            name: 'All',
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
            data: [1.4, 2.4, 5.4, 7.1, 8.4, 8.5, 9,9.5],
          },
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
            data: [2, 3, 5, 7, 8, 8.5, 9,9.7],
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
            data: [3, 3.5, 4, 4.5, 5, 5.5, 6,6.5],
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
            data: [4, 5, 6, 7, 8, 9, 10,10.2],
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
            data: [5, 6, 7, 8, 9, 10, 11,11.4],
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
          data: ['All','HL', 'LAP', 'BL', 'SBL'],
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
            axisLabel: {
              formatter: '{value}',
              margin: 30, // Add a margin of 15 pixels above the labels
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
              'Nov'
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
            name: 'All',
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
            data: [41.5, 42, 42.9, 43, 43.5, 44, 44.5,45],
          },
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
            data: [42.5, 43, 43.9, 44, 44.5, 45, 45.5,46],
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
            data: [42.6, 43, 44, 44.4, 44.9, 45.3, 45.7,46],
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
            data: [42.7, 43.3, 44.5, 44.9, 45.1, 45.6, 46,46.6],
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
            data: [42.9, 43.7, 44.6, 45, 45.8, 46, 47,47.6],
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
    (selectedValue);
    this.generateStateRandomData();
    this.generateAverageStateRandomData();
    this.generateSchemeRandomData();
    this.generateProductRandomData();
    this.generateConversionRandomData();
    this.generateFinancialTatRandomdata();
  }

  onStateChange(selectedValue: string) {
   this.onRegionChange(selectedValue);
   
  }

  generateRandomAmount(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }

  generateStateRandomData() {
    const minValues = [15, 35, 30, 27, 37, 30];
    const maxValues = [25, 40, 35, 30, 40, 37];

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
    (selectedValue)
    this.trendStateregionchange(selectedValue);
    
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
    if (selectedValue === 'Three months') {
      const newAxisdata = [ 'Sep', 'Oct','Nov'];
      this.trendStateApprovalOption.xAxis[0].data = newAxisdata;
     

      const StateminValues = [
        [ 35, 45, 55],
        [ 55, 67, 77],
        [ 57, 69, 75],
        [60, 70, 80],
        [ 63, 73, 79],
        [ 67, 85, 90]
      ];

      const StatemaxValues = [
        [ 37, 47, 57],
        [ 57, 69, 79],
        [ 59, 71, 77],
        [ 62, 72, 82],
        [ 65, 75, 81],
        [ 69, 87, 92]
      ];

      this.trendStateApprovalOption.series.forEach((series: any, index: any) => {
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
      this.trendStateApprovalChart.setOption(this.trendStateApprovalOption);
    }
    else{
      const newAxisdata = [ 'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov'
    ];
      this.trendStateApprovalOption.xAxis[0].data = newAxisdata;
      const StateminValues = [
        [12, 15, 25, 30, 35, 45, 55,56],
        [35, 45, 47, 50, 55, 67, 77,78],
        [37, 46, 48, 52, 57, 69, 75,76],
        [39, 48, 50, 55, 60, 70, 80,82],
        [40, 50, 53, 58, 63, 73, 79,81],
        [43, 54, 59, 62, 67, 85, 90,92]
      ];

      const StatemaxValues = [
        [14, 17, 27, 32, 37, 47, 57,58],
        [37, 47, 49, 52, 57, 69, 79,80],
        [39, 48, 50, 54, 59, 71, 77,79],
        [41, 50, 52, 57, 62, 72, 82,84],
        [42, 52, 55, 60, 65, 75, 81,83],
        [45, 56, 61, 64, 69, 87, 92,94]
      ];

      this.trendStateApprovalOption.series.forEach((series: any, index: any) => {
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
      this.trendStateApprovalChart.setOption(this.trendStateApprovalOption);
    }
  }

  TrendgenerateAverageStateRandomData(selectedValue: string) {
    if (selectedValue === 'Three months') {
      const newAxisdata = ['Sep', 'Oct','Nov'];
      this.trendAverageApprovalOption.xAxis[0].data = newAxisdata;
      const StateminValues = [
        [ 12.7, 13,13.5],
        [ 12.5, 12.9,13],
        [ 12.9, 13,13.3],
        [ 14.2, 14.6,14.8],
        [ 13.9, 14.9,15],
      ];

      const StatemaxValues = [
        [ 12.9, 13.7,13.7],
        [ 12.7, 13,13.4],
        [ 13.2, 13.3,13.4],
        [ 14.5, 14.7,15],
        [14, 15,15],
      ];

      this.trendAverageApprovalOption.series.forEach((series: any, index: any) => {
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
      this.trendAverageApprovalChart.setOption(this.trendAverageApprovalOption);
    }
    else{
      const newAxisdata = [ 'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov'
    ];
      this.trendAverageApprovalOption.xAxis[0].data = newAxisdata;
      const StateminValues = [
        [11.0, 11.2, 11.3, 12.3, 12.5, 12.7, 13,13.5],
        [11.1, 11.5, 11.9, 12, 12.3, 12.5, 12.9,13],
        [11.3, 11.6, 12, 12.4, 12.6, 12.9, 13,13.3],
        [11.5, 11.9, 13.4, 13.9, 14, 14.2, 14.6,14.8],
        [11.7, 12, 12.5, 13, 13.3, 13.9, 14.7,14.9],
      ];

      const StatemaxValues = [
        [11.2, 11.5, 11.6, 12.7, 12.9, 12.9, 13.7,13.7],
        [11.3, 11.7, 12.3, 12.4, 12.5, 12.7, 13,13.4],
        [11.4, 11.7, 12.3, 12.5, 12.8, 13.2, 13.3,13.4],
        [11.7, 12, 13.6, 14, 14.3, 14.5, 14.7,15],
        [11.9, 12.3, 12.7, 13.3, 13.6,14, 14.8,15],
      ];

      this.trendAverageApprovalOption.series.forEach((series: any, index: any) => {
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

      this.trendAverageApprovalChart.setOption(this.trendAverageApprovalOption);
    }
  }
  TrendgenerateSchemeRandomData(selectedValue: string) {
    if (selectedValue === 'Three months') {
      const newAxisdata = [ 'Sep', 'Oct','Nov'];
      this.trendSchemeApprovalOption.xAxis[0].data = newAxisdata;
      const StateminValues = [
        [ 45, 55,57],
        [ 65, 70,72],
        [ 69, 74,76],
        
      ];
  
      const StatemaxValues = [
        [ 47, 57,59],
        [ 67, 72,74],
        [ 71, 76,78],
        
      ];

      this.trendSchemeApprovalOption.series.forEach((series: any, index: any) => {
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
      this.trendSchemeApprovalChart.setOption(this.trendSchemeApprovalOption);
    }
    else{
      const newAxisdata = [ 'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov'
    ];
      this.trendSchemeApprovalOption.xAxis[0].data = newAxisdata;
      const StateminValues = [
        [12, 15, 25, 30, 35, 45, 55,57],
        [30, 35, 45, 50, 58, 65, 70,72],
        [37, 46, 48, 52, 57, 69, 74,76],
       
      ];
  
      const StatemaxValues = [
        [14, 17, 27, 32, 37, 47, 57,59],
        [32, 37, 47, 52, 60, 67, 72,74],
        [39, 48, 50, 54, 59, 71, 76,78],
      
      ];

      this.trendSchemeApprovalOption.series.forEach((series: any, index: any) => {
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
      this.trendSchemeApprovalChart.setOption(this.trendSchemeApprovalOption);
    }
  }

  TrendgenerateProductRandomData(selectedValue: string) {
    if (selectedValue === 'Three months') {
      const newAxisdata = [ 'Sep', 'Oct', 'Nov'];
      this.trendProductApprovalOption.xAxis[0].data = newAxisdata;
      const StateminValues = [
        [ 45, 55,57],
        [ 65, 70,72],
        [ 69, 74,76],
        [ 70, 75,77],
      ];
  
      const StatemaxValues = [
        [ 47, 57,59],
        [ 67, 72,74],
        [ 71, 76,78],
        [ 72, 77,79],
      ];

      this.trendProductApprovalOption.series.forEach((series: any, index: any) => {
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
      this.trendProductApprovalChart.setOption(this.trendProductApprovalOption);
    }
    else{
      const newAxisdata = [ 'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov'
    ];
    this.trendProductApprovalOption.xAxis[0].data = newAxisdata;
    const StateminValues = [
      [12, 15, 25, 30, 35, 45, 55,57],
      [30, 35, 45, 50, 58, 65, 70,72],
      [37, 46, 48, 52, 57, 69, 74,76],
      [39, 48, 50, 55, 60, 70, 75,77],
    ];

    const StatemaxValues = [
      [14, 17, 27, 32, 37, 47, 57,59],
      [32, 37, 47, 52, 60, 67, 72,74],
      [39, 48, 50, 54, 59, 71, 76,78],
      [41, 50, 52, 57, 62, 72, 77,79],
    ];

    this.trendProductApprovalOption.series.forEach((series: any, index: any) => {
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
      this.trendProductApprovalChart.setOption(this.trendProductApprovalOption);
    }
  }
  TrendgenerateConversionRandomData(selectedValue: string) {
    if (selectedValue === 'Three months') {
      const newAxisdata = ['Sep', 'Oct','Nov'];
      this.trendConversionOption.xAxis[0].data = newAxisdata;
      const StateminValues = [
        [44, 44.5, 45],
        [45, 45.5, 46],
        [45.3, 45.7, 46],
        [45.6, 46, 46.6],
        [46, 47, 47.6],
      ];

      const StatemaxValues = [
        [44.4, 44.8, 45.5],
        [45.3, 45.7, 46.3],
        [45.5, 45.9, 46.4],
        [45.8, 46.3, 46.8],
        [46.4, 47.4, 47.8],
      ];

      this.trendConversionOption.series.forEach((series: any, index: any) => {
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
      'Nov'
    ];
      this.trendConversionOption.xAxis[0].data = newAxisdata;
      const StateminValues = [
        [41.5, 42, 42.9, 43, 43.5, 44, 44.5, 45],
        [42.5, 43, 43.9, 44, 44.5, 45, 45.5, 46],
        [42.6, 43, 44, 44.4, 44.9, 45.3, 45.7, 46],
        [42.7, 43.3, 44.5, 44.9, 45.1, 45.6, 46, 46.6],
        [42.9, 43.7, 44.6, 45, 45.8, 46, 47, 47.6],
      ];

      const StatemaxValues = [
        [41.7, 42.4, 43, 43.3, 43.7, 44.4, 44.8, 45.5],
        [42.5, 43.4, 45, 44.3, 44.7, 45.3, 45.7, 46.3],
        [42.8, 43.4, 44.5, 44.8, 45, 45.5, 45.9, 46.4],
        [42.9, 43.6, 44.7, 45, 45.3, 45.8, 46.3, 46.8],
        [43, 43.9, 44.8, 45.4, 46, 46.4, 47.4, 47.8],
      ];
  
      this.trendConversionOption.series.forEach((series: any, index: any) => {
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
      this.trendConversionApprovalChart.setOption(this.trendConversionOption);
    }
  }

  TrendgenerateFinancialTatRandomdata(selectedValue: string) {
    if (selectedValue === 'Three months') {
      const newAxisdata = ['Sep', 'Oct','Nov'];
      this.trendFinancialTatOption.xAxis[0].data = newAxisdata;
      const StateminValues = [
        [ 8.5, 9,9.7],
        [ 5.5, 6,6.5],
        [9, 10,10.2],
        [10, 11,11.4],
      ];
  
      const StatemaxValues = [
        [ 8.9, 9.5,10],
        [ 5.7, 6.4,6.9],
        [ 9.3, 10.3,10.7],
        [ 10.5, 11.4,11.9],
      ];

      this.trendFinancialTatOption.series.forEach((series: any, index: any) => {
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
      'Nov'
    ];
      this.trendFinancialTatOption.xAxis[0].data = newAxisdata;
      const StateminValues = [
        [2, 3, 5, 7, 8, 8.5, 9,9.7],
        [3, 3.5, 4, 4.5, 5, 5.5, 6,6.5],
        [4, 5, 6, 7, 8, 9, 10,10.2],
        [5, 6, 7, 8, 9, 10, 11,11.4],
      ];
  
      const StatemaxValues = [
        [2.3, 3.4, 5.5, 7.5, 8.6, 8.9, 9.5,10],
        [3.4, 3.5, 4.4, 4.7, 5.4, 5.7, 6.4,6.9],
        [4.2, 5.5, 6.5, 7.3, 8.4, 9.3, 10.3,10.7],
        [5.5, 6.5, 7.4, 8.5, 9.5, 10.5, 11.4,11.9],
      ];
  
      this.trendFinancialTatOption.series.forEach((series: any, index: any) => {
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
      this.trendFinancialTatApprovalChart.setOption(this.trendFinancialTatOption);
    }
  }
  onRegionChange(region: string) {
    this.selectedState = region;
    this.clusters = this.getClusters(region);
    // this.selectedCluster = this.clusters[0] || '';
    this.branches = [];
    this.generateStateRandomData();
    this.generateAverageStateRandomData();
    this.generateSchemeRandomData();
    this.generateProductRandomData();
    this.generateConversionRandomData();
    this.generateFinancialTatRandomdata();
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
   //  this.selectedBranch = this.branches[0] || '';
    this.branches = this.getBranches(this.selectedState, cluster);
    this.generateStateRandomData();
    this.generateAverageStateRandomData();
    this.generateSchemeRandomData();
    this.generateProductRandomData();
    this.generateConversionRandomData();
    this.generateFinancialTatRandomdata();
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
    this.TrendgenerateStateRandomData(cluster);
    this.TrendgenerateAverageStateRandomData(cluster);
    this.TrendgenerateSchemeRandomData(cluster);
    this.TrendgenerateProductRandomData(cluster);
    this.TrendgenerateConversionRandomData(cluster);
    this.TrendgenerateFinancialTatRandomdata(cluster);
  }

  trendStateregionchange(region: string){
    this.selectedState = region;
    this.clusters = this.getClusters(region);
   // this.selectedCluster = this.clusters[0] || '';
    this.branches = [];
    this.TrendgenerateStateRandomData(region);
    this.TrendgenerateAverageStateRandomData(region);
    this.TrendgenerateSchemeRandomData(region);
    this.TrendgenerateProductRandomData(region);
    this.TrendgenerateConversionRandomData(region);
    this.TrendgenerateFinancialTatRandomdata(region);
  }

 trendonClusterChange(cluster: string) {
    this.selectedCluster = cluster;
    // this.selectedBranch = this.branches[0] || '';
    this.branches = this.getBranches(this.selectedState, cluster);
    this.generateStateRandomData();
    this.generateAverageStateRandomData();
    this.generateSchemeRandomData();
    this.generateProductRandomData();
    this.generateConversionRandomData();
    this.generateFinancialTatRandomdata();
  }

}
