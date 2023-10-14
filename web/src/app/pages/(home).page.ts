import { Component } from '@angular/core';


@Component({
  selector: 'web-home',
  template: `

  <nb-layout center>
  <nb-layout-header>Awesome Company</nb-layout-header>

  <nb-layout-column>
    Hello World!
  </nb-layout-column>

  <nb-layout-footer>Contact us</nb-layout-footer>
</nb-layout>


  `,
})
export default class HomeComponent {}
