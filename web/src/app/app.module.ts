import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Router, RouterModule, Routes } from '@angular/router';
import HomeComponent from './components/pages/(home).page';
import { TeacherOrStudent } from './components/pages/register/teacherOrStudent';
import StudentRegistry from './components/pages/register/studentRegistry';
import TeacherRegistry from './components/pages/register/teacherRegistry';
import { TeachersFeed } from './components/pages/feeds/teachersFeed';
import {
  NbButtonModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuService,
  NbSelectModule,
  NbSidebarModule,
  NbSidebarService,
  NbThemeModule,
} from '@nebular/theme';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import { AccordionModule } from 'primeng/accordion';

import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './services/file-upload/file-upload.component';

import { TeacherSideBarComponent } from './components/pages/models/side-bar/side-bar.component';
import { QuestionsFeed } from './components/pages/feeds/questionsFeed';

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
    TeacherSideBarComponent,
    QuestionsFeed,
  ],
  imports: [
    CardModule,
    BrowserAnimationsModule,
    AccordionModule,
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

  providers: [NbSidebarService, NbMenuService],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(router: Router) {}
}
