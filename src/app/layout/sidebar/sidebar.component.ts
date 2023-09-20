import { Component } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private navbarService: NavbarService) {}

  get isNavbarCollapsed(): boolean {
    return this.navbarService.isCollapsed;
  }
}
