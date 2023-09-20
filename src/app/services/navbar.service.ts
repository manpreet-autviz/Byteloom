import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  isCollapsed: boolean = false;

  toggleNavbar(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
