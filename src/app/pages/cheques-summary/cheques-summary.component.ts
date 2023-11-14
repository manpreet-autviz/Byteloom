import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
} from '@angular/core';
import * as echarts from 'echarts';
declare var $: any;

@Component({
  selector: 'app-cheques-summary',
  templateUrl: './cheques-summary.component.html',
  styleUrls: ['./cheques-summary.component.scss'],
})
export class ChequesSummaryComponent {
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
  statusList: string[] = ['Financial Approved', 'Final Approved'];
  selectedState: string = 'Pan India';
  selectedFilter: string = 'November';
  selectedStatus: string = 'Financial Approved';

  FinancialApprovalChart!: echarts.ECharts;
  FinalApprovalChart!: echarts.ECharts;

  FinancialApprovalOption: any;
  FinalApprovalOption: any;

  data = [
    {
      SNo: 1,
      custName: 'Nikhil Rana',
      leadNo: '0123',
      product: 'HL',
      scheme: 'Top Up',
      loanAmount: '15',
      technicalRecieved: 'Y',
      legalRecieved: 'N',
      loginDate: '10/16/2023',
      rmName: 'Nikhil Rana',
      branch:'Chandigarh',
      state:'PCH'
    },
    {
      SNo: 2,
      custName: 'Manjeet Kaur',
      leadNo: '0124',
      product: 'HL',
      scheme: 'Top Up',
      loanAmount: '15',
      technicalRecieved: 'Y',
      legalRecieved: 'N',
      loginDate: '10/16/2023',
      rmName: 'Raman Rana',
      branch:'Chandigarh',
      state:'PCH'
    },
    {
      SNo: 3,
      custName: 'Randeep hodda',
      leadNo: '0125',
      product: 'HL',
      scheme: 'Top Up',
      loanAmount: '15',
      technicalRecieved: 'Y',
      legalRecieved: 'N',
      loginDate: '10/16/2023',
      rmName: 'Amit Verma',
      branch:'Chandigarh',
      state:'PCH'
    },
    {
      SNo: 4,
      custName: 'Kishor Kumar',
      leadNo: '0126',
      product: 'HL',
      scheme: 'Top Up',
      loanAmount: 15,
      technicalRecieved: 'Y',
      legalRecieved: 'N',
      loginDate: '10/16/2023',
      rmName: 'Rajesh Kumar',
      branch:'Chandigarh',
      state:'PCH'
    },
    {
      SNo: 5,
      custName: 'Amarjeet',
      leadNo: '0127',
      product: 'BL',
      scheme: 'BT',
      loanAmount: '15',
      technicalRecieved: 'Y',
      legalRecieved: 'N',
      loginDate: '10/16/2023',
      rmName: 'Nirmal Singh',
      branch:'Chandigarh',
      state:'PCH'
    },
    {
      SNo: 6,
      custName: 'Vivek Gupta',
      leadNo: '0128',
      product: 'BL',
      scheme: 'Fresh',
      loanAmount: '11',
      technicalRecieved: 'Y',
      legalRecieved: 'N',
      loginDate: '10/16/2023',
      rmName: 'Gaurav Kapoor',
      branch:'Chandigarh',
      state:'PCH'
    },
    {
      SNo: 7,
      custName: 'Rashmika Sen',
      leadNo: '0129',
      product: 'HL',
      scheme: 'Top Up',
      loanAmount: '15',
      technicalRecieved: 'Y',
      legalRecieved: 'N',
      loginDate: '10/16/2023',
      rmName: 'Nikhil Teneja',
      branch:'Delhi',
      state:'NCR'
    },
    {
      SNo: 8,
      custName: 'Rahul Saini',
      leadNo: '0130',
      product: 'HL',
      scheme: 'Top Up',
      loanAmount: '13',
      technicalRecieved: 'N',
      legalRecieved: 'N',
      loginDate: '10/16/2023',
      rmName: 'Anil Gupta',
      branch:'Delhi',
      state:'NCR'
    },
    {
      SNo: 9,
      custName: 'Kiran Sen',
      leadNo: '0131',
      product: 'LAP',
      scheme: 'Top Up',
      loanAmount: '12.5',
      technicalRecieved: 'Y',
      legalRecieved: 'N',
      loginDate: '10/16/2023',
      rmName: 'Saurabh Saini',
      branch:'Delhi',
      state:'NCR'
    },
    {
      SNo: 10,
      custName: 'Anushaka Sen',
      leadNo: '0132',
      product: 'HL',
      scheme: 'Fresh',
      loanAmount: '13',
      technicalRecieved: 'N',
      legalRecieved: 'Y',
      loginDate: '10/16/2023',
      rmName: 'Vivek',
      branch:'Delhi',
      state:'NCR'
    },
    // Add more data as needed
  ];

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone,
    private cdRef: ChangeDetectorRef
  ) {}

  onFilterChange(selectedValue: string) {}

  onStateChange(selectedValue: string) {}

  onStatusChange(selectedValue: string) {
    this.generateRandomData();
  }

  generateRandomData() {
    this.data.forEach((item) => {
      item.SNo = Math.floor(Math.random() * 1000) + 1;
      item.leadNo = '0109';
      item.custName = 'Anita';
      item.product = 'BL';
      item.scheme = 'BT';
      item.loanAmount = 12.5;
      item.technicalRecieved = 'Y';
      item.legalRecieved = 'N';
      item.loginDate = '12/10/2023';
      item.rmName = 'Kishore Kumar';
    });
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

  initializeChart() {
    this.FinancialApprovalChart = echarts.init(
      document.getElementById('fianancial-approval-chart') as HTMLDivElement
    );
    this.FinalApprovalChart = echarts.init(
      document.getElementById('final-approval-chart') as HTMLDivElement
    );

    this.FinancialApprovalOption = {
      tooltip: {
        trigger: 'axis',
        formatter: function (params: any[]) {
          let tooltip = params[0].axisValue + '<br>';
          params.forEach(function (item) {
            if (item.seriesType === 'bar') {
              tooltip += 'No. of Files' + ': ' + item.value + ' <br>';
            } else if (item.seriesType === 'line') {
              tooltip += 'Amount(in Lacs.)' + ': ' + item.value;
            }
          });
          return tooltip;
        },
      },

      legend: {
        data: ['Financial approvals no.', 'Financial approvals amount'],
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
          axisLabel: {
            interval: 0,
            rotate: -45,
            overflow: 'break',
          },
          data: ['PCH', 'NCR', 'Rajasthan', 'Gujarat', 'MP', 'Maharashtra'],
          axisPointer: {
            type: 'shadow',
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: 'No. of Files',
          nameLocation: 'middle',
          nameGap: 40,
          nameTextStyle: {
            fontWeight: 600,
            fontSize: 14,
          },
          min: 10,
          max: 100,
          interval: 10,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            formatter: '{value} ',
          },
        },
        {
          type: 'value',
          name: 'Amount ( in Rs. Lacs)',
          nameLocation: 'middle',
          nameGap: 40,
          nameTextStyle: {
            fontWeight: 600,
            fontSize: 14,
          },
          min: 10,
          max: 90,
          interval: 10,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            formatter: '{value} ',
          },
        },
      ],
      series: [
        {
          name: 'Financial approvals no.',
          barWidth: 20,
          type: 'bar',
          tooltip: {
            valueFormatter: function (value: any) {
              return value;
            },
          },
          data: [50, 55, 40, 55, 60, 40],
          itemStyle: {
            color: '#55BBCC',
          },
        },

        {
          name: 'Financial approvals amount',
          type: 'line',

          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value: any) {
              return value;
            },
          },
          data: [50, 55, 40, 55, 60, 40],
          itemStyle: {
            color: '#F0B86E',
          },
        },
      ],
    };

    this.FinalApprovalOption = {
      tooltip: {
        trigger: 'axis',

        formatter: function (params: any[]) {
          let tooltip = params[0].axisValue + '<br>';
          params.forEach(function (item) {
            if (item.seriesType === 'bar') {
              tooltip += 'No. of Files' + ': ' + item.value + ' <br>';
            } else if (item.seriesType === 'line') {
              tooltip += 'Amount(in Lacs.)' + ': ' + item.value;
            }
          });
          return tooltip;
        },
      },

      legend: {
        data: ['Financial approvals no.', 'Financial approvals amount'],
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
          axisLabel: {
            interval: 0,
            rotate: -45,
            overflow: 'break',
          },
          data: ['PCH', 'NCR', 'Rajasthan', 'Gujarat', 'MP', 'Maharashtra'],
          axisPointer: {
            type: 'shadow',
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: 'No. of Files',
          nameLocation: 'middle',
          nameGap: 40,
          nameTextStyle: {
            fontWeight: 600,
            fontSize: 14,
          },
          min: 10,
          max: 100,
          interval: 10,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            formatter: '{value} ',
          },
        },
        {
          type: 'value',
          name: 'Amount ( in Rs. Lacs)',
          nameLocation: 'middle',
          nameGap: 40,
          nameTextStyle: {
            fontWeight: 600,
            fontSize: 14,
          },
          min: 10,
          max: 90,
          interval: 10,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            formatter: '{value} ',
          },
        },
      ],
      series: [
        {
          name: 'Financial approvals no.',
          barWidth: 20,
          type: 'bar',
          tooltip: {
            valueFormatter: function (value: any) {
              return value;
            },
          },
          data: [50, 55, 40, 55, 60, 40],
          itemStyle: {
            color: '#8294C4',
          },
        },

        {
          name: 'Financial approvals amount',
          type: 'line',
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value: any) {
              return value;
            },
          },
          data: [50, 55, 40, 55, 60, 40],
          itemStyle: {
            color: 'rgba(239, 149, 149, 0.6)',
          },
        },
      ],
    };

    this.FinancialApprovalChart.setOption(this.FinancialApprovalOption);

    this.FinalApprovalChart.setOption(this.FinalApprovalOption);
  }
}
