import { Grade, TeachingArea } from '../../../../libs/domain/src/enum';
import { Email } from '../../../../libs/domain/src/interfaces'
import { Student } from '../../../../libs/domain/src/student/Student';
import { FileUploadComponent } from './file-upload/file-upload.component';

export class ConfirmedPassword {
  arePasswordsMatching(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
  };
  constructor(readonly passwordOne: string, readonly passwordTwo: string,  arePasswordsMatching: boolean = false){
    arePasswordsMatching = this.arePasswordsMatching(passwordOne, passwordOne)
  }
}

export interface TeacherRegistry {
  name: string;
  email: Email;
  password: string;
  confirmPassword: ConfirmedPassword;
  teachingAreas: TeachingArea[];
  credentials: FileUploadComponent
}

export interface StudentRegistry {
  name: string;
  email: Email;
  password: ConfirmedPassword;
  confirmPassword: string;
  grade: Grade;

  
}

export interface Question {
  student: Student;
  title: string;
  description: string;
  answer?: Answer[]
}

export interface Answer {
  question: Question;
  text: string
}