import { RandomUUIDOptions } from "crypto";
import { Question } from "../question/Question";

interface StudentId {
  id: RandomUUIDOptions
}
export class Answer {
  constructor(
    private readonly studentId: StudentId,
    private text: string,
    private readonly answeringTo: Question
  ){}
}
