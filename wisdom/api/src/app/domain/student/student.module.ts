import { Module } from '@nestjs/common';
import { Student } from './Student';

@Module({
  imports: [Student],
  controllers: [],
  providers: [],
})
export class StudentModule {}
