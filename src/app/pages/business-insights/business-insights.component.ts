import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  branchFilter: string[] = [
    'Select Branch',
    
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

  selectedState: string = 'Pan India';
  selectedFilter: string = 'September';

  selectedFilterState: string = 'Select State';
  selectedFilterBranch: string = 'Select Branch';
  routeName!: string | null;


  rows = [
    { name: 'John', age: 28, city: 'New York' },
    { name: 'Alice', age: 24, city: 'Los Angeles' },
    // Add more data as needed
  ];

  columns = [
    { prop: 'name', name: 'Name' },
    { prop: 'age', name: 'Age' },
    { prop: 'city', name: 'City' }
  ];
  constructor(private route: ActivatedRoute) {}



  onFilterChange(selectedValue: string) {
 
  }

  onStateChange(selectedValue: string) {
 
  }

  onStateFilterChange(selectedValue: string) {}
  onBranchFilterChange(selectedValue: string) {}

}
