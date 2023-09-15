import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import HomeComponent from './pages/(home).page';
import { TeacherOrStudent } from './pages/teacherOrStudent';
import StudentRegistry from './pages/studentRegistry';
import TeacherRegistry from './pages/techerRegistry';
import { TeachersFeed } from './pages/teachersFeed';


const routes: Routes = [
  { path: '/', component: HomeComponent  },
  { path: 'teacher-or-student', component: TeacherOrStudent },
  { path: 'student-registry', component: StudentRegistry },
  { path: 'teacher-registry', component: TeacherRegistry },
  { path: 'teachers-feed', component: TeachersFeed, redirectTo: "pages/teachersFeed.ts" }
]

@NgModule({
  declarations: [ AppComponent, HomeComponent, TeacherOrStudent, StudentRegistry, TeacherRegistry],
  imports: [ BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {

}
