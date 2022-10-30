/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateEmployeeDto } from '../models/CreateEmployeeDto';
import type { EmployeeEntity } from '../models/EmployeeEntity';
import type { UpdateEmployeeDto } from '../models/UpdateEmployeeDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EmployeeService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param requestBody
     * @returns EmployeeEntity
     * @throws ApiError
     */
    public employeeControllerCreate(
        requestBody: CreateEmployeeDto,
    ): CancelablePromise<EmployeeEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/employee',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns EmployeeEntity
     * @throws ApiError
     */
    public employeeControllerFindAll(): CancelablePromise<Array<EmployeeEntity>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/employee',
        });
    }

    /**
     * @param id
     * @returns EmployeeEntity
     * @throws ApiError
     */
    public employeeControllerFindOne(
        id: string,
    ): CancelablePromise<EmployeeEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/employee/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns EmployeeEntity
     * @throws ApiError
     */
    public employeeControllerUpdate(
        id: string,
        requestBody: UpdateEmployeeDto,
    ): CancelablePromise<EmployeeEntity> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/employee/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public employeeControllerRemove(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/employee/{id}',
            path: {
                'id': id,
            },
        });
    }

}
