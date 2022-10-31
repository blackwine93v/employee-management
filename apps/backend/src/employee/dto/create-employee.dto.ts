import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsPhoneNumber, IsUrl, MinLength, MaxLength, IsAlpha, IsEnum } from 'class-validator';

enum Gender {
  M = 'M',
  F = 'F'
}

export class CreateEmployeeDto {
  @IsAlpha()
  @MinLength(6)
  @MaxLength(10)
  @ApiProperty({ minLength: 6, maxLength: 10 })
  first_name: string;

  @IsAlpha()
  @MinLength(6)
  @MaxLength(10)
  @ApiProperty({ minLength: 6, maxLength: 10 })
  last_name: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @ApiProperty()
  @IsPhoneNumber('LK')
  number: string;

  @ApiProperty({ enum: Gender })
  @IsEnum(Gender)
  gender: Gender;
}
