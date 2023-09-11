import { randomUUID } from "crypto";
import { Question } from "../question/Question";
import { Grade } from "../enum";


export class Student {
  constructor(
    private readonly studentId: string,
    private userName: string,
    private password: string,
    private grade: Grade,
    private readonly createdQuestions?: Question[]
  ){
    this.studentId =  randomUUID()
  }

  async createStudent(userName: string, password: string, grade: Grade){}
}
