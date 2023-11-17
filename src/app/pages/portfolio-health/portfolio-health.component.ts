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
        document.getElementById('Portfolio-ED-GNPA-NPA-chart') as HTMLDivElement
      );
      this.CIBILScoreChart = echarts.init(
        document.getElementById('CIBIL-score-chart') as HTMLDivElement
      );
      this.ProductWiseChart = echarts.init(
        document.getElementById('Portfolio-Product-wise-chart') as HTMLDivElement
      );

      this.NonStartedCasesChart = echarts.init(
        document.getElementById('Non-started-cases') as HTMLDivElement
      );



      this.EDGNPANPAOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          formatter: (params: any) => { 
            const dataIndex = params[0].dataIndex;
            const amount = [100, 800, 600][dataIndex];
            const percent = [2.2, 1.2, 1];
            const percentage = percent[dataIndex];
  
            // Create the tooltip content with the actual value and random amount
            return `Amount in Cr: ${amount}<br> Percentage: ${percentage}`;
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
            rotate: 0,
            overflow: 'break',
          },
        },
        yAxis: {
          type: 'value',
          min: 0.5,
          max: 3.5,
          interval: .5,
          axisLine: {
            show: false,
          },
          axisLabel: {
            formatter: '{value}',
            margin: 1,
          },
          splitLine: {
            show: false,
          },
          name: 'Percentage %',
          nameLocation: 'middle',
          nameGap: 20,
          nameTextStyle: {
            fontWeight: 600,
            fontSize:14,
          },
        },
        series: [
          {
            barWidth: 25,
            data: [
              { value: 2.2, itemStyle: { color: '#3C7EBE' } },
              { value: 1.2, itemStyle: { color: '#5BC8EF' } }, // Set a different color here
              { value: 1, itemStyle: { color: '#E25E3E' } }, // Set a different color here
            ],
            type: 'bar',
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
          // formatter: (params: any) => { 
          //   const dataIndex = params[0].dataIndex;
          //   const amount = [100, 800, 600][dataIndex];
          //   const percentage = params[0].value;
          //   // const percentage = percent[dataIndex];
  
          //   // Create the tooltip content with the actual value and random amount
          //   return `Amount in Cr: ${amount}<br> Percentage: ${percentage}`;
          //  },
        },
        legend: {
          data: ['ED', 'NPA'],
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
           
            boundaryGap: true,
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
              color: '#E25E3E',
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
            rotate: 0,
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
              color: '#3C7EBE', // Set the color for the first bar series (IRR)
            },
          },
          {
            type: 'bar',
            itemStyle: {
              color: '#E25E3E', // Set the color for the first bar series (IRR)
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
            data: [0, 1, 2, 1, 0, 1],
            label: {
              show: true,
              position: 'right',
              formatter: '{c}',
            },
            itemStyle: {
              color: '#579BB1', // Set the color for the first bar series (IRR)
              borderRadius: 10,
            },
          },
          {
            name: 'Non-financial',
            type: 'bar',
            data: [20, 16, 17, 15, 8, 12],
            label: {
              show: true,
              position: 'right',
              formatter: '{c} ',
            },
            itemStyle: {
              color: '#E1D7C6', // Set the color for the first bar series (IRR)
              borderRadius: 10,
            },
          },
        ],
      };

      
      this.EDGNPANPAChart.setOption(this.EDGNPANPAOption);
      this.CIBILScoreChart.setOption(this.CIBILScoreOption);
      this.ProductWiseChart.setOption(this.ProductWiseOption);
      this.NonStartedCasesChart.setOption(this.NonStartedCasesOption);
     
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
