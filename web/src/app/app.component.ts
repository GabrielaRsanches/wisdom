import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'web-root',
  template: `
  <web-home></web-home>
  `,
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {}
}
