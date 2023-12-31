import { Component, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
declare var $: any;
@Component({
  selector: 'app-rejection-analysis',
  templateUrl: './rejection-analysis.component.html',
  styleUrls: ['./rejection-analysis.component.scss'],
})
export class RejectionAnalysisComponent {
  @ViewChild('RepaymentissueModal')
  RepaymentissueElement!: ElementRef;
  @ViewChild('IncomeIssue')
  IncomeIssueElement!: ElementRef;
  @ViewChild('Intentionissue')
  IntentionissueElement!: ElementRef;
  @ViewChild('LegalTechnical')
  LegalTechnicalElement!: ElementRef;
  @ViewChild('Duplicatelead')
  DuplicateleadElement!: ElementRef;
  @ViewChild('CNI')
  CNIElement!: ElementRef;
  ConversionStates: string[] = [
    'Pan India',
    'PCH',
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
    'October',
    'November',
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
  repaymentment: boolean = true;

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
          if (params.name === 'Login to disb.') {
            tooltipText =
              'Login: 100 <br/> Disbursed:30 <br/> Percentage : 70%';
          } else if (params.name === 'FA to disb.') {
            tooltipText =
              'Approved: 100 <br/> Disbursed:70 <br/> Percentage : 30%';
          } else if (params.name === 'Login to FA') {
            tooltipText = 'Login: 100 <br/> Approval:25 <br/> Percentage : 75%';
          }

          return tooltipText;
        },
      },
      xAxis: {
        type: 'category',
        nameGap: 23,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false, // Hide tick lines
        },
        data: ['Login to disb.', 'FA to disb.', 'Login to FA'],
        axisLabel: {
          interval: 0,
          rotate: 0,
          overflow: 'break',
          whiteSpace: 'pre-wrap',
          formatter: function (value: any) {
            // Set a maximum length for the label text
            const maxLabelLength = 15; // Adjust this as needed

            // If the label text is longer than the maximum length, split it into multiple lines
            if (value.length > maxLabelLength) {
              return value
                .match(new RegExp('.{1,' + maxLabelLength + '}', 'g'))
                .join('\n');
            } else {
              return value;
            }
          },
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
        nameGap: 20,
        nameTextStyle: {
          fontWeight: 600,
          fontSize: 14,
        },
      },
      series: [
        {
          barWidth: 20,
          data: [48, 85, 55],
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
          if (params.seriesName === 'Login to FA') {
            tooltipText = 'Login: 1000 <br/> Approval : 60';
          } else if (params.seriesName === 'FA to disb.') {
            tooltipText = 'Approved: 600 <br/> Disbursed : 70';
          } else if (params.seriesName === 'Login to disb.') {
            tooltipText = 'Login: 400 <br/> Disbursal : 55';
          }

          return tooltipText;
        },
      },
      legend: {
        data: ['Login to disb.', 'FA to disb.', 'Login to FA'],
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
          name: 'Login to disb.',
          type: 'bar',
          data: [44, 49, 48, 50, 47, 44, 48],
          itemStyle: {
            color: '#78D6C6',
            borderRadius: 15,
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}% ',
            fontSize: 9,
          },
        },
        {
          name: 'FA to disb.',
          type: 'bar',
          data: [79, 81, 85, 86, 80, 75, 85],
          itemStyle: {
            color: '#419197',
            borderRadius: 15,
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}%',
            fontSize: 9,
          },
        },
        {
          name: 'Login to FA',
          type: 'bar',
          data: [49, 53, 56, 55, 50, 48, 55],
          itemStyle: {
            color: '#1A5F7A',
            borderRadius: 15,
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}%',
            fontSize: 9,
          },
        },
      ],
    };

    this.ProductConversionOption = {
      title: {},
      responsive: true,
      tooltip: {
        trigger: 'axis',

        formatter: (params: any) => {
          const dataIndex = params[0].dataIndex;
          const login = [100, 800, 600, 450][dataIndex];
          const rejection = [290, 350, 300, 450][dataIndex];
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
          axisLabel: {
            formatter: '{value}',
            margin: 30, // Add a margin of 15 pixels above the labels
          },
          boundaryGap: true,
          data: ['HL', 'BL', 'LAP', 'SBL'],
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
          nameGap: 23,
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
          color: '#DBA39A',

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
        formatter: function (params: any) {
          const dataIndex = params.dataIndex;
          const barValue = params.value;
          const randomAmounts = [350, 145, 167, 370, 290, 300, 320, 550];
          const randomAmount = randomAmounts[dataIndex];
          return `Approval:${barValue}</br> Login:${randomAmount}`;
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
          type: 'bar',
          barWidth: '25%',
          data: [37, 30, 32, 33, 38, 41, 35],
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

        formatter: (params: any) => {
          const dataIndex = params[0].dataIndex;
          const login = [100, 800, 600, 450][dataIndex];
          const rejection = [290, 350, 300, 450][dataIndex];
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
          axisLabel: {
            formatter: '{value}',
            margin: 30, // Add a margin of 15 pixels above the labels
          },
          type: 'category',
          boundaryGap: true,
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
          nameGap: 23,
          splitLine: {
            show: false,
          },
          nameTextStyle: {
            fontWeight: 600,
            fontSize: 14,
          },
        },
      ],
      series: [
        {
          type: 'line',
          color: '#F0997D',

          areaStyle: {
            opacity: 0,
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 0.5, // Reduce opacity on hover to make it semi-transparent
            },
          },
          data: [29, 35, 30, 45],
        },
      ],
    };

    this.AnalysisRejectionOption = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '-1%',
        left: 'center',
      },
      series: [
        {
          type: 'pie',
          radius: ['30%', '70%'],
          avoidLabelOverlap: false,
          top: '10%',

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
              name: 'Repayment issue',
              itemStyle: {
                color: '#7D6E83',
              },
            },
            // {
            //   value: 8,
            //   name: 'End use',
            //   itemStyle: {
            //     color: '#A75D5D',
            //   },
            // },
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
              name: 'CNI',
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
    this.AnalysisRejectionChart.on('click', (params: any) => {
      this.openRepaymentModal(params.name);
    });
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
    const loginToFinancialApprovalMin = [55, 55, 55, 55, 55, 55, 55, 75];
    const loginToFinancialApprovalMax = [60, 60, 60, 60, 60, 60, 60, 80];
    const financialApprovalToDisbursalMin = [29, 29, 29, 29, 29, 29, 29, 70];
    const financialApprovalToDisbursalMax = [32, 32, 32, 32, 32, 65, 32, 72];
    const loginToDisbursalMin = [22, 22, 22, 22, 22, 22, 22, 55];
    const loginToDisbursalMax = [25, 25, 25, 25, 25, 25, 25, 57];

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

  openRepaymentModal(name: string) {
    if (name === 'Repayment issue') {
      const modal = this.RepaymentissueElement.nativeElement;
      if (modal) {
        modal.style.display = 'block';
        modal.style.background = '#0000008a';
        modal.classList.add('show');
      } else {
        console.error('Modal element is not defined.');
      }
    }
    else if (name === 'Income Issue') {
      const modal = this.IncomeIssueElement.nativeElement;
      if (modal) {
        modal.style.display = 'block';
        modal.style.background = '#0000008a';
        modal.classList.add('show');
      } else {
        console.error('Modal element is not defined.');
      }
    }
    else if (name === 'Intention issue') {
      const modal = this.IntentionissueElement.nativeElement;
      if (modal) {
        modal.style.display = 'block';
        modal.style.background = '#0000008a';
        modal.classList.add('show');
      } else {
        console.error('Modal element is not defined.');
      }
    }
    else if (name === 'Legal / Technical') {
      const modal = this.LegalTechnicalElement.nativeElement;
      if (modal) {
        modal.style.display = 'block';
        modal.style.background = '#0000008a';
        modal.classList.add('show');
      } else {
        console.error('Modal element is not defined.');
      }
    }
    else if (name === 'Duplicate lead') {
      const modal = this.DuplicateleadElement.nativeElement;
      if (modal) {
        modal.style.display = 'block';
        modal.style.background = '#0000008a';
        modal.classList.add('show');
      } else {
        console.error('Modal element is not defined.');
      }
    }
    else{
      const modal = this.CNIElement.nativeElement;
      if (modal) {
        modal.style.display = 'block';
        modal.style.background = '#0000008a';
        modal.classList.add('show');
      } else {
        console.error('Modal element is not defined.');
      }
    }
  }
  close() {
    const modal1 = this.RepaymentissueElement?.nativeElement;
    const modal2 = this.IncomeIssueElement?.nativeElement;
    const modal3 = this.IntentionissueElement?.nativeElement;
    const modal4 = this.LegalTechnicalElement?.nativeElement;
    const modal5 = this.DuplicateleadElement?.nativeElement;
    const modal6= this.CNIElement?.nativeElement;
    if (modal1) {
      modal1.style.display = 'none';
    } else {
      console.error('Modal element is not defined.');
    }
    if (modal2) {
      modal2.style.display = 'none';
    } else {
      console.error('Modal element is not defined.');
    }
    if (modal3) {
      modal3.style.display = 'none';
    } else {
      console.error('Modal element is not defined.');
    }
    if (modal4) {
      modal4.style.display = 'none';
    } else {
      console.error('Modal element is not defined.');
    }
    if (modal5) {
      modal5.style.display = 'none';
    } else {
      console.error('Modal element is not defined.');
    }
    if (modal6) {
      modal6.style.display = 'none';
    } else {
      console.error('Modal element is not defined.');
    }
  }
}
