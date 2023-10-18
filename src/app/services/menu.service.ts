import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private activeMenuItemKey = 'activeMenuItem';
  private searchTermSubject = new BehaviorSubject<string>('');
  public searchTerm$ = this.searchTermSubject.asObservable();
  
  setActiveMenuItem(item: string): void {
    localStorage.setItem(this.activeMenuItemKey, item);
  }

  getActiveMenuItem(): string | null {
    return localStorage.getItem(this.activeMenuItemKey);
  }
  setSearchTerm(searchTerm: string): void {
    this.searchTermSubject.next(searchTerm);
  }

}
