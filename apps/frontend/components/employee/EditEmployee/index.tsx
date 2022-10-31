import React from 'react';
import { Container } from '@mui/material';
import { withLayout } from '../withLayout';
import styles from './styles.module.scss';

function EditEmployee() {
  return <Container className={styles.container}>EditEmployee</Container>;
}

export default withLayout(EditEmployee);
