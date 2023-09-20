import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuVisible: boolean = true;
  toggleMenuDisplay() {
    const menu = document.querySelector('.navbar-menu') as HTMLElement;

    if (this.isMenuVisible) {
      menu.classList.remove('show');
    } else {
      menu.classList.add('show');
    }

    this.isMenuVisible = !this.isMenuVisible;
  }
}
