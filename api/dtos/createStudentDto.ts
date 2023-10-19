import { IsEmail, IsEnum, IsString, Min } from "class-validator";
import { Grade } from "../../libs/domain/src/enum";

export class CreateStudentDto{
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  password!: string;

  confirmedPassword = this.password

  @IsEnum(Grade)
  grade!: Grade;
}
