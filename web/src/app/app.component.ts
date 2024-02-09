import { Component, Inject } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';
import { PrimeNGConfig } from 'primeng/api';
import { AxiosService } from './services/apiClient';
@Component({
  selector: 'web-root',
  template: ` <web-home></web-home> `,
  styleUrls: [`../styles.css`],
})
export class AppComponent {
  constructor(
    private contexts: ChildrenOutletContexts,
    private primengConfig: PrimeNGConfig,
    @Inject(AxiosService) private axiosService: AxiosService
  ) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
