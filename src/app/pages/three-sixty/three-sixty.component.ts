import { Component } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-three-sixty',
  templateUrl: './three-sixty.component.html',
  styleUrls: ['./three-sixty.component.scss'],
})
export class ThreeSixtyComponent {
  filters: string[] = ['Year to Date', 'Last Month'];

  states: string[] = [
    'Pan India',
    'PCH',
    'NCR',
    'Rajasthan',
    'Gujrat',
    'MP',
    'Maharashtra',
  ];

  progressValue1: number = 60;
  progressValue2: number = 15;
  progressValue3: number = 25;
  minValue1: number = 80;
  maxValue1: number = 75;
  minValue2: number = 10;
  maxValue2: number = 12;
  minValue3: number = 6;
  maxValue3: number = 8;

  selectedState: string = 'Pan India';
  selectedFilter: string = 'Year to Date';

  ProductWiseChart!: echarts.ECharts;
  LoginApprovalsDisbursalChart!: echarts.ECharts;
  AvgTickedSizeChart!: echarts.ECharts;
  DistributionMixChart!: echarts.ECharts;
  ConversionRatioChart!: echarts.ECharts;
  irrPFInsChart!: echarts.ECharts;
  IMDChart!: echarts.ECharts;
  EDGNPANPAChart!: echarts.ECharts;

  AvgTickedSizeOption: any;
  DistributionMixOption: any;
  ConversionRatioOption: any;
  irrPFInsOption: any;
  EDGNPANPAOption: any;

  ProductWiseOption: any;
  LoginApprovalsDisbursalOption: any;
  IMDOption: any;
  showprogressChart: boolean = false;
  amount = 1500;
  noofCustomers = 15000;
  lastMonth = 7;
  YTD = 30;

  ngAfterViewInit(): void {
    this.initializeChart();
  }

  initializeChart() {
    this.ProductWiseChart = echarts.init(
      document.getElementById('product-wise-Chart') as HTMLDivElement
    );
    this.LoginApprovalsDisbursalChart = echarts.init(
      document.getElementById(
        'Login-Approvals-Disbursal-Chart'
      ) as HTMLDivElement
    );

    this.AvgTickedSizeChart = echarts.init(
      document.getElementById('Avg-ticked-size') as HTMLDivElement
    );

    this.DistributionMixChart = echarts.init(
      document.getElementById('distribution-mix') as HTMLDivElement
    );

    this.ConversionRatioChart = echarts.init(
      document.getElementById('conversion-ratio') as HTMLDivElement
    );

    this.irrPFInsChart = echarts.init(
      document.getElementById('three-Irr-pf-insurance') as HTMLDivElement
    );

    this.IMDChart = echarts.init(
      document.getElementById('IMD-chart') as HTMLDivElement
    );

    this.EDGNPANPAChart = echarts.init(
      document.getElementById('ED-GNPA-NPA-chart') as HTMLDivElement
    );

    this.ProductWiseOption = {
      title: {},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          label: {
            backgroundColor: '#07A14E',
          },
        },
        formatter: (params: any) => {
          const barValue = params[0].value;
          const dataIndex = params[0].dataIndex;
          const files = [1340, 745, 670, 770, 890];
          const randomFiles = files[dataIndex];
          // Create the tooltip content with the actual value and random amount
          return `No of Files:${randomFiles} <br> Days: ${barValue}`;
        },
      },
      responsive: true,

