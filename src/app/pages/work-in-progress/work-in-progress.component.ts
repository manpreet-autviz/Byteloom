import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.scss'],
})
export class WorkInProgressComponent {
  filters: string[] = ['Year to Date', 'Last Month'];

  states: string[] = [
    'Pan India',
    'PCH',
    'NCR',
    'Rajasthan',
    'Gujrat',
    'MP',
    'Maharashtra',
  ];
  selectedState: string = 'Pan India';
  selectedFilter: string = 'Year to Date';


 

  constructor(private router: Router) {}
  onFilterChange(selectedValue: string) {}

  onStateChange(selectedValue: string) {}
  workInprogressTable(title: string) {
    this.router.navigate(['/work-in-progress-table', title]);
  }
}
