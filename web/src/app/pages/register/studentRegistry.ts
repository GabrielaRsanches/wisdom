import { Component, Inject } from '@angular/core';
import { Grade } from '../../../../../libs/domain/src/enum';
import { AxiosService } from '../../services/apiClient';

@Component({
  selector: 'student-registry',
  template: `
    <nb-layout center>
      <nb-layout-header>WISDOM</nb-layout-header>
      <nb-layout-column center style="margin-top:10ex">
      <form (ngSubmit)="onSubmit()" #studentForm="ngForm">
        <div class="inputNome">
          <input
            type="text"
            nbInput
            status="info"
            placeholder="Nome"
            fullWidth
            [(ngModel)]="studentName"
            name="studentName"
            required
          />
        </div>
        <div class="inputEmail">
          <input
            type="text"
            nbInput
            status="info"
            placeholder="Email"
            fullWidth
          />
        </div>
        <div class="inputSenha">
          <input
            type="text"
            nbInput
            status="info"
            placeholder="Senha"
            fullWidth
          />
        </div>
        <div class="inputConfirmeSenha">
          <input
            type="text"
            nbInput
            status="info"
            placeholder="Confirme sua senha"
            fullWidth
          />
        </div>
        <nb-select
          placeholder="Cursando ..."
          [(ngModel)]="selectedOption"
          status="info"
          style="margin-bottom: 10px"
        >
          <nb-option value="1">Ensino Fundamental anos iniciais</nb-option>
          <nb-option value="2">Ensino Fundamental anos finais</nb-option>
        </nb-select>

        <nb-select
          *ngIf="selectedOption === '1'"
          id="EF1"
          [(ngModel)]="grade"
          name="grade"
          required
          placeholder="Ano..."
          status="info"
          style="margin-bottom: 10px"
        >
          <nb-option value="1">Primeiro ano</nb-option>
          <nb-option value="2">Segundo ano</nb-option>
          <nb-option value="3">Terceiro ano</nb-option>
          <nb-option value="4">Quarto ano</nb-option>
          <nb-option value="5">Quinto ano</nb-option>
        </nb-select>

        <nb-select
          *ngIf="selectedOption === '2'"
          id="EF2"
          placeholder="Ano..."
          status="info"
          style="margin-bottom: 10px"
        >
          <nb-option value="1">Sexto ano</nb-option>
          <nb-option value="2">Sétimo ano</nb-option>
          <nb-option value="3">Oitavo ano</nb-option>
          <nb-option value="4">Nono ano</nb-option>
        </nb-select>
        </form>
      </nb-layout-column>

      <nb-layout-footer>
        <button nbButton outline status="success" fullWidth>Registre-se</button>
      </nb-layout-footer>
    </nb-layout>
  `,
  styleUrls: [`../../../styles.css`],
})
export default class StudentRegistry {
  selectedOption: string = '';
  studentName: string = '';
  studentEmail: string = '';
  studentPassword: string = '';
  confirmedPassword: string = '';
  grade!: Grade;

  constructor(@Inject(AxiosService) private axiosService: AxiosService){}
  
  onSubmit() {
    const userData = {
      name: this.studentName,
      email: this.studentEmail,
      password: this.studentPassword,
      confirmedPassword: this.confirmedPassword,
      grade: this.grade
     
    };
    this.axiosService.wisdomApi.student.create(userData)
    console.log(userData)
  }
}
