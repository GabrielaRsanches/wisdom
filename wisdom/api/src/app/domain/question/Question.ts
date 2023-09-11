
import { RandomUUIDOptions } from "crypto";
import { Answer } from "../answer/Answer";
import { Subject } from "../enum";
import { Student } from "../student/Student";
import { Teacher } from "../teacher/Teacher";

interface QuestionId {
  id: RandomUUIDOptions
}
export class Question {
  constructor(
    private readonly questionId: QuestionId,
    private readonly subject: Subject[],
    private readonly title: string,
    private readonly description: string,
    private readonly madeBy: Student,
    private readonly createdAt: Date,
    private readonly answers: Answer[],
    private readonly answeredBy?: Teacher

  ){
   this.createdAt = new Date()
  }
}
