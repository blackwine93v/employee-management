import EditEmployee from 'apps/frontend/components/employee/EditEmployee';
import { useEmployee } from 'apps/frontend/hooks/employee';
import { EmployeeEntity } from 'apps/frontend/openapi';
import { useRouter } from 'next/router';
import React from 'react';

function EmployeeEditPage() {
  const router = useRouter();
  const employeeId = Number(router.query?.employeeId);
  const { employee } = useEmployee(employeeId);

  return <EditEmployee employee={employee || {} as EmployeeEntity} />;
}

export default EmployeeEditPage;
