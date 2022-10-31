/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateEmployeeDto = {
    first_name: string;
    last_name: string;
    email: string;
    number: string;
    gender: CreateEmployeeDto.gender;
};

export namespace CreateEmployeeDto {

    export enum gender {
        M = 'M',
        F = 'F',
    }


}

