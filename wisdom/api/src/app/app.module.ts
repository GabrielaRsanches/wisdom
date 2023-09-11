import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Teacher } from './domain/teacher/Teacher';
import { Student } from './domain/student/Student';
import { Question } from './domain/question/Question';
import { Answer } from './domain/answer/Answer';

@Module({
  imports: [
    Teacher,
    Student,
    Question,
    Answer
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
