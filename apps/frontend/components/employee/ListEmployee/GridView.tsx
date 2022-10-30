import React from 'react';
import { Grid } from '@mui/material';
import EmployeeCard from '../EmployeeCard';
import { EmployeeEntity } from 'apps/frontend/openapi';

interface Props {
  employees: EmployeeEntity[];
  onEdit: (employeeId: string) => void;
  onDelete: (employeeId: string) => void;
}

function GridEmployee({ employees, onDelete, onEdit }: Props) {
  return (
    <Grid container spacing={4}>
      {employees.map((employee) => (
        <Grid key={employee.id} item>
          <EmployeeCard
            employee={employee}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default GridEmployee;
