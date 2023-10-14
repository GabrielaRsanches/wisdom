import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';


@Component({
  selector: 'web-root',
  template: `
  <teacher-registry></teacher-registry>
`,
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {}
}
