import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ApiTags, ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { EmployeeEntity } from './entities/employee.entity';

@ApiTags('Employee')
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @ApiCreatedResponse({ type: EmployeeEntity })
  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @ApiOkResponse({ type: EmployeeEntity, isArray: true })
  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @ApiOkResponse({ type: EmployeeEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.employeeService.findOne(id);
  }

  @ApiOkResponse({ type: EmployeeEntity })
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateEmployeeDto: UpdateEmployeeDto
  ) {
    return this.employeeService.update(id, updateEmployeeDto);
  }

  @ApiOkResponse()
  @Delete(':id')
  remove(@Param('id') id: number) {
    this.employeeService.remove(id);
  }
}