      grid: {
        left: '4%',
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
            interval: 0,
            rotate: -70,
            overflow: 'break',
          },
          type: 'category',
          boundaryGap: true,
          data: ['All Products', 'HL', 'LAP', 'BL', 'SBL'],
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
          min: 5,
          max: 30,
          interval: 5,
          name: 'Days ',
          nameLocation: 'middle',
          nameGap: 22,
          nameTextStyle: {
            fontWeight: 600,
            fontSize: 14,
          },
        },
      ],
      series: [
        {
          name: 'All Products',
          type: 'line',
          color: '#EF9595',

          areaStyle: {
            opacity: 0,
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 0.5, // Reduce opacity on hover to make it semi-transparent
            },
          },
          data: [14, 17, 15, 17, 13],
        },
      ],
    };

    this.LoginApprovalsDisbursalOption = {
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          let tooltipText = '';
          if (params.name === '2000Files') {
            tooltipText = 'Amount in Cr: 345';
          } else if (params.name === '300Crs') {
            tooltipText = 'No. of files: 1400 ';
          } else if (params.name === '250Crs') {
            tooltipText = 'No. of files: 2300';
          }
          return tooltipText;
        },
      },

      legend: {
        top: 25,
        data: ['Login', 'Approval', 'Disbursal'],
      },
      series: [
        {
          name: '',
          type: 'funnel',
          left: '-25%',
          top: 60,
          bottom: 60,
          width: '150%',
          height: '80%',
          min: 0,
          max: 100,
          minSize: '0%',
          maxSize: '100%',
          sort: 'descending',
          gap: 2,
          label: {
            show: true,
            position: 'inside',
          },
          labelLine: {
            length: 10,

            lineStyle: {
              width: 1,
              type: 'solid',
            },
          },
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1,
            borderRadius: 15,
          },
          emphasis: {
            label: {
              fontSize: 13,
              color: 'white',
            },
          },
          data: [
            { value: 60, name: '2000Files', itemStyle: { color: '#F99B00' } },
            { value: 40, name: '300Cr', itemStyle: { color: '#342D2D' } },
            { value: 20, name: '250Cr', itemStyle: { color: '#7460EE' } },
          ],
        },
      ],
    };

    this.AvgTickedSizeOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: (params: any) => {
          const barValue = params[0].value;

          // Create the tooltip content with the actual value and random amount
          return `Amount: ${barValue}`;
        },
      },
      xAxis: {
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false, // Hide tick lines
        },
        type: 'category',

        data: ['All Products', 'HL', 'LAP', 'BL', 'SBL'],
        axisLabel: {
          interval: 0,
          rotate: -45,
          overflow: 'break',
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
        splitLine: {
          show: false,
        },
        name: 'Amount ( in Rs. Lacs ) ',
        nameLocation: 'middle',
        nameGap: 23,
        nameTextStyle: {
          fontWeight: 600,
          fontSize: 12,
        },
      },
      series: [
        {
          barWidth: 20,
          data: [13.5, 11, 12.5, 9.5, 9.5],
          type: 'bar',
          itemStyle: {
            color: '#0747A6',
          },
        },
      ],
    };

    this.DistributionMixOption = {
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          console.log(params);

          let tooltipText = '';

          if (params.name === 'HL') {
            tooltipText = 'No. of files: 1000 <br/> Amount in Cr: 450';
          } else if (params.name === 'LAP') {
            tooltipText = 'No. of files: 700 <br/> Amount in Cr: 270';
          } else if (params.name === 'BL') {
            tooltipText = 'No. of files: 800 <br/> Amount in Cr: 269';
          } else if (params.name === 'SBL') {
            tooltipText = 'No. of files: 1600 <br/> Amount in Cr: 268';
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
          top: '5%',
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
            { value: 20, name: 'LAP', itemStyle: { color: '#07A14E' } },
            { value: 10, name: 'BL', itemStyle: { color: '#636363' } },
            { value: 25, name: 'SBL', itemStyle: { color: '#F99B00' } },
          ],
        },
      ],
    };

    this.ConversionRatioOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: (params: any) => {
          const barValue = params[0].value;
          const dataIndex = params[0].dataIndex;

          const randomAmounts = [350, 145, 167, 345, 234];
          const randomAmount = randomAmounts[dataIndex];

          const files = [1340, 745, 670, 770, 890];
          const randomFiles = files[dataIndex];
          return `No.of Files:${randomFiles}<br> Amount in Cr:${randomAmount}<br> ${barValue}% <br>  `;
        },
      },
      xAxis: {
        axisLine: {
          show: false,
        },

        axisTick: {
          show: false, // Hide tick lines
        },
        type: 'category',

        data: ['All Products', 'HL', 'LAP', 'BL', 'SBL'],
        axisLabel: {
          interval: 0,
          rotate: -45,
          overflow: 'break',
        },
      },
      yAxis: {
        type: 'value',
        min: 70,
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
          fontSize: 14,
        },
      },
      series: [
        {
          barWidth: 20,
          data: [70, 55, 45, 40, 53],
          type: 'bar',
          itemStyle: {
            color: '#7460EE',
          },
        },
      ],
    };

    this.irrPFInsOption = {
      legend: {},
      tooltip: {
        formatter: function (params: any) {
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
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false, // Hide tick lines
        },
        type: 'category',
        axisLabel: {
          interval: 0,
          rotate: -45,
          overflow: 'break',
        },
      },
      yAxis: {
        min: 2,
        max: 16,
        interval: 2,
        axisLine: {
          show: false,
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
        nameGap: 25,
        nameTextStyle: {
          fontWeight: 600,
          fontSize: 14,
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

    this.IMDOption = {
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          let tooltipText = '';

          if (params.name === 'Online') {
            tooltipText = 'No. of files: 1000 <br/> Percentage : 16.65';
          } else if (params.name === 'Cheque') {
            tooltipText = 'No. of files: 700 <br/> Percentage : 11.68';
          } else if (params.name === 'Cash') {
            tooltipText = 'No. of files: 800 <br/> Percentage : 9.21';
          } else if (params.name === 'UPI') {
            tooltipText = 'No. of files: 900 <br/> Percentage : 12.46';
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

    this.EDGNPANPAOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: (params: any) => {
          const barValue = params[0].value;
          const dataIndex = params[0].dataIndex;

          const randomAmounts = [350, 145, 167];
          const randomAmount = randomAmounts[dataIndex];

          const customers = [34, 45, 67];
          const randomCustomers = customers[dataIndex];
          return `No.of Customer:${randomCustomers}<br> Amount in Cr:${randomAmount}<br> ${barValue}% <br>  `;
        },
      },
      xAxis: {
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false, // Hide tick lines
        },
        type: 'category',

        data: ['ED', 'GNPA', 'NPA'],
        axisLabel: {
          interval: 0,
          rotate: -45,
          overflow: 'break',
        },
      },
      yAxis: {
        type: 'value',
        min: 0.5,
        max: 3.5,
        interval: 0.5,
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
          barWidth: 40,
          data: [2.1, 1.3, 1.1],
          type: 'bar',
          itemStyle: {
            color: '#F0997D',
          },
        },
      ],
    };

    this.ProductWiseChart.setOption(this.ProductWiseOption);
    this.LoginApprovalsDisbursalChart.setOption(
      this.LoginApprovalsDisbursalOption
    );
    this.AvgTickedSizeChart.setOption(this.AvgTickedSizeOption);
    this.DistributionMixChart.setOption(this.DistributionMixOption);
    this.ConversionRatioChart.setOption(this.ConversionRatioOption);
    this.irrPFInsChart.setOption(this.irrPFInsOption);
    this.IMDChart.setOption(this.IMDOption);
    this.EDGNPANPAChart.setOption(this.EDGNPANPAOption);
  }

  onFilterChange(selectedValue: string) {
    if (selectedValue === 'Last Month') {
      this.showprogressChart = true;
    } else {
      this.showprogressChart = false;
    }

    this.generateProductRandomData();
    this.generateDistributionRandomData();
    this.generateEdRandomData();
    this.generateAversizeRandomData();
    this.generateIMDRandomData();
    this.generateLoginRandomData();
    this.randomloginApplrobvalDisbursal();
    this.generateAumData();
  }

  onStateChange(selectedValue: string) {
    console.log(selectedValue);
    this.generateProductRandomData();
    this.generateDistributionRandomData();
    this.generateEdRandomData();
    this.generateAversizeRandomData();
    this.generateIMDRandomData();
    this.generateLoginRandomData();
    this.randomloginApplrobvalDisbursal();
    this.generateAumData();
  }

  randomloginApplrobvalDisbursal() {
    // Specify min and max values for random data
    const minFiles = 57;
    const maxFiles = 60;
    const minCr1 = 38;
    const maxCr1 = 40;
    const minCr2 = 19;
    const maxCr2 = 20;
    // Generate random values for files and CRs within the specified range
    const randomFiles = this.getRandomValue(minFiles, maxFiles);
    const randomCr1 = this.getRandomValue(minCr1, maxCr1);
    const randomCr2 = this.getRandomValue(minCr2, maxCr2);

    // Update the tooltip formatter to display random values
    this.LoginApprovalsDisbursalOption.tooltip.formatter = (params: any) => {
      let tooltipText = '';
      if (params.name === '2000Files') {
        tooltipText = `Amount in Cr: ${randomCr1}`;
      } else if (params.name === '300Cr') {
        tooltipText = `No. of files: ${randomFiles}`;
      } else if (params.name === '250Cr') {
        tooltipText = `No. of files: ${randomCr2}`;
      }
      return tooltipText;
    };

    // Update the series data with random values
    this.LoginApprovalsDisbursalOption.series[0].data = [
      {
        value: randomFiles,
        name: '2000Files',
        itemStyle: { color: '#F99B00' },
      },
      { value: randomCr1, name: '300Cr', itemStyle: { color: '#342D2D' } },
      { value: randomCr2, name: '250Cr', itemStyle: { color: '#7460EE' } },
    ];

    // Set the chart option to update the chart
    this.LoginApprovalsDisbursalChart.setOption(
      this.LoginApprovalsDisbursalOption
    );
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
    this.ProductWiseOption.series[0].data = newData;
    this.ProductWiseChart.setOption(this.ProductWiseOption);
  }

  generateIMDRandomData() {
    const newData = [
      {
        value: this.getRandomValue(41, 45),
        name: 'Online',
        itemStyle: { color: '#7C41DA' },
      },
      {
        value: this.getRandomValue(17, 20),
        name: 'Cheque',
        itemStyle: { color: '#FB8C00' },
      },
      {
        value: this.getRandomValue(7, 10),
        name: 'Cash',
        itemStyle: { color: '#07A14E' },
      },
      {
        value: this.getRandomValue(22, 25),
        name: 'UPI',
        itemStyle: { color: '#636363' },
      },
    ];

    // Update the pie chart data with the new random values
    this.IMDOption.series[0].data = newData;
    this.IMDChart.setOption(this.IMDOption);
  }

  generateDistributionRandomData() {
    const newData = [
      {
        value: this.getRandomValue(41, 45),
        name: 'HL',
        itemStyle: { color: '#7C41DA' },
      },
      {
        value: this.getRandomValue(17, 20),
        name: 'LAP',
        itemStyle: { color: '#FB8C00' },
      },
      {
        value: this.getRandomValue(7, 10),
        name: 'BL',
        itemStyle: { color: '#07A14E' },
      },
      {
        value: this.getRandomValue(22, 25),
        name: 'SBL',
        itemStyle: { color: '#636363' },
      },
    ];

    // Update the pie chart data with the new random values
    this.DistributionMixOption.series[0].data = newData;
    this.DistributionMixChart.setOption(this.DistributionMixOption);
  }

  generateEdRandomData() {
    const newData = [
      { value: this.getRandomValue(2.2, 2.5), itemStyle: { color: '#F0997D' } },
      { value: this.getRandomValue(1, 1.5), itemStyle: { color: '#F0997D' } },
      { value: this.getRandomValue(0.8, 1), itemStyle: { color: '#F0997D' } },
    ];
    this.EDGNPANPAOption.series[0].data = newData;
    this.EDGNPANPAChart.setOption(this.EDGNPANPAOption);
  }

  generateAversizeRandomData() {
    const newData = [
      {
        value: this.getRandomValue(12.2, 13.5),
        itemStyle: { color: '#0747A6' },
      },
      {
        value: this.getRandomValue(111.5, 12),
        itemStyle: { color: '#0747A6' },
      },
      { value: this.getRandomValue(11, 12.5), itemStyle: { color: '#0747A6' } },
      { value: this.getRandomValue(9, 9.5), itemStyle: { color: '#0747A6' } },
      { value: this.getRandomValue(9, 9.5), itemStyle: { color: '#0747A6' } },
    ];
    this.AvgTickedSizeOption.series[0].data = newData;
    this.AvgTickedSizeChart.setOption(this.AvgTickedSizeOption);
  }

  generateLoginRandomData() {
    const newData = [
      { value: this.getRandomValue(65, 70), itemStyle: { color: '#7460EE' } },
      { value: this.getRandomValue(55, 60), itemStyle: { color: '#7460EE' } },
      { value: this.getRandomValue(40, 45), itemStyle: { color: '#7460EE' } },
      { value: this.getRandomValue(40, 45), itemStyle: { color: '#7460EE' } },
      { value: this.getRandomValue(55, 60), itemStyle: { color: '#7460EE' } },
    ];
    this.ConversionRatioOption.series[0].data = newData;
    this.ConversionRatioChart.setOption(this.ConversionRatioOption);
  }
  getRandomValue(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateAumData() {
    const minAmount = 1470;
    const maxAmount = 1500;
    const minCustomers = 14450;
    const maxCustomers = 15000;
    const minLastMonth = 6;
    const maxLastMonth = 7;
    const minYTD = 28;
    const maxYTD = 30;

    // Generate random data within specified ranges
    this.amount = this.getRandomValue(minAmount, maxAmount);
    this.noofCustomers = this.getRandomValue(minCustomers, maxCustomers);
    this.lastMonth = this.getRandomValue(minLastMonth, maxLastMonth);
    this.YTD = this.getRandomValue(minYTD, maxYTD);
  }
}
