import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HomeComponent from './pages/(home).page';

@Component({
  selector: 'web-root',
  standalone: true,
  imports: [HomeComponent],
  template: ` <web-home></web-home> `,
})
export class AppComponent {}
