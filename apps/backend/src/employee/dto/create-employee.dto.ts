import { IsEmail, IsPhoneNumber, IsIn, IsUrl, MinLength, MaxLength, IsAlpha } from 'class-validator';

export class CreateEmployeeDto {
  @IsAlpha()
  @MinLength(6)
  @MaxLength(10)
  first_name: string;

  @IsAlpha()
  @MinLength(6)
  @MaxLength(10)
  last_name: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber('LK')
  number: string;

  @IsIn(['M', 'F'])
  gender: string;

  @IsUrl()
  photo: string;
}
