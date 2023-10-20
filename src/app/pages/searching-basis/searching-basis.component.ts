import { Component } from '@angular/core';

@Component({
  selector: 'app-searching-basis',
  templateUrl: './searching-basis.component.html',
  styleUrls: ['./searching-basis.component.scss']
})
export class SearchingBasisComponent {
  statusList :string[] = [
    'All',
    'Move to Disbursal',
    'Legal Report vetted',
    'Financial Approved',
    'Final Approved',
    'Technical vetted',
    'Technical Report Submitted',
    'Appraisal Submitted',
  ];
  selectedStatus:string = 'All'
  onStatusChange(selectedValue: string) {
    // this.generateRandomData();
  }
}

