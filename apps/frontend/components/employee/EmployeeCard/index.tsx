import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { EmployeeEntity } from 'apps/frontend/openapi';
import React from 'react';
import styles from './styles.module.scss';
import { getPhotoURL } from 'apps/frontend/helpers/utils';

interface Props {
  employee: EmployeeEntity;
  onEdit: (employeeId: string) => void;
  onDelete: (employeeId: string) => void;
}

function EmployeeCard({ employee, onDelete, onEdit }: Props) {
  return (
    <Card sx={{ width: 190 }} className={styles.container}>
      <CardMedia
        component="img"
        height="120"
        image={getPhotoURL(employee.photo)}
        alt="photo"
      />
      <CardContent>
        <Typography fontSize={14}>
          {employee.first_name} {employee.last_name}
        </Typography>
        <Typography fontSize={14}>{employee.email}</Typography>
        <Typography fontSize={14}>{employee.number}</Typography>
      </CardContent>
      <CardActions className={styles.actions}>
        <Typography fontSize={14}>
          {employee.gender === 'M' ? 'Male' : 'Female'}
        </Typography>
        <Box>
          <IconButton aria-label="delete" onClick={() => onDelete(employee.id)}>
            <DeleteIcon htmlColor='red' />
          </IconButton>
          <IconButton aria-label="edit" onClick={() => onEdit(employee.id)}>
            <ModeEditIcon htmlColor='green' />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}

export default EmployeeCard;
