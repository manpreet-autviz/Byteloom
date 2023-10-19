import { ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-tat-login-table',
  templateUrl: './tat-login-table.component.html',
  styleUrls: ['./tat-login-table.component.scss']
})
export class TatLoginTableComponent {

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

  statesFilter: string[] = [
    'Pan India',
    'Punjab',
    'Haryana',
    'NCR',
    'Rajasthan',
    'Gujarat',
    'MP',
    'Maharashtra',
  ];
  branchFilter: string[] = [
    'Chandigarh',
    'Mumbai',
    'Delhi',
    'Indore',
    'Ujjain',
    'Rundh',
  ];
  selectedState: string = 'Pan India';
  selectedFilter: string = 'Month To Date';
  selectedFilterState: string = 'Pan India';
  selectedFilterBranch: string = 'Chandigarh';


  data = [
    {
      SNo: 1,
      leadNo: '1231',
      state: 'PCH',
      branchName: 'CHANDIGARH',
      cluster: 'CLUSTER',
      customerName: 'Amit Verma',
      productName: 'PRODUCT NAME',
      Scheme: 'HOME LOAN',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 2,
      leadNo: '1232',
      state: 'NCR',
      branchName: 'DELHI',
      cluster: 'CLUSTER',
      customerName: 'Vivek Singh',
      productName: 'PRODUCT NAME',
      Scheme: 'SBL',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 3,
      leadNo: '1233',
      state: 'NCR',
      branchName: 'DELHI',
      cluster: 'CLUSTER',
      customerName: 'Kritish Gujral',
      productName: 'PRODUCT NAME',
      Scheme: 'SBL',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 4,
      leadNo: '1234',
      state: 'RAJASTHAN',
      branchName: 'JAIPUR',
      cluster: 'CLUSTER',
      customerName: 'Monica',
      productName: 'PRODUCT NAME',
      Scheme: 'SBL',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 5,
      leadNo: '1235',
      state: 'GUJRAT',
      branchName: 'AHMEDABAD',
      cluster: 'CLUSTER',
      customerName: 'Amit Badana',
      productName: 'PRODUCT NAME',
      Scheme: 'LAP',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 6,
      leadNo: '1236',
      state: 'SURAT',
      branchName: 'RUNDH',
      cluster: 'CLUSTER',
      customerName: 'Shilpa Kumari',
      productName: 'PRODUCT NAME',
      Scheme: 'BL',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 7,
      leadNo: '1237',
      state: 'MP',
      branchName: 'INDORE',
      cluster: 'CLUSTER',
      customerName: 'Khushagar',
      productName: 'PRODUCT NAME',
      Scheme: 'LAP',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 8,
      leadNo: '1238',
      state: 'MP',
      branchName: 'UJJAIN',
      cluster: 'CLUSTER',
      customerName: 'Jaswinder Singh',
      productName: 'PRODUCT NAME',
      Scheme: 'HOME LOAN',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 9,
      leadNo: '1239',
      state: 'MAHARASHTRA',
      branchName: 'MUMBAI',
      cluster: 'CLUSTER',
      customerName: 'Mohit Dogra',
      productName: 'PRODUCT NAME',
      Scheme: 'SBL',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 10,
      leadNo: '1240',
      state: 'MAHARASHTRA',
      branchName: 'MUMBAI',
      cluster: 'CLUSTER',
      customerName: 'Rahul Saini',
      productName: 'PRODUCT NAME',
      Scheme: 'SBL',
      LoginDate: '09/25/2023',
    },
    // Add more data as needed
  ];
  routeName!: string | null;
  constructor(
    private elementRef: ElementRef,
    private zone: NgZone,
    private cdRef: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}
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

  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.routeName = params.get('data');
    });
    
  }
  onStateFilterChange(selectedValue: string) {
   
  }

  onBranchFilterChange(selectedValue: string) {
  
  }
  
  onFilterChange(selectedValue: string) {}

  onStateChange(selectedValue: string) {}
}
