import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  activeItem = '/dashboard';
  constructor(private router : Router){

  }

  navigateToPage(path:string){
    this.router.navigate([path]);
    this.activeItem = path;
  }

 
}
