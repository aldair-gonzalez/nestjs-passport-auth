import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @IsString()
  name: string;

  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @IsString()
  last_name: string;

  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @IsString()
  login_method: string;
}
