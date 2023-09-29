import { NgModel } from "@angular/forms";
import { TeachingArea } from "../../../../libs/domain/enum"

export class Teacher {

  constructor(
     name: string,
     email: string,
     password: string,
     credentials: Credential[],
     teachingArea: TeachingArea,
  ){

  }
}
