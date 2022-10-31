import { Box, Container, Paper, Typography } from '@mui/material';
import React from 'react';
import styles from './styles.module.scss';

export function withLayout<P>(Component: React.ComponentType<P>) {
  const WithLayout = (props: P) => {
    return (
      <Container className={styles.container}>
        <Box className={styles.headerBox}>
          <Typography>Employee Manager</Typography>
        </Box>
        <Paper className={styles.content}>
          <Component {...props} />
        </Paper>
      </Container>
    );
  };
  return WithLayout;
};
