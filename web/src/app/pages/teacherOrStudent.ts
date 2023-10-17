import { Component } from '@angular/core';

@Component({
  selector: 'teacher-or-student',
  template: `
    <nb-layout center>
      <nb-layout-header>WISDOM</nb-layout-header>
      <nb-layout-column
        >REGISTRE-SE
        <div>
          <button
            class="teacherOrStudent"
            nbButton
            fullWidth
            size="giant"
            shape="round"
            status="success"
          >
            SOU ALUNO
          </button>
          <button
            class="teacherOrStudent"
            nbButton
            fullWidth
            size="giant"
            shape="round"
            status="success"
          >
            SOU PROFESSOR
          </button>
        </div>
      </nb-layout-column>
    </nb-layout>
  `,
  styleUrls: [`../../styles.css`],
})
export class TeacherOrStudent {}
