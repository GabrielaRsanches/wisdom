import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'web-home',
  template: `
    <teacher-side-bar></teacher-side-bar>
    <teacher-registry></teacher-registry>
    <main-menu></main-menu>
  `,
})
export default class HomeComponent {}
