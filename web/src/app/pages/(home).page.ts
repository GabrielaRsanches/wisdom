import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { AxiosService } from '../services/apiClient';

@Component({
  selector: 'web-home',
  template: `

    <teacher-registry></teacher-registry>
    <teacher-side-bar></teacher-side-bar>
   
  `,
})
export default class HomeComponent {
  constructor(private sidebarService: NbSidebarService, private axiosService: AxiosService) {}
}
