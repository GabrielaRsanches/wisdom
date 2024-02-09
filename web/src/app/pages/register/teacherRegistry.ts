import { Component, Inject } from '@angular/core';
import { AxiosService } from '../../services/apiClient';
import { TeachingArea } from '../../../../../libs/domain/src/enum';
@Component({
  selector: 'teacher-registry',
  template: `
    <nb-layout center>
      <nb-layout-header>WISDOM</nb-layout-header>

      <nb-layout-column center style="margin-top: 10ex">
        <form (ngSubmit)="onSubmit()" #teacherForm="ngForm">
          <div class="inputNome">
            <input
              type="text"
              nbInput
              status="info"
              placeholder="Nome"
              fullWidth
              [(ngModel)]="teacherName"
              name="teacherName"
              required
            />
          </div>
          <div class="inputEmail">
            <input
              type="email"
              nbInput
              status="info"
              placeholder="Email"
              fullWidth
              [(ngModel)]="teacherEmail"
              name="teacherEmail"
              required
            />
          </div>
          <div class="inputSenha">
            <input
              type="password"
              nbInput
              status="info"
              placeholder="Senha"
              fullWidth
              [(ngModel)]="teacherPassword"
              name="teacherPassword"
              required
            />
          </div>
          <div class="inputConfirmeSenha">
            <input
              type="password"
              nbInput
              status="info"
              placeholder="Confirme sua senha"
              fullWidth
              [(ngModel)]="confirmPassword"
              name="confirmPassword"
              required
            />
          </div>
          <nb-select
            placeholder="Áreas de atuação"
            status="info"
            style="margin-bottom: 10px"
            [(ngModel)]="expertise"
            name="expertise"
            required
            multiple
          >
            <nb-option value="1">Língua Portuguesa</nb-option>
            <nb-option value="2">Matemática</nb-option>
            <nb-option value="3">História</nb-option>
            <nb-option value="4">Geografia</nb-option>
            <nb-option value="5">Ciências</nb-option>
            <nb-option value="6">Literatura</nb-option>
            <nb-option value="7">Inglês</nb-option>
          </nb-select>

          <label for="fileInput" style="margin: 10px">Documento Comprobatório de Licenciatura</label>
          <span class="required-indicator">*</span>
          <input
          type="file"
          id="fileInput"
          (change)="onFileSelected($event)"
          accept=".pdf, .doc, .docx"
          name="credentials" 
          ngModel 
          required 
          />
          <div class="file-upload-note">* Required field</div>
          
        </form>
      </nb-layout-column>

      <nb-layout-footer>
      <button nbButton outline status="success" (click)="onSubmit()
      " [disabled]="!teacherForm.form.valid" fullWidth>
      Registre-se
    </button> <!-- Add any additional footer content if needed -->
      </nb-layout-footer>
    </nb-layout>
  `,
  styleUrls: [`../../../styles.css`],
})
export default class TeacherRegistry {
  teacherName: string = '';
  teacherEmail: string = '';
  teacherPassword: string = '';
  confirmPassword: string = '';
  expertise: TeachingArea[] = [];
  credentials!: InputEventInit;

  constructor(@Inject(AxiosService) private axiosService: AxiosService){}
  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // You can now access the selected file and perform further actions, such as uploading it to a server.
      console.log('Selected File:', selectedFile);
    }
  }

  onSubmit() {
    const userData = {
      name: this.teacherName,
      email: this.teacherEmail,
      password: this.teacherPassword,
      confirmPassword: this.confirmPassword,
      teachingAreas: this.expertise,
      credentials: this.credentials
    };
    this.axiosService.wisdomApi.teacher.create(userData)
    .then(response =>{
      console.log('registration successful')
    })
    console.log(userData)
  }
  
}
