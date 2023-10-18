import { Component } from '@angular/core';

@Component({
  selector: 'app-searching-basis',
  templateUrl: './searching-basis.component.html',
  styleUrls: ['./searching-basis.component.scss']
})
export class SearchingBasisComponent {
  statusList :string[] = [
    'Financial Approved',
    'Final Approved',
  ];
  selectedStatus:string = 'Financial Approved'
  onStatusChange(selectedValue: string) {
    // this.generateRandomData();
  }
}

