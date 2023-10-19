import { IsEmail, IsEnum, IsString, Min } from "class-validator";
import { TeachingArea } from '../../libs/domain/src/enum'
import { File } from "buffer";

export class CreateTeacherDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @Min(5)
  password!: string;

  confirmPassword = this.password

  @IsEnum(TeachingArea)
  teachingAreas!: TeachingArea[];

  credentials!: File;
}
