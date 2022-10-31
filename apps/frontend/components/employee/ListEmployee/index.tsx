import React from 'react';
import { Box, Button, Container, IconButton } from '@mui/material';
import TocIcon from '@mui/icons-material/Toc';
import AppsIcon from '@mui/icons-material/Apps';
import { withLayout } from '../withLayout';
import { EmployeeEntity } from 'apps/frontend/openapi';
import { useAppDispatch } from 'apps/frontend/redux/hook';
import { deleteEmployee } from 'apps/frontend/components/employee/reduxSlice';
import GridEmployee from './GridView';
import TableViewEmployee from './TableView';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import {
  ViewMode,
  ViewModeContext,
} from 'apps/frontend/context/ViewModeContext';

interface Props {
  employees: EmployeeEntity[];
}

function ListEmployee({ employees }: Props) {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const handleDelete = React.useCallback(
    async (employeeId: number) => {
      try {
        if (confirm('Delete this employee?')) {
          await dispatch(deleteEmployee(employeeId)).unwrap();
          enqueueSnackbar('Deleted successfully', { variant: 'success' });
        }
      } catch (e) {
        enqueueSnackbar('Failed to delete this employee', { variant: 'error' });
      }
    },
    [dispatch, enqueueSnackbar]
  );

  const handleEdit = React.useCallback(
    (employeeId: number) => {
      if (employeeId) {
        router.push(`/employee/edit/${employeeId}`);
      }
    },
    [router]
  );

  const handleAdd = React.useCallback(() => {
    router.push('/employee/add');
  }, [router]);

  return (
    <ViewModeContext.Consumer>
      {({ mode, changeMode }) => (
        <Container className={styles.container}>
          <Box className={styles.headerBox}>
            <Button
              variant="contained"
              className={styles.addButton}
              onClick={handleAdd}
            >
              Add employees
            </Button>
            <IconButton data-testid='switch-viewmode' onClick={changeMode}>
              {mode === ViewMode.Grid ? (
                <TocIcon htmlColor="purple" />
              ) : (
                <AppsIcon htmlColor="purple" />
              )}
            </IconButton>
          </Box>

          {mode === ViewMode.Grid ? (
            <GridEmployee
              employees={employees}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ) : (
            <TableViewEmployee
              employees={employees}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          )}
        </Container>
      )}
    </ViewModeContext.Consumer>
  );
}

export default withLayout(ListEmployee);
