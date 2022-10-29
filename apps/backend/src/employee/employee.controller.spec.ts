import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { EmployeeEntity } from './entities/employee.entity';

describe('EmployeeController', () => {
  let controller: EmployeeController;
  let service: EmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeController],
      providers: [
        EmployeeService,
        {
          provide: getRepositoryToken(EmployeeEntity),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<EmployeeController>(EmployeeController);
    service = module.get<EmployeeService>(EmployeeService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create and return an employee', async () => {
      const payload: CreateEmployeeDto = {
        first_name: 'first_name',
        last_name: 'last_name',
        number: '+942123232',
        gender: 'M',
        photo: 'http://aaa.com/photo.jpg',
        email: 'email@abc.com',
      };

      const result: CreateEmployeeDto & EmployeeEntity = {
        ...payload,
        id: '1',
      };

      jest.spyOn(service, 'create').mockImplementation(async () => result);

      expect(await controller.create(payload)).toBe(result);
    });
  });

  describe('findAll', () => {
    it('should return an array of employees', async () => {
      const result: EmployeeEntity[] = [
        {
          first_name: 'first_name',
          last_name: 'last_name',
          number: '+942123232',
          gender: 'M',
          photo: 'http://aaa.com/photo.jpg',
          email: 'email@abc.com',
          id: '1',
        },
      ];
      jest.spyOn(service, 'findAll').mockImplementation(async () => result);

      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return an employee with its id', async () => {
      const result: EmployeeEntity = {
        first_name: 'first_name',
        last_name: 'last_name',
        number: '+942123232',
        gender: 'M',
        photo: 'http://aaa.com/photo.jpg',
        email: 'email@abc.com',
        id: '1',
      };
      jest.spyOn(service, 'findOne').mockImplementation(async () => result);

      expect(await controller.findOne('1')).toBe(result);
    });
  });

  describe('update', () => {
    it('should update and return an employee', async () => {
      const payload: UpdateEmployeeDto = {
        first_name: 'first_name',
        last_name: 'last_name',
      };

      const result: EmployeeEntity = {
        first_name: 'first_name',
        last_name: 'last_name',
        number: '+942123232',
        gender: 'M',
        photo: 'http://aaa.com/photo.jpg',
        email: 'email@abc.com',
        id: '1',
      };

      jest.spyOn(service, 'update').mockImplementation(async () => result);

      expect(await controller.update('1', payload)).toBe(result);
    });
  });

  describe('delete', () => {
    it('should delete an employee with its id', async () => {
      jest.spyOn(service, 'remove').mockImplementation(jest.fn());
      controller.remove('1');

      expect(service.remove).toBeCalled();
    });
  });
});
