import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-portfolio-health',
  templateUrl: './portfolio-health.component.html',
  styleUrls: ['./portfolio-health.component.scss'],
})
export class PortfolioHealthComponent {
 

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

  EDGNPANPAOption: any;
  CIBILScoreOption:any;
  ProductWiseOption:any;
  NonStartedCasesOption:any;
  BucketWiseListOption:any;

  EDGNPANPAChart!: echarts.ECharts;
  CIBILScoreChart!: echarts.ECharts;
  ProductWiseChart!: echarts.ECharts;
  BucketWiseListChart!: echarts.ECharts;
  NonStartedCasesChart!: echarts.ECharts;

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
      this.EDGNPANPAChart = echarts.init(
        document.getElementById('ED-GNPA-NPA-chart') as HTMLDivElement
      );
      this.CIBILScoreChart = echarts.init(
        document.getElementById('CIBIL-score-chart') as HTMLDivElement
      );
      this.ProductWiseChart = echarts.init(
        document.getElementById('Product-wise-chart') as HTMLDivElement
      );

      this.NonStartedCasesChart = echarts.init(
        document.getElementById('Non-started-cases') as HTMLDivElement
      );

      this.BucketWiseListChart = echarts.init(
        document.getElementById('Bucket-wise-list') as HTMLDivElement
      );

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
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false, 
          },
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
            show: false,
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

      this.CIBILScoreOption = {
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
          data: ['ED', 'NPA'],
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
            type: 'category',
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false, 
            },
           
            boundaryGap: false,
            data: ['<650', '-1', '>650'],
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
            min: 0.50,
            max: 2.5,
            interval: 0.5,
            name: 'Percentage ',
            nameLocation: 'middle',
            nameGap: 43,
          },
        ],
        series: [
          {
            name: 'ED',
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
            data: [2.5, 1.8, 1.2, ],
          },
          {
            name: 'NPA',
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
            data: [1.0, 0.75, 0.54],
            itemStyle: {
              color: '#FF821C',
            },
          },
         
        ],
      };

      this.ProductWiseOption = {
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ['state', 'ED', 'NPA', ],
         
          source: [
            { state: 'HL', ED: 2.0,  NPA: 0.6  },
            { state: 'LAP', ED: 2.5, NPA: 0.9  },
            { state: 'BL', ED: 2.25, NPA: 0.8 },
            { state: 'SBL',ED: 2.25, NPA: 0.7 },
           
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
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false, 
          },
        },
        yAxis: {
          min: 0.5,
          max: 3.5,
          interval: 0.5,
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
          name: 'PERCENTAGE %',
          nameLocation: 'middle',
          nameGap: 25,
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          {
            type: 'bar',
            itemStyle: {
              color: '#4FC3F7', // Set the color for the first bar series (IRR)
            },
          },
          {
            type: 'bar',
            itemStyle: {
              color: '#3ADA84', // Set the color for the first bar series (IRR)
            },
          },
        
        ],
      };

      this.NonStartedCasesOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          data: ['Financial', 'Non-financial'],
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
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false, 
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
            name: 'Financial',
            type: 'bar',
            data: [123, 120, 150, 25, 65, 120],
            label: {
              show: true,
              position: 'right',
              formatter: '{c}',
            },
            itemStyle: {
              color: '#5281FF', // Set the color for the first bar series (IRR)
            },
          },
          {
            name: 'Non-financial',
            type: 'bar',
            data: [111, 110, 115, 110, 65, 130],
            label: {
              show: true,
              position: 'right',
              formatter: '{c} ',
            },
            itemStyle: {
              color: '#F49494', // Set the color for the first bar series (IRR)
            },
          },
        ],
      };

      this.BucketWiseListOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          data: ['ED', 'GNPA','  NPA'],
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
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false, 
          },
          data: [
            '0-30',
            '31-60',
            '61-90',
            '90+',
          ],
        },

        series: [
          {
            name: 'ED',
            type: 'bar',
            data: [860, 850, 750, 100],
            label: {
              show: true,
              position: 'right',
              formatter: '{c}Cr',
            },
            itemStyle: {
              color: '#3C7EBE', // Set the color for the first bar series (IRR)
            },
          },
          {
            name: 'GNPA',
            type: 'bar',
            data: [800, 777, 650, 1000],
            label: {
              show: true,
              position: 'right',
              formatter: '{c} ',
            },
            itemStyle: {
              color: '#5BC8EF', // Set the color for the first bar series (IRR)
            },
          },
          {
            name: 'NPA',
            type: 'bar',
            data: [55, 55, 55, 55],
            label: {
              show: true,
              position: 'right',
              formatter: '{c}% ',
            },
            itemStyle: {
              color: '#89BDEC', // Set the color for the first bar series (IRR)
            },
          },
        ],
      };

      this.EDGNPANPAChart.setOption(this.EDGNPANPAOption);
      this.CIBILScoreChart.setOption(this.CIBILScoreOption);
      this.ProductWiseChart.setOption(this.ProductWiseOption);
      this.NonStartedCasesChart.setOption(this.NonStartedCasesOption);
      this.BucketWiseListChart.setOption(this.BucketWiseListOption);
    } else {
    }
  }

  onFilterChange(selectedValue: string) {}

  onStateChange(selectedValue: string) {}

  generateRandomAmount(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }

  ontrendStateChange(selectedValue: string) {}
  onTrendFilterChange(selectedValue: string) {}
}
