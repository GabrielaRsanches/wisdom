import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Router, RouterModule, Routes } from '@angular/router';
import HomeComponent from './pages/(home).page';
import { TeacherOrStudent } from './pages/teacherOrStudent';
import StudentRegistry from './pages/studentRegistry';
import TeacherRegistry from './pages/techerRegistry';
import { TeachersFeed } from './pages/teachersFeed';
import { NbButtonModule, NbLayoutModule, NbSidebarModule, NbSidebarService, NbThemeModule } from '@nebular/theme';


const routes: Routes = [
  { path: 'home', component: AppComponent  },
  { path: 'teacher-or-student', component: TeacherOrStudent },
  { path: 'student-registry', component: StudentRegistry },
  { path: 'teacher-registry', component: TeacherRegistry },
  { path: 'teachers-feed', component: TeachersFeed }
]

@NgModule({
  declarations: [ AppComponent, HomeComponent, TeacherOrStudent, StudentRegistry, TeacherRegistry ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule // , if this is your app.module

  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule {
  constructor(router: Router){}
}
