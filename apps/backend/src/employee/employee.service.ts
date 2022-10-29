import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeEntity } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private employeeRepo: Repository<EmployeeEntity>
  ) {}
  create(createEmployeeDto: CreateEmployeeDto) {
    return this.employeeRepo.save(createEmployeeDto);
  }

  findAll() {
    return this.employeeRepo.find();
  }

  findOne(id: string) {
    return this.employeeRepo.findOneBy({ id });
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    const data = await this.employeeRepo
      .createQueryBuilder()
      .update(updateEmployeeDto)
      .where({
        id,
      })
      .returning('*')
      .execute();
    return data.raw[0] as EmployeeEntity;
  }

  remove(id: string) {
    return this.employeeRepo.delete({ id });
  }
}
