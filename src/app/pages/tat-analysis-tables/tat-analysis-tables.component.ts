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
  tats: string[] = ['Select TAT', '<= 3 Days', '4 to 5 Days', '> 5 Days'];
  statuss: string[] = ['Select Status', 'pending', 'approved'];

  selectedTat: string = 'Select TAT';
  selectedStatus: string = 'Select Status';
  selectedFilterState: string = 'Select State';
  selectedState: string = 'Pan India';
  selectedFilter: string = 'November';
  showContent!: boolean;
  files!: TreeNode[];
  routeName!: string | null;

  constructor(
    private cdRef: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.routeName = params.get('data');
    });

    this.files = [
      {
        data: {
          StateName: 'Pan India',
          CurrentMmonthLogin: '3050',
          CarryForward: '175',
          Total: '160',
          Within03Number: '150',
          to05number: '165',
          Within03percent: '15',
          to05npercent: '25',
          Morethan5Number: '11',
          Morethan5Percent: '25',
          RejectBeforeNumber: '30',
          RejectBeforePercent: '34',
        },
        children: [
          {
            data: {
              StateName: 'PCH',
              CurrentMmonthLogin: '244',
              CarryForward: '14',
              Total: '12.8',
              Within03Number: '12',
              to05number: '13.2',
              Within03percent: '15',
              to05npercent: '25',
              Morethan5Number: '11',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
            children: [
              {
                data: {
                  StateName: 'Chandigarh',
                  CurrentMmonthLogin: '15',
                  CarryForward: '4.9',
                  Total: '4.5',
                  Within03Number: '4.2',
                  to05number: '4.6',
                  Within03percent: '15',
                  to05npercent: '25',
                  Morethan5Number: '11',
                  Morethan5Percent: '25',
                  RejectBeforeNumber: '30',
                  RejectBeforePercent: '34',
                },
                children: [
                  {
                    data: {
                      StateName: 'Chandigarh',
                      CurrentMmonthLogin: '6',
                      CarryForward: '2.0',
                      Total: '1.8',
                      Within03Number: '1.7',
                      to05number: '1.8',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Ambala',
                      CurrentMmonthLogin: '4',
                      CarryForward: '1.4',
                      Total: '1.3',
                      Within03Number: '1.2',
                      to05number: '1.3',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Patiala',
                      CurrentMmonthLogin: '5',
                      CarryForward: '1.6',
                      Total: '1.4',
                      Within03Number: '1.3',
                      to05number: '1.5',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
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
                  CurrentMmonthLogin: '11',
                  CarryForward: '3.6',
                  Total: '3.3',
                  Within03Number: '3.1',
                  to05number: '3.4',
                  Within03percent: '15',
                  to05npercent: '25',
                  Morethan5Number: '11',
                  Morethan5Percent: '25',
                  RejectBeforeNumber: '30',
                  RejectBeforePercent: '34',
                },
                children: [
                  {
                    data: {
                      StateName: 'Ludhiana',
                      CurrentMmonthLogin: '5',
                      CarryForward: '1.5',
                      Total: '1.3',
                      Within03Number: '1.2',
                      to05number: '1.4',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Jalandhar',
                      CurrentMmonthLogin: '3',
                      CarryForward: '1.0',
                      Total: '0.9',
                      Within03Number: '0.9',
                      to05number: '1.0',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Moga',
                      CurrentMmonthLogin: '4',
                      CarryForward: '1.2',
                      Total: '1.1',
                      Within03Number: '1.0',
                      to05number: '1.1',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Karnal',
                  CurrentMmonthLogin: '9',
                  CarryForward: '2.9',
                  Total: '2.7',
                  Within03Number: '2.5',
                  to05number: '2.8',
                  Within03percent: '15',
                  to05npercent: '25',
                  Morethan5Number: '11',
                  Morethan5Percent: '25',
                  RejectBeforeNumber: '30',
                  RejectBeforePercent: '34',
                },
                children: [
                  {
                    data: {
                      StateName: 'Karnal',
                      CurrentMmonthLogin: '4',
                      CarryForward: '1.2',
                      Total: '1.1',
                      Within03Number: '1.0',
                      to05number: '1.1',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Rohtak',
                      CurrentMmonthLogin: '3',
                      CarryForward: '0.8',
                      Total: '0.8',
                      Within03Number: '0.7',
                      to05number: '0.8',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Panipat',
                      CurrentMmonthLogin: '3',
                      CarryForward: '0.9',
                      Total: '0.9',
                      Within03Number: '0.8',
                      to05number: '0.9',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                ],
              },
            ],
          },
          {
            data: {
              StateName: 'NCR',
              CurrentMmonthLogin: '458',
              CarryForward: '26.25',
              Total: '24',
              Within03Number: '22.5',
              to05number: '24.8',
              Within03percent: '15',
              to05npercent: '25',
              Morethan5Number: '11',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
            children: [
              {
                data: {
                  StateName: 'Delhi',
                  CurrentMmonthLogin: '275',
                  CarryForward: '15.8',
                  Total: '14.4',
                  Within03Number: '13.5',
                  to05number: '14.9',
                  Within03percent: '15',
                  to05npercent: '25',
                  Morethan5Number: '11',
                  Morethan5Percent: '25',
                  RejectBeforeNumber: '30',
                  RejectBeforePercent: '34',
                },
                children: [
                  {
                    data: {
                      StateName: 'JanakPuri',
                      CurrentMmonthLogin: '110',
                      CarryForward: '6.3',
                      Total: '5.8',
                      Within03Number: '5.4',
                      to05number: '5.9',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Laxmi Nagar',
                      CurrentMmonthLogin: '77',
                      CarryForward: '4.4',
                      Total: '4.0',
                      Within03Number: '3.8',
                      to05number: '4.2',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sahibad',
                      CurrentMmonthLogin: '88',
                      CarryForward: '5.0',
                      Total: '4.6',
                      Within03Number: '4.3',
                      to05number: '4.8',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Gurgoan',
                  CurrentMmonthLogin: '183',
                  CarryForward: '10.5',
                  Total: '9.6',
                  Within03Number: '9.0',
                  to05number: '9.9',
                  Within03percent: '15',
                  to05npercent: '25',
                  Morethan5Number: '11',
                  Morethan5Percent: '25',
                  RejectBeforeNumber: '30',
                  RejectBeforePercent: '34',
                },
                children: [
                  {
                    data: {
                      StateName: 'Gurgoan',
                      CurrentMmonthLogin: '73',
                      CarryForward: '4.2',
                      Total: '3.8',
                      Within03Number: '3.6',
                      to05number: '4.0',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Faridabad',
                      CurrentMmonthLogin: '51',
                      CarryForward: '2.9',
                      Total: '2.7',
                      Within03Number: '2.5',
                      to05number: '2.8',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Meerut',
                      CurrentMmonthLogin: '59',
                      CarryForward: '3.4',
                      Total: '3.1',
                      Within03Number: '2.9',
                      to05number: '3.2',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                ],
              },
            ],
          },
          {
            data: {
              StateName: 'Rajasthan',
              CurrentMmonthLogin: '915',
              CarryForward: '52.5',
              Total: '48.0',
              Within03Number: '45.0',
              to05number: '49.5',
              Within03percent: '15',
              to05npercent: '25',
              Morethan5Number: '11',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
            children: [
              {
                data: {
                  StateName: 'Jaipur',
                  CurrentMmonthLogin: '320',
                  CarryForward: '18.4',
                  Total: '16.8',
                  Within03Number: '15.8',
                  to05number: '17.3',
                  Within03percent: '15',
                  to05npercent: '25',
                  Morethan5Number: '11',
                  Morethan5Percent: '25',
                  RejectBeforeNumber: '30',
                  RejectBeforePercent: '34',
                },
                children: [
                  {
                    data: {
                      StateName: 'Jaipur',
                      CurrentMmonthLogin: '128',
                      CarryForward: '7.4',
                      Total: '6.7',
                      Within03Number: '6.3',
                      to05number: '6.9',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sikar Road',
                      CurrentMmonthLogin: '90',
                      CarryForward: '5.1',
                      Total: '4.7',
                      Within03Number: '4.4',
                      to05number: '4.9',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Behror',
                      CurrentMmonthLogin: '102',
                      CarryForward: '5.9',
                      Total: '5.4',
                      Within03Number: '5.0',
                      to05number: '5.5',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
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
                  CurrentMmonthLogin: '238',
                  CarryForward: '13.7',
                  Total: '12.5',
                  Within03Number: '11.7',
                  to05number: '12.9',
                  Within03percent: '15',
                  to05npercent: '25',
                  Morethan5Number: '11',
                  Morethan5Percent: '25',
                  RejectBeforeNumber: '30',
                  RejectBeforePercent: '34',
                },
                children: [
                  {
                    data: {
                      StateName: 'Ajmer',
                      CurrentMmonthLogin: '95',
                      CarryForward: '5.5',
                      Total: '5.0',
                      Within03Number: '4.7',
                      to05number: '5.1',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Kekri',
                      CurrentMmonthLogin: '67',
                      CarryForward: '3.8',
                      Total: '3.5',
                      Within03Number: '3.3',
                      to05number: '3.6',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Merta',
                      CurrentMmonthLogin: '76',
                      CarryForward: '4.4',
                      Total: '4.0',
                      Within03Number: '3.7',
                      to05number: '4.1',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Udaipur',
                  CurrentMmonthLogin: '192',
                  CarryForward: '11.0',
                  Total: '10.1',
                  Within03Number: '9.5',
                  to05number: '10.4',
                  Within03percent: '15',
                  to05npercent: '25',
                  Morethan5Number: '11',
                  Morethan5Percent: '25',
                  RejectBeforeNumber: '30',
                  RejectBeforePercent: '34',
                },
                children: [
                  {
                    data: {
                      StateName: 'Rajsamand',
                      CurrentMmonthLogin: '77',
                      CarryForward: '4.4',
                      Total: '4.0',
                      Within03Number: '3.8',
                      to05number: '4.2',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Banswara',
                      CurrentMmonthLogin: '54',
                      CarryForward: '3.1',
                      Total: '2.8',
                      Within03Number: '2.6',
                      to05number: '2.9',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Udaipur',
                      CurrentMmonthLogin: '61',
                      CarryForward: '3.5',
                      Total: '3.2',
                      Within03Number: '3.0',
                      to05number: '3.3',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Kota',
                  CurrentMmonthLogin: '165',
                  CarryForward: '9.5',
                  Total: '8.6',
                  Within03Number: '8.1',
                  to05number: '8.9',
                  Within03percent: '15',
                  to05npercent: '25',
                  Morethan5Number: '11',
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
              CurrentMmonthLogin: '366',
              CarryForward: '21.0',
              Total: '19.2',
              Within03Number: '18.0',
              to05number: '19.8',
              Within03percent: '15',
              to05npercent: '25',
              Morethan5Number: '11',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
            children: [
              {
                data: {
                  StateName: 'Ahmedabad',
                  CurrentMmonthLogin: '128',
                  CarryForward: '7.4',
                  Total: '6.7',
                  Within03Number: '6.3',
                  to05number: '6.9',
                  Within03percent: '15',
                  to05npercent: '25',
                  Morethan5Number: '11',
                  Morethan5Percent: '25',
                  RejectBeforeNumber: '30',
                  RejectBeforePercent: '34',
                },
                children: [
                  {
                    data: {
                      StateName: 'Ahmedabad',
                      CurrentMmonthLogin: '51',
                      CarryForward: '2.9',
                      Total: '2.7',
                      Within03Number: '2.5',
                      to05number: '2.8',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Gandhinagar',
                      CurrentMmonthLogin: '36',
                      CarryForward: '2.1',
                      Total: '1.9',
                      Within03Number: '1.8',
                      to05number: '1.9',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sanand',
                      CurrentMmonthLogin: '41',
                      CarryForward: '2.4',
                      Total: '2.2',
                      Within03Number: '2.0',
                      to05number: '2.2',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
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
                  CurrentMmonthLogin: '95',
                  CarryForward: '5.5',
                  Total: '5.0',
                  Within03Number: '4.7',
                  to05number: '5.1',
                  Within03percent: '15',
                  to05npercent: '25',
                  Morethan5Number: '11',
                  Morethan5Percent: '25',
                  RejectBeforeNumber: '30',
                  RejectBeforePercent: '34',
                },
                children: [
                  {
                    data: {
                      StateName: 'Surat',
                      CurrentMmonthLogin: '38',
                      CarryForward: '2.2',
                      Total: '2.0',
                      Within03Number: '1.9',
                      to05number: '2.1',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Kadodara',
                      CurrentMmonthLogin: '27',
                      CarryForward: '1.5',
                      Total: '1.4',
                      Within03Number: '1.3',
                      to05number: '1.4',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Rundh',
                      CurrentMmonthLogin: '30',
                      CarryForward: '1.7',
                      Total: '1.6',
                      Within03Number: '1.5',
                      to05number: '1.6',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Rajkot',
                  CurrentMmonthLogin: '77',
                  CarryForward: '4.4',
                  Total: '4.0',
                  Within03Number: '3.8',
                  to05number: '4.2',
                  Within03percent: '15',
                  to05npercent: '25',
                  Morethan5Number: '11',
                  Morethan5Percent: '25',
                  RejectBeforeNumber: '30',
                  RejectBeforePercent: '34',
                },
                children: [
                  {
                    data: {
                      StateName: 'Rajkot',
                      CurrentMmonthLogin: '31',
                      CarryForward: '1.8',
                      Total: '1.6',
                      Within03Number: '1.5',
                      to05number: '1.7',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Jamnagar',
                      CurrentMmonthLogin: '22',
                      CarryForward: '1.2',
                      Total: '1.1',
                      Within03Number: '1.1',
                      to05number: '1.2',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Junagadh',
                      CurrentMmonthLogin: '25',
                      CarryForward: '1.4',
                      Total: '1.3',
                      Within03Number: '1.1',
                      to05number: '1.2',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Vadodara',
                  CurrentMmonthLogin: '66',
                  CarryForward: '3.8',
                  Total: '3.5',
                  Within03Number: '3.2',
                  to05number: '3.6',
                  Within03percent: '15',
                  to05npercent: '25',
                  Morethan5Number: '11',
                  Morethan5Percent: '25',
                  RejectBeforeNumber: '30',
                  RejectBeforePercent: '34',
                },
                children: [
                  {
                    data: {
                      StateName: 'Vadodara',
                      CurrentMmonthLogin: '26',
                      CarryForward: '1.5',
                      Total: '1.4',
                      Within03Number: '1.3',
                      to05number: '1.4',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Anand',
                      CurrentMmonthLogin: '18',
                      CarryForward: '1.1',
                      Total: '1.0',
                      Within03Number: '0.9',
                      to05number: '1.0',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Dabhoi',
                      CurrentMmonthLogin: '21',
                      CarryForward: '1.2',
                      Total: '1.1',
                      Within03Number: '1.0',
                      to05number: '1.1',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                ],
              },
            ],
          },
          {
            data: {
              StateName: 'MP',
              CurrentMmonthLogin: '671',
              CarryForward: '38.5',
              Total: '35.2',
              Within03Number: '33.0',
              to05number: '36.3',
              Within03percent: '15',
              to05npercent: '25',
              Morethan5Number: '11',
              Morethan5Percent: '25',
              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
            children: [
              {
                data: {
                  StateName: 'Indore',
                  CurrentMmonthLogin: '235',
                  CarryForward: '13.5',
                  Total: '12.3',
                  Within03Number: '11.6',
                  to05number: '12.7',
                  Within03percent: '15',
                  to05npercent: '25',
                  Morethan5Number: '11',
                  Morethan5Percent: '25',
                  RejectBeforeNumber: '30',
                  RejectBeforePercent: '34',
                },
                children: [
                  {
                    data: {
                      StateName: 'Indore',
                      CurrentMmonthLogin: '94',
                      CarryForward: '5.4',
                      Total: '4.9',
                      Within03Number: '4.6',
                      to05number: '5.1',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Ujjain',
                      CurrentMmonthLogin: '66',
                      CarryForward: '3.8',
                      Total: '3.4',
                      Within03Number: '3.2',
                      to05number: '3.6',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Dewas',
                      CurrentMmonthLogin: '75',
                      CarryForward: '4.3',
                      Total: '3.9',
                      Within03Number: '3.7',
                      to05number: '4.1',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
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
                  CurrentMmonthLogin: '174',
                  CarryForward: '10.0',
                  Total: '9.2',
                  Within03Number: '8.6',
                  to05number: '9.4',
                  Within03percent: '15',
                  to05npercent: '25',
                  Morethan5Number: '11',
                  Morethan5Percent: '25',
                  RejectBeforeNumber: '30',
                  RejectBeforePercent: '34',
                },
                children: [
                  {
                    data: {
                      StateName: 'Gwalior',
                      CurrentMmonthLogin: '70',
                      CarryForward: '4.0',
                      Total: '3.7',
                      Within03Number: '3.4',
                      to05number: '3.8',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Morena',
                      CurrentMmonthLogin: '49',
                      CarryForward: '2.8',
                      Total: '2.6',
                      Within03Number: '2.4',
                      to05number: '2.6',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Bhind',
                      CurrentMmonthLogin: '56',
                      CarryForward: '3.2',
                      Total: '2.9',
                      Within03Number: '2.4',
                      to05number: '2.6',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Bhopal',
                  CurrentMmonthLogin: '141',
                  CarryForward: '8.1',
                  Total: '7.4',
                  Within03Number: '6.9',
                  to05number: '7.6',
                  Within03percent: '15',
                  to05npercent: '25',
                  Morethan5Number: '11',
                  Morethan5Percent: '25',
                  RejectBeforeNumber: '30',
                  RejectBeforePercent: '34',
                },
                children: [
                  {
                    data: {
                      StateName: 'Bhopal',
                      CurrentMmonthLogin: '56',
                      CarryForward: '3.2',
                      Total: '3.0',
                      Within03Number: '2.8',
                      to05number: '3.0',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Vidisha',
                      CurrentMmonthLogin: '39',
                      CarryForward: '2.3',
                      Total: '2.1',
                      Within03Number: '1.9',
                      to05number: '2.1',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sehore',
                      CurrentMmonthLogin: '45',
                      CarryForward: '2.6',
                      Total: '2.4',
                      Within03Number: '2.2',
                      to05number: '2.4',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Jabalpur',
                  CurrentMmonthLogin: '121',
                  CarryForward: '6.9',
                  Total: '6.3',
                  Within03Number: '5.9',
                  to05number: '6.5',
                  Within03percent: '15',
                  to05npercent: '25',
                  Morethan5Number: '11',
                  Morethan5Percent: '25',
                  RejectBeforeNumber: '30',
                  RejectBeforePercent: '34',
                },
                children: [
                  {
                    data: {
                      StateName: 'Jabalpur',
                      CurrentMmonthLogin: '48',
                      CarryForward: '2.8',
                      Total: '2.5',
                      Within03Number: '2.4',
                      to05number: '2.6',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sihora',
                      CurrentMmonthLogin: '34',
                      CarryForward: '1.9',
                      Total: '1.8',
                      Within03Number: '1.7',
                      to05number: '1.8',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Mandla',
                      CurrentMmonthLogin: '39',
                      CarryForward: '2.2',
                      Total: '2.0',
                      Within03Number: '1.9',
                      to05number: '2.1',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                ],
              },
            ],
          },
          {
            data: {
              StateName: 'Maharashtra',
              CurrentMmonthLogin: '397',
              CarryForward: '22.8',
              Total: '20.8',
              Within03Number: '19.5',
              to05npercent: '25',
              Morethan5Number: '11',
              to05number: '21.5',
              Within03percent: '15',
              Morethan5Percent: '25',

              RejectBeforeNumber: '30',
              RejectBeforePercent: '34',
            },
            children: [
              {
                data: {
                  StateName: 'Mumbai',
                  CurrentMmonthLogin: '139',
                  CarryForward: '8.0',
                  Total: '7.3',
                  Within03Number: '6.8',
                  to05number: '7.5',
                  Within03percent: '15',
                  to05npercent: '25',
                  Morethan5Number: '11',
                  Morethan5Percent: '25',
                  RejectBeforeNumber: '30',
                  RejectBeforePercent: '34',
                },
                children: [
                  {
                    data: {
                      StateName: 'Navi Mumbai',
                      CurrentMmonthLogin: '56',
                      CarryForward: '3.2',
                      Total: '2.9',
                      Within03Number: '2.4',
                      to05number: '2.6',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Thane',
                      CurrentMmonthLogin: '39',
                      CarryForward: '2.2',
                      Total: '2.0',
                      Within03Number: '1.9',
                      to05number: '2.1',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Kalyan',
                      CurrentMmonthLogin: '44',
                      CarryForward: '2.5',
                      Total: '2.3',
                      Within03Number: '2.2',
                      to05number: '2.4',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Nashik',
                  CurrentMmonthLogin: '103',
                  CarryForward: '5.9',
                  Total: '5.4',
                  Within03Number: '5.1',
                  to05number: '5.6',
                  Within03percent: '15',
                  to05npercent: '25',
                  Morethan5Number: '11',
                  Morethan5Percent: '25',
                  RejectBeforeNumber: '30',
                  RejectBeforePercent: '34',
                },
                children: [
                  {
                    data: {
                      StateName: 'Nashik',
                      CurrentMmonthLogin: '41',
                      CarryForward: '2.4',
                      Total: '2.2',
                      Within03Number: '2.0',
                      to05number: '2.2',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Malegaon',
                      CurrentMmonthLogin: '29',
                      CarryForward: '1.7',
                      Total: '1.5',
                      Within03Number: '1.4',
                      to05number: '1.6',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sinnar',
                      CurrentMmonthLogin: '33',
                      CarryForward: '1.9',
                      Total: '1.7',
                      Within03Number: '1.6',
                      to05number: '1.8',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Pune',
                  CurrentMmonthLogin: '83',
                  CarryForward: '4.8',
                  Total: '4.4',
                  Within03Number: '4.1',
                  to05number: '4.5',
                  Within03percent: '15',
                  to05npercent: '25',
                  Morethan5Number: '11',
                  Morethan5Percent: '25',
                  RejectBeforeNumber: '30',
                  RejectBeforePercent: '34',
                },
                children: [
                  {
                    data: {
                      StateName: 'Pune',
                      CurrentMmonthLogin: '33',
                      CarryForward: '1.9',
                      Total: '1.7',
                      Within03Number: '1.6',
                      to05number: '1.8',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Bhor',
                      CurrentMmonthLogin: '23',
                      CarryForward: '1.3',
                      Total: '1.2',
                      Within03Number: '1.1',
                      to05number: '1.3',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Shikrapur',
                      CurrentMmonthLogin: '27',
                      CarryForward: '1.5',
                      Total: '1.4',
                      Within03Number: '1.3',
                      to05number: '1.4',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Nagpur',
                  CurrentMmonthLogin: '71',
                  CarryForward: '4.1',
                  Total: '3.7',
                  Within03Number: '3.5',
                  to05number: '3.9',
                  Within03percent: '15',
                  to05npercent: '25',
                  Morethan5Number: '11',
                  Morethan5Percent: '25',
                  RejectBeforeNumber: '30',
                  RejectBeforePercent: '34',
                },
                children: [
                  {
                    data: {
                      StateName: 'Nagpur',
                      CurrentMmonthLogin: '29',
                      CarryForward: '1.6',
                      Total: '1.5',
                      Within03Number: '1.4',
                      to05number: '1.5',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Amravati',
                      CurrentMmonthLogin: '20',
                      CarryForward: '1.1',
                      Total: '1.0',
                      Within03Number: '1.0',
                      to05number: '1.1',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                  {
                    data: {
                      StateName: 'Gondia',
                      CurrentMmonthLogin: '23',
                      CarryForward: '1.3',
                      Total: '1.2',
                      Within03Number: '1.1',
                      to05number: '1.2',
                      Within03percent: '15',
                      to05npercent: '25',
                      Morethan5Number: '11',
                      Morethan5Percent: '25',
                      RejectBeforeNumber: '30',
                      RejectBeforePercent: '34',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
  }

  navigateTOTable(title: string) {
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
    this.selectedTat = selectedValue;
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
