import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-out-of-tat',
  templateUrl: './out-of-tat.component.html',
  styleUrls: ['./out-of-tat.component.scss']
})
export class OutOfTatComponent {
  constructor(private router :Router){

  }
  navigateToUrl(title: string){
    this.router.navigate(['/work-in-progress-table', title]);
  }
}
