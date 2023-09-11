import { Module } from '@nestjs/common';
import { Answer } from './Answer';

@Module({
  imports: [Answer],
  controllers: [],
  providers: [],
})
export class AnswerModule {}
