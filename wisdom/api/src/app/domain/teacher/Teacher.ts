import { randomUUID } from "crypto";
import { Question } from "../question/Question";
import { TeachingAreas } from "../enum";
import { Email } from "../email.interface";

export class Teacher {

  constructor(
    private readonly teacherId: string,
    private name: string,
    private email: Email,
    private password: string,
    private readonly credentials: Credential[],
    private teachingArea: TeachingAreas,
    private score: number,
    private answeredQuestions: Question[]
  ){
    this.teacherId = randomUUID()
  }
}
