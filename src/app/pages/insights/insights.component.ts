import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TreeNode } from 'primeng/api';
@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss'],
})
export class InsightsComponent {
  states: string[] = [
    'Pan India',
    'PCH',
    'NCR',
    'Rajasthan',
    'Gujarat',
    'MP',
    'Maharashtra',
  ];
  statesFilter: string[] = ['Select Product', 'HL', 'LAP', 'BL', 'SBL'];
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
  loginTotalAmount: number = 550;
  loginTotalFiles: number = 3050;
  financialTotalAmount: number = 550;
  financialTotalFiles: number = 3050;
  finalTotalAmount: number = 550;
  finalTotalFiles: number = 3050;
  disbursalTotalAmount: number = 500;
  disbursalTotalFiles: number = 2650;

  minfinalAmountValue = 350;
  maxfinalAmountValue = 500;

  minLoginFileValue = 3000;
  maxLoginFileValue = 4000;

  minfinancialAmountValue = 110;
  maxfinancialAmountValue = 145;

  minFinancialFileValue = 1350;
  maxFinancialFileValue = 1800;

  minDisbursalAmountValue = 90;
  maxDisbursalAmountValue = 120;

  minDisbursalFileValue = 1100;
  maxDisbursalFileValue = 1400;

  selectedState: string = 'Pan India';
  selectedFilter: string = 'September';

