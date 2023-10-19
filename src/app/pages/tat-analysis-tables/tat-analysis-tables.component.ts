import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreeNode } from 'primeng/api';
@Component({
  selector: 'app-tat-analysis-tables',
  templateUrl: './tat-analysis-tables.component.html',
  styleUrls: ['./tat-analysis-tables.component.scss'],
})
export class TatAnalysisTablesComponent {
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
  statesFilter: string[] = [
    'Select State',
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
  tats: string[] = ['Select TAT', '>2days ', '<2days'];
  statuss: string[] = ['Select Status', 'pending', 'approved'];

  selectedTat: string = 'Select TAT';
  selectedStatus: string = 'Select Status';
  selectedFilterState: string = 'Select State';
  selectedState: string = 'Pan India';
  selectedFilter: string = 'September';
  showContent!: boolean;
  files!: TreeNode[];
  routeName!: string | null;

  constructor(
    private cdRef: ChangeDetectorRef,
    private route: ActivatedRoute,private router: Router
  ) {}

 

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.routeName = params.get('data');
    });
    this.files = [
      {
        data: {
          StateName: 'PCH',
          CurrentMmonthLogin: '1655',
          CarryForward: '86',
          Total: '1741',
          Within03Number: '20',
          Within03percent: '15',
          to05number: '25',
          to05npercent: '25',
          Morethan5Number: '25',
          Morethan5Percent: '25',
          RejectBeforeNumber: '30',
          RejectBeforePercent: '34',
        },
        children: [
          {
            data: {
              StateName: 'Chandigarh',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Ambala',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Patiala',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Chandigarh',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Chandigarh',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
        ],
      },
      {
        data: {
          StateName: 'NCR',
          CurrentMmonthLogin: '1655',
          CarryForward: '86',
          Total: '1741',
          Within03Number: '20',
          Within03percent: '15',
          to05number: '25',
          to05npercent: '25',
          Morethan5Number: '25',
          Morethan5Percent: '25',
          RejectBeforeNumber: '30',
          RejectBeforePercent: '34',
        },
        children: [
          {
            data: {
              StateName: 'Delhi',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'JanakPuri',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Laxmi Nagar',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Sahibad',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Chandigarh',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Chandigarh',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
        ],
      },
      {
        data: {
          StateName: 'Rajasthan',
          CurrentMmonthLogin: '1655',
          CarryForward: '86',
          Total: '1741',
          Within03Number: '20',
          Within03percent: '15',
          to05number: '25',
          to05npercent: '25',
          Morethan5Number: '25',
          Morethan5Percent: '25',
          RejectBeforeNumber: '30',
          RejectBeforePercent: '34',
        },
        children: [
          {
            data: {
              StateName: 'Jaipur',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Sikar Road',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Behror',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Chandigarh',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Chandigarh',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
        ],
      },
      {
        data: {
          StateName: 'Gujarat',
          CurrentMmonthLogin: '1655',
          CarryForward: '86',
          Total: '1741',
          Within03Number: '20',
          Within03percent: '15',
          to05number: '25',
          to05npercent: '25',
          Morethan5Number: '25',
          Morethan5Percent: '25',
          RejectBeforeNumber: '30',
          RejectBeforePercent: '34',
        },
        children: [
          {
            data: {
              StateName: 'Ahmedabad',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Gandhinagar',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Sanand',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Chandigarh',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Chandigarh',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
        ],
      },
      {
        data: {
          StateName: 'MP',
          CurrentMmonthLogin: '1655',
          CarryForward: '86',
          Total: '1741',
          Within03Number: '20',
          Within03percent: '15',
          to05number: '25',
          to05npercent: '25',
          Morethan5Number: '25',
          Morethan5Percent: '25',
          RejectBeforeNumber: '30',
          RejectBeforePercent: '34',
        },
        children: [
          {
            data: {
              StateName: 'Indore',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Ujjain',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Dewas',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Chandigarh',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Chandigarh',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
        ],
      },
      {
        data: {
          StateName: 'Maharashtra',
          CurrentMmonthLogin: '1655',
          CarryForward: '86',
          Total: '1741',
          Within03Number: '20',
          Within03percent: '15',
          to05number: '25',
          to05npercent: '25',
          Morethan5Number: '25',
          Morethan5Percent: '25',
          RejectBeforeNumber: '30',
          RejectBeforePercent: '34',
        },
        children: [
          {
            data: {
              StateName: 'Mumbai',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Navi Mumbai',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Thane',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Kalyan',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Chandigarh',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Chandigarh',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
        ],
      },
      {
        data: {
          StateName: 'Ludhiana',
          CurrentMmonthLogin: '1655',
          CarryForward: '86',
          Total: '1741',
          Within03Number: '20',
          Within03percent: '15',
          to05number: '25',
          to05npercent: '25',
          Morethan5Number: '25',
          Morethan5Percent: '25',
          RejectBeforeNumber: '30',
          RejectBeforePercent: '34',
        },
        children: [
          {
            data: {
              StateName: 'Jalandhar',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Moga',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Chandigarh',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Chandigarh',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
        ],
      },
      {
        data: {
          StateName: 'Gurgaon',
          CurrentMmonthLogin: '1655',
          CarryForward: '86',
          Total: '1741',
          Within03Number: '20',
          Within03percent: '15',
          to05number: '25',
          to05npercent: '25',
          Morethan5Number: '25',
          Morethan5Percent: '25',
          RejectBeforeNumber: '30',
          RejectBeforePercent: '34',
        },
        children: [
          {
            data: {
              StateName: 'Faridabad',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Meerut',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Chandigarh',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Chandigarh',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
        ],
      },
      {
        data: {
          StateName: 'Ajmer',
          CurrentMmonthLogin: '1655',
          CarryForward: '86',
          Total: '1741',
          Within03Number: '20',
          Within03percent: '15',
          to05number: '25',
          to05npercent: '25',
          Morethan5Number: '25',
          Morethan5Percent: '25',
          RejectBeforeNumber: '30',
          RejectBeforePercent: '34',
        },
        children: [
          {
            data: {
              StateName: 'Kekri',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Merta',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Chandigarh',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Chandigarh',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
        ],
      },
      {
        data: {
          StateName: 'Surat',
          CurrentMmonthLogin: '1655',
          CarryForward: '86',
          Total: '1741',
          Within03Number: '20',
          Within03percent: '15',
          to05number: '25',
          to05npercent: '25',
          Morethan5Number: '25',
          Morethan5Percent: '25',
          RejectBeforeNumber: '30',
          RejectBeforePercent: '34',
        },
        children: [
          {
            data: {
              StateName: 'Kadodara',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Rundh',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Chandigarh',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Chandigarh',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
        ],
      },

      {
        data: {
          StateName: 'Gwalior',
          CurrentMmonthLogin: '1655',
          CarryForward: '86',
          Total: '1741',
          Within03Number: '20',
          Within03percent: '15',
          to05number: '25',
          to05npercent: '25',
          Morethan5Number: '25',
          Morethan5Percent: '25',
          RejectBeforeNumber: '30',
          RejectBeforePercent: '34',
        },
        children: [
          {
            data: {
              StateName: 'Morena',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
          {
            data: {
              StateName: 'Bhind',
              CurrentMmonthLogin: '1655',
              CarryForward: '86',
              Total: '1741',
              Within03Number: '20',
              Within03percent: '15',
              to05number: '25',
              to05npercent: '25',
              Morethan5Number: '25',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
          },
        ],
      },
    ];
  }

  navigateTOTable(title:string){
    this.router.navigate(['/login-tat-table', title]);
  }

  onFilterChange(selectedValue: string) {
    this.updateVlaues();
  }

  onStateChange(selectedValue: string) {
    this.updateVlaues();
  }

  onStateFilterChange(selectedValue: string) {
    this.updateVlaues();
  }

  onTatChange(selectedValue: string) {
    this.updateVlaues();
  }

  onStatusChange(selectedValue: string) {
    this.updateVlaues();
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  updateVlaues() {
    const cuurentMonthMin = 1600;
    const cuurentMonthMax = 1700;

    const CarryForwardMin = 80;
    const CarryForwardMax = 90;

    const TotalMin = 1700;
    const TotalMax = 1800;

    const min = 15;
    const max = 35;

    this.files.forEach((item) => {
      item.data.CurrentMmonthLogin = this.getRandomNumber(
        cuurentMonthMin,
        cuurentMonthMax
      ).toString();
      item.data.CarryForward = this.getRandomNumber(
        CarryForwardMin,
        CarryForwardMax
      ).toString();
      item.data.Total = this.getRandomNumber(TotalMin, TotalMax).toString();
      item.data.Within03Number = this.getRandomNumber(min, max).toString();
      item.data.Within03percent = this.getRandomNumber(min, max).toString();
      item.data.to05number = this.getRandomNumber(min, max).toString();
      item.data.to05npercent = this.getRandomNumber(min, max).toString();
      item.data.Morethan5Number = this.getRandomNumber(min, max).toString();
      item.data.Morethan5Percent = this.getRandomNumber(min, max).toString();
      item.data.RejectBeforeNumber = this.getRandomNumber(min, max).toString();
      item.data.RejectBeforePercent = this.getRandomNumber(min, max).toString();

      if (item.children) {
        item.children.forEach((child) => {
          child.data.CurrentMmonthLogin = this.getRandomNumber(
            cuurentMonthMin,
            cuurentMonthMax
          ).toString();
          child.data.CarryForward = this.getRandomNumber(
            CarryForwardMin,
            CarryForwardMax
          ).toString();
          child.data.Total = this.getRandomNumber(
            TotalMin,
            TotalMax
          ).toString();
          child.data.Within03Number = this.getRandomNumber(min, max).toString();
          child.data.Within03percent = this.getRandomNumber(
            min,
            max
          ).toString();
          child.data.to05number = this.getRandomNumber(min, max).toString();
          child.data.to05npercent = this.getRandomNumber(min, max).toString();
          child.data.Morethan5Number = this.getRandomNumber(
            min,
            max
          ).toString();
          child.data.Morethan5Percent = this.getRandomNumber(
            min,
            max
          ).toString();
          child.data.RejectBeforeNumber = this.getRandomNumber(
            min,
            max
          ).toString();
          child.data.RejectBeforePercent = this.getRandomNumber(
            min,
            max
          ).toString();
        });
      }
    });
  }
}
