import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'main-menu',
  template: `
  <nb-layout>
  <nb-menu tag="menu" [items]="menuItems"></nb-menu>
  <div class="control-panel">
    <h3 class="h4">Selected item: {{ selectedItem }}</h3>
    <button nbButton (click)="addMenuItem()">Add Menu Item</button>
    <button nbButton (click)="collapseAll()">Collapse all menu items</button>
    <button nbButton (click)="navigateHome()">Home</button>
    <button nbButton (click)="getSelectedItem()">Get Selected Item</button>
  </div>
</nb-layout>
  `,
})
export class MainMenuComponent implements OnInit {
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  menuItems: NbMenuItem[] = [
    {
      title: 'Profile',
      icon: 'person-outline',
    },
    {
      title: 'Change Password',
      icon: 'lock-outline',
    },
    {
      title: 'Privacy Policy',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
    },
  ];

  private destroy$ = new Subject<void>();
  selectedItem!: string;

  constructor(private menuService: NbMenuService) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  addMenuItem() {
    this.menuService.addItems([{
      title: '@nebular/theme',
      target: '_blank',
      icon: 'plus-outline',
      url: 'https://github.com/akveo/ngx-admin',
    }], 'menu');
  }

  collapseAll() {
    this.menuService.collapseAll('menu');
  }

  navigateHome() {
    this.menuService.navigateHome('menu');
  }

  getSelectedItem() {
    this.menuService.getSelectedItem('menu')
      .pipe(takeUntil(this.destroy$))
      .subscribe( (menuBag: { item: { title: string; }; }) => {
        this.selectedItem = menuBag.item.title;
      });
  }
}
