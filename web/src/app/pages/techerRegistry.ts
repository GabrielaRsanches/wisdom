import { Component } from "@angular/core";
import { Teacher } from "./teacherModel";
import { TeachingArea } from "../../../../libs/domain/enum";
import { NgForm } from "@angular/forms";


@Component({
  selector: 'teacher-registry',
  template: `

  <nb-layout center>
  <nb-layout-header>WISDOM</nb-layout-header>

  <nb-layout-column>
    <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
      <input name="name" ngModel required #name="ngModel">
      <input name="email" ngModel required #email="ngModel">
      <input name="password" ngModel required #password="ngModel">
      <button>Submit</button>
    </form>

    <p> name value: {{ name.value }}</p>
    <p> name valid: {{ name.valid }}</p>
    <p>email value: {{ email.value | json }}</p>
    <p>email valid: {{ email.valid }}</p>
  </nb-layout-column>

  <nb-layout-footer>Contact us</nb-layout-footer>
  </nb-layout>


  `
})
export default class TeacherRegistry {
  teacherRegistryForm = new Teacher("", "", "", [], TeachingArea.Portuguese);
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
