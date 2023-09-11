import { RandomUUIDOptions } from "crypto";
import { Question } from "../question/Question";
import { TeachingAreas } from "../enum";
import { Email } from "../email.interface";

interface TeacherId {
  id: RandomUUIDOptions
}
export class Teacher {

  constructor(
    private readonly teacherId: TeacherId,
    private name: string,
    private email: Email,
    private password: string, 
    private readonly credentials: Credential[],
    private teachingArea: TeachingAreas,
    private score: number,
    private answeredQuestions: Question[]
  ){}
}
