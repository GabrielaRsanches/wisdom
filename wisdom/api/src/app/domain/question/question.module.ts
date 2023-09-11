import { Module } from '@nestjs/common';
import { Question } from './Question';

@Module({
  imports: [Question],
  controllers: [],
  providers: [],
})
export class QuestionModule {}
