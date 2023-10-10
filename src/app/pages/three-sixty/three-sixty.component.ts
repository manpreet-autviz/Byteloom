import { Component } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-three-sixty',
  templateUrl: './three-sixty.component.html',
  styleUrls: ['./three-sixty.component.scss'],
})
export class ThreeSixtyComponent {
  filters: string[] = ['Month To Date', 'Last Month'];

  states: string[] = [
    'Pan India',
    'Punjab',
    'Haryana',
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
  selectedFilter: string = 'Month To Date';

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
  EDGNPANPAOption:any;

  ProductWiseOption: any;
  LoginApprovalsDisbursalOption: any;
  IMDOption: any;
  showprogressChart: boolean = false;

  onFilterChange(selectedValue: string) {
    
    if(selectedValue==='Last Month'){
     this.showprogressChart = true;
    }else{
      this.showprogressChart = false; 
    }
  }

  onStateChange(selectedValue: string) {}

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
      document.getElementById('Irr-pf-insurance') as HTMLDivElement
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
          type: 'cross',
          label: {
            backgroundColor: '#6a7985',
          },
        },
      },
      responsive: true,
      legend: {
        data: ['All Products', 'Home Loan', 'LAP', 'BL', 'SBL'],
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          axisLabel: {
            interval: 0,
            rotate: 70,
            overflow: 'break',
          },
          type: 'category',
          boundaryGap: false,
          data: ['All Products', 'Home Loan', 'LAP', 'BL', 'SBL'],
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: true,
          },
          min: 5,
          max: 30,
          interval: 5,
        },
      ],
      series: [
        {
          name: 'All Products',
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
          data: [13.1, 13.5, 13.9, 14, 14.3, 15.5, 15.9],
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
          data: [15.3, 15.6, 16, 17.4, 18.6, 19.9, 20],
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
          data: [20.5, 20.9, 21.4, 23.9, 24, 24.2, 24.6],
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
          data: [25.7, 26, 26.5, 27, 27.3, 27.9, 29.9],
        },
      ],
    };

    this.LoginApprovalsDisbursalOption = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%',
      },
      toolbox: {
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      },
      legend: {
        top: 25,
        data: ['Login', 'Approval', 'Disbursal'],
      },
      series: [
        {
          name: 'Funnel',
          type: 'funnel',
          left: '10%',
          top: 60,
          bottom: 60,
          width: '100%',
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
          },
          emphasis: {
            label: {
              fontSize: 10,
              color: 'white',
            },
          },
          data: [
            { value: 60, name: 'Login', itemStyle: { color: '#F99B00' } },
            { value: 40, name: 'Approval', itemStyle: { color: '#342D2D' } },
            { value: 20, name: 'Disbursal', itemStyle: { color: '#7460EE' } },
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
          return `Days: ${barValue}`;
        },
      },
      xAxis: {
        type: 'category',

        data: ['All Products', 'Home Loan', 'LAP', 'BL', 'SBL'],
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
          show: true,
        },
        splitLine: {
          show: false,
        },
        name: 'AMOUNT IN LACS ',
        nameLocation: 'middle',
        nameGap: 25,
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
            {
              value: 45,
              name: 'All Products',
              itemStyle: { color: '#7C41DA' },
            },
            { value: 45, name: 'Home Loan', itemStyle: { color: '#F99B00' } },
            { value: 20, name: 'LAP', itemStyle: { color: '#07A14E' } },
            { value: 10, name: 'BL', itemStyle: { color: '#636363' } },
            { value: 25, name: 'SBL', itemStyle: { color: '#0B9DE8' } },
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

          // Create the tooltip content with the actual value and random amount
          return `Days: ${barValue}`;
        },
      },
      xAxis: {
        type: 'category',

        data: ['All Products', 'Home Loan', 'LAP', 'BL', 'SBL'],
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
          show: true,
        },
        splitLine: {
          show: false,
        },
        name: 'PERCENTAGE',
        nameLocation: 'middle',
        nameGap: 25,
      },
      series: [
        {
          barWidth: 20,
          data: [70, 55, 45, 40, 53],
          type: 'bar',
          itemStyle: {
            color: '#5D5BCC',
          },
        },
      ],
    };

    this.irrPFInsOption = {
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: ['product', 'IRR', 'PF', 'Insurance'],
        source: [
          { product: 'All Products', IRR: 13, PF: 3.5, Insurance: 3 },
          { product: 'Home loan', IRR: 12.5, PF: 3, Insurance: 2.7 },
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
      },
      yAxis: {
        min: 2,
        max: 16,
        interval: 2,
        axisLine: {
          show: true,
        },
        axisLabel: {
          formatter: '{value}',
          margin: 1,
        },
        name: 'PERCENTAGE',
        nameLocation: 'middle',
        nameGap: 25,
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
        formatter: '{a} <br/>{b}: {c} ({d}%)' 
      },
      legend: {
        top: '5%',
        left: 'center',
        // doesn't perfectly work with our tricks, disable it
        selectedMode: false,
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '70%'],
          // adjust the start angle
          startAngle: 180,
         
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

    this.EDGNPANPAOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: (params: any) => {
          const barValue = params[0].value;

          // Create the tooltip content with the actual value and random amount
          return `Days: ${barValue}`;
        },
      },
      xAxis: {
        type: 'category',

        data: ['ED','GNPA','NPA'],
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
          show: true,
        },
        splitLine: {
          show: false,
        },
        name: 'PERCENTAGE',
        nameLocation: 'middle',
        nameGap: 25,
      },
      series: [
        {
          barWidth: 40,
          data: [70, 50, 45,],
          type: 'bar',
          itemStyle: {
            color: '#5D5BCC',
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
}
