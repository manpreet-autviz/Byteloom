import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TreeNode } from 'primeng/api';
@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.scss'],
})
export class WorkInProgressComponent {
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
  selectedState: string = 'Pan India';
  selectedFilter: string = 'Month To Date';


  data: TreeNode[] = [
    {
        expanded: true,
        type: 'person',
        styleClass: 'bg-indigo-500 text-white',
        data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
            name: 'Amy Elsner',
            title: 'CEO'
        },
        children: [
            {
                expanded: true,
                type: 'person',
                styleClass: 'bg-purple-500 text-white',
                data: {
                    image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                    name: 'Anna Fali',
                    title: 'CMO'
                },
                children: [
                    {
                        label: 'Sales',
                        styleClass: 'bg-purple-500 text-white',
                        style: ' border-radius: 12px'
                    },
                    {
                        label: 'Marketing',
                        styleClass: 'bg-purple-500 text-white',
                        style: ' border-radius: 12px'
                    }
                ]
            },
            {
                expanded: true,
                type: 'person',
                styleClass: 'bg-teal-500 text-white',
                data: {
                    image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                    name: 'Stephen Shaw',
                    title: 'CTO'
                },
                children: [
                    {
                        label: 'Development',
                        styleClass: 'bg-teal-500 text-white'
                    },
                    {
                        label: 'UI/UX Design',
                        styleClass: 'bg-teal-500 text-white'
                    }
                ]
            }
        ]
    }
];

  constructor(private router: Router) {}
  onFilterChange(selectedValue: string) {}

  onStateChange(selectedValue: string) {}
  workInprogressTable(title: string) {
    this.router.navigate(['/work-in-progress-table', title]);
  }
}
