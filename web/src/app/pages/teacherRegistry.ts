import { Component } from "@angular/core";

@Component({
  selector: 'teacher-registry',
  template: `
  <nb-layout center>
  <nb-layout-header>WISDOM</nb-layout-header>

  <nb-layout-column>
  <input type="text" nbInput  status="info" placeholder="Nome">
  <input type="text" nbInput  status="info" placeholder="Email"><br>
  <input type="text" nbInput  status="info" placeholder="Senha">
  <input type="text" nbInput  status="info" placeholder="Confirme sua senha"><br>
  <input type="text" nbInput  status="info" placeholder="Áreas de atuação">
  <input type="text" nbInput  status="info" placeholder="Credenciais"><br>
  <button nbButton outline status="success">Registre-se</button>
  </nb-layout-column>

  <nb-layout-footer>Contact us</nb-layout-footer>
</nb-layout>




  `,
  styleUrls: [`../../styles.css`]
})
export default class TeacherRegistry {

}
