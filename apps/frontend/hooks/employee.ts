import React from 'react';
import { EmployeeEntity } from '../openapi';
import { apiClient } from '../services/apiClient';

export const useEmployee = (employeeId: number) => {
  const [employee, setEmployee] = React.useState<EmployeeEntity>();
  React.useEffect(() => {
    if (Number.isInteger(employeeId)) {
      apiClient.employee
        .employeeControllerFindOne(employeeId)
        .then(setEmployee);
    }
  }, [employeeId]);

  return { employee };
};
