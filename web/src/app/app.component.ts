import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HomeComponent from './pages/(home).page';

@Component({
  selector: 'web-root',
  standalone: true,
  imports: [HomeComponent, RouterOutlet],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}
