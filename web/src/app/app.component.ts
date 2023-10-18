import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'web-root',
  template: ` <web-home></web-home> `,
  styleUrls: [`../styles.css`],
})
export class AppComponent {
  constructor(
    private contexts: ChildrenOutletContexts,
    private primengConfig: PrimeNGConfig,
  ) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