  tats: string[] = [
    'Stage of Files',
    'Login ',
    'Final Approvals',
    'Financial Approvals',
    'Disbursal',
  ];
  statuss: string[] = ['Select Status', 'pending', 'approved'];
  selectedTat: string = 'Stage of Files';
  selectedStatus: string = 'Select Status';
  selectedFilterState: string = 'Select Product';
  files!: TreeNode[];
  loginData!: TreeNode[];
  finalData!: TreeNode[];
  financialData!:TreeNode[];
  routeName!: string | null;
  tableShow: boolean = true;
  constructor(
    private cdRef: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.routeName = params.get('data');
    });
    this.files = [
      {
        data: {
          StateName: 'Pan India',
          loginFiles: '3050',
          financialAmount: '175',
          finalAmount: '160',
          target: '150',
          actual: '165',
          percentage: '110',
        },
        children: [
          {
            data: {
              StateName: 'PCH',
              loginFiles: '244',
              financialAmount: '14',
              finalAmount: '12.8',
              target: '12',
              actual: '13.2',
              percentage: '110',
            },
            children: [
              {
                data: {
                  StateName: 'Chandigarh',
                  loginFiles: '15',
                  financialAmount: '4.9',
                  finalAmount: '4.5',
                  target: '4.2',
                  actual: '4.6',
                  percentage: '110',
                },
                children: [
                  {
                    data: {
                      StateName: 'Chandigarh',
                      loginFiles: '6',
                      financialAmount: '2.0',
                      finalAmount: '1.8',
                      target: '1.7',
                      actual: '1.8',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Ambala',
                      loginFiles: '4',
                      financialAmount: '1.4',
                      finalAmount: '1.3',
                      target: '1.2',
                      actual: '1.3',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Patiala',
                      loginFiles: '5',
                      financialAmount: '1.6',
                      finalAmount: '1.4',
                      target: '1.3',
                      actual: '1.5',
                      percentage: '110',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Ludhiana',
                  loginFiles: '11',
                  financialAmount: '3.6',
                  finalAmount: '3.3',
                  target: '3.1',
                  actual: '3.4',
                  percentage: '110',
                },
                children: [
                  {
                    data: {
                      StateName: 'Ludhiana',
                      loginFiles: '5',
                      financialAmount: '1.5',
                      finalAmount: '1.3',
                      target: '1.2',
                      actual: '1.4',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Jalandhar',
                      loginFiles: '3',
                      financialAmount: '1.0',
                      finalAmount: '0.9',
                      target: '0.9',
                      actual: '1.0',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Moga',
                      loginFiles: '4',
                      financialAmount: '1.2',
                      finalAmount: '1.1',
                      target: '1.0',
                      actual: '1.1',
                      percentage: '110',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Karnal',
                  loginFiles: '9',
                  financialAmount: '2.9',
                  finalAmount: '2.7',
                  target: '2.5',
                  actual: '2.8',
                  percentage: '110',
                },
                children: [
                  {
                    data: {
                      StateName: 'Karnal',
                      loginFiles: '4',
                      financialAmount: '1.2',
                      finalAmount: '1.1',
                      target: '1.0',
                      actual: '1.1',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Rohtak',
                      loginFiles: '3',
                      financialAmount: '0.8',
                      finalAmount: '0.8',
                      target: '0.7',
                      actual: '0.8',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Panipat',
                      loginFiles: '3',
                      financialAmount: '0.9',
                      finalAmount: '0.9',
                      target: '0.8',
                      actual: '0.9',
                      percentage: '110',
                    },
                  },
                ],
              },
            ],
          },
          {
            data: {
              StateName: 'NCR',
              loginFiles: '458',
              financialAmount: '26.25',
              finalAmount: '24',
              target: '22.5',
              actual: '24.8',
              percentage: '110',
            },
            children: [
              {
                data: {
                  StateName: 'Delhi',
                  loginFiles: '275',
                  financialAmount: '15.8',
                  finalAmount: '14.4',
                  target: '13.5',
                  actual: '14.9',
                  percentage: '110',
                },
                children: [
                  {
                    data: {
                      StateName: 'JanakPuri',
                      loginFiles: '110',
                      financialAmount: '6.3',
                      finalAmount: '5.8',
                      target: '5.4',
                      actual: '5.9',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Laxmi Nagar',
                      loginFiles: '77',
                      financialAmount: '4.4',
                      finalAmount: '4.0',
                      target: '3.8',
                      actual: '4.2',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sahibad',
                      loginFiles: '88',
                      financialAmount: '5.0',
                      finalAmount: '4.6',
                      target: '4.3',
                      actual: '4.8',
                      percentage: '110',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Gurgoan',
                  loginFiles: '183',
                  financialAmount: '10.5',
                  finalAmount: '9.6',
                  target: '9.0',
                  actual: '9.9',
                  percentage: '110',
                },
                children: [
                  {
                    data: {
                      StateName: 'Gurgoan',
                      loginFiles: '73',
                      financialAmount: '4.2',
                      finalAmount: '3.8',
                      target: '3.6',
                      actual: '4.0',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Faridabad',
                      loginFiles: '51',
                      financialAmount: '2.9',
                      finalAmount: '2.7',
                      target: '2.5',
                      actual: '2.8',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Meerut',
                      loginFiles: '59',
                      financialAmount: '3.4',
                      finalAmount: '3.1',
                      target: '2.9',
                      actual: '3.2',
                      percentage: '110',
                    },
                  },
                ],
              },
            ],
          },
          {
            data: {
              StateName: 'Rajasthan',
              loginFiles: '915',
              financialAmount: '52.5',
              finalAmount: '48.0',
              target: '45.0',
              actual: '49.5',
              percentage: '110',
            },
            children: [
              {
                data: {
                  StateName: 'Jaipur',
                  loginFiles: '320',
                  financialAmount: '18.4',
                  finalAmount: '16.8',
                  target: '15.8',
                  actual: '17.3',
                  percentage: '110',
                },
                children: [
                  {
                    data: {
                      StateName: 'Jaipur',
                      loginFiles: '128',
                      financialAmount: '7.4',
                      finalAmount: '6.7',
                      target: '6.3',
                      actual: '6.9',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sikar Road',
                      loginFiles: '90',
                      financialAmount: '5.1',
                      finalAmount: '4.7',
                      target: '4.4',
                      actual: '4.9',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Behror',
                      loginFiles: '102',
                      financialAmount: '5.9',
                      finalAmount: '5.4',
                      target: '5.0',
                      actual: '5.5',
                      percentage: '110',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Ajmer',
                  loginFiles: '238',
                  financialAmount: '13.7',
                  finalAmount: '12.5',
                  target: '11.7',
                  actual: '12.9',
                  percentage: '110',
                },
                children: [
                  {
                    data: {
                      StateName: 'Ajmer',
                      loginFiles: '95',
                      financialAmount: '5.5',
                      finalAmount: '5.0',
                      target: '4.7',
                      actual: '5.1',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Kekri',
                      loginFiles: '67',
                      financialAmount: '3.8',
                      finalAmount: '3.5',
                      target: '3.3',
                      actual: '3.6',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Merta',
                      loginFiles: '76',
                      financialAmount: '4.4',
                      finalAmount: '4.0',
                      target: '3.7',
                      actual: '4.1',
                      percentage: '110',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Udaipur',
                  loginFiles: '192',
                  financialAmount: '11.0',
                  finalAmount: '10.1',
                  target: '9.5',
                  actual: '10.4',
                  percentage: '110',
                },
                children: [
                  {
                    data: {
                      StateName: 'Rajsamand',
                      loginFiles: '77',
                      financialAmount: '4.4',
                      finalAmount: '4.0',
                      target: '3.8',
                      actual: '4.2',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Banswara',
                      loginFiles: '54',
                      financialAmount: '3.1',
                      finalAmount: '2.8',
                      target: '2.6',
                      actual: '2.9',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Udaipur',
                      loginFiles: '61',
                      financialAmount: '3.5',
                      finalAmount: '3.2',
                      target: '3.0',
                      actual: '3.3',
                      percentage: '110',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Kota',
                  loginFiles: '165',
                  financialAmount: '9.5',
                  finalAmount: '8.6',
                  target: '8.1',
                  actual: '8.9',
                  percentage: '110',
                },
              },
            ],
          },
          {
            data: {
              StateName: 'Gujarat',
              loginFiles: '366',
              financialAmount: '21.0',
              finalAmount: '19.2',
              target: '18.0',
              actual: '19.8',
              percentage: '110',
            },
            children: [
              {
                data: {
                  StateName: 'Ahmedabad',
                  loginFiles: '128',
                  financialAmount: '7.4',
                  finalAmount: '6.7',
                  target: '6.3',
                  actual: '6.9',
                  percentage: '110',
                },
                children: [
                  {
                    data: {
                      StateName: 'Ahmedabad',
                      loginFiles: '51',
                      financialAmount: '2.9',
                      finalAmount: '2.7',
                      target: '2.5',
                      actual: '2.8',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Gandhinagar',
                      loginFiles: '36',
                      financialAmount: '2.1',
                      finalAmount: '1.9',
                      target: '1.8',
                      actual: '1.9',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sanand',
                      loginFiles: '41',
                      financialAmount: '2.4',
                      finalAmount: '2.2',
                      target: '2.0',
                      actual: '2.2',
                      percentage: '110',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Surat',
                  loginFiles: '95',
                  financialAmount: '5.5',
                  finalAmount: '5.0',
                  target: '4.7',
                  actual: '5.1',
                  percentage: '110',
                },
                children: [
                  {
                    data: {
                      StateName: 'Surat',
                      loginFiles: '38',
                      financialAmount: '2.2',
                      finalAmount: '2.0',
                      target: '1.9',
                      actual: '2.1',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Kadodara',
                      loginFiles: '27',
                      financialAmount: '1.5',
                      finalAmount: '1.4',
                      target: '1.3',
                      actual: '1.4',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Rundh',
                      loginFiles: '30',
                      financialAmount: '1.7',
                      finalAmount: '1.6',
                      target: '1.5',
                      actual: '1.6',
                      percentage: '110',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Rajkot',
                  loginFiles: '77',
                  financialAmount: '4.4',
                  finalAmount: '4.0',
                  target: '3.8',
                  actual: '4.2',
                  percentage: '110',
                },
                children: [
                  {
                    data: {
                      StateName: 'Rajkot',
                      loginFiles: '31',
                      financialAmount: '1.8',
                      finalAmount: '1.6',
                      target: '1.5',
                      actual: '1.7',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Jamnagar',
                      loginFiles: '22',
                      financialAmount: '1.2',
                      finalAmount: '1.1',
                      target: '1.1',
                      actual: '1.2',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Junagadh',
                      loginFiles: '25',
                      financialAmount: '1.4',
                      finalAmount: '1.3',
                      target: '1.2',
                      actual: '1.3',
                      percentage: '11',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Vadodara',
                  loginFiles: '66',
                  financialAmount: '3.8',
                  finalAmount: '3.5',
                  target: '3.2',
                  actual: '3.6',
                  percentage: '110',
                },
                children: [
                  {
                    data: {
                      StateName: 'Vadodara',
                      loginFiles: '26',
                      financialAmount: '1.5',
                      finalAmount: '1.4',
                      target: '1.3',
                      actual: '1.4',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Anand',
                      loginFiles: '18',
                      financialAmount: '1.1',
                      finalAmount: '1.0',
                      target: '0.9',
                      actual: '1.0',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Dabhoi',
                      loginFiles: '21',
                      financialAmount: '1.2',
                      finalAmount: '1.1',
                      target: '1.0',
                      actual: '1.1',
                      percentage: '110',
                    },
                  },
                ],
              },
            ],
          },
          {
            data: {
              StateName: 'MP',
              loginFiles: '671',
              financialAmount: '38.5',
              finalAmount: '35.2',
              target: '33.0',
              actual: '36.3',
              percentage: '110',
            },
            children: [
              {
                data: {
                  StateName: 'Indore',
                  loginFiles: '235',
                  financialAmount: '13.5',
                  finalAmount: '12.3',
                  target: '11.6',
                  actual: '12.7',
                  percentage: '110',
                },
                children: [
                  {
                    data: {
                      StateName: 'Indore',
                      loginFiles: '94',
                      financialAmount: '5.4',
                      finalAmount: '4.9',
                      target: '4.6',
                      actual: '5.1',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Ujjain',
                      loginFiles: '66',
                      financialAmount: '3.8',
                      finalAmount: '3.4',
                      target: '3.2',
                      actual: '3.6',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Dewas',
                      loginFiles: '75',
                      financialAmount: '4.3',
                      finalAmount: '3.9',
                      target: '3.7',
                      actual: '4.1',
                      percentage: '110',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Gwalior',
                  loginFiles: '174',
                  financialAmount: '10.0',
                  finalAmount: '9.2',
                  target: '8.6',
                  actual: '9.4',
                  percentage: '110',
                },
                children: [
                  {
                    data: {
                      StateName: 'Gwalior',
                      loginFiles: '70',
                      financialAmount: '4.0',
                      finalAmount: '3.7',
                      target: '3.4',
                      actual: '3.8',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Morena',
                      loginFiles: '49',
                      financialAmount: '2.8',
                      finalAmount: '2.6',
                      target: '2.4',
                      actual: '2.6',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Bhind',
                      loginFiles: '56',
                      financialAmount: '3.2',
                      finalAmount: '2.9',
                      target: '2.7',
                      actual: '3.0',
                      percentage: '110',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Bhopal',
                  loginFiles: '141',
                  financialAmount: '8.1',
                  finalAmount: '7.4',
                  target: '6.9',
                  actual: '7.6',
                  percentage: '110',
                },
                children: [
                  {
                    data: {
                      StateName: 'Bhopal',
                      loginFiles: '56',
                      financialAmount: '3.2',
                      finalAmount: '3.0',
                      target: '2.8',
                      actual: '3.0',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Vidisha',
                      loginFiles: '39',
                      financialAmount: '2.3',
                      finalAmount: '2.1',
                      target: '1.9',
                      actual: '2.1',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sehore',
                      loginFiles: '45',
                      financialAmount: '2.6',
                      finalAmount: '2.4',
                      target: '2.2',
                      actual: '2.4',
                      percentage: '110',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Jabalpur',
                  loginFiles: '121',
                  financialAmount: '6.9',
                  finalAmount: '6.3',
                  target: '5.9',
                  actual: '6.5',
                  percentage: '110',
                },
                children: [
                  {
                    data: {
                      StateName: 'Jabalpur',
                      loginFiles: '48',
                      financialAmount: '2.8',
                      finalAmount: '2.5',
                      target: '2.4',
                      actual: '2.6',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sihora',
                      loginFiles: '34',
                      financialAmount: '1.9',
                      finalAmount: '1.8',
                      target: '1.7',
                      actual: '1.8',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Mandla',
                      loginFiles: '39',
                      financialAmount: '2.2',
                      finalAmount: '2.0',
                      target: '1.9',
                      actual: '2.1',
                      percentage: '110',
                    },
                  },
                ],
              },
            ],
          },
          {
            data: {
              StateName: 'Maharashtra',
              loginFiles: '397',
              financialAmount: '22.8',
              finalAmount: '20.8',
              target: '19.5',
              actual: '21.5',
              percentage: '110',
            },
            children: [
              {
                data: {
                  StateName: 'Mumbai',
                  loginFiles: '139',
                  financialAmount: '8.0',
                  finalAmount: '7.3',
                  target: '6.8',
                  actual: '7.5',
                  percentage: '110',
                },
                children: [
                  {
                    data: {
                      StateName: 'Navi Mumbai',
                      loginFiles: '56',
                      financialAmount: '3.2',
                      finalAmount: '2.9',
                      target: '2.7',
                      actual: '3.0',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Thane',
                      loginFiles: '39',
                      financialAmount: '2.2',
                      finalAmount: '2.0',
                      target: '1.9',
                      actual: '2.1',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Kalyan',
                      loginFiles: '44',
                      financialAmount: '2.5',
                      finalAmount: '2.3',
                      target: '2.2',
                      actual: '2.4',
                      percentage: '110',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Nashik',
                  loginFiles: '103',
                  financialAmount: '5.9',
                  finalAmount: '5.4',
                  target: '5.1',
                  actual: '5.6',
                  percentage: '110',
                },
                children: [
                  {
                    data: {
                      StateName: 'Nashik',
                      loginFiles: '41',
                      financialAmount: '2.4',
                      finalAmount: '2.2',
                      target: '2.0',
                      actual: '2.2',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Malegaon',
                      loginFiles: '29',
                      financialAmount: '1.7',
                      finalAmount: '1.5',
                      target: '1.4',
                      actual: '1.6',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sinnar',
                      loginFiles: '33',
                      financialAmount: '1.9',
                      finalAmount: '1.7',
                      target: '1.6',
                      actual: '1.8',
                      percentage: '110',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Pune',
                  loginFiles: '83',
                  financialAmount: '4.8',
                  finalAmount: '4.4',
                  target: '4.1',
                  actual: '4.5',
                  percentage: '110',
                },
                children: [
                  {
                    data: {
                      StateName: 'Pune',
                      loginFiles: '33',
                      financialAmount: '1.9',
                      finalAmount: '1.7',
                      target: '1.6',
                      actual: '1.8',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Bhor',
                      loginFiles: '23',
                      financialAmount: '1.3',
                      finalAmount: '1.2',
                      target: '1.1',
                      actual: '1.3',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Shikrapur',
                      loginFiles: '27',
                      financialAmount: '1.5',
                      finalAmount: '1.4',
                      target: '1.3',
                      actual: '1.4',
                      percentage: '110',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Nagpur',
                  loginFiles: '71',
                  financialAmount: '4.1',
                  finalAmount: '3.7',
                  target: '3.5',
                  actual: '3.9',
                  percentage: '110',
                },
                children: [
                  {
                    data: {
                      StateName: 'Nagpur',
                      loginFiles: '29',
                      financialAmount: '1.6',
                      finalAmount: '1.5',
                      target: '1.4',
                      actual: '1.5',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Amravati',
                      loginFiles: '20',
                      financialAmount: '1.1',
                      finalAmount: '1.0',
                      target: '1.0',
                      actual: '1.1',
                      percentage: '110',
                    },
                  },
                  {
                    data: {
                      StateName: 'Gondia',
                      loginFiles: '23',
                      financialAmount: '1.3',
                      finalAmount: '1.2',
                      target: '1.1',
                      actual: '1.2',
                      percentage: '110',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    this.loginData = [
      {
        data: {
          StateName: 'Pan India',
          AllProductFiles: '3050',
          HLFiles: '1830',
          HLPercentage: '60',
          LapFiles: '366',
          LapPercentage: '12',
          BLFiles: '244',
          BlPercentage: '8',
          SBLFiles: '610',
          SBLPercentage: '20',
        },
        children: [
          {
            data: {
              StateName: 'PCH',
              AllProductFiles: '244',
              HLFiles: '146',
              HLPercentage: '60',
              LapFiles: '29',
              LapPercentage: '12',
              BLFiles: '20',
              BlPercentage: '8',
              SBLFiles: '49',
              SBLPercentage: '20',
            },
            children: [
              {
                data: {
                  StateName: 'Chandigarh',
                  AllProductFiles: '85',
                  HLFiles: '51',
                  HLPercentage: '60',
                  LapFiles: '10',
                  LapPercentage: '12',
                  BLFiles: '7',
                  BlPercentage: '8',
                  SBLFiles: '17',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Chandigarh',
                      AllProductFiles: '34',
                      HLFiles: '20',
                      HLPercentage: '60',
                      LapFiles: '4',
                      LapPercentage: '12',
                      BLFiles: '3',
                      BlPercentage: '8',
                      SBLFiles: '7',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Ambala',
                      AllProductFiles: '24',
                      HLFiles: '14',
                      HLPercentage: '60',
                      LapFiles: '3',
                      LapPercentage: '12',
                      BLFiles: '2',
                      BlPercentage: '8',
                      SBLFiles: '5',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Patiala',
                      AllProductFiles: '27',
                      HLFiles: '16',
                      HLPercentage: '60',
                      LapFiles: '3',
                      LapPercentage: '12',
                      BLFiles: '2',
                      BlPercentage: '8',
                      SBLFiles: '5',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Ludhiana',
                  AllProductFiles: '63',
                  HLFiles: '38',
                  HLPercentage: '60',
                  LapFiles: '8',
                  LapPercentage: '12',
                  BLFiles: '5',
                  BlPercentage: '8',
                  SBLFiles: '13',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Ludhiana',
                      AllProductFiles: '25',
                      HLFiles: '15',
                      HLPercentage: '60',
                      LapFiles: '3',
                      LapPercentage: '12',
                      BLFiles: '2',
                      BlPercentage: '8',
                      SBLFiles: '5',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Jalandhar',
                      AllProductFiles: '18',
                      HLFiles: '11',
                      HLPercentage: '60',
                      LapFiles: '2',
                      LapPercentage: '12',
                      BLFiles: '1',
                      BlPercentage: '8',
                      SBLFiles: '4',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Moga',
                      AllProductFiles: '20',
                      HLFiles: '12',
                      HLPercentage: '60',
                      LapFiles: '2',
                      LapPercentage: '12',
                      BLFiles: '2',
                      BlPercentage: '8',
                      SBLFiles: '4',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Karnal',
                  AllProductFiles: '51',
                  HLFiles: '31',
                  HLPercentage: '60',
                  LapFiles: '6',
                  LapPercentage: '12',
                  BLFiles: '4',
                  BlPercentage: '8',
                  SBLFiles: '10',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Karnal',
                      AllProductFiles: '20',
                      HLFiles: '12',
                      HLPercentage: '60',
                      LapFiles: '2',
                      LapPercentage: '12',
                      BLFiles: '2',
                      BlPercentage: '8',
                      SBLFiles: '4',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Rohtak',
                      AllProductFiles: '14',
                      HLFiles: '9',
                      HLPercentage: '60',
                      LapFiles: '2',
                      LapPercentage: '12',
                      BLFiles: '1',
                      BlPercentage: '8',
                      SBLFiles: '3',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Panipat',
                      AllProductFiles: '16',
                      HLFiles: '10',
                      HLPercentage: '60',
                      LapFiles: '2',
                      LapPercentage: '12',
                      BLFiles: '1',
                      BlPercentage: '8',
                      SBLFiles: '3',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
            ],
          },
          {
            data: {
              StateName: 'NCR',
              AllProductFiles: '458',
              HLFiles: '275',
              HLPercentage: '60',
              LapFiles: '55',
              LapPercentage: '12',
              BLFiles: '37',
              BlPercentage: '8',
              SBLFiles: '92',
              SBLPercentage: '20',
            },
            children: [
              {
                data: {
                  StateName: 'Delhi',
                  AllProductFiles: '275',
                  HLFiles: '165',
                  HLPercentage: '60',
                  LapFiles: '33',
                  LapPercentage: '12',
                  BLFiles: '22',
                  BlPercentage: '8',
                  SBLFiles: '55',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'JanakPuri',
                      AllProductFiles: '110',
                      HLFiles: '66',
                      HLPercentage: '60',
                      LapFiles: '13',
                      LapPercentage: '12',
                      BLFiles: '9',
                      BlPercentage: '8',
                      SBLFiles: '22',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Laxmi Nagar',
                      AllProductFiles: '77',
                      HLFiles: '46',
                      HLPercentage: '60',
                      LapFiles: '9',
                      LapPercentage: '12',
                      BLFiles: '6',
                      BlPercentage: '8',
                      SBLFiles: '15',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sahibad',
                      AllProductFiles: '88',
                      HLFiles: '53',
                      HLPercentage: '60',
                      LapFiles: '11',
                      LapPercentage: '12',
                      BLFiles: '7',
                      BlPercentage: '8',
                      SBLFiles: '37',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Gurgoan',
                  AllProductFiles: '183',
                  HLFiles: '110',
                  HLPercentage: '60',
                  LapFiles: '22',
                  LapPercentage: '12',
                  BLFiles: '15',
                  BlPercentage: '8',
                  SBLFiles: '37',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Gurgoan',
                      AllProductFiles: '73',
                      HLFiles: '44',
                      HLPercentage: '60',
                      LapFiles: '9',
                      LapPercentage: '12',
                      BLFiles: '6',
                      BlPercentage: '8',
                      SBLFiles: '15',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Faridabad',
                      AllProductFiles: '51',
                      HLFiles: '31',
                      HLPercentage: '60',
                      LapFiles: '6',
                      LapPercentage: '12',
                      BLFiles: '4',
                      BlPercentage: '8',
                      SBLFiles: '10',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Meerut',
                      AllProductFiles: '59',
                      HLFiles: '35',
                      HLPercentage: '60',
                      LapFiles: '7',
                      LapPercentage: '12',
                      BLFiles: '5',
                      BlPercentage: '8',
                      SBLFiles: '12',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
            ],
          },
          {
            data: {
              StateName: 'Rajasthan',
              AllProductFiles: '915',
              HLFiles: '549',
              HLPercentage: '60',
              LapFiles: '110',
              LapPercentage: '12',
              BLFiles: '73',
              BlPercentage: '8',
              SBLFiles: '183',
              SBLPercentage: '20',
            },
            children: [
              {
                data: {
                  StateName: 'Jaipur',
                  AllProductFiles: '320',
                  HLFiles: '192',
                  HLPercentage: '60',
                  LapFiles: '38',
                  LapPercentage: '12',
                  BLFiles: '26',
                  BlPercentage: '8',
                  SBLFiles: '64',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Jaipur',
                      AllProductFiles: '128',
                      HLFiles: '77',
                      HLPercentage: '60',
                      LapFiles: '15',
                      LapPercentage: '12',
                      BLFiles: '10',
                      BlPercentage: '8',
                      SBLFiles: '26',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sikar Road',
                      AllProductFiles: '90',
                      HLFiles: '54',
                      HLPercentage: '60',
                      LapFiles: '11',
                      LapPercentage: '12',
                      BLFiles: '7',
                      BlPercentage: '8',
                      SBLFiles: '18',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Behror',
                      AllProductFiles: '102',
                      HLFiles: '61',
                      HLPercentage: '60',
                      LapFiles: '12',
                      LapPercentage: '12',
                      BLFiles: '8',
                      BlPercentage: '8',
                      SBLFiles: '20',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Ajmer',
                  AllProductFiles: '238',
                  HLFiles: '143',
                  HLPercentage: '60',
                  LapFiles: '29',
                  LapPercentage: '12',
                  BLFiles: '19',
                  BlPercentage: '8',
                  SBLFiles: '48',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Ajmer',
                      AllProductFiles: '95',
                      HLFiles: '57',
                      HLPercentage: '60',
                      LapFiles: '11',
                      LapPercentage: '12',
                      BLFiles: '8',
                      BlPercentage: '8',
                      SBLFiles: '19',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Kekri',
                      AllProductFiles: '67',
                      HLFiles: '40',
                      HLPercentage: '60',
                      LapFiles: '8',
                      LapPercentage: '12',
                      BLFiles: '8',
                      BlPercentage: '8',
                      SBLFiles: '13',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Merta',
                      AllProductFiles: '76',
                      HLFiles: '46',
                      HLPercentage: '60',
                      LapFiles: '9',
                      LapPercentage: '12',
                      BLFiles: '6',
                      BlPercentage: '8',
                      SBLFiles: '15',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Udaipur',
                  AllProductFiles: '192',
                  HLFiles: '115',
                  HLPercentage: '60',
                  LapFiles: '23',
                  LapPercentage: '12',
                  BLFiles: '15',
                  BlPercentage: '8',
                  SBLFiles: '38',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Rajsamand',
                      AllProductFiles: '77',
                      HLFiles: '46',
                      HLPercentage: '60',
                      LapFiles: '9',
                      LapPercentage: '12',
                      BLFiles: '6',
                      BlPercentage: '8',
                      SBLFiles: '15',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Banswara',
                      AllProductFiles: '54',
                      HLFiles: '32',
                      HLPercentage: '60',
                      LapFiles: '6',
                      LapPercentage: '12',
                      BLFiles: '4',
                      BlPercentage: '8',
                      SBLFiles: '11',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Udaipur',
                      AllProductFiles: '61',
                      HLFiles: '37',
                      HLPercentage: '60',
                      LapFiles: '7',
                      LapPercentage: '12',
                      BLFiles: '5',
                      BlPercentage: '8',
                      SBLFiles: '12',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Kota',
                  AllProductFiles: '165',
                  HLFiles: '99',
                  HLPercentage: '60',
                  LapFiles: '20',
                  LapPercentage: '12',
                  BLFiles: '13',
                  BlPercentage: '8',
                  SBLFiles: '33',
                  SBLPercentage: '20',
                },
              },
            ],
          },
          {
            data: {
              StateName: 'Gujarat',
              AllProductFiles: '366',
              HLFiles: '220',
              HLPercentage: '60',
              LapFiles: '44',
              LapPercentage: '12',
              BLFiles: '29',
              BlPercentage: '8',
              SBLFiles: '73',
              SBLPercentage: '20',
            },
            children: [
              {
                data: {
                  StateName: 'Ahmedabad',
                  AllProductFiles: '128',
                  HLFiles: '77',
                  HLPercentage: '60',
                  LapFiles: '15',
                  LapPercentage: '12',
                  BLFiles: '10',
                  BlPercentage: '8',
                  SBLFiles: '26',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Ahmedabad',
                      AllProductFiles: '51',
                      HLFiles: '31',
                      HLPercentage: '60',
                      LapFiles: '6',
                      LapPercentage: '12',
                      BLFiles: '4',
                      BlPercentage: '8',
                      SBLFiles: '10',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Gandhinagar',
                      AllProductFiles: '36',
                      HLFiles: '22',
                      HLPercentage: '60',
                      LapFiles: '4',
                      LapPercentage: '12',
                      BLFiles: '3',
                      BlPercentage: '8',
                      SBLFiles: '7',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sanand',
                      AllProductFiles: '41',
                      HLFiles: '25',
                      HLPercentage: '60',
                      LapFiles: '5',
                      LapPercentage: '12',
                      BLFiles: '3',
                      BlPercentage: '8',
                      SBLFiles: '8',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Surat',
                  AllProductFiles: '95',
                  HLFiles: '57',
                  HLPercentage: '60',
                  LapFiles: '11',
                  LapPercentage: '12',
                  BLFiles: '8',
                  BlPercentage: '8',
                  SBLFiles: '19',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Surat',
                      AllProductFiles: '95',
                      HLFiles: '57',
                      HLPercentage: '60',
                      LapFiles: '11',
                      LapPercentage: '12',
                      BLFiles: '8',
                      BlPercentage: '8',
                      SBLFiles: '19',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Kadodara',
                      AllProductFiles: '38',
                      HLFiles: '23',
                      HLPercentage: '60',
                      LapFiles: '5',
                      LapPercentage: '12',
                      BLFiles: '3',
                      BlPercentage: '8',
                      SBLFiles: 8,
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Rundh',
                      AllProductFiles: '30',
                      HLFiles: '18',
                      HLPercentage: '60',
                      LapFiles: '4',
                      LapPercentage: '12',
                      BLFiles: '2',
                      BlPercentage: '8',
                      SBLFiles: '6',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Rajkot',
                  AllProductFiles: '77',
                  HLFiles: '46',
                  HLPercentage: '60',
                  LapFiles: '9',
                  LapPercentage: '12',
                  BLFiles: '6',
                  BlPercentage: '8',
                  SBLFiles: '15',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Rajkot',
                      AllProductFiles: '31',
                      HLFiles: '18',
                      HLPercentage: '60',
                      LapFiles: '4',
                      LapPercentage: '12',
                      BLFiles: '2',
                      BlPercentage: '8',
                      SBLFiles: '6',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Jamnagar',
                      AllProductFiles: '22',
                      HLFiles: '13',
                      HLPercentage: '60',
                      LapFiles: '3',
                      LapPercentage: '12',
                      BLFiles: '2',
                      BlPercentage: '8',
                      SBLFiles: '4',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Junagadh',
                      AllProductFiles: '25',
                      HLFiles: '15',
                      HLPercentage: '60',
                      LapFiles: '3',
                      LapPercentage: '12',
                      BLFiles: '2',
                      BlPercentage: '8',
                      SBLFiles: '5',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Vadodara',
                  AllProductFiles: '66',
                  HLFiles: '40',
                  HLPercentage: '60',
                  LapFiles: '8',
                  LapPercentage: '12',
                  BLFiles: '5',
                  BlPercentage: '8',
                  SBLFiles: '12',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Vadodara',
                      AllProductFiles: '26',
                      HLFiles: '16',
                      HLPercentage: '60',
                      LapFiles: '3',
                      LapPercentage: '12',
                      BLFiles: '2',
                      BlPercentage: '8',
                      SBLFiles: '5',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Anand',
                      AllProductFiles: '18',
                      HLFiles: '11',
                      HLPercentage: '60',
                      LapFiles: '2',
                      LapPercentage: '12',
                      BLFiles: '1',
                      BlPercentage: '8',
                      SBLFiles: '4',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Dabhoi',
                      AllProductFiles: '21',
                      HLFiles: '13',
                      HLPercentage: '60',
                      LapFiles: '3',
                      LapPercentage: '12',
                      BLFiles: '2',
                      BlPercentage: '8',
                      SBLFiles: '4',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
            ],
          },
          {
            data: {
              StateName: 'MP',
              AllProductFiles: '671',
              HLFiles: '403',
              HLPercentage: '60',
              LapFiles: '81',
              LapPercentage: '12',
              BLFiles: '54',
              BlPercentage: '8',
              SBLFiles: '134',
              SBLPercentage: '20',
            },
            children: [
              {
                data: {
                  StateName: 'Indore',
                  AllProductFiles: '235',
                  HLFiles: '141',
                  HLPercentage: '60',
                  LapFiles: '28',
                  LapPercentage: '12',
                  BLFiles: '19',
                  BlPercentage: '8',
                  SBLFiles: '47',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Indore',
                      AllProductFiles: '94',
                      HLFiles: '56',
                      HLPercentage: '60',
                      LapFiles: '11',
                      LapPercentage: '12',
                      BLFiles: '8',
                      BlPercentage: '8',
                      SBLFiles: '19',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Ujjain',
                      AllProductFiles: '66',
                      HLFiles: '39',
                      HLPercentage: '60',
                      LapFiles: '8',
                      LapPercentage: '12',
                      BLFiles: '5',
                      BlPercentage: '8',
                      SBLFiles: '13',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Dewas',
                      AllProductFiles: '75',
                      HLFiles: '45',
                      HLPercentage: '60',
                      LapFiles: '9',
                      LapPercentage: '12',
                      BLFiles: '6',
                      BlPercentage: '8',
                      SBLFiles: '15',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Gwalior',
                  AllProductFiles: '174',
                  HLFiles: '105',
                  HLPercentage: '60',
                  LapFiles: '21',
                  LapPercentage: '12',
                  BLFiles: '14',
                  BlPercentage: '8',
                  SBLFiles: '35',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Gwalior',
                      AllProductFiles: '70',
                      HLFiles: '42',
                      HLPercentage: '60',
                      LapFiles: '8',
                      LapPercentage: '12',
                      BLFiles: '6',
                      BlPercentage: '8',
                      SBLFiles: '14',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Morena',
                      AllProductFiles: '49',
                      HLFiles: '29',
                      HLPercentage: '60',
                      LapFiles: '6',
                      LapPercentage: '12',
                      BLFiles: '4',
                      BlPercentage: '8',
                      SBLFiles: '10',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Bhind',
                      AllProductFiles: '56',
                      HLFiles: '33',
                      HLPercentage: '60',
                      LapFiles: '7',
                      LapPercentage: '12',
                      BLFiles: '4',
                      BlPercentage: '8',
                      SBLFiles: '11',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Bhopal',
                  AllProductFiles: '141',
                  HLFiles: '85',
                  HLPercentage: '60',
                  LapFiles: '17',
                  LapPercentage: '12',
                  BLFiles: '11',
                  BlPercentage: '8',
                  SBLFiles: '28',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Bhopal',
                      AllProductFiles: '56',
                      HLFiles: '34',
                      HLPercentage: '60',
                      LapFiles: '7',
                      LapPercentage: '12',
                      BLFiles: '5',
                      BlPercentage: '8',
                      SBLFiles: '11',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Vidisha',
                      AllProductFiles: '39',
                      HLFiles: '24',
                      HLPercentage: '60',
                      LapFiles: '5',
                      LapPercentage: '12',
                      BLFiles: '3',
                      BlPercentage: '8',
                      SBLFiles: '8',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sehore',
                      AllProductFiles: '45',
                      HLFiles: '27',
                      HLPercentage: '60',
                      LapFiles: '5',
                      LapPercentage: '12',
                      BLFiles: '4',
                      BlPercentage: '8',
                      SBLFiles: '9',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Jabalpur',
                  AllProductFiles: '121',
                  HLFiles: '72',
                  HLPercentage: '60',
                  LapFiles: '14',
                  LapPercentage: '12',
                  BLFiles: '10',
                  BlPercentage: '8',
                  SBLFiles: '24',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Jabalpur',
                      AllProductFiles: '48',
                      HLFiles: '29',
                      HLPercentage: '60',
                      LapFiles: '6',
                      LapPercentage: '12',
                      BLFiles: '4',
                      BlPercentage: '8',
                      SBLFiles: '10',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sihora',
                      AllProductFiles: '34',
                      HLFiles: '20',
                      HLPercentage: '60',
                      LapFiles: '4',
                      LapPercentage: '12',
                      BLFiles: '3',
                      BlPercentage: '8',
                      SBLFiles: '7',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Mandla',
                      AllProductFiles: '39',
                      HLFiles: '23',
                      HLPercentage: '60',
                      LapFiles: '5',
                      LapPercentage: '12',
                      BLFiles: '3',
                      BlPercentage: '8',
                      SBLFiles: '8',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
            ],
          },
          {
            data: {
              StateName: 'Maharashtra',
              AllProductFiles: '397',
              HLFiles: '238',
              HLPercentage: '60',
              LapFiles: '48',
              LapPercentage: '12',
              BLFiles: '32',
              BlPercentage: '8',
              SBLFiles: '79',
              SBLPercentage: '20',
            },
            children: [
              {
                data: {
                  StateName: 'Mumbai',
                  AllProductFiles: '139',
                  HLFiles: '83',
                  HLPercentage: '60',
                  LapFiles: '17',
                  LapPercentage: '12',
                  BLFiles: '11',
                  BlPercentage: '8',
                  SBLFiles: '28',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Navi Mumbai',
                      AllProductFiles: '56',
                      HLFiles: '33',
                      HLPercentage: '60',
                      LapFiles: '7',
                      LapPercentage: '12',
                      BLFiles: '4',
                      BlPercentage: '8',
                      SBLFiles: '11',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Thane',
                      AllProductFiles: '39',
                      HLFiles: '23',
                      HLPercentage: '60',
                      LapFiles: '5',
                      LapPercentage: '12',
                      BLFiles: '3',
                      BlPercentage: '8',
                      SBLFiles: '8',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Kalyan',
                      AllProductFiles: '44',
                      HLFiles: '27',
                      HLPercentage: '60',
                      LapFiles: '5',
                      LapPercentage: '12',
                      BLFiles: '4',
                      BlPercentage: '8',
                      SBLFiles: '9',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Nashik',
                  AllProductFiles: '103',
                  HLFiles: '62',
                  HLPercentage: '60',
                  LapFiles: '12',
                  LapPercentage: '12',
                  BLFiles: '8',
                  BlPercentage: '8',
                  SBLFiles: '21',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Nashik',
                      AllProductFiles: '41',
                      HLFiles: '25',
                      HLPercentage: '60',
                      LapFiles: '5',
                      LapPercentage: '12',
                      BLFiles: '3',
                      BlPercentage: '8',
                      SBLFiles: '8',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Malegaon',
                      AllProductFiles: '29',
                      HLFiles: '17',
                      HLPercentage: '60',
                      LapFiles: '3',
                      LapPercentage: '12',
                      BLFiles: '2',
                      BlPercentage: '8',
                      SBLFiles: '6',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sinnar',
                      AllProductFiles: '33',
                      HLFiles: '20',
                      HLPercentage: '60',
                      LapFiles: '4',
                      LapPercentage: '12',
                      BLFiles: '3',
                      BlPercentage: '8',
                      SBLFiles: '7',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Pune',
                  AllProductFiles: '83',
                  HLFiles: '50',
                  HLPercentage: '60',
                  LapFiles: '10',
                  LapPercentage: '12',
                  BLFiles: '7',
                  BlPercentage: '8',
                  SBLFiles: '17',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Pune',
                      AllProductFiles: '33',
                      HLFiles: '20',
                      HLPercentage: '60',
                      LapFiles: '4',
                      LapPercentage: '12',
                      BLFiles: '3',
                      BlPercentage: '8',
                      SBLFiles: '7',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Bhor',
                      AllProductFiles: '23',
                      HLFiles: '14',
                      HLPercentage: '60',
                      LapFiles: '3',
                      LapPercentage: '12',
                      BLFiles: '2',
                      BlPercentage: '8',
                      SBLFiles: '5',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Shikrapur',
                      AllProductFiles: '27',
                      HLFiles: '16',
                      HLPercentage: '60',
                      LapFiles: '3',
                      LapPercentage: '12',
                      BLFiles: '2',
                      BlPercentage: '8',
                      SBLFiles: '5',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Nagpur',
                  AllProductFiles: '71',
                  HLFiles: '43',
                  HLPercentage: '60',
                  LapFiles: '9',
                  LapPercentage: '12',
                  BLFiles: '6',
                  BlPercentage: '8',
                  SBLFiles: '14',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Nagpur',
                      AllProductFiles: '29',
                      HLFiles: '17',
                      HLPercentage: '60',
                      LapFiles: '3',
                      LapPercentage: '12',
                      BLFiles: '2',
                      BlPercentage: '8',
                      SBLFiles: '6',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Amravati',
                      AllProductFiles: '20',
                      HLFiles: '12',
                      HLPercentage: '60',
                      LapFiles: '2',
                      LapPercentage: '12',
                      BLFiles: '2',
                      BlPercentage: '8',
                      SBLFiles: '4',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Gondia',
                      AllProductFiles: '23',
                      HLFiles: '14',
                      HLPercentage: '60',
                      LapFiles: '3',
                      LapPercentage: '12',
                      BLFiles: '2',
                      BlPercentage: '8',
                      SBLFiles: '5',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    this.financialData = [
      {
        data: {
          StateName: 'Pan India',
          AllProductFiles: '175.0',
          HLFiles: '105.0',
          HLPercentage: '60',
          LapFiles: '21.0',
          LapPercentage: '12',
          BLFiles: '14.0',
          BlPercentage: '8',
          SBLFiles: '35.0',
          SBLPercentage: '20',
        },
        children: [
          {
            data: {
              StateName: 'PCH',
              AllProductFiles: 14.0,
              HLFiles: '8.4',
              HLPercentage: '60',
              LapFiles: '1.7',
              LapPercentage: '12',
              BLFiles: '1.1',
              BlPercentage: '8',
              SBLFiles: '2.8',
              SBLPercentage: '20',
            },
            children: [
              {
                data: {
                  StateName: 'Chandigarh',
                  AllProductFiles: '4.9',
                  HLFiles: '2.9',
                  financialAmount: '60',
                  finalAmount: '0.6',
                  LapPercentage: '12',
                  BLFiles: '0.4',
                  BlPercentage: '8',
                  SBLFiles: '1.0',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Chandigarh',
                      AllProductFiles: '2.0',
                      HLFiles: '1.2',
                      financialAmount: '60',
                      finalAmount: '0.6',
                      LapPercentage: '12',
                      BLFiles: '0.4',
                      BlPercentage: '8',
                      SBLFiles: '1.0',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Ambala',
                      AllProductFiles: '1.4',
                      HLFiles: '0.8',
                      financialAmount: '60',
                      finalAmount: '0.2',
                      LapPercentage: '12',
                      BLFiles: 0.2,
                      BlPercentage: '8',
                      SBLFiles: '0.4',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Patiala',
                      AllProductFiles: '1.6',
                      HLFiles: '0.9',
                      financialAmount: '60',
                      finalAmount: '0.2',
                      LapPercentage: '12',
                      BLFiles: '0.1',
                      BlPercentage: '8',
                      SBLFiles: '0.3',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Ludhiana',
                  AllProductFiles: '3.6',
                  HLFiles: '2.2',
                  financialAmount: '60',
                  finalAmount: '0.4',
                  LapPercentage: '12',
                  BLFiles: '0.3',
                  BlPercentage: '8',
                  SBLFiles: '0.7',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Ludhiana',
                      AllProductFiles: '1.5',
                      HLFiles: '0.9',
                      financialAmount: '60',
                      finalAmount: '0.2',
                      LapPercentage: '12',
                      BLFiles: '0.1',
                      BlPercentage: '8',
                      SBLFiles: '0.3',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Jalandhar',
                      AllProductFiles: '1.0',
                      HLFiles: '0.6',
                      financialAmount: '60',
                      finalAmount: '0.1',
                      LapPercentage: '12',
                      BLFiles: '0.1',
                      BlPercentage: '8',
                      SBLFiles: '0.2',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Moga',
                      AllProductFiles: '1.2',
                      HLFiles: '0.7',
                      financialAmount: '60',
                      finalAmount: '0.1',
                      LapPercentage: '12',
                      BLFiles: '0.1',
                      BlPercentage: '8',
                      SBLFiles: '0.2',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Karnal',
                  AllProductFiles: '2.9',
                  HLFiles: '1.8',
                  financialAmount: '60',
                  finalAmount: '0.4',
                  LapPercentage: '12',
                  BLFiles: '0.2',
                  BlPercentage: '8',
                  SBLFiles: '0.6',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Karnal',
                      AllProductFiles: '1.2',
                      HLFiles: '0.7',
                      financialAmount: '60',
                      finalAmount: '0.1',
                      LapPercentage: '12',
                      BLFiles: '0.1',
                      BlPercentage: '8',
                      SBLFiles: '0.2',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Rohtak',
                      AllProductFiles: '0.8',
                      HLFiles: '0.5',
                      financialAmount: '60',
                      finalAmount: '0.1',
                      LapPercentage: '12',
                      BLFiles: '0.1',
                      BlPercentage: '8',
                      SBLFiles: '0.2',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Panipat',
                      AllProductFiles: '0.9',
                      HLFiles: '0.6',
                      financialAmount: '60',
                      finalAmount: '0.1',
                      LapPercentage: '12',
                      BLFiles: '0.1',
                      BlPercentage: '8',
                      SBLFiles: '0.2',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
            ],
          },
          {
            data: {
              StateName: 'NCR',
              AllProductFiles: '26.25',
              HLFiles: '15.8',
              financialAmount: '60',
              finalAmount: '3.2',
              LapPercentage: '12',
              BLFiles: '2.1',
              BlPercentage: '8',
              SBLFiles: '5.3',
              SBLPercentage: '20',
            },
            children: [
              {
                data: {
                  StateName: 'Delhi',
                  AllProductFiles: '15.8',
                  HLFiles: '9.5',
                  financialAmount: '60',
                  finalAmount: '1.9',
                  LapPercentage: '12',
                  BLFiles: '1.3',
                  BlPercentage: '8',
                  SBLFiles: '3.2',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'JanakPuri',
                      AllProductFiles: '6.3',
                      HLFiles: '3.8',
                      financialAmount: '60',
                      finalAmount: '0.8',
                      LapPercentage: '12',
                      BLFiles: '0.5',
                      BlPercentage: '8',
                      SBLFiles: '1.3',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Laxmi Nagar',
                      AllProductFiles: '4.4',
                      HLFiles: '2.6',
                      financialAmount: '60',
                      finalAmount: '0.5',
                      LapPercentage: '12',
                      BLFiles: 0.4,
                      BlPercentage: '8',
                      SBLFiles: '0.9',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sahibad',
                      AllProductFiles: '5.0',
                      HLFiles: '3.0',
                      financialAmount: '60',
                      finalAmount: '0.6',
                      LapPercentage: '12',
                      BLFiles: '0.4',
                      BlPercentage: '8',
                      SBLFiles: '1.0',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Gurgoan',
                  AllProductFiles: '10.5',
                  HLFiles: '6.3',
                  financialAmount: '60',
                  finalAmount: '1.3',
                  LapPercentage: '12',
                  BLFiles: '0.8',
                  BlPercentage: '8',
                  SBLFiles: '2.1',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Gurgoan',
                      AllProductFiles: '4.2',
                      HLFiles: '2.5',
                      financialAmount: '60',
                      finalAmount: '0.5',
                      LapPercentage: '12',
                      BLFiles: '0.3',
                      BlPercentage: '8',
                      SBLFiles: '0.8',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Faridabad',
                      AllProductFiles: '2.9',
                      HLFiles: '1.8',
                      financialAmount: '60',
                      finalAmount: '0.4',
                      LapPercentage: '12',
                      BLFiles: '0.2',
                      BlPercentage: '8',
                      SBLFiles: '0.6',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Meerut',
                      AllProductFiles: '3.4',
                      HLFiles: '2.0',
                      financialAmount: '60',
                      finalAmount: '0.4',
                      LapPercentage: '12',
                      BLFiles: '0.3',
                      BlPercentage: '8',
                      SBLFiles: '0.7',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
            ],
          },
          {
            data: {
              StateName: 'Rajasthan',
              AllProductFiles: '52.5',
              HLFiles: '31.5',
              financialAmount: '60',
              finalAmount: '6.3',
              LapPercentage: '12',
              BLFiles: '4.2',
              BlPercentage: '8',
              SBLFiles: '10.53',
              SBLPercentage: '20',
            },
            children: [
              {
                data: {
                  StateName: 'Jaipur',
                  AllProductFiles: '18.4',
                  HLFiles: '11.0',
                  financialAmount: '60',
                  finalAmount: '2.2',
                  LapPercentage: '12',
                  BLFiles: '1.5',
                  BlPercentage: '8',
                  SBLFiles: '3.7',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Jaipur',
                      AllProductFiles: '7.4',
                      HLFiles: '4.4',
                      financialAmount: '60',
                      finalAmount: '0.9',
                      LapPercentage: '12',
                      BLFiles: '0.6',
                      BlPercentage: '8',
                      SBLFiles: '1.5',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sikar Road',
                      AllProductFiles: '5.1',
                      HLFiles: '3.1',
                      financialAmount: '60',
                      finalAmount: '0.6',
                      LapPercentage: '12',
                      BLFiles: '0.4',
                      BlPercentage: '8',
                      SBLFiles: '1.0',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Behror',
                      AllProductFiles: '5.9',
                      HLFiles: '3.5',
                      financialAmount: '60',
                      finalAmount: '0.7',
                      LapPercentage: '12',
                      BLFiles: '0.5',
                      BlPercentage: '8',
                      SBLFiles: '1.2',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Ajmer',
                  AllProductFiles: '13.7',
                  HLFiles: '8.2',
                  financialAmount: '60',
                  finalAmount: '1.6',
                  LapPercentage: '12',
                  BLFiles: '1.1',
                  BlPercentage: '8',
                  SBLFiles: '2.7',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Ajmer',
                      AllProductFiles: '5.5',
                      HLFiles: '3.3',
                      financialAmount: '60',
                      finalAmount: '0.7',
                      LapPercentage: '12',
                      BLFiles: '0.4',
                      BlPercentage: '8',
                      SBLFiles: '1.1',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Kekri',
                      AllProductFiles: '3.8',
                      HLFiles: '2.3',
                      financialAmount: '60',
                      finalAmount: '0.5',
                      LapPercentage: '12',
                      BLFiles: '0.3',
                      BlPercentage: '8',
                      SBLFiles: '0.8',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Merta',
                      AllProductFiles: '4.4',
                      HLFiles: '2.6',
                      financialAmount: '60',
                      finalAmount: '0.5',
                      LapPercentage: '12',
                      BLFiles: '0.3',
                      BlPercentage: '8',
                      SBLFiles: '0.9',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Udaipur',
                  AllProductFiles: '11.0',
                  HLFiles: '6.6',
                  financialAmount: '60',
                  finalAmount: '1.3',
                  LapPercentage: '12',
                  BLFiles: '0.9',
                  BlPercentage: '8',
                  SBLFiles: '2.2',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Rajsamand',
                      AllProductFiles: '4.4',
                      HLFiles: '2.6',
                      financialAmount: '60',
                      finalAmount: '0.5',
                      LapPercentage: '12',
                      BLFiles: '0.4',
                      BlPercentage: '8',
                      SBLFiles: '0.9',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Banswara',
                      AllProductFiles: '3.1',
                      HLFiles: '1.9',
                      financialAmount: '60',
                      finalAmount: '0.4',
                      LapPercentage: '12',
                      BLFiles: '0.2',
                      BlPercentage: '8',
                      SBLFiles: '0.6',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Udaipur',
                      AllProductFiles: '3.5',
                      HLFiles: '2.1',
                      financialAmount: '60',
                      finalAmount: '0.4',
                      LapPercentage: '12',
                      BLFiles: '0.3',
                      BlPercentage: '8',
                      SBLFiles: '0.7',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Kota',
                  AllProductFiles: '9.5',
                  HLFiles: '5.7',
                  financialAmount: '60',
                  finalAmount: '1.1',
                  LapPercentage: '12',
                  BLFiles: '0.8',
                  BlPercentage: '8',
                  SBLFiles: '1.9',
                  SBLPercentage: '20',
                },
              },
            ],
          },
          {
            data: {
              StateName: 'Gujarat',
              AllProductFiles: '21.0',
              HLFiles: '12.6',
              financialAmount: '60',
              finalAmount: '2.5',
              LapPercentage: '12',
              BLFiles: '1.7',
              BlPercentage: '8',
              SBLFiles: '4.2',
              SBLPercentage: '20',
            },
            children: [
              {
                data: {
                  StateName: 'Ahmedabad',
                  AllProductFiles: '7.4',
                  HLFiles: '4.4',
                  financialAmount: '60',
                  finalAmount: '0.9',
                  LapPercentage: '12',
                  BLFiles: '0.6',
                  BlPercentage: '8',
                  SBLFiles: '1.5',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Ahmedabad',
                      AllProductFiles: '2.9',
                      HLFiles: '1.8',
                      financialAmount: '60',
                      finalAmount: '0.4',
                      LapPercentage: '12',
                      BLFiles: '0.2',
                      BlPercentage: '8',
                      SBLFiles: '0.6',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Gandhinagar',
                      AllProductFiles: '2.1',
                      HLFiles: '1.2',
                      financialAmount: '60',
                      finalAmount: '0.2',
                      LapPercentage: '12',
                      BLFiles: '0.2',
                      BlPercentage: '8',
                      SBLFiles: '0.4',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sanand',
                      AllProductFiles: '2.4',
                      HLFiles: '1.4',
                      financialAmount: '60',
                      finalAmount: '0.3',
                      LapPercentage: '12',
                      BLFiles: '0.2',
                      BlPercentage: '8',
                      SBLFiles: '0.5',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Surat',
                  AllProductFiles: '5.5',
                  HLFiles: '3.3',
                  financialAmount: '60',
                  finalAmount: '0.7',
                  LapPercentage: '12',
                  BLFiles: '0.4',
                  BlPercentage: '8',
                  SBLFiles: '1.1',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Surat',
                      AllProductFiles: '2.2',
                      HLFiles: '1.3',
                      financialAmount: '60',
                      finalAmount: '0.3',
                      LapPercentage: '12',
                      BLFiles: '0.2',
                      BlPercentage: '8',
                      SBLFiles: '0.4',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Kadodara',
                      AllProductFiles: '1.5',
                      HLFiles: '0.9',
                      financialAmount: '60',
                      finalAmount: '0.2',
                      LapPercentage: '12',
                      BLFiles: '0.1',
                      BlPercentage: '8',
                      SBLFiles: 0.3,
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Rundh',
                      AllProductFiles: '1.7',
                      HLFiles: '1.0',
                      financialAmount: '60',
                      finalAmount: '0.2',
                      LapPercentage: '12',
                      BLFiles: '0.1',
                      BlPercentage: '8',
                      SBLFiles: '0.3',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Rajkot',
                  AllProductFiles: '4.4',
                  HLFiles: '2.6',
                  financialAmount: '60',
                  finalAmount: '0.5',
                  LapPercentage: '12',
                  BLFiles: '0.4',
                  BlPercentage: '8',
                  SBLFiles: '0.9',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Rajkot',
                      AllProductFiles: '1.8',
                      HLFiles: '1.1',
                      financialAmount: '60',
                      finalAmount: '0.2',
                      LapPercentage: '12',
                      BLFiles: '0.1',
                      BlPercentage: '8',
                      SBLFiles: '0.4',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Jamnagar',
                      AllProductFiles: '1.2',
                      HLFiles: '0.7',
                      financialAmount: '60',
                      finalAmount: '0.1',
                      LapPercentage: '12',
                      BLFiles: '0.1',
                      BlPercentage: '8',
                      SBLFiles: '0.2',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Junagadh',
                      AllProductFiles: '1.4',
                      HLFiles: '0.8',
                      financialAmount: '60',
                      finalAmount: '0.2',
                      LapPercentage: '12',
                      BLFiles: '0.1',
                      BlPercentage: '8',
                      SBLFiles: '0.3',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Vadodara',
                  AllProductFiles: '3.8',
                  HLFiles: '2.3',
                  financialAmount: '60',
                  finalAmount: '0.5',
                  LapPercentage: '12',
                  BLFiles: '0.3',
                  BlPercentage: '8',
                  SBLFiles: '0.8',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Vadodara',
                      AllProductFiles: '1.5',
                      HLFiles: '0.9',
                      financialAmount: '60',
                      finalAmount: '0.2',
                      LapPercentage: '12',
                      BLFiles: '0.1',
                      BlPercentage: '8',
                      SBLFiles: '0.3',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Anand',
                      AllProductFiles: '1.1',
                      HLFiles: '0.6',
                      financialAmount: '60',
                      finalAmount: '0.1',
                      LapPercentage: '12',
                      BLFiles: '0.1',
                      BlPercentage: '8',
                      SBLFiles: '0.2',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Dabhoi',
                      AllProductFiles: '1.2',
                      HLFiles: '0.7',
                      financialAmount: '60',
                      finalAmount: '0.1',
                      LapPercentage: '12',
                      BLFiles: '0.1',
                      BlPercentage: '8',
                      SBLFiles: '0.2',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
            ],
          },
          {
            data: {
              StateName: 'MP',
              AllProductFiles: '38.5',
              HLFiles: '23.1',
              financialAmount: '60',
              finalAmount: '4.6',
              LapPercentage: '12',
              BLFiles: '3.1',
              BlPercentage: '8',
              SBLFiles: '7.7',
              SBLPercentage: '20',
            },
            children: [
              {
                data: {
                  StateName: 'Indore',
                  AllProductFiles: '13.5',
                  HLFiles: '8.1',
                  financialAmount: '60',
                  finalAmount: '1.6',
                  LapPercentage: '12',
                  BLFiles: '1.1',
                  BlPercentage: '8',
                  SBLFiles: '2.7',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Indore',
                      AllProductFiles: '5.4',
                      HLFiles: '3.2',
                      financialAmount: '60',
                      finalAmount: '0.6',
                      LapPercentage: '12',
                      BLFiles: '0.4',
                      BlPercentage: '8',
                      SBLFiles: '1.1',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Ujjain',
                      AllProductFiles: '3.8',
                      HLFiles: '2.3',
                      financialAmount: '60',
                      finalAmount: '0.5',
                      LapPercentage: '12',
                      BLFiles: '0.3',
                      BlPercentage: '8',
                      SBLFiles: '0.8',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Dewas',
                      AllProductFiles: '4.3',
                      HLFiles: '2.6',
                      financialAmount: '60',
                      finalAmount: '0.5',
                      LapPercentage: '12',
                      BLFiles: '0.3',
                      BlPercentage: '8',
                      SBLFiles: '0.9',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Gwalior',
                  AllProductFiles: '10.0',
                  HLFiles: '6.0',
                  financialAmount: '60',
                  finalAmount: '1.2',
                  LapPercentage: '12',
                  BLFiles: '0.8',
                  BlPercentage: '8',
                  SBLFiles: '2.0',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Gwalior',
                      AllProductFiles: '4.0',
                      HLFiles: '2.4',
                      financialAmount: '60',
                      finalAmount: '0.5',
                      LapPercentage: '12',
                      BLFiles: '0.3',
                      BlPercentage: '8',
                      SBLFiles: '0.8',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Morena',
                      AllProductFiles: '2.8',
                      HLFiles: '1.7',
                      financialAmount: '60',
                      finalAmount: '0.3',
                      LapPercentage: '12',
                      BLFiles: '0.2',
                      BlPercentage: '8',
                      SBLFiles: '0.6',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Bhind',
                      AllProductFiles: '3.2',
                      HLFiles: '1.9',
                      financialAmount: '60',
                      finalAmount: '0.4',
                      LapPercentage: '12',
                      BLFiles: '0.3',
                      BlPercentage: '8',
                      SBLFiles: '0.6',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Bhopal',
                  AllProductFiles: '8.1',
                  HLFiles: '4.9',
                  financialAmount: '60',
                  finalAmount: '1.0',
                  LapPercentage: '12',
                  BLFiles: '0.6',
                  BlPercentage: '8',
                  SBLFiles: '1.6',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Bhopal',
                      AllProductFiles: '3.2',
                      HLFiles: '1.9',
                      financialAmount: '60',
                      finalAmount: '0.4',
                      LapPercentage: '12',
                      BLFiles: '0.3',
                      BlPercentage: '8',
                      SBLFiles: '0.6',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Vidisha',
                      AllProductFiles: '2.3',
                      HLFiles: '1.4',
                      financialAmount: '60',
                      finalAmount: '0.3',
                      LapPercentage: '12',
                      BLFiles: '0.2',
                      BlPercentage: '8',
                      SBLFiles: '0.5',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sehore',
                      AllProductFiles: '2.6',
                      HLFiles: '1.6',
                      financialAmount: '60',
                      finalAmount: '0.3',
                      LapPercentage: '12',
                      BLFiles: '0.2',
                      BlPercentage: '8',
                      SBLFiles: '0.5',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Jabalpur',
                  AllProductFiles: '6.9',
                  HLFiles: '4.2',
                  financialAmount: '60',
                  finalAmount: '0.8',
                  LapPercentage: '12',
                  BLFiles: '0.6',
                  BlPercentage: '8',
                  SBLFiles: '1.4',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Jabalpur',
                      AllProductFiles: '2.8',
                      HLFiles: '1.7',
                      financialAmount: '60',
                      finalAmount: '0.3',
                      LapPercentage: '12',
                      BLFiles: '0.2',
                      BlPercentage: '8',
                      SBLFiles: '0.6',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sihora',
                      AllProductFiles: '1.9',
                      HLFiles: '1.2',
                      financialAmount: '60',
                      finalAmount: '0.2',
                      LapPercentage: '12',
                      BLFiles: '0.2',
                      BlPercentage: '8',
                      SBLFiles: '0.4',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Mandla',
                      AllProductFiles: '2.2',
                      HLFiles: '1.3',
                      financialAmount: '60',
                      finalAmount: '0.3',
                      LapPercentage: '12',
                      BLFiles: '0.2',
                      BlPercentage: '8',
                      SBLFiles: '0.4',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
            ],
          },
          {
            data: {
              StateName: 'Maharashtra',
              AllProductFiles: '22.8',
              HLFiles: '13.7',
              financialAmount: '60',
              finalAmount: '2.7',
              LapPercentage: '12',
              BLFiles: '1.8',
              BlPercentage: '8',
              SBLFiles: '4.6',
              SBLPercentage: '20',
            },
            children: [
              {
                data: {
                  StateName: 'Mumbai',
                  AllProductFiles: '8.0',
                  HLFiles: '4.8',
                  financialAmount: '60',
                  finalAmount: '1.0',
                  LapPercentage: '12',
                  BLFiles: '0.6',
                  BlPercentage: '8',
                  SBLFiles: '1.6',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Navi Mumbai',
                      AllProductFiles: '3.2',
                      HLFiles: '1.9',
                      financialAmount: '60',
                      finalAmount: '0.4',
                      LapPercentage: '12',
                      BLFiles: '0.3',
                      BlPercentage: '8',
                      SBLFiles: '0.6',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Thane',
                      AllProductFiles: '2.2',
                      HLFiles: '1.3',
                      financialAmount: '60',
                      finalAmount: '0.3',
                      LapPercentage: '12',
                      BLFiles: '0.2',
                      BlPercentage: '8',
                      SBLFiles: '0.4',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Kalyan',
                      AllProductFiles: '2.5',
                      HLFiles: '1.5',
                      financialAmount: '60',
                      finalAmount: '0.3',
                      LapPercentage: '12',
                      BLFiles: '0.2',
                      BlPercentage: '8',
                      SBLFiles: '0.5',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Nashik',
                  AllProductFiles: 5.9,
                  HLFiles: '3.5',
                  financialAmount: '60',
                  finalAmount: '0.7',
                  LapPercentage: '12',
                  BLFiles: '0.5',
                  BlPercentage: '8',
                  SBLFiles: '1.2',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Nashik',
                      AllProductFiles: '2.4',
                      HLFiles: '1.4',
                      financialAmount: '60',
                      finalAmount: '0.3',
                      LapPercentage: '12',
                      BLFiles: '0.2',
                      BlPercentage: '8',
                      SBLFiles: '0.5',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Malegaon',
                      AllProductFiles: '1.7',
                      HLFiles: '1.0',
                      financialAmount: '60',
                      finalAmount: '0.2',
                      LapPercentage: '12',
                      BLFiles: '0.1',
                      BlPercentage: '8',
                      SBLFiles: '0.3',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sinnar',
                      AllProductFiles: '1.9',
                      HLFiles: '1.1',
                      financialAmount: '60',
                      finalAmount: '0.2',
                      LapPercentage: '12',
                      BLFiles: '0.2',
                      BlPercentage: '8',
                      SBLFiles: '0.4',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Pune',
                  AllProductFiles: '4.8',
                  HLFiles: '2.9',
                  financialAmount: '60',
                  finalAmount: '0.6',
                  LapPercentage: '12',
                  BLFiles: '0.4',
                  BlPercentage: '8',
                  SBLFiles: '1.0',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Pune',
                      AllProductFiles: '1.9',
                      HLFiles: '1.1',
                      financialAmount: '60',
                      finalAmount: '0.2',
                      LapPercentage: '12',
                      BLFiles: '0.2',
                      BlPercentage: '8',
                      SBLFiles: '0.4',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Bhor',
                      AllProductFiles: '1.3',
                      HLFiles: '0.8',
                      financialAmount: '60',
                      finalAmount: '0.2',
                      LapPercentage: '12',
                      BLFiles: '0.1',
                      BlPercentage: '8',
                      SBLFiles: '0.3',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Shikrapur',
                      AllProductFiles: '1.5',
                      HLFiles: '0.9',
                      financialAmount: '60',
                      finalAmount: '0.2',
                      LapPercentage: '12',
                      BLFiles: '0.1',
                      BlPercentage: '8',
                      SBLFiles: '0.3',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Nagpur',
                  AllProductFiles: '4.1',
                  HLFiles: '2.5',
                  financialAmount: '60',
                  finalAmount: '0.5',
                  LapPercentage: '12',
                  BLFiles: '0.3',
                  BlPercentage: '8',
                  SBLFiles: '0.8',
                  SBLPercentage: '20',
                },
                children: [
                  {
                    data: {
                      StateName: 'Nagpur',
                      AllProductFiles: '1.6',
                      HLFiles: '1.0',
                      financialAmount: '60',
                      finalAmount: 0.2,
                      LapPercentage: '12',
                      BLFiles: '0.1',
                      BlPercentage: '8',
                      SBLFiles: '0.3',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Amravati',
                      AllProductFiles: '1.1',
                      HLFiles: '0.7',
                      financialAmount: '60',
                      finalAmount: '0.1',
                      LapPercentage: '12',
                      BLFiles: '0.1',
                      BlPercentage: '8',
                      SBLFiles: '0.2',
                      SBLPercentage: '20',
                    },
                  },
                  {
                    data: {
                      StateName: 'Gondia',
                      AllProductFiles: '1.3',
                      HLFiles: '0.8',
                      financialAmount: '60',
                      finalAmount: '0.2',
                      LapPercentage: '12',
                      BLFiles: '0.1',
                      BlPercentage: '8',
                      SBLFiles: '0.3',
                      SBLPercentage: '20',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    this.finalData= [
      {
        "data": {
          "StateName": "Pan India",
          "AllProductFiles": "160.0",
          "HLFiles": "96.0",
          "HLPercentage": "60",
          "LapFiles": "19.2",
          "LapPercentage": "12",
          "BLFiles": "12.8",
          "BlPercentage": "8",
          "SBLFiles": "32.0",
          "SBLPercentage": "20"
        },
        "children": [
          {
            "data": {
              "StateName": "PCH",
              "AllProductFiles": 12.8,
              "HLFiles": "7.7",
              "HLPercentage": "60",
              "LapFiles": "1.5",
              "LapPercentage": "12",
              "BLFiles": "1.0",
              "BlPercentage": "8",
              "SBLFiles": "2.6",
              "SBLPercentage": "20"
            },
            "children": [
              {
                "data": {
                  "StateName": "Chandigarh",
                  "AllProductFiles": "4.5",
                  "HLFiles": "2.7",
                  "financialAmount": "60",
                  "finalAmount": "0.5",
                  "LapPercentage": "12",
                  "BLFiles": "0.4",
                  "BlPercentage": "8",
                  "SBLFiles": "0.9",
                  "SBLPercentage": "20"
                },
                "children": [
                  {
                    "data": {
                      "StateName": "Chandigarh",
                      "AllProductFiles": "1.8",
                      "HLFiles": "1.1",
                      "financialAmount": "60",
                      "finalAmount": "0.2",
                      "LapPercentage": "12",
                      "BLFiles": "0.1",
                      "BlPercentage": "8",
                      "SBLFiles": "0.4",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Ambala",
                      "AllProductFiles": "1.3",
                      "HLFiles": "0.8",
                      "financialAmount": "60",
                      "finalAmount": "0.2",
                      "LapPercentage": "12",
                      "BLFiles": 0.1,
                      "BlPercentage": "8",
                      "SBLFiles": "0.3",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Patiala",
                      "AllProductFiles": "1.4",
                      "HLFiles": "0.9",
                      "financialAmount": "60",
                      "finalAmount": "0.2",
                      "LapPercentage": "12",
                      "BLFiles": "0.1",
                      "BlPercentage": "8",
                      "SBLFiles": "0.3",
                      "SBLPercentage": "20"
                    }
                  }
                ]
              },
              {
                "data": {
                  "StateName": "Ludhiana",
                  "AllProductFiles": "3.3",
                  "HLFiles": "2.0",
                  "financialAmount": "60",
                  "finalAmount": "0.4",
                  "LapPercentage": "12",
                  "BLFiles": "0.3",
                  "BlPercentage": "8",
                  "SBLFiles": "0.7",
                  "SBLPercentage": "20"
                },
                "children": [
                  {
                    "data": {
                      "StateName": "Ludhiana",
                      "AllProductFiles": "1.3",
                      "HLFiles": "0.8",
                      "financialAmount": "60",
                      "finalAmount": "0.2",
                      "LapPercentage": "12",
                      "BLFiles": "0.1",
                      "BlPercentage": "8",
                      "SBLFiles": "0.3",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Jalandhar",
                      "AllProductFiles": "0.9",
                      "HLFiles": "0.6",
                      "financialAmount": "60",
                      "finalAmount": "0.1",
                      "LapPercentage": "12",
                      "BLFiles": "0.1",
                      "BlPercentage": "8",
                      "SBLFiles": "0.2",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Moga",
                      "AllProductFiles": "1.1",
                      "HLFiles": "0.6",
                      "financialAmount": "60",
                      "finalAmount": "0.1",
                      "LapPercentage": "12",
                      "BLFiles": "0.1",
                      "BlPercentage": "8",
                      "SBLFiles": "0.2",
                      "SBLPercentage": "20"
                    }
                  }
                ]
              },
              {
                "data": {
                  "StateName": "Karnal",
                  "AllProductFiles": "2.7",
                  "HLFiles": "1.6",
                  "financialAmount": "60",
                  "finalAmount": "0.3",
                  "LapPercentage": "12",
                  "BLFiles": "0.2",
                  "BlPercentage": "8",
                  "SBLFiles": "0.5",
                  "SBLPercentage": "20"
                },
                "children": [
                  {
                    "data": {
                      "StateName": "Karnal",
                      "AllProductFiles": "1.1",
                      "HLFiles": "0.6",
                      "financialAmount": "60",
                      "finalAmount": "0.1",
                      "LapPercentage": "12",
                      "BLFiles": "0.1",
                      "BlPercentage": "8",
                      "SBLFiles": "0.2",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Rohtak",
                      "AllProductFiles": "0.8",
                      "HLFiles": "0.5",
                      "financialAmount": "60",
                      "finalAmount": "0.1",
                      "LapPercentage": "12",
                      "BLFiles": "0.1",
                      "BlPercentage": "8",
                      "SBLFiles": "0.2",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Panipat",
                      "AllProductFiles": "0.9",
                      "HLFiles": "0.5",
                      "financialAmount": "60",
                      "finalAmount": "0.1",
                      "LapPercentage": "12",
                      "BLFiles": "0.1",
                      "BlPercentage": "8",
                      "SBLFiles": "0.2",
                      "SBLPercentage": "20"
                    }
                  }
                ]
              }
            ]
          },
          {
            "data": {
              "StateName": "NCR",
              "AllProductFiles": "24",
              "HLFiles": "14.4",
              "financialAmount": "60",
              "finalAmount": "2.9",
              "LapPercentage": "12",
              "BLFiles": "1.9",
              "BlPercentage": "8",
              "SBLFiles": "4.8",
              "SBLPercentage": "20"
            },
            "children": [
              {
                "data": {
                  "StateName": "Delhi",
                  "AllProductFiles": "14.4",
                  "HLFiles": "8.6",
                  "financialAmount": "60",
                  "finalAmount": "1.7",
                  "LapPercentage": "12",
                  "BLFiles": "1.2",
                  "BlPercentage": "8",
                  "SBLFiles": "2.9",
                  "SBLPercentage": "20"
                },
                "children": [
                  {
                    "data": {
                      "StateName": "JanakPuri",
                      "AllProductFiles": "6.3",
                      "HLFiles": "3.8",
                      "financialAmount": "60",
                      "finalAmount": "0.8",
                      "LapPercentage": "12",
                      "BLFiles": "0.5",
                      "BlPercentage": "8",
                      "SBLFiles": "1.3",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Laxmi Nagar",
                      "AllProductFiles": "4.4",
                      "HLFiles": "2.6",
                      "financialAmount": "60",
                      "finalAmount": "0.5",
                      "LapPercentage": "12",
                      "BLFiles": 0.4,
                      "BlPercentage": "8",
                      "SBLFiles": "0.9",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Sahibad",
                      "AllProductFiles": "5.0",
                      "HLFiles": "3.0",
                      "financialAmount": "60",
                      "finalAmount": "0.6",
                      "LapPercentage": "12",
                      "BLFiles": "0.4",
                      "BlPercentage": "8",
                      "SBLFiles": "1.0",
                      "SBLPercentage": "20"
                    }
                  }
                ]
              },
              {
                "data": {
                  "StateName": "Gurgoan",
                  "AllProductFiles": "10.5",
                  "HLFiles": "6.3",
                  "financialAmount": "60",
                  "finalAmount": "1.3",
                  "LapPercentage": "12",
                  "BLFiles": "0.8",
                  "BlPercentage": "8",
                  "SBLFiles": "2.1",
                  "SBLPercentage": "20"
                },
                "children": [
                  {
                    "data": {
                      "StateName": "Gurgoan",
                      "AllProductFiles": "4.2",
                      "HLFiles": "2.5",
                      "financialAmount": "60",
                      "finalAmount": "0.5",
                      "LapPercentage": "12",
                      "BLFiles": "0.3",
                      "BlPercentage": "8",
                      "SBLFiles": "0.8",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Faridabad",
                      "AllProductFiles": "2.9",
                      "HLFiles": "1.8",
                      "financialAmount": "60",
                      "finalAmount": "0.4",
                      "LapPercentage": "12",
                      "BLFiles": "0.2",
                      "BlPercentage": "8",
                      "SBLFiles": "0.6",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Meerut",
                      "AllProductFiles": "3.4",
                      "HLFiles": "2.0",
                      "financialAmount": "60",
                      "finalAmount": "0.4",
                      "LapPercentage": "12",
                      "BLFiles": "0.3",
                      "BlPercentage": "8",
                      "SBLFiles": "0.7",
                      "SBLPercentage": "20"
                    }
                  }
                ]
              }
            ]
          },
          {
            "data": {
              "StateName": "Rajasthan",
              "AllProductFiles": "52.5",
              "HLFiles": "31.5",
              "financialAmount": "60",
              "finalAmount": "6.3",
              "LapPercentage": "12",
              "BLFiles": "4.2",
              "BlPercentage": "8",
              "SBLFiles": "10.53",
              "SBLPercentage": "20"
            },
            "children": [
              {
                "data": {
                  "StateName": "Jaipur",
                  "AllProductFiles": "18.4",
                  "HLFiles": "11.0",
                  "financialAmount": "60",
                  "finalAmount": "2.2",
                  "LapPercentage": "12",
                  "BLFiles": "1.5",
                  "BlPercentage": "8",
                  "SBLFiles": "3.7",
                  "SBLPercentage": "20"
                },
                "children": [
                  {
                    "data": {
                      "StateName": "Jaipur",
                      "AllProductFiles": "7.4",
                      "HLFiles": "4.4",
                      "financialAmount": "60",
                      "finalAmount": "0.9",
                      "LapPercentage": "12",
                      "BLFiles": "0.6",
                      "BlPercentage": "8",
                      "SBLFiles": "1.5",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Sikar Road",
                      "AllProductFiles": "5.1",
                      "HLFiles": "3.1",
                      "financialAmount": "60",
                      "finalAmount": "0.6",
                      "LapPercentage": "12",
                      "BLFiles": "0.4",
                      "BlPercentage": "8",
                      "SBLFiles": "1.0",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Behror",
                      "AllProductFiles": "5.9",
                      "HLFiles": "3.5",
                      "financialAmount": "60",
                      "finalAmount": "0.7",
                      "LapPercentage": "12",
                      "BLFiles": "0.5",
                      "BlPercentage": "8",
                      "SBLFiles": "1.2",
                      "SBLPercentage": "20"
                    }
                  }
                ]
              },
              {
                "data": {
                  "StateName": "Ajmer",
                  "AllProductFiles": "13.7",
                  "HLFiles": "8.2",
                  "financialAmount": "60",
                  "finalAmount": "1.6",
                  "LapPercentage": "12",
                  "BLFiles": "1.1",
                  "BlPercentage": "8",
                  "SBLFiles": "2.7",
                  "SBLPercentage": "20"
                },
                "children": [
                  {
                    "data": {
                      "StateName": "Ajmer",
                      "AllProductFiles": "5.5",
                      "HLFiles": "3.3",
                      "financialAmount": "60",
                      "finalAmount": "0.7",
                      "LapPercentage": "12",
                      "BLFiles": "0.4",
                      "BlPercentage": "8",
                      "SBLFiles": "1.1",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Kekri",
                      "AllProductFiles": "3.8",
                      "HLFiles": "2.3",
                      "financialAmount": "60",
                      "finalAmount": "0.5",
                      "LapPercentage": "12",
                      "BLFiles": "0.3",
                      "BlPercentage": "8",
                      "SBLFiles": "0.8",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Merta",
                      "AllProductFiles": "4.4",
                      "HLFiles": "2.6",
                      "financialAmount": "60",
                      "finalAmount": "0.5",
                      "LapPercentage": "12",
                      "BLFiles": "0.3",
                      "BlPercentage": "8",
                      "SBLFiles": "0.9",
                      "SBLPercentage": "20"
                    }
                  }
                ]
              },
              {
                "data": {
                  "StateName": "Udaipur",
                  "AllProductFiles": "11.0",
                  "HLFiles": "6.6",
                  "financialAmount": "60",
                  "finalAmount": "1.3",
                  "LapPercentage": "12",
                  "BLFiles": "0.9",
                  "BlPercentage": "8",
                  "SBLFiles": "2.2",
                  "SBLPercentage": "20"
                },
                "children": [
                  {
                    "data": {
                      "StateName": "Rajsamand",
                      "AllProductFiles": "4.4",
                      "HLFiles": "2.6",
                      "financialAmount": "60",
                      "finalAmount": "0.5",
                      "LapPercentage": "12",
                      "BLFiles": "0.4",
                      "BlPercentage": "8",
                      "SBLFiles": "0.9",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Banswara",
                      "AllProductFiles": "3.1",
                      "HLFiles": "1.9",
                      "financialAmount": "60",
                      "finalAmount": "0.4",
                      "LapPercentage": "12",
                      "BLFiles": "0.2",
                      "BlPercentage": "8",
                      "SBLFiles": "0.6",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Udaipur",
                      "AllProductFiles": "3.5",
                      "HLFiles": "2.1",
                      "financialAmount": "60",
                      "finalAmount": "0.4",
                      "LapPercentage": "12",
                      "BLFiles": "0.3",
                      "BlPercentage": "8",
                      "SBLFiles": "0.7",
                      "SBLPercentage": "20"
                    }
                  }
                ]
              },
              {
                "data": {
                  "StateName": "Kota",
                  "AllProductFiles": "9.5",
                  "HLFiles": "5.7",
                  "financialAmount": "60",
                  "finalAmount": "1.1",
                  "LapPercentage": "12",
                  "BLFiles": "0.8",
                  "BlPercentage": "8",
                  "SBLFiles": "1.9",
                  "SBLPercentage": "20"
                }
              }
            ]
          },
          {
            "data": {
              "StateName": "Gujarat",
              "AllProductFiles": "21.0",
              "HLFiles": "12.6",
              "financialAmount": "60",
              "finalAmount": "2.5",
              "LapPercentage": "12",
              "BLFiles": "1.7",
              "BlPercentage": "8",
              "SBLFiles": "4.2",
              "SBLPercentage": "20"
            },
            "children": [
              {
                "data": {
                  "StateName": "Ahmedabad",
                  "AllProductFiles": "7.4",
                  "HLFiles": "4.4",
                  "financialAmount": "60",
                  "finalAmount": "0.9",
                  "LapPercentage": "12",
                  "BLFiles": "0.6",
                  "BlPercentage": "8",
                  "SBLFiles": "1.5",
                  "SBLPercentage": "20"
                },
                "children": [
                  {
                    "data": {
                      "StateName": "Ahmedabad",
                      "AllProductFiles": "2.9",
                      "HLFiles": "1.8",
                      "financialAmount": "60",
                      "finalAmount": "0.4",
                      "LapPercentage": "12",
                      "BLFiles": "0.2",
                      "BlPercentage": "8",
                      "SBLFiles": "0.6",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Gandhinagar",
                      "AllProductFiles": "2.1",
                      "HLFiles": "1.2",
                      "financialAmount": "60",
                      "finalAmount": "0.2",
                      "LapPercentage": "12",
                      "BLFiles": "0.2",
                      "BlPercentage": "8",
                      "SBLFiles": "0.4",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Sanand",
                      "AllProductFiles": "2.4",
                      "HLFiles": "1.4",
                      "financialAmount": "60",
                      "finalAmount": "0.3",
                      "LapPercentage": "12",
                      "BLFiles": "0.2",
                      "BlPercentage": "8",
                      "SBLFiles": "0.5",
                      "SBLPercentage": "20"
                    }
                  }
                ]
              },
              {
                "data": {
                  "StateName": "Surat",
                  "AllProductFiles": "5.5",
                  "HLFiles": "3.3",
                  "financialAmount": "60",
                  "finalAmount": "0.7",
                  "LapPercentage": "12",
                  "BLFiles": "0.4",
                  "BlPercentage": "8",
                  "SBLFiles": "1.1",
                  "SBLPercentage": "20"
                },
                "children": [
                  {
                    "data": {
                      "StateName": "Surat",
                      "AllProductFiles": "2.2",
                      "HLFiles": "1.3",
                      "financialAmount": "60",
                      "finalAmount": "0.3",
                      "LapPercentage": "12",
                      "BLFiles": "0.2",
                      "BlPercentage": "8",
                      "SBLFiles": "0.4",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Kadodara",
                      "AllProductFiles": "1.5",
                      "HLFiles": "0.9",
                      "financialAmount": "60",
                      "finalAmount": "0.2",
                      "LapPercentage": "12",
                      "BLFiles": "0.1",
                      "BlPercentage": "8",
                      "SBLFiles": 0.3,
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Rundh",
                      "AllProductFiles": "1.7",
                      "HLFiles": "1.0",
                      "financialAmount": "60",
                      "finalAmount": "0.2",
                      "LapPercentage": "12",
                      "BLFiles": "0.1",
                      "BlPercentage": "8",
                      "SBLFiles": "0.3",
                      "SBLPercentage": "20"
                    }
                  }
                ]
              },
              {
                "data": {
                  "StateName": "Rajkot",
                  "AllProductFiles": "4.4",
                  "HLFiles": "2.6",
                  "financialAmount": "60",
                  "finalAmount": "0.5",
                  "LapPercentage": "12",
                  "BLFiles": "0.4",
                  "BlPercentage": "8",
                  "SBLFiles": "0.9",
                  "SBLPercentage": "20"
                },
                "children": [
                  {
                    "data": {
                      "StateName": "Rajkot",
                      "AllProductFiles": "1.8",
                      "HLFiles": "1.1",
                      "financialAmount": "60",
                      "finalAmount": "0.2",
                      "LapPercentage": "12",
                      "BLFiles": "0.1",
                      "BlPercentage": "8",
                      "SBLFiles": "0.4",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Jamnagar",
                      "AllProductFiles": "1.2",
                      "HLFiles": "0.7",
                      "financialAmount": "60",
                      "finalAmount": "0.1",
                      "LapPercentage": "12",
                      "BLFiles": "0.1",
                      "BlPercentage": "8",
                      "SBLFiles": "0.2",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Junagadh",
                      "AllProductFiles": "1.4",
                      "HLFiles": "0.8",
                      "financialAmount": "60",
                      "finalAmount": "0.2",
                      "LapPercentage": "12",
                      "BLFiles": "0.1",
                      "BlPercentage": "8",
                      "SBLFiles": "0.3",
                      "SBLPercentage": "20"
                    }
                  }
                ]
              },
              {
                "data": {
                  "StateName": "Vadodara",
                  "AllProductFiles": "3.8",
                  "HLFiles": "2.3",
                  "financialAmount": "60",
                  "finalAmount": "0.5",
                  "LapPercentage": "12",
                  "BLFiles": "0.3",
                  "BlPercentage": "8",
                  "SBLFiles": "0.8",
                  "SBLPercentage": "20"
                },
                "children": [
                  {
                    "data": {
                      "StateName": "Vadodara",
                      "AllProductFiles": "1.5",
                      "HLFiles": "0.9",
                      "financialAmount": "60",
                      "finalAmount": "0.2",
                      "LapPercentage": "12",
                      "BLFiles": "0.1",
                      "BlPercentage": "8",
                      "SBLFiles": "0.3",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Anand",
                      "AllProductFiles": "1.1",
                      "HLFiles": "0.6",
                      "financialAmount": "60",
                      "finalAmount": "0.1",
                      "LapPercentage": "12",
                      "BLFiles": "0.1",
                      "BlPercentage": "8",
                      "SBLFiles": "0.2",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Dabhoi",
                      "AllProductFiles": "1.2",
                      "HLFiles": "0.7",
                      "financialAmount": "60",
                      "finalAmount": "0.1",
                      "LapPercentage": "12",
                      "BLFiles": "0.1",
                      "BlPercentage": "8",
                      "SBLFiles": "0.2",
                      "SBLPercentage": "20"
                    }
                  }
                ]
              }
            ]
          },
          {
            "data": {
              "StateName": "MP",
              "AllProductFiles": "38.5",
              "HLFiles": "23.1",
              "financialAmount": "60",
              "finalAmount": "4.6",
              "LapPercentage": "12",
              "BLFiles": "3.1",
              "BlPercentage": "8",
              "SBLFiles": "7.7",
              "SBLPercentage": "20"
            },
            "children": [
              {
                "data": {
                  "StateName": "Indore",
                  "AllProductFiles": "13.5",
                  "HLFiles": "8.1",
                  "financialAmount": "60",
                  "finalAmount": "1.6",
                  "LapPercentage": "12",
                  "BLFiles": "1.1",
                  "BlPercentage": "8",
                  "SBLFiles": "2.7",
                  "SBLPercentage": "20"
                },
                "children": [
                  {
                    "data": {
                      "StateName": "Indore",
                      "AllProductFiles": "5.4",
                      "HLFiles": "3.2",
                      "financialAmount": "60",
                      "finalAmount": "0.6",
                      "LapPercentage": "12",
                      "BLFiles": "0.4",
                      "BlPercentage": "8",
                      "SBLFiles": "1.1",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Ujjain",
                      "AllProductFiles": "3.8",
                      "HLFiles": "2.3",
                      "financialAmount": "60",
                      "finalAmount": "0.5",
                      "LapPercentage": "12",
                      "BLFiles": "0.3",
                      "BlPercentage": "8",
                      "SBLFiles": "0.8",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Dewas",
                      "AllProductFiles": "4.3",
                      "HLFiles": "2.6",
                      "financialAmount": "60",
                      "finalAmount": "0.5",
                      "LapPercentage": "12",
                      "BLFiles": "0.3",
                      "BlPercentage": "8",
                      "SBLFiles": "0.9",
                      "SBLPercentage": "20"
                    }
                  }
                ]
              },
              {
                "data": {
                  "StateName": "Gwalior",
                  "AllProductFiles": "10.0",
                  "HLFiles": "6.0",
                  "financialAmount": "60",
                  "finalAmount": "1.2",
                  "LapPercentage": "12",
                  "BLFiles": "0.8",
                  "BlPercentage": "8",
                  "SBLFiles": "2.0",
                  "SBLPercentage": "20"
                },
                "children": [
                  {
                    "data": {
                      "StateName": "Gwalior",
                      "AllProductFiles": "4.0",
                      "HLFiles": "2.4",
                      "financialAmount": "60",
                      "finalAmount": "0.5",
                      "LapPercentage": "12",
                      "BLFiles": "0.3",
                      "BlPercentage": "8",
                      "SBLFiles": "0.8",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Morena",
                      "AllProductFiles": "2.8",
                      "HLFiles": "1.7",
                      "financialAmount": "60",
                      "finalAmount": "0.3",
                      "LapPercentage": "12",
                      "BLFiles": "0.2",
                      "BlPercentage": "8",
                      "SBLFiles": "0.6",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Bhind",
                      "AllProductFiles": "3.2",
                      "HLFiles": "1.9",
                      "financialAmount": "60",
                      "finalAmount": "0.4",
                      "LapPercentage": "12",
                      "BLFiles": "0.3",
                      "BlPercentage": "8",
                      "SBLFiles": "0.6",
                      "SBLPercentage": "20"
                    }
                  }
                ]
              },
              {
                "data": {
                  "StateName": "Bhopal",
                  "AllProductFiles": "8.1",
                  "HLFiles": "4.9",
                  "financialAmount": "60",
                  "finalAmount": "1.0",
                  "LapPercentage": "12",
                  "BLFiles": "0.6",
                  "BlPercentage": "8",
                  "SBLFiles": "1.6",
                  "SBLPercentage": "20"
                },
                "children": [
                  {
                    "data": {
                      "StateName": "Bhopal",
                      "AllProductFiles": "3.2",
                      "HLFiles": "1.9",
                      "financialAmount": "60",
                      "finalAmount": "0.4",
                      "LapPercentage": "12",
                      "BLFiles": "0.3",
                      "BlPercentage": "8",
                      "SBLFiles": "0.6",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Vidisha",
                      "AllProductFiles": "2.3",
                      "HLFiles": "1.4",
                      "financialAmount": "60",
                      "finalAmount": "0.3",
                      "LapPercentage": "12",
                      "BLFiles": "0.2",
                      "BlPercentage": "8",
                      "SBLFiles": "0.5",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Sehore",
                      "AllProductFiles": "2.6",
                      "HLFiles": "1.6",
                      "financialAmount": "60",
                      "finalAmount": "0.3",
                      "LapPercentage": "12",
                      "BLFiles": "0.2",
                      "BlPercentage": "8",
                      "SBLFiles": "0.5",
                      "SBLPercentage": "20"
                    }
                  }
                ]
              },
              {
                "data": {
                  "StateName": "Jabalpur",
                  "AllProductFiles": "6.9",
                  "HLFiles": "4.2",
                  "financialAmount": "60",
                  "finalAmount": "0.8",
                  "LapPercentage": "12",
                  "BLFiles": "0.6",
                  "BlPercentage": "8",
                  "SBLFiles": "1.4",
                  "SBLPercentage": "20"
                },
                "children": [
                  {
                    "data": {
                      "StateName": "Jabalpur",
                      "AllProductFiles": "2.8",
                      "HLFiles": "1.7",
                      "financialAmount": "60",
                      "finalAmount": "0.3",
                      "LapPercentage": "12",
                      "BLFiles": "0.2",
                      "BlPercentage": "8",
                      "SBLFiles": "0.6",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Sihora",
                      "AllProductFiles": "1.9",
                      "HLFiles": "1.2",
                      "financialAmount": "60",
                      "finalAmount": "0.2",
                      "LapPercentage": "12",
                      "BLFiles": "0.2",
                      "BlPercentage": "8",
                      "SBLFiles": "0.4",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Mandla",
                      "AllProductFiles": "2.2",
                      "HLFiles": "1.3",
                      "financialAmount": "60",
                      "finalAmount": "0.3",
                      "LapPercentage": "12",
                      "BLFiles": "0.2",
                      "BlPercentage": "8",
                      "SBLFiles": "0.4",
                      "SBLPercentage": "20"
                    }
                  }
                ]
              }
            ]
          },
          {
            "data": {
              "StateName": "Maharashtra",
              "AllProductFiles": "22.8",
              "HLFiles": "13.7",
              "financialAmount": "60",
              "finalAmount": "2.7",
              "LapPercentage": "12",
              "BLFiles": "1.8",
              "BlPercentage": "8",
              "SBLFiles": "4.6",
              "SBLPercentage": "20"
            },
            "children": [
              {
                "data": {
                  "StateName": "Mumbai",
                  "AllProductFiles": "8.0",
                  "HLFiles": "4.8",
                  "financialAmount": "60",
                  "finalAmount": "1.0",
                  "LapPercentage": "12",
                  "BLFiles": "0.6",
                  "BlPercentage": "8",
                  "SBLFiles": "1.6",
                  "SBLPercentage": "20"
                },
                "children": [
                  {
                    "data": {
                      "StateName": "Navi Mumbai",
                      "AllProductFiles": "3.2",
                      "HLFiles": "1.9",
                      "financialAmount": "60",
                      "finalAmount": "0.4",
                      "LapPercentage": "12",
                      "BLFiles": "0.3",
                      "BlPercentage": "8",
                      "SBLFiles": "0.6",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Thane",
                      "AllProductFiles": "2.2",
                      "HLFiles": "1.3",
                      "financialAmount": "60",
                      "finalAmount": "0.3",
                      "LapPercentage": "12",
                      "BLFiles": "0.2",
                      "BlPercentage": "8",
                      "SBLFiles": "0.4",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Kalyan",
                      "AllProductFiles": "2.5",
                      "HLFiles": "1.5",
                      "financialAmount": "60",
                      "finalAmount": "0.3",
                      "LapPercentage": "12",
                      "BLFiles": "0.2",
                      "BlPercentage": "8",
                      "SBLFiles": "0.5",
                      "SBLPercentage": "20"
                    }
                  }
                ]
              },
              {
                "data": {
                  "StateName": "Nashik",
                  "AllProductFiles": 5.9,
                  "HLFiles": "3.5",
                  "financialAmount": "60",
                  "finalAmount": "0.7",
                  "LapPercentage": "12",
                  "BLFiles": "0.5",
                  "BlPercentage": "8",
                  "SBLFiles": "1.2",
                  "SBLPercentage": "20"
                },
                "children": [
                  {
                    "data": {
                      "StateName": "Nashik",
                      "AllProductFiles": "2.4",
                      "HLFiles": "1.4",
                      "financialAmount": "60",
                      "finalAmount": "0.3",
                      "LapPercentage": "12",
                      "BLFiles": "0.2",
                      "BlPercentage": "8",
                      "SBLFiles": "0.5",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Malegaon",
                      "AllProductFiles": "1.7",
                      "HLFiles": "1.0",
                      "financialAmount": "60",
                      "finalAmount": "0.2",
                      "LapPercentage": "12",
                      "BLFiles": "0.1",
                      "BlPercentage": "8",
                      "SBLFiles": "0.3",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Sinnar",
                      "AllProductFiles": "1.9",
                      "HLFiles": "1.1",
                      "financialAmount": "60",
                      "finalAmount": "0.2",
                      "LapPercentage": "12",
                      "BLFiles": "0.2",
                      "BlPercentage": "8",
                      "SBLFiles": "0.4",
                      "SBLPercentage": "20"
                    }
                  }
                ]
              },
              {
                "data": {
                  "StateName": "Pune",
                  "AllProductFiles": "4.8",
                  "HLFiles": "2.9",
                  "financialAmount": "60",
                  "finalAmount": "0.6",
                  "LapPercentage": "12",
                  "BLFiles": "0.4",
                  "BlPercentage": "8",
                  "SBLFiles": "1.0",
                  "SBLPercentage": "20"
                },
                "children": [
                  {
                    "data": {
                      "StateName": "Pune",
                      "AllProductFiles": "1.9",
                      "HLFiles": "1.1",
                      "financialAmount": "60",
                      "finalAmount": "0.2",
                      "LapPercentage": "12",
                      "BLFiles": "0.2",
                      "BlPercentage": "8",
                      "SBLFiles": "0.4",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Bhor",
                      "AllProductFiles": "1.3",
                      "HLFiles": "0.8",
                      "financialAmount": "60",
                      "finalAmount": "0.2",
                      "LapPercentage": "12",
                      "BLFiles": "0.1",
                      "BlPercentage": "8",
                      "SBLFiles": "0.3",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Shikrapur",
                      "AllProductFiles": "1.5",
                      "HLFiles": "0.9",
                      "financialAmount": "60",
                      "finalAmount": "0.2",
                      "LapPercentage": "12",
                      "BLFiles": "0.1",
                      "BlPercentage": "8",
                      "SBLFiles": "0.3",
                      "SBLPercentage": "20"
                    }
                  }
                ]
              },
              {
                "data": {
                  "StateName": "Nagpur",
                  "AllProductFiles": "4.1",
                  "HLFiles": "2.5",
                  "financialAmount": "60",
                  "finalAmount": "0.5",
                  "LapPercentage": "12",
                  "BLFiles": "0.3",
                  "BlPercentage": "8",
                  "SBLFiles": "0.8",
                  "SBLPercentage": "20"
                },
                "children": [
                  {
                    "data": {
                      "StateName": "Nagpur",
                      "AllProductFiles": "1.6",
                      "HLFiles": "1.0",
                      "financialAmount": "60",
                      "finalAmount": 0.2,
                      "LapPercentage": "12",
                      "BLFiles": "0.1",
                      "BlPercentage": "8",
                      "SBLFiles": "0.3",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Amravati",
                      "AllProductFiles": "1.1",
                      "HLFiles": "0.7",
                      "financialAmount": "60",
                      "finalAmount": "0.1",
                      "LapPercentage": "12",
                      "BLFiles": "0.1",
                      "BlPercentage": "8",
                      "SBLFiles": "0.2",
                      "SBLPercentage": "20"
                    }
                  },
                  {
                    "data": {
                      "StateName": "Gondia",
                      "AllProductFiles": "1.3",
                      "HLFiles": "0.8",
                      "financialAmount": "60",
                      "finalAmount": "0.2",
                      "LapPercentage": "12",
                      "BLFiles": "0.1",
                      "BlPercentage": "8",
                      "SBLFiles": "0.3",
                      "SBLPercentage": "20"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
      
    ]
  }

  onFilterChange(selectedValue: string) {
    this.loginTotalAmount = +(Math.random() * 15).toFixed(2);
    this.loginTotalFiles = +(Math.random() * 15).toFixed(1);
    this.financialTotalAmount = +(Math.random() * 15).toFixed(2);
    this.financialTotalFiles = +(Math.random() * 15).toFixed(1);
    this.disbursalTotalAmount = +(Math.random() * 15).toFixed(2);
    this.disbursalTotalFiles = +(Math.random() * 15).toFixed(1);

    this.loginTotalAmount = +(
      Math.random() * (this.maxfinalAmountValue - this.minfinalAmountValue) +
      this.minfinalAmountValue
    ).toFixed(2);
    this.loginTotalFiles = +(
      Math.random() * (this.maxLoginFileValue - this.minLoginFileValue) +
      this.minLoginFileValue
    ).toFixed(0);

    this.financialTotalAmount = +(
      Math.random() *
        (this.maxfinancialAmountValue - this.minfinancialAmountValue) +
      this.minfinancialAmountValue
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
  }

  onStateChange(selectedValue: string) {
    this.loginTotalAmount = +(Math.random() * 15).toFixed(2);
    this.loginTotalFiles = +(Math.random() * 15).toFixed(1);
    this.financialTotalAmount = +(Math.random() * 15).toFixed(2);
    this.financialTotalFiles = +(Math.random() * 15).toFixed(1);
    this.disbursalTotalAmount = +(Math.random() * 15).toFixed(2);
    this.disbursalTotalFiles = +(Math.random() * 15).toFixed(1);
    this.finalTotalAmount = +(Math.random() * 15).toFixed(2);
    this.finalTotalFiles = +(Math.random() * 15).toFixed(1);
    this.loginTotalAmount = +(
      Math.random() * (this.maxfinalAmountValue - this.minfinalAmountValue) +
      this.minfinalAmountValue
    ).toFixed(2);
    this.loginTotalFiles = +(
      Math.random() * (this.maxLoginFileValue - this.minLoginFileValue) +
      this.minLoginFileValue
    ).toFixed(0);

    this.financialTotalAmount = +(
      Math.random() *
        (this.maxfinancialAmountValue - this.minfinancialAmountValue) +
      this.minfinancialAmountValue
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
        (this.maxDisbursalAmountValue - this.minDisbursalAmountValue) +
      this.minDisbursalAmountValue
    ).toFixed(2);
    this.finalTotalFiles = +(
      Math.random() *
        (this.maxDisbursalFileValue - this.minDisbursalFileValue) +
      this.minDisbursalFileValue
    ).toFixed(0);
  }

  onStateFilterChange(selectedValue: string) {
    this.tableShow = true;
  }

  onTatChange(selectedValue: string) {
    this.tableShow = false;
  }

  onStatusChange(selectedValue: string) {}
}
