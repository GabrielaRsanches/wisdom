import { Component } from '@angular/core';

@Component({
  selector: 'teacher-registry',
  template: `
    <nb-layout center>
      <nb-layout-header>WISDOM</nb-layout-header>

      <nb-layout-column center style="margin-top:10ex">
        <div class="inputNome">
          <input
            type="text"
            nbInput
            status="info"
            placeholder="Nome"
            fullWidth
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
          placeholder="Áreas de atuação"
          status="info"
          style="margin-bottom:10px"
        >
          <nb-option value="1">Língua Portuguesa</nb-option>
          <nb-option value="2">Matemática</nb-option>
          <nb-option value="3">História</nb-option>
          <nb-option value="4">Geografia</nb-option>
          <nb-option value="4">Ciências</nb-option>
          <nb-option value="4">Literatura</nb-option>
          <nb-option value="4">Inglês</nb-option>
        </nb-select>

        <label for="fileInput" style="margin:10px"
          >Documento Comprobatório de Licenciatura</label
        >
        <input
          type="file"
          id="fileInput"
          (change)="onFileSelected($event)"
          accept=".pdf, .doc, .docx"
        />
      </nb-layout-column>

      <nb-layout-footer>
        <button nbButton outline status="success" fullWidth>Registre-se</button>
      </nb-layout-footer>
    </nb-layout>
  `,
  styleUrls: [`../../styles.css`],
})
export default class TeacherRegistry {
  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // You can now access the selected file and perform further actions, such as uploading it to a server.
      console.log('Selected File:', selectedFile);
    }
  }
}
