import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  activeItem: string | null = '/home';

  showSubmenu: boolean = false;
  // submenus: any = {};
  submenus: any = {
    submenu1: false,
    submenu2: false,
    submenu3: false,
  };
  activeSubItems: { [key: string]: string } = {};

  constructor(
    private router: Router,
    private menuService: MenuService,
    private cdr: ChangeDetectorRef
  ) {
    this.menuService.searchTerm$.subscribe((term) => {
      this.activeItem = term;
    });
  }
  ngOnInit(): void {
    this.activeItem = this.menuService.getActiveMenuItem();
  }

  navigateToPage(path: string) {
    this.cdr.detectChanges();
    this.router.navigate([path]);
    this.activeItem = path;
    this.menuService.setActiveMenuItem(path);
  }

  navigateToSubPage(path: string,submenuName: string) {
    this.toggleSubmenu(submenuName); 
    this.cdr.detectChanges();
    this.router.navigate([path]);
    this.activeItem = path;
    this.menuService.setActiveMenuItem(path);
  }

  toggleSubmenu(submenuName: string) {
    this.submenus[submenuName] = !this.submenus[submenuName];
  }
}
