import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { fetchAllEmployee } from '../../../components/employee/reduxSlice';
import ListEmployee from '../../../components/employee/ListEmployee';

function EmployeeListPage() {
  const dispatch = useAppDispatch();
  const employees = useAppSelector((state) => state.employee.employees);
  React.useEffect(() => {
    dispatch(fetchAllEmployee());
  }, [dispatch]);

  return <ListEmployee employees={employees} />;
}

export default EmployeeListPage;
