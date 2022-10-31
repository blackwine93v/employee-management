import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Button,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { EmployeeEntity } from 'apps/frontend/openapi';
import styles from './styles.module.scss';
import { getPhotoURL } from 'apps/frontend/helpers/utils';

interface Props {
  employees: EmployeeEntity[];
  onEdit: (employeeId: number) => void;
  onDelete: (employeeId: number) => void;
}

function TableViewEmployee({ employees, onDelete, onEdit }: Props) {
  return (
    <TableContainer component={Paper} className={styles.tableView}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className={styles.header}>
          <TableRow>
            <TableCell className={styles.headerText}>Image</TableCell>
            <TableCell className={styles.headerText}>First name</TableCell>
            <TableCell className={styles.headerText}>Last name</TableCell>
            <TableCell className={styles.headerText}>Email</TableCell>
            <TableCell className={styles.headerText}>Phone</TableCell>
            <TableCell className={styles.headerText}>Gender</TableCell>
            <TableCell className={styles.headerText}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Avatar src={getPhotoURL(row.photo)} alt="photo" variant="square"/>
              </TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.gender === 'M' ? 'Male' : 'Female'}</TableCell>
              <TableCell>
                <Button className={styles.editButton} variant="contained" onClick={() => onEdit(row.id)}>Edit</Button>
                <IconButton
                  aria-label="delete"
                  onClick={() => onDelete(row.id)}
                >
                  <DeleteIcon htmlColor='red' />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableViewEmployee;
