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

  EDGNPANPAChart!: echarts.ECharts;
  CIBILScoreChart!: echarts.ECharts;
  ProductWiseChart!: echarts.ECharts;


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
          data: ['HL', 'BL', 'LAP', 'SBL'],
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
            boundaryGap: false,
            data: ['HL', 'BL', 'LAP', 'SBL'],
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: true,
            },
            min: 10,
            max: 100,
            interval: 20,
            name: 'Percentage ',
            nameLocation: 'middle',
            nameGap: 43,
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
            data: [12, 15, 25, 30, 35, 45],
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
                opacity: 1, // Reduce opacity on hover to make it semi-transparent
              },
            },
            data: [30, 35, 45, 50, 58, 65],
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
                opacity: 0.5, // Reduce opacity on hover to make it semi-transparent
              },
            },
            data: [35, 45, 47, 50, 55, 67],
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
            data: [37, 46, 48, 52, 57, 69],
          },
        ],
      };


      this.EDGNPANPAChart.setOption(this.EDGNPANPAOption);
      this.CIBILScoreChart.setOption(this.CIBILScoreOption);
      this.ProductWiseChart.setOption(this.ProductWiseOption);
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
