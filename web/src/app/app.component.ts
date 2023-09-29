import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';


@Component({
  selector: 'web-root',
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
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {}
}
