import React from 'react';
import { Box, Button, Container } from '@mui/material';
import EmployeeForm, { EmployeeFormStateValues } from '../EmployeeForm';
import { useAppDispatch } from 'apps/frontend/redux/hook';
import { addEmployee } from 'apps/frontend/pages/employee/reduxSlice';
import { CreateEmployeeDto } from 'apps/frontend/openapi';
import { useSnackbar } from 'notistack';
import { withLayout } from '../withLayout';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';

function AddEmployee() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleFormSubmit = React.useCallback(
    async (values: EmployeeFormStateValues) => {
      try {
        await dispatch(
          addEmployee({
            first_name: values.firstname,
            last_name: values.lastname,
            email: values.email,
            number: values.phone,
            gender: values.gender as CreateEmployeeDto.gender,
          })
        ).unwrap();
        enqueueSnackbar('Added new employee successfully', {
          variant: 'success',
        });
      } catch (e) {
        enqueueSnackbar('Failed to add new employee', { variant: 'error' });
      }
    },
    [dispatch, enqueueSnackbar]
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
        >
          List View
        </Button>
        <EmployeeForm buttonText="ADD" onSubmit={handleFormSubmit} />
      </Box>
    </Container>
  );
}

export default withLayout(AddEmployee);
