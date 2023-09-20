import { Component } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private navbarService: NavbarService) {}

  toggleNavbar(): void {
    this.navbarService.toggleNavbar();
  }
}
