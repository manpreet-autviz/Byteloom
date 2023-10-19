import { Component } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-rejection-analysis',
  templateUrl: './rejection-analysis.component.html',
  styleUrls: ['./rejection-analysis.component.scss'],
})
export class RejectionAnalysisComponent {
  ConversionStates: string[] = [
    'Pan India',
    'Punjab',
    'Haryana',
    'NCR',
    'Rajasthan',
    'Gujarat',
    'MP',
    'Maharashtra',
  ];
  ConversionFilters: string[] = [
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    // 'Select custom'
  ];

  selectedConversionState: string = 'Pan India';
  selectedConversionFilter: string = 'September';

  RejectionStates: string[] = [
    'Pan India',
    'Punjab',
    'Haryana',
    'NCR',
    'Rajasthan',
    'Gujarat',
    'MP',
    'Maharashtra',
  ];
  RejectionFilters: string[] = [
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    // 'Select custom'
  ];

  selectedRejectionState: string = 'Pan India';
  selectedRejectionFilter: string = 'September';

  StateChart!: echarts.ECharts;
  StateLoginChart!: echarts.ECharts;
  ProductConversionChart!: echarts.ECharts;
  StateRejectionChart!: echarts.ECharts;
  AnalysisRejectionChart!: echarts.ECharts;
  ProductRejectionChart!: echarts.ECharts;

  StateOption: any;
  StateLoginOption: any;
  ProductConversionOption: any;
  StateRejectionOption: any;
  AnalysisRejectionOption: any;
  ProductRejectionOption: any;

  ngAfterViewInit(): void {
    this.initializeChart();
  }

