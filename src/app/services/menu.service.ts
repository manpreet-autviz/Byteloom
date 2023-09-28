import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private activeMenuItemKey = 'activeMenuItem';

  setActiveMenuItem(item: string): void {
    localStorage.setItem(this.activeMenuItemKey, item);
  }

  getActiveMenuItem(): string | null {
    return localStorage.getItem(this.activeMenuItemKey);
  }
}
