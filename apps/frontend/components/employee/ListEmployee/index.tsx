import React from 'react';
import { Box, Button, Container, IconButton } from '@mui/material';
import TocIcon from '@mui/icons-material/Toc';
import AppsIcon from '@mui/icons-material/Apps';
import { withLayout } from '../withLayout';
import { EmployeeEntity } from 'apps/frontend/openapi';
import { useAppDispatch } from 'apps/frontend/redux/hook';
import { deleteEmployee } from 'apps/frontend/pages/employee/reduxSlice';
import GridEmployee from './GridView';
import TableViewEmployee from './TableView';
import styles from './styles.module.scss';

interface Props {
  employees: EmployeeEntity[];
}

function ListEmployee({ employees }: Props) {
  const [isGridMode, setIsGridMode] = React.useState(true);
  const dispatch = useAppDispatch();
  const handleDelete = React.useCallback(
    (employeeId: string) => {
      if (confirm('Delete this employee?')) {
        dispatch(deleteEmployee(employeeId));
      }
    },
    [dispatch]
  );

  const handleEdit = React.useCallback((employeeId: string) => {
    console.log('Edit employeeId', employeeId);
  }, []);

  const handleChangeViewMode = () => {
    setIsGridMode((oldMode) => !oldMode);
  };

  return (
    <Container className={styles.container}>
      <Box className={styles.headerBox}>
        <Button variant='contained' className={styles.addButton}>Add employees</Button>
        <IconButton aria-label="delete" onClick={handleChangeViewMode}>
          {isGridMode ? (
            <TocIcon htmlColor="purple" />
          ) : (
            <AppsIcon htmlColor="purple" />
          )}
        </IconButton>
      </Box>

      {isGridMode ? (
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
  );
}

export default withLayout(ListEmployee);
