import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  searchQuery: string = '';
  isMenuVisible: boolean = true;
  

  constructor(private router: Router , private sidebar : SidebarComponent) {}

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
    if (this.searchQuery.trim() == 'Mathew Anderson') {
      this.sidebar.navigateToPage('/business-rm')
      this.router.navigate(['/business-rm']);
    }else if(this.searchQuery.trim() == 'Jems Anderson'){
      this.router.navigate(['/business-supervisor']);
    }else if(this.searchQuery.trim() == 'Corey Anderson'){
      this.router.navigate(['/credit-cm']);
    }else if(this.searchQuery.trim() == 'Mark Anderson'){
      this.router.navigate(['/credit-supervisor']);
    }else if(this.searchQuery.trim() == 'Punjab'){
      this.router.navigate(['/branch-search']);
    }
    else{
      this.router.navigate(['/dashboard']);
    }
  }
}
