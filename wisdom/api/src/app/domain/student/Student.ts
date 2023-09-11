import { RandomUUIDOptions } from "crypto";
import { Question } from "../question/Question";
import { Grade } from "../enum";

interface StudentId {
  id: RandomUUIDOptions
}
export class Student {
  constructor(
    private readonly studentId: StudentId,
    private userName: string,
    private password: string,
    private readonly createdQuestions: Question[],
    private grade: Grade
  ){}
}
