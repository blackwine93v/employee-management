import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeService } from './employee.service';
import { EmployeeEntity } from './entities/employee.entity';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let repository: Repository<EmployeeEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeeService,
        {
          provide: getRepositoryToken(EmployeeEntity),
          useValue: {
            find: jest.fn(),
            save: jest.fn(),
            delete: jest.fn(),
            findOneBy: jest.fn(),
            createQueryBuilder: jest.fn(() => ({
              where: jest.fn(),
              update: jest.fn(),
              returning: jest.fn(),
              execute: jest.fn(),
            })),
          },
        },
      ],
    }).compile();

    service = module.get<EmployeeService>(EmployeeService);
    repository = module.get<Repository<EmployeeEntity>>(
      getRepositoryToken(EmployeeEntity)
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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

      jest.spyOn(repository, 'save').mockImplementation(async () => result);

      expect(await service.create(payload)).toBe(result);
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
      jest.spyOn(repository, 'find').mockImplementation(async () => result);
      expect(await service.findAll()).toBe(result);
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
      jest
        .spyOn(repository, 'findOneBy')
        .mockImplementation(async () => result);

      expect(await service.findOne('1')).toBe(result);
    });
  });

  describe('update', () => {
    it('should update and return an employee', async () => {
      const payload: UpdateEmployeeDto = {
        first_name: 'first_name',
        last_name: 'last_name',
      };

      const result: UpdateResult = {
        raw: [
          {
            first_name: 'first_name',
            last_name: 'last_name',
            number: '+942123232',
            gender: 'M',
            photo: 'http://aaa.com/photo.jpg',
            email: 'email@abc.com',
            id: '1',
          },
        ],
        generatedMaps: [],
      };

      jest.spyOn(repository, 'createQueryBuilder').mockImplementation(() => ({
        ...repository.createQueryBuilder.prototype,
        update: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        returning: jest.fn().mockReturnThis(),
        execute: async () => result
      }));

      expect(await service.update('1', payload)).toBe(result.raw[0]);
    });
  });

  describe('delete', () => {
    it('should delete an employee with its id', async () => {
      jest.spyOn(repository, 'delete').mockImplementation(jest.fn());
      service.remove('1');

      expect(repository.delete).toBeCalled();
    });
  });
});
