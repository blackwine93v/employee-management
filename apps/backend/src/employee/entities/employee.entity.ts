import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EmployeeEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  first_name: string;

  @ApiProperty()
  @Column()
  last_name: string;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column()
  number: string;

  @ApiProperty()
  @Column()
  gender: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  photo?: string;
}

