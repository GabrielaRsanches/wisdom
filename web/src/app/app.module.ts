import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Router, RouterModule, Routes } from '@angular/router';
import HomeComponent from './pages/(home).page';
import { TeacherOrStudent } from './pages/teacherOrStudent';
import StudentRegistry from './pages/studentRegistry';
import TeacherRegistry from './pages/teacherRegistry';
import { TeachersFeed } from './pages/teachersFeed';
import {
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbLayoutFooterComponent,
  NbLayoutModule,
  NbSelectModule,
  NbSidebarModule,
  NbSidebarService,
  NbThemeModule,
} from '@nebular/theme';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './pages/models/file-upload/file-upload.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'teacher-or-student', component: TeacherOrStudent },
  { path: 'student-registry', component: StudentRegistry },
  { path: 'teacher-registry', component: TeacherRegistry },
  { path: 'teachers-feed', component: TeachersFeed },
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    TeacherOrStudent,
    StudentRegistry,
    TeacherRegistry,
    FileUploadComponent,
  ],
  imports: [
    NbSelectModule,
    NbThemeModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true }),
    CommonModule,
    NbLayoutModule,
    NbButtonModule,
    BrowserModule,
    NbInputModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    FormsModule,
    HttpClientModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
        }),
      ],
      forms: {},
    }),
  ],

  providers: [NbSidebarService],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(router: Router) {}
}
