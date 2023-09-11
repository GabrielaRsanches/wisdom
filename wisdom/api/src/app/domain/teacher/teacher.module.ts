import { Module } from '@nestjs/common';
import { Teacher } from './Teacher';

@Module({
  imports: [Teacher],
  controllers: [],
  providers: [],
})
export class TeacherModule {}
