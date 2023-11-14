import { ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-work-in-progress-tables',
  templateUrl: './work-in-progress-tables.component.html',
  styleUrls: ['./work-in-progress-tables.component.scss']
})
export class WorkInProgressTablesComponent {

  filters: string[] = ['Year to Date', 'Last Month'];

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
  selectedFilter: string = 'Year to Date';
  selectedFilterState: string = 'Pan India';
  selectedFilterBranch: string = 'Chandigarh';
  data = [
    {
      SNo: 1,
      leadNo: '1231',
      state: 'PCH',
      branchName: 'Chandigarh',
      cluster: 'Chandigarh',
      customerName: 'Amit Verma',
      productName: 'HL',
      Scheme: 'Top Up',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 2,
      leadNo: '1232',
      state: 'NCR',
      branchName: 'Janakpuri',
      cluster: 'Delhi',
      customerName: 'Vivek Singh',
      productName: 'SBL',
      Scheme: 'Fresh',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 3,
      leadNo: '1233',
      state: 'NCR',
      branchName: 'Laxmi Nagar',
      cluster: 'Delhi',
      customerName: 'Kritish Gujral',
      productName: 'SBL',
      Scheme: 'BT',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 4,
      leadNo: '1234',
      state: 'Rajasthan',
      branchName: 'Jaipur',
      cluster: 'Jaipur',
      customerName: 'Monica',
      productName: 'SBL',
      Scheme: 'SBL',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 5,
      leadNo: '1235',
      state: 'Gujarat',
      branchName: 'Ahmedabad',
      cluster: 'Ahmedabad',
      customerName: 'Amit Badana',
      productName: 'LAP',
      Scheme: 'Fresh',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 6,
      leadNo: '1236',
      state: 'Gujarat',
      branchName: 'Rundh',
      cluster: 'Surat',
      customerName: 'Shilpa Kumari',
      productName: 'BL',
      Scheme: 'Top Up',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 7,
      leadNo: '1237',
      state: 'MP',
      branchName: 'Indore',
      cluster: 'Indore',
      customerName: 'Khushagar',
      productName: 'LAP',
      Scheme: 'Fresh',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 8,
      leadNo: '1238',
      state: 'MP',
      branchName: 'Ujjain',
      cluster: 'Indore',
      customerName: 'Jaswinder Singh',
      productName: 'LAP',
      Scheme: 'Fresh',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 9,
      leadNo: '1239',
      state: 'Maharashtra',
      branchName: 'Mumbai',
      cluster: 'Navi Mumbai',
      customerName: 'Mohit Dogra',
      productName: 'SBL',
      Scheme: 'BT',
      LoginDate: '09/25/2023',
    },
    {
      SNo: 10,
      leadNo: '1240',
      state: 'Maharashtra',
      branchName: 'Nashik',
      cluster: 'Nashik',
      customerName: 'Rahul Saini',
      productName: 'SBL',
      Scheme: 'Top Up',
      LoginDate: '09/25/2023',
    },
   
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