  initializeChart() {
    this.StateChart = echarts.init(
      document.getElementById('state-conversion') as HTMLDivElement
    );

    this.StateLoginChart = echarts.init(
      document.getElementById('state-login') as HTMLDivElement
    );

    this.ProductConversionChart = echarts.init(
      document.getElementById('product-conversion') as HTMLDivElement
    );

    this.StateRejectionChart = echarts.init(
      document.getElementById('state-rejection') as HTMLDivElement
    );

    this.ProductRejectionChart = echarts.init(
      document.getElementById('product-Rejection') as HTMLDivElement
    );

    this.AnalysisRejectionChart = echarts.init(
      document.getElementById('rejection-analysis') as HTMLDivElement
    );

    this.StateOption = {
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {

          let tooltipText = '';
          console.log(params , "params")

          if (params.name === 'Login to disbursal') {

            tooltipText = 'Login: 100 <br/> Approved:30 Percentage : 70%'  ;

          } else if (params.name === 'Financial approval to disbursal') {

            tooltipText = 'Login: 100 <br/> Approved:70 Percentage : 30%' ;

          } else if (params.name === 'Login to financial approval') {

            tooltipText = 'Login: 100 <br/> Approved:25 Percentage : 75%' ;

          }

          return tooltipText;

        }, 
      },
      xAxis: {
        type: 'category',
        nameGap: 25,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false, // Hide tick lines
        },
        data: [
          'Login to disbursal',
          'Financial approval to disbursal',
          'Login to financial approval',
        ],
        axisLabel: {
          interval: 0,
          rotate: -18,
          overflow: 'break',
        },
      },
      yAxis: {
        type: 'value',
        min: 100,
        max: 10,
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
          fontSize:14,
          
        },
   
      },
      series: [
        {
          barWidth: 30,
          data: [70, 30, 75],
          type: 'bar',
          itemStyle: {
            color: '#6096B4',
          },
        },
      ],
    };

    this.StateLoginOption = {
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'shadow',
        },
        formatter: (params: any) => {

          let tooltipText = '';
          if (params.seriesName === 'Login to financial approval') {

            tooltipText = 'Login: 1000 <br/> Approval : 60%'  ;

          } else if (params.seriesName === 'Financial approval to disbursal') {

            tooltipText = 'Login: 600 <br/> Approval : 70%' ;

          } else if (params.seriesName === 'Login to disbursal') {

            tooltipText = 'Login: 400 <br/> Percentage : 55%' ;

          }

          return tooltipText;

        },
        
      },
      legend: {
        data: [
          'Login to financial approval',
          'Financial approval to disbursal',
          'Login to disbursal',
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
        axisTick: {
          show: false, // Hide tick lines
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
          'PCH',
          'Pan India',
        ],
      },

      series: [
        {
          name: 'Login to financial approval',
          type: 'bar',
          data: [41, 40, 40, 35, 50, 40, 60],
          itemStyle: {
            color: '#1A5F7A',
            borderRadius: 15,
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}%',
          },
        },
        {
          name: 'Financial approval to disbursal',
          type: 'bar',
          data: [29, 30, 28, 45, 32, 45, 70],
          itemStyle: {
            color: '#419197',
            borderRadius: 15,
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}%',
          },
        },
        {
          name: 'Login to disbursal',
          type: 'bar',
          data: [22, 20, 20, 20, 20, 30, 55],
          itemStyle: {
            color: '#78D6C6',
            borderRadius: 15,
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}% ',
          },
        },
      ],
    };

    this.ProductConversionOption = {
      title: {},
      responsive: true,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#DBA39A',
           
          },
        },
        formatter: (params: any) => {
          const dataIndex = params[0].dataIndex;
          const login = [100, 800, 600, 450][dataIndex];
          const rejection =[290, 350, 300, 450][dataIndex];
          const percent = [60, 50, 48, 45];
          const percentage = percent[dataIndex];

          // Create the tooltip content with the actual value and random amount
          return `Login: ${login}<br> Rejection: ${rejection} <br/> %: ${percentage}`;
        },
      },
      // legend: {
      //   data: ['HL', 'BL', 'LAP', 'SBL'],
      // },
    
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
            show: false, // Hide tick lines
          },
          boundaryGap: false,
          data: ['HL', 'BL', 'LAP', 'SBL'],
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: false,
          },
          splitLine:{
            show:false
          },
          min: 10,
          max: 100,
          interval: 10,
          name: 'Percentage %',
          nameLocation: 'middle',
          nameGap: 23,
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
          color:'#DBA39A',

          areaStyle: {
            opacity: 0,
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 0.5, // Reduce opacity on hover to make it semi-transparent
            },
          },
          data: [60, 50, 48, 45],
        },

      ],
    };

    this.StateRejectionOption = {
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: [],
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
        axisTick: {
          show: false, // Hide tick lines
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
          'PCH',
          'Pan India',
        ],
      },

      series: [
        {
          name: 'Login to financial approval (%) ',
          type: 'bar',
          barWidth: '25%',
          data: [41, 41, 42, 40, 35, 50, 45],
          label: {
            show: true,
            position: 'right',
            formatter: '{c}%',
          },
          itemStyle: {
            color: '#DE8F5F',
            borderRadius: 15,
          },
        },
      ],
    };

    this.ProductRejectionOption = {
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
        formatter: (params: any) => {
          const dataIndex = params[0].dataIndex;
          const login = [100, 800, 600, 450][dataIndex];
          const rejection =[290, 350, 300, 450][dataIndex];
          const percent = [29, 35, 30, 45];
          const percentage = percent[dataIndex];

          // Create the tooltip content with the actual value and random amount
          return `Login: ${login}<br> Rejection: ${rejection} <br/> %: ${percentage}`;
        },
      },
      legend: {
        data: [],
      },
     
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false, // Hide tick lines
          },
          type: 'category',
          boundaryGap: false,
          data: ['HL', 'BL', 'LAP', 'SBL'],
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
          name: 'Percentage %',
          nameLocation: 'middle',
          nameGap: 25,
          splitLine: {
            show: false,
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
          color:'#F0997D',

          areaStyle: {
            opacity: 0,
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 0.5, // Reduce opacity on hover to make it semi-transparent
            },
          },
          data: [29, 35, 30, 45,],
        },
      ],
    };

    this.AnalysisRejectionOption = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '2%',
        left: 'center',
      },
      series: [
        {
          type: 'pie',
          radius: ['30%', '80%'],
          avoidLabelOverlap: false,
          top: '6%',
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
              name: 'Repayment issue',
              itemStyle: {
                color: '#7D6E83',
              },
            },
            {
              value: 8,
              name: 'End use',
              itemStyle: {
                color: '#A75D5D',
              },
            },
            {
              value: 10,
              name: 'Income Issue',
              itemStyle: {
                color: '#5D8F68',
              },
            },
            {
              value: 20,
              name: 'Intention issue',
              itemStyle: {
                color: '#DF7861',
              },
            },
           
            {
              value: 20,
              name: 'Legal / Technical',
              itemStyle: {
                color: '#ECB390',
              },
            },
            {
              value: 10,
              name: 'Duplicate lead',
              itemStyle: {
                color: '#AD8B73',
              },
            },
            {
              value: 10,
              name: 'Customer not interested',
              itemStyle: {
                color: '#9D76C1',
              },
            },
            
           
          ],
        },
      ],
    };

    this.StateChart.setOption(this.StateOption);
    this.StateLoginChart.setOption(this.StateLoginOption);
    this.ProductConversionChart.setOption(this.ProductConversionOption);
    this.StateRejectionChart.setOption(this.StateRejectionOption);
    this.ProductRejectionChart.setOption(this.ProductRejectionOption);
    this.AnalysisRejectionChart.setOption(this.AnalysisRejectionOption);
  }

  onConversionFilterChange(selectedValue: string) {
    this.stateConversionRandomValues();
    this.stateLoginRandomValues();
    this.ProductConversionRandomValues();
  }

  onConversionStateChange(selectedValue: string) {
    this.stateConversionRandomValues();
    this.stateLoginRandomValues();
    this.ProductConversionRandomValues();
  }

  private getRandomValue(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }

  stateConversionRandomValues() {
    const minValues = [15, 32, 50, 65];
    const maxValues = [30, 45, 60, 75];

    const newData = minValues.map((min, index) => {
      const max = maxValues[index];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
    this.StateOption.series[0].data = newData;
    this.StateChart.setOption(this.StateOption);
  }
  stateLoginRandomValues() {
    const loginToFinancialApprovalMin = [39, 39, 39, 39, 39, 39, 39, 75];
    const loginToFinancialApprovalMax = [40, 40, 40, 40, 40, 40, 40, 80];
    const financialApprovalToDisbursalMin = [63, 63, 63, 63, 63, 63, 63, 222];
    const financialApprovalToDisbursalMax = [65, 65, 65, 65, 65, 65, 65, 225];
    const loginToDisbursalMin = [
      1900, 1900, 1900, 1900, 1900, 1900, 1900, 5900,
    ];
    const loginToDisbursalMax = [
      2000, 2000, 2000, 2000, 2000, 2000, 2000, 6000,
    ];

    // Generate random values for each series
    const loginToFinancialApprovalValues = this.generateRandomValues(
      loginToFinancialApprovalMin,
      loginToFinancialApprovalMax
    );
    const financialApprovalToDisbursalValues = this.generateRandomValues(
      financialApprovalToDisbursalMin,
      financialApprovalToDisbursalMax
    );
    const loginToDisbursalValues = this.generateRandomValues(
      loginToDisbursalMin,
      loginToDisbursalMax
    );

    // Update the data property of the series objects
    this.StateLoginOption.series[0].data = loginToFinancialApprovalValues;
    this.StateLoginOption.series[1].data = financialApprovalToDisbursalValues;
    this.StateLoginOption.series[2].data = loginToDisbursalValues;
    this.StateLoginChart.setOption(this.StateLoginOption);
  }

  ProductConversionRandomValues() {
    const StateminValues = [55, 60, 64, 68, 75];
    const StatemaxValues = [60, 67, 78, 83, 90];

    const newData = StateminValues.map((min, index) => {
      const max = StatemaxValues[index];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
    this.ProductConversionOption.series[0].data = newData;
    this.ProductConversionChart.setOption(this.ProductConversionOption);
  }

  onRejectionFilterChange(selectedValue: string) {
    this.stateRejectionRandomValues();
    this.ProductRejectionRandomValues();
    this.rejectionAnalysisRandomValues();
  }

  onRejectionStateChange(selectedValue: string) {
    this.stateRejectionRandomValues();
    this.ProductRejectionRandomValues();
    this.rejectionAnalysisRandomValues();
  }
  stateRejectionRandomValues() {
    const loginToFinancialApprovalMin = [39, 39, 39, 39, 39, 39, 39, 75];
    const loginToFinancialApprovalMax = [40, 40, 40, 40, 40, 40, 40, 80];
    const financialApprovalToDisbursalMin = [63, 63, 63, 63, 63, 63, 63, 222];
    const financialApprovalToDisbursalMax = [65, 65, 65, 65, 65, 65, 65, 225];
    const loginToDisbursalMin = [
      1900, 1900, 1900, 1900, 1900, 1900, 1900, 5900,
    ];
    const loginToDisbursalMax = [
      2000, 2000, 2000, 2000, 2000, 2000, 2000, 6000,
    ];

    // Generate random values for each series
    const loginToFinancialApprovalValues = this.generateRandomValues(
      loginToFinancialApprovalMin,
      loginToFinancialApprovalMax
    );
    const financialApprovalToDisbursalValues = this.generateRandomValues(
      financialApprovalToDisbursalMin,
      financialApprovalToDisbursalMax
    );
    const loginToDisbursalValues = this.generateRandomValues(
      loginToDisbursalMin,
      loginToDisbursalMax
    );

    // Update the data property of the series objects
    this.StateRejectionOption.series[0].data = loginToFinancialApprovalValues;
    this.StateRejectionOption.series[1].data =
      financialApprovalToDisbursalValues;
    this.StateRejectionOption.series[2].data = loginToDisbursalValues;

    this.StateRejectionChart.setOption(this.StateRejectionOption);
  }
  ProductRejectionRandomValues() {
    const StateminValues = [55, 60, 64, 68, 75];
    const StatemaxValues = [60, 67, 78, 83, 90];

    const newData = StateminValues.map((min, index) => {
      const max = StatemaxValues[index];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
    this.ProductRejectionOption.series[0].data = newData;
    this.ProductRejectionChart.setOption(this.ProductRejectionOption);
  }
  rejectionAnalysisRandomValues() {
    const newData = [
      { value: this.getRandomValue(30, 35), name: 'Repayment issue' },
      { value: this.getRandomValue(15, 20), name: 'Intention issue' },
      { value: this.getRandomValue(7, 10), name: 'Income Issue' },
      { value: this.getRandomValue(17, 20), name: 'Legal / Technical' },
      { value: this.getRandomValue(7, 10), name: 'Customer not interested' },
      { value: this.getRandomValue(6, 8), name: 'End use' },
      { value: this.getRandomValue(6, 10), name: 'Duplicate lead' },
    ];

    // Update the pie chart data with the new random values
    this.AnalysisRejectionOption.series[0].data = newData;
    this.AnalysisRejectionChart.setOption(this.AnalysisRejectionOption);
  }

  generateRandomValues(minArray: number[], maxArray: number[]): number[] {
    if (minArray.length !== maxArray.length) {
      throw new Error('minArray and maxArray must have the same length');
    }

    return minArray.map((min, index) => {
      const max = maxArray[index];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
  }
}
