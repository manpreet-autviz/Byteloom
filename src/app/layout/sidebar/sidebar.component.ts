import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  activeItem: string | null = '/dashboard';
  showSubmenu:boolean = false;
  submenus: any = {};
  constructor(private router : Router,private menuService: MenuService){

  }
  ngOnInit(): void {
    this.activeItem = this.menuService.getActiveMenuItem();
  }

  navigateToPage(path:string){
    this.router.navigate([path]);
    this.activeItem = path;
    this.menuService.setActiveMenuItem(path);
  }

  toggleSubmenu(submenuName: string){
    this.submenus[submenuName] = !this.submenus[submenuName];
  }
 
}
