import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import * as echarts from 'echarts';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  option!: echarts.EChartsOption;
  DisbursalAchievementChart!: echarts.ECharts;
  disbursalAchievementOption: any;
  trendDisbursalAchievementChart!: echarts.ECharts;
  trendDisbursalAchievementOption: any;
  states: string[] = [
    'Pan India',
    'PCH',
    'NCR',
    'Rajasthan',
    'Gujarat',
    'MP',
    'Maharashtra',
  ];
  branches: string[] = [];
  clusters: string[] = [];
  filters: string[] = [
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
  ];
  selectedState: string = 'Pan India';
  selectedFilter: string = 'September';
  selectedCluster: string = 'All';
  selectedBranch: string = 'All';

  IrrChart!: echarts.ECharts;
  pfChart!: echarts.ECharts;
  loginTotalAmount: number = 550;
  loginTotalFiles: number = 3050;
  financialTotalAmount: number = 175;
  financialTotalFiles: number = 1500;
  disbursalTotalAmount: number = 150;
  disbursalTotalFiles: number = 1300;
  finalTotalFiles: number = 1350;
  finalTotalAmount: number = 160;

  minLoginAmountValue = 40;
  maxLoginAmountValue = 160;

  minLoginFileValue = 240;
  maxLoginFileValue = 500;

  minFinancialAmountValue = 14;
  maxFinancialAmountValue = 26;

  minFinancialFileValue = 120;
  maxFinancialFileValue = 190;

  minDisbursalAmountValue = 12;
  maxDisbursalAmountValue = 19;

  minDisbursalFileValue = 100;
  maxDisbursalFileValue = 170;

  minfinalTotalAmountValue = 12;
  maxfinalTotalAmountValue = 20;

  minfinalTotalFilesValue = 150;
  maxfinalTotalFilesValue = 200;

  currentDate: Date = new Date(); // Initialize with the current date
  minDate: Date = new Date(); // Define the minimum allowed date
  maxDate: Date = new Date(); // Define the maximum allowed date
  isPreviousDisabled: boolean = false;
  isNextDisabled: boolean = true;

  loginData: number = 200;
  pdData: number = 175;
  financialApprovalsData: number = 100;
  finalApprovalsData: number = 75;
  disbursalData: number = 50;

  loginDataAmount: number = 40;
  pdDataAmount: number = 30;
  financialApprovalsDataAmount: number = 12;
  finalApprovalsDataAmount: number = 10;
  disbursalDataAmount: number = 6;

  PDFile = 120;
  PDAmount = 20;
  financialFile = 50;
  financialAmount = 7.5;
  finalFile = 40;
  finalAmount = 6.5;
  technicalFile = 60;
  technicalAmount = 8;
  legalFile = 65;
  legalAmount = 8.5;
  disbursalFile = 45;
  disbursalAmount = 5.5;
  PFValue = 2.3;
  IrrValue = 13.2;
  jsonData: any;
  DisbursalJsonData:any;
  selectedDate!: string;
  DisbursalNumber: number = 100;
  constructor(
    private el: ElementRef,
    private router: Router,
    private http: HttpClient,
    private renderer: Renderer2
  ) {
    this.minDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
      1
    );
    this.maxDate = new Date();
  }
  ngAfterViewInit(): void {
    this.initializeChart();
  }
  ngOnInit(): void {
    const inputElement = this.el.nativeElement.querySelector('#birthday');
    this.renderer.setStyle(inputElement, 'cursor', 'pointer');
    this.getjsonData();
    // this.IrrChart = echarts.init(
    //   document.getElementById('IrrChartValue') as HTMLDivElement
    // );
    // this.pfChart = echarts.init(
    //   document.getElementById('PfChartValue') as HTMLDivElement
    // );

    // const IrrOption = {
    //   series: [
    //     {
    //       type: 'gauge',
    //       center: ['50%', '60%'],
    //       startAngle: 220,
    //       endAngle: -40,
    //       min: 0,
    //       max: 15,
    //       splitNumber: 12,
    //       itemStyle: {
    //         color: '#FF821C',
    //       },
    //       progress: {
    //         show: true,
    //         width: 15,
    //       },

    //       pointer: {
    //         show: false,
    //       },
    //       axisLine: {
    //         lineStyle: {
    //           width: 15,
    //         },
    //       },
    //       axisTick: {
    //         show: false,
    //         distance: -45,
    //         splitNumber: 5,
    //         lineStyle: {
    //           width: 2,
    //           color: '#999',
    //         },
    //       },
    //       splitLine: {
    //         show: false,
    //         distance: -52,
    //         length: 14,
    //         lineStyle: {
    //           width: 3,
    //           color: '#999',
    //         },
    //       },
    //       axisLabel: {
    //         show: false,
    //         distance: -20,
    //         color: '#999',
    //         fontSize: 20,
    //       },
    //       anchor: {
    //         show: false,
    //       },
    //       title: {
    //         show: false,
    //       },
    //       detail: {
    //         valueAnimation: true,
    //         width: '60%',
    //         lineHeight: 10,
    //         borderRadius: 8,
    //         offsetCenter: [0, '-15%'],
    //         fontSize: 10,
    //         fontWeight: 'bolder',
    //         formatter: '{value}%',
    //         color: 'inherit',
    //       },
    //       data: [
    //         {
    //           value: 14,
    //         },
    //       ],
    //     },
    //   ],
    // };

    // const pfOption = {
    //   series: [
    //     {
    //       type: 'gauge',
    //       center: ['50%', '60%'],
    //       startAngle: 220,
    //       endAngle: -40,
    //       min: 0,
    //       max: 15,
    //       splitNumber: 12,
    //       itemStyle: {
    //         color: '#7E74FB',
    //       },
    //       progress: {
    //         show: true,
    //         width: 15,
    //       },

    //       pointer: {
    //         show: false,
    //       },
    //       axisLine: {
    //         lineStyle: {
    //           width: 15,
    //         },
    //       },
    //       axisTick: {
    //         show: false,
    //         distance: -45,
    //         splitNumber: 5,
    //         lineStyle: {
    //           width: 2,
    //           color: '#999',
    //         },
    //       },
    //       splitLine: {
    //         show: false,
    //         distance: -52,
    //         length: 14,
    //         lineStyle: {
    //           width: 3,
    //           color: '#999',
    //         },
    //       },
    //       axisLabel: {
    //         show: false,
    //         distance: -20,
    //         color: '#999',
    //         fontSize: 20,
    //       },
    //       anchor: {
    //         show: false,
    //       },
    //       title: {
    //         show: false,
    //       },
    //       detail: {
    //         valueAnimation: true,
    //         width: '60%',
    //         lineHeight: 20,
    //         borderRadius: 8,
    //         offsetCenter: [0, '-15%'],
    //         fontSize: 10,
    //         fontWeight: 'bolder',
    //         formatter: '{value}%',
    //         color: 'inherit',
    //       },
    //       data: [
    //         {
    //           value: 2.3,
    //         },
    //       ],
    //     },
    //   ],
    // };
    // this.IrrChart.setOption(IrrOption);
    // this.pfChart.setOption(pfOption);
  }

  getjsonData() {
    this.http.get('assets/data.json').subscribe((data: any) => {
      this.jsonData = data;
      console.log(this.jsonData); // Outputs: "value"
    });
    this.http.get('assets/disbursal-meter.json').subscribe((data: any) => {
      this.DisbursalJsonData = data;
      console.log(this.jsonData); // Outputs: "value"
    });
  }

  onRegionChange(region: string) {
    this.selectedState = region;
    this.clusters = this.getClusters(region);
    this.selectedCluster = 'All';
    this.branches = [];
    this.generateDisbursalMeter();
    this.generateDisbursalAchievement();
    this.onDateChange();
    this.generateCardsRandomData(this.selectedState, '', '');
    this.generateWorkInQueue(this.selectedState, '', '');
    this.generateIRRPFvalue();
    this.generateDisbursalRandomData(this.selectedState, '', '');
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
    this.branches = this.getBranches(this.selectedState, cluster);
    this.selectedBranch = 'All';
    this.generateDisbursalMeter();
    this.generateCardsRandomData(this.selectedState, this.selectedCluster, '');
    this.generateDisbursalAchievement();
    this.onDateChange();
    this.generateWorkInQueue(this.selectedState, this.selectedCluster, '');
    this.generateIRRPFvalue();
    this.generateDisbursalRandomData(
      this.selectedState,
      this.selectedCluster,
      ''
    );
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
    this.generateCardsRandomData(
      this.selectedState,
      this.selectedCluster,
      this.selectedBranch
    );
    this.generateDisbursalMeter();
    this.generateDisbursalAchievement();
    this.onDateChange();
    this.generateWorkInQueue(
      this.selectedState,
      this.selectedCluster,
      this.selectedBranch
    );
    this.generateIRRPFvalue();
    this.generateDisbursalRandomData(
      this.selectedState,
      this.selectedCluster,
      this.selectedBranch
    );
  }

  onPreviousDayClick() {
    const newDate = new Date(this.currentDate);
    newDate.setDate(newDate.getDate() - 1);

    if (newDate >= this.minDate) {
      this.currentDate = newDate;
      this.onDateChange();
    }

    this.isPreviousDisabled =
      new Date(this.currentDate) <= new Date(this.minDate);

    this.isNextDisabled =
      new Date(this.currentDate).toDateString() === new Date().toDateString();
  }

  onNextDayClick() {
    if (!this.isNextDisabled) {
      const newDate = new Date(this.currentDate);
      newDate.setDate(newDate.getDate() + 1);
      this.currentDate = newDate;
      this.onDateChange();
    }

    this.isPreviousDisabled = false;

    this.isNextDisabled =
      new Date(this.currentDate).toDateString() === new Date().toDateString();
  }

  onDateChange() {
    this.loginData = this.generateRandomData(180, 200);
    this.pdData = this.generateRandomData(170, 175);
    this.financialApprovalsData = this.generateRandomData(90, 100);
    this.finalApprovalsData = this.generateRandomData(70, 75);
    this.disbursalData = this.generateRandomData(45, 50);

    this.loginDataAmount = this.generateRandomData(35, 40);
    this.pdDataAmount = this.generateRandomData(25, 30);
    this.financialApprovalsDataAmount = this.generateRandomData(10, 12);
    this.finalApprovalsDataAmount = this.generateRandomData(5, 10);
    this.disbursalDataAmount = this.generateRandomData(3, 6);
  }

  onDateSelected() {
    this.loginData = this.generateRandomData(180, 200);
    this.pdData = this.generateRandomData(170, 175);
    this.financialApprovalsData = this.generateRandomData(90, 100);
    this.finalApprovalsData = this.generateRandomData(70, 75);
    this.disbursalData = this.generateRandomData(45, 50);

    this.loginDataAmount = this.generateRandomData(35, 40);
    this.pdDataAmount = this.generateRandomData(25, 30);
    this.financialApprovalsDataAmount = this.generateRandomData(10, 12);
    this.finalApprovalsDataAmount = this.generateRandomData(5, 10);
    this.disbursalDataAmount = this.generateRandomData(3, 6);
  }
  generateRandomData(minValue: number, maxValue: number): number {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }

  workInprogressTable(title: string) {
    this.router.navigate(['/work-in-progress-table', title]);
  }

  initializeChart() {
    this.DisbursalAchievementChart = echarts.init(
      document.getElementById('DisbursalAchievementChart') as HTMLDivElement
    );
    this.trendDisbursalAchievementChart = echarts.init(
      document.getElementById(
        'dash-trend-Disbursal-Achievement'
      ) as HTMLDivElement
    );

    this.disbursalAchievementOption = {
      tooltip: {
        formatter: function (params: any) {
          const randomFiles = Math.floor(Math.random() * (700 - 650 + 1)) + 650;
          const randomAmountCr = Math.random() * (70 - 65) + 65;

          return `Number of Files: ${randomFiles}<br/>Amount in Cr: ${randomAmountCr.toFixed(
            2
          )} <br/>${params.value}%`;
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
            fontSize: 13.5,
          },
          data: [
            {
              value: 70,
            },
          ],
        },
      ],
    };

    this.trendDisbursalAchievementOption = {
      title: {},
      tooltip: {
        trigger: 'axis',
        // axisPointer: {
        //   type: 'cross',
        //   label: {
        //     backgroundColor: '#6a7985',
        //   },
        // },
        formatter: (params: any) => {
          const dataIndex = params[0].dataIndex;
          const barValue = params[0].value;

          // Create the tooltip content with the actual value and random amount
          return `${barValue}%`;
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
          data: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
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
          splitLine: {
            show: false,
          },
          min: 10,
          max: 100,
          interval: 10,
          name: 'Percentage %',
          nameLocation: 'middle',
          nameGap: 23,
          axisLabel: {
            formatter: '{value}',
            margin: 7,
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

          areaStyle: {
            opacity: 0,
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 0.5, // Reduce opacity on hover to make it semi-transparent
            },
          },
          data: [90, 93, 94, 82, 97, 99, 100],
          itemStyle: {
            color: '#07A14E',
          },
        },
      ],
    };
    this.trendDisbursalAchievementChart.setOption(
      this.trendDisbursalAchievementOption
    );
    this.DisbursalAchievementChart.setOption(this.disbursalAchievementOption);
  }

  generateDisbursalMeter() {
    const minValue = 70;
    const maxValue = 80;

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

  generateDisbursalAchievement() {
    const StateminValues = [85, 88, 89, 87, 92, 94, 95];
    const StatemaxValues = [90, 93, 94, 92, 97, 99, 100];

    const newData = StateminValues.map((min, index) => {
      const max = StatemaxValues[index];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
    this.trendDisbursalAchievementOption.series[0].data = newData;
    this.trendDisbursalAchievementChart.setOption(
      this.trendDisbursalAchievementOption
    );
  }
  onFilterChange(selectedValue: string) {
    this.generateCardsRandomData(selectedValue, '', '');
    this.generateIRRPFvalue();
    // this.generateDisbursalMeter();
    // this.generateDisbursalAchievement();
    // this.onDateChange();
    // this.generateWorkInQueue();
  }

  onStateChange(selectedValue: string) {
    this.onRegionChange(selectedValue);
  }

  generateIRRPFvalue() {
    const minIRRValue = 13;
    const maxIRRValue = 16;
    const minPFValue = 2.1;
    const maxPFValue = 2.5;

    this.IrrValue = +(
      Math.random() * (maxIRRValue - minIRRValue) +
      minIRRValue
    ).toFixed(1);
    this.PFValue = +(
      Math.random() * (maxPFValue - minPFValue) +
      minPFValue
    ).toFixed(1);
  }

  generateCardsRandomData(region: any, area: any, branch: any) {
    if (region === 'Pan India') {
      this.loginTotalAmount = 550;
      this.loginTotalFiles = 3050;
      this.financialTotalAmount = 175;
      this.financialTotalFiles = 1500;
      this.disbursalTotalAmount = 150;
      this.disbursalTotalFiles = 1300;
      this.finalTotalFiles = 1350;
      this.finalTotalAmount = 160;
    } else if (
      region === 'PCH' ||
      region === 'NCR' ||
      region === 'Rajasthan' ||
      region === 'Maharashtra'
    ) {
      const selectedRegion = this.jsonData.states[region];
      this.loginTotalAmount = selectedRegion?.loginAmount;
      this.loginTotalFiles = selectedRegion?.loginFiles;
      this.financialTotalAmount = selectedRegion?.FinancialAmount;
      this.financialTotalFiles = selectedRegion?.FinancialFiles;
      this.disbursalTotalAmount = selectedRegion?.DisbursalAmount;
      this.disbursalTotalFiles = selectedRegion?.DisbursalFiles;
      this.finalTotalAmount = selectedRegion?.FinalAmount;
      this.finalTotalFiles = selectedRegion?.FinalFiles;

      if (this.selectedCluster !== 'All') {
        const selectedArea = selectedRegion.areas[this.selectedCluster];
        this.loginTotalAmount = selectedArea?.loginAmount;
        this.loginTotalFiles = selectedArea?.loginFiles;
        this.financialTotalAmount = selectedArea?.FinancialAmount;
        this.financialTotalFiles = selectedArea?.FinancialFiles;
        this.disbursalTotalAmount = selectedArea?.DisbursalAmount;
        this.disbursalTotalFiles = selectedArea?.DisbursalFiles;
        this.finalTotalAmount = selectedArea?.FinalAmount;
        this.finalTotalFiles = selectedArea?.FinalFiles;

        if (this.selectedBranch !== 'All') {
          console.log('here', this.selectedBranch);
          const selectedBranch = selectedArea?.branches[this.selectedBranch];
          this.loginTotalAmount = selectedBranch?.loginAmount;
          this.loginTotalFiles = selectedBranch?.loginFiles;
          this.financialTotalAmount = selectedBranch?.FinancialAmount;
          this.financialTotalFiles = selectedBranch?.FinancialFiles;
          this.disbursalTotalAmount = selectedBranch?.DisbursalAmount;
          this.disbursalTotalFiles = selectedBranch?.DisbursalFiles;
          this.finalTotalAmount = selectedBranch?.FinalAmount;
          this.finalTotalFiles = selectedBranch?.FinalFiles;
        }
      }
    } else {
      this.loginTotalAmount = +(Math.random() * 15).toFixed(2);
      this.loginTotalFiles = +(Math.random() * 15).toFixed(1);
      this.financialTotalAmount = +(Math.random() * 15).toFixed(2);
      this.financialTotalFiles = +(Math.random() * 15).toFixed(1);
      this.disbursalTotalAmount = +(Math.random() * 15).toFixed(2);
      this.disbursalTotalFiles = +(Math.random() * 15).toFixed(1);
      this.finalTotalAmount = +(Math.random() * 15).toFixed(2);
      this.finalTotalFiles = +(Math.random() * 15).toFixed(1);

      this.loginTotalAmount = +(
        Math.random() * (this.maxLoginAmountValue - this.minLoginAmountValue) +
        this.minLoginAmountValue
      ).toFixed(2);
      this.loginTotalFiles = +(
        Math.random() * (this.maxLoginFileValue - this.minLoginFileValue) +
        this.minLoginFileValue
      ).toFixed(0);

      this.financialTotalAmount = +(
        Math.random() *
          (this.maxFinancialAmountValue - this.minFinancialAmountValue) +
        this.minFinancialAmountValue
      ).toFixed(2);
      this.financialTotalFiles = +(
        Math.random() *
          (this.maxFinancialFileValue - this.minFinancialFileValue) +
        this.minFinancialFileValue
      ).toFixed(0);

      this.disbursalTotalAmount = +(
        Math.random() *
          (this.maxDisbursalAmountValue - this.minDisbursalAmountValue) +
        this.minDisbursalAmountValue
      ).toFixed(2);
      this.disbursalTotalFiles = +(
        Math.random() *
          (this.maxDisbursalFileValue - this.minDisbursalFileValue) +
        this.minDisbursalFileValue
      ).toFixed(0);
      this.finalTotalAmount = +(
        Math.random() *
          (this.maxfinalTotalAmountValue - this.minfinalTotalAmountValue) +
        this.minfinalTotalAmountValue
      ).toFixed(2);
      this.finalTotalFiles = +(
        Math.random() *
          (this.maxfinalTotalFilesValue - this.minfinalTotalFilesValue) +
        this.minfinalTotalFilesValue
      ).toFixed(0);
    }
  }

  generateWorkInQueue(region: any, area: any, branch: any) {
    if (
      region === 'PCH' ||
      region === 'NCR' ||
      region === 'Rajasthan' ||
      region === 'Maharashtra'
    ) {
      const selectedRegion = this.jsonData.states[region];

      this.PDFile = selectedRegion?.WIQPDFiles;
      this.PDAmount = selectedRegion?.WIQPDAmount;
      this.finalFile = selectedRegion?.WIQFinalFiles;
      this.finalAmount = selectedRegion?.WIQFinalAmount;
      this.disbursalFile = selectedRegion?.WIQDisbursalFiles;

      this.disbursalAmount = selectedRegion?.WIQDisbursalAmount;
      this.financialFile = selectedRegion?.WIQFinancialFiles;
      this.financialAmount = selectedRegion?.WIQFinancialAmount;
      this.legalFile = selectedRegion?.WIQLegalFiles;
      this.legalAmount = selectedRegion?.WIQLegalAmount;
      this.technicalFile = selectedRegion?.WIQTechnicalFiles;
      this.technicalAmount = selectedRegion?.WIQTechnicalAmount;

      if (this.selectedCluster !== 'All') {
        const selectedArea = selectedRegion.areas[this.selectedCluster];
        this.PDFile = selectedArea?.WIQPDFiles;
        this.PDAmount = selectedArea?.WIQPDAmount;
        this.finalFile = selectedArea?.WIQFinalFiles;
        this.finalAmount = selectedArea?.WIQFinalAmount;
        this.disbursalFile = selectedArea?.WIQDisbursalFiles;

        this.disbursalAmount = selectedArea?.WIQDisbursalAmount;
        this.financialFile = selectedArea?.WIQFinancialFiles;
        this.financialAmount = selectedArea?.WIQFinancialAmount;
        this.legalFile = selectedArea?.WIQLegalFiles;
        this.legalAmount = selectedArea?.WIQLegalAmount;
        this.technicalFile = selectedArea?.WIQTechnicalFiles;
        this.technicalAmount = selectedArea?.WIQTechnicalAmount;

        if (this.selectedBranch !== 'All') {
          const selectedBranch = selectedArea?.branches[this.selectedBranch];
          this.PDFile = selectedBranch?.WIQPDFiles;
          this.PDAmount = selectedBranch?.WIQPDAmount;
          this.finalFile = selectedBranch?.WIQFinalFiles;
          this.finalAmount = selectedBranch?.WIQFinalAmount;
          this.disbursalFile = selectedBranch?.WIQDisbursalFiles;

          this.disbursalAmount = selectedBranch?.WIQDisbursalAmount;
          this.financialFile = selectedBranch?.WIQFinancialFiles;
          this.financialAmount = selectedBranch?.WIQFinancialAmount;
          this.legalFile = selectedBranch?.WIQLegalFiles;
          this.legalAmount = selectedBranch?.WIQLegalAmount;
          this.technicalFile = selectedBranch?.WIQTechnicalFiles;
          this.technicalAmount = selectedBranch?.WIQTechnicalAmount;
        }
      }
    } else {
      this.PDFile = this.generateRandomData(110, 120);
      this.PDAmount = this.generateRandomData(15, 20);
      this.finalFile = this.generateRandomData(35, 40);
      this.finalAmount = this.generateRandomData(5.5, 6.5);
      this.disbursalFile = this.generateRandomData(35, 45);

      this.disbursalAmount = this.generateRandomData(4.4, 5.5);
      this.financialFile = this.generateRandomData(45, 50);
      this.financialAmount = this.generateRandomData(7, 8);
      this.legalFile = this.generateRandomData(60, 65);
      this.legalAmount = this.generateRandomData(7.5, 8.5);
      this.technicalFile = this.generateRandomData(55, 60);
      this.technicalAmount = this.generateRandomData(7, 8);
    }
  }

  generateDisbursalRandomData(region: any, area: any, branch: any) {
    if (region === 'Pan India') {
      this.DisbursalNumber = 100;
    } else if (
      region === 'PCH' ||
      region === 'NCR' ||
      region === 'Rajasthan' ||
      region === 'Maharashtra'
    ) {
      const selectedRegion = this.DisbursalJsonData.states[region];
      this.DisbursalNumber = selectedRegion?.disbursalMeter;

      if (this.selectedCluster !== 'All') {
        const selectedArea = selectedRegion.areas[this.selectedCluster];
        this.DisbursalNumber = selectedArea?.disbursalMeter;

        if (this.selectedBranch !== 'All') {
          console.log('here', this.selectedBranch);
          const selectedBranch = selectedArea?.branches[this.selectedBranch];
          this.DisbursalNumber = selectedBranch?.disbursalMeter;
        }
      }
    } else {
      this.DisbursalNumber = +(Math.random() * (20 - 10) + 10).toFixed(2);
    }
  }
}
