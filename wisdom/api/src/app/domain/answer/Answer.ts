import { RandomUUIDOptions } from "crypto";
import { Question, QuestionId } from "../question/Question";

export interface AnswerId {
  id: RandomUUIDOptions
}
export class Answer {
  constructor(
    private readonly studentId: AnswerId,
    private text: string,
    private answeringTo: QuestionId
  ){}

  async createAnswer(questionId: QuestionId, text: string){
    this.answeringTo = questionId
    this.text = text
  }
  async editAnswer( newText: string){
    this.text = newText
  }
  async deleteAnswer(answerId: AnswerId){}
}
