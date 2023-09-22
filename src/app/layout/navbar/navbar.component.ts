import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuVisible: boolean = true;
  toggleMenuDisplay() {
    const menu = document.querySelector('.wrapper') as HTMLElement;
   
    if (this.isMenuVisible) {
      menu.classList.remove('collapse-content');
    } else {
      menu.classList.add('collapse-content');
    }

    this.isMenuVisible = !this.isMenuVisible;
  }
}
