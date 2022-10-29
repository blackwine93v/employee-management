import { Module } from '@nestjs/common';
import { EmployeeController } from '../employee/employee.controller';
import { EmployeeService } from '../employee/employee.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, EmployeeController],
  providers: [AppService, EmployeeService],
})
export class AppModule {}
