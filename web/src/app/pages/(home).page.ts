import { Component } from '@angular/core';


@Component({
  selector: 'web-home',
  template: `

  <nb-layout>
  <nb-layout-header fixed>Company Name</nb-layout-header>

  <nb-sidebar>Sidebar Content</nb-sidebar>

  <nb-layout-column>
    Page Content <button nbButton>Hello World</button>
  </nb-layout-column>
</nb-layout>

  `,
})
export default class HomeComponent {}
