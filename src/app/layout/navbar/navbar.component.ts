import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MenuService } from 'src/app/services/menu.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  searchQuery: string = '';
  isMenuVisible: boolean = true;

  constructor(private router: Router, private menu: MenuService,private loginService:LoginService) {}

  toggleMenuDisplay() {
    const menu = document.querySelector('.wrapper') as HTMLElement;
    if (this.isMenuVisible) {
      menu.classList.remove('collapse-content');
    } else {
      menu.classList.add('collapse-content');
    }
    this.isMenuVisible = !this.isMenuVisible;
  }

  search() {
    const trimmedQuery = this.searchQuery.trim().toLowerCase(); // Convert query to lowercase

  if (trimmedQuery.startsWith('mathew')) { // Case-insensitive comparison
    this.menu.setSearchTerm('/business-rm');
    this.router.navigate(['/business-rm']);
  } else if (trimmedQuery.startsWith('jems')) { // Case-insensitive comparison
    this.menu.setSearchTerm('/business-supervisor');
    this.router.navigate(['/business-supervisor']);
  } else if (trimmedQuery.startsWith('corey')) { // Case-insensitive comparison
    this.menu.setSearchTerm('/credit-cm');
    this.router.navigate(['/credit-cm']);
  } else if (trimmedQuery.startsWith('mark')) { // Case-insensitive comparison
    this.menu.setSearchTerm('/credit-supervisor');
    this.router.navigate(['/credit-supervisor']);
  } else if (trimmedQuery.startsWith('jaipur')) { // Case-insensitive comparison
    this.router.navigate(['/branch-search']);
  } else if (trimmedQuery.startsWith('56565')) { // Case-insensitive comparison
    this.router.navigate(['/search']);
  } else {
    this.menu.setSearchTerm('/dashboard');
    this.router.navigate(['/dashboard']);
  }
}
logout(){
  this.loginService.logout();
  localStorage.clear();
  this.router.navigate(['/authentication']);
}
}
