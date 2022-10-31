import React from 'react';
import { Box, Button, Container } from '@mui/material';
import EmployeeForm, { EmployeeFormStateValues } from '../EmployeeForm';
import { useAppDispatch } from 'apps/frontend/redux/hook';
import { updateEmployee } from 'apps/frontend/components/employee/reduxSlice';
import { CreateEmployeeDto, EmployeeEntity } from 'apps/frontend/openapi';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import { withLayout } from '../withLayout';
import styles from './styles.module.scss';

interface Props {
  employee: EmployeeEntity;
}

function EditEmployee({ employee }: Props) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleFormSubmit = React.useCallback(
    async (values: EmployeeFormStateValues) => {
      try {
        await dispatch(
          updateEmployee({
            employeeId: employee.id,
            updateFields: {
              first_name: values.firstname,
              last_name: values.lastname,
              email: values.email,
              number: values.phone,
              gender: values.gender as CreateEmployeeDto.gender,
            },
          })
        ).unwrap();
        enqueueSnackbar('Updated successfully', {
          variant: 'success',
        });
      } catch (e) {
        enqueueSnackbar('Failed to update the employee', { variant: 'error' });
      }
    },
    [dispatch, enqueueSnackbar, employee.id]
  );

  const handleOpenListView = () => {
    router.push('/employee/list');
  };

  return (
    <Container className={styles.container}>
      <Box className={styles.boxContent}>
        <Button
          className={styles.buttonListView}
          variant="contained"
          onClick={handleOpenListView}
          data-testid='EditEmployee-viewlist-btn'
        >
          List View
        </Button>
        <EmployeeForm
          buttonText="SAVE"
          onSubmit={handleFormSubmit}
          values={{
            firstname: employee.first_name,
            lastname: employee.last_name,
            email: employee.email,
            phone: employee.number,
            gender: employee.gender,
          }}
        />
      </Box>
    </Container>
  );
}

export default withLayout(EditEmployee);
