import { IsEmail } from 'class-validator';
import { TeachingArea } from './enum';
import { Question } from './question/Question';
export interface Email {
  email: string;
}

export interface TeacherInterface {
  readonly teacherId: string;
  name: string;
  email: Email;
  password: string;
  credentials: Credential[];
  teachingArea: TeachingArea;
  score: number;
  answeredQuestions?: Question[];
}
