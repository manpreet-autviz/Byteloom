import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-business-insights',
  templateUrl: './business-insights.component.html',
  styleUrls: ['./business-insights.component.scss'],
})
export class BusinessInsightsComponent {
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
  filters: string[] = [
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    // 'Select custom'
  ];
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
      productName: 'Product Name',
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

  filteredData: any[];
  selectedState: string = 'Pan India';
 selectedFilter: string = 'November';

  selectedFilterState: string = 'Pan India';
  selectedFilterBranch: string = 'Chandigarh';
  routeName!: string | null;

  constructor(private route: ActivatedRoute) {
    this.filteredData = this.data; //
  }

  ngAfterViewInit() {
    $(document).ready(() => {
      $('#dataTable').DataTable({
        lengthChange: false,
        searching: false,
        ordering: false,
      });
    });
  }

  ngOnDestroy() {
    $('#dataTable').DataTable().destroy(true);
  }

  onFilterChange(selectedValue: string) {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].leadNo = Math.floor(Math.random() * 10000).toString();
      this.data[i].state = this.getRandomState();
      this.data[i].branchName = this.getRandomBranch();
      this.data[i].customerName = this.getRandomCustomer();
    }
  }

  onStateChange(selectedValue: string) {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].leadNo = Math.floor(Math.random() * 10000).toString();
      this.data[i].state = this.getRandomState();
      this.data[i].branchName = this.getRandomBranch();
      this.data[i].customerName = this.getRandomCustomer();
    }
  }

  onStateFilterChange(selectedValue: string) {
    this.filterData();
  }

  onBranchFilterChange(selectedValue: string) {
    this.filterData();
  }

  filterData() {
    const selectedFilterLower = this.selectedFilterBranch.toLowerCase();
    const selectedStateLower = this.selectedFilterState.toLowerCase();

    if (selectedFilterLower === 'all' && selectedStateLower === 'all') {
      this.filteredData = this.data;
    } else {
      this.filteredData = this.data.filter((item) => {
        const branchNameLower = item.branchName.toLowerCase();
        const stateLower = item.state.toLowerCase();

        return (
          (selectedFilterLower === 'all' ||
            branchNameLower === selectedFilterLower) &&
          (selectedStateLower === 'all' || stateLower === selectedStateLower)
        );
      });
    }
  }

  getRandomState() {
    const states = [
      'PCH',
      'NCR',
      'RAJASTHAN',
      'Gujarat',
      'SURAT',
      'MP',
      'MAHARASHTRA',
    ];
    const randomIndex = Math.floor(Math.random() * states.length);
    return states[randomIndex];
  }

  getRandomBranch() {
    const branches = [
      'Chandigarh	',
      'Mumbai',
      'Delhi',
      'Indore',
      'Ujjain',
      'Rundh',
    ];
    const randomIndex = Math.floor(Math.random() * branches.length);
    return branches[randomIndex];
  }

  getRandomCustomer() {
    const customerName = [
      'Amit Verma	',
      'Vivek Singh',
      'Kritish Gujral',
      'Monica',
      'Khushagar',
      'Jaswinder Singh',
      'Mohit Dogra',
      'Rahul Saini',
    ];
    const randomIndex = Math.floor(Math.random() * customerName.length);
    return customerName[randomIndex];
  }
}
