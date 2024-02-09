import { Component, OnInit } from '@angular/core';
import { NbButtonAppearance, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'teacher-side-bar',
  template: ` <nb-layout >
    <nb-layout-header fixed>
      <button
        nbButton
        ghost
        status="primary"
        hero
        size="tiny"
        (click)="toggle()"
      >
        {{ isToggled ? 'Fechar' : 'Abrir' }}
        
      </button>
      <h3 style="margin-left: 18em;">Registre-se</h3>
    </nb-layout-header>
    <nb-layout-column>
    <nb-sidebar fixed>
      <button
        nbButton
        class="buttons-side-bar"
        hero
        status="success"
        size="small"
        fullWidth
      >
        Início</button
      ><br />
      <button
        nbButton
        class="buttons-side-bar"
        hero
        status="success"
        size="small"
        fullWidth
      >
        Seu perfil</button
      ><br />
      <button
        nbButton
        class="buttons-side-bar"
        hero
        status="success"
        size="small"
        fullWidth
      >
        Participações
      </button>
    </nb-sidebar>
    </nb-layout-column>
  </nb-layout>`,
  styleUrls: [`../../../../styles.css`],
})
export class TeacherSideBarComponent implements OnInit {
  toggle() {
    this.sidebarService.toggle();
    this.isToggled = !this.isToggled;
  }
  isToggled: boolean = true;

  constructor(private sidebarService: NbSidebarService) {}

  ngOnInit() {}
}
