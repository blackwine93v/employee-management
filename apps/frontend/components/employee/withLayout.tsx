import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import styles from './styles.module.scss';

export function withLayout<P>(Component: React.ComponentType<P>) {
  const WithLayout = (props: P) => {
    return (
      <Container className={styles.container}>
        <Box className={styles.headerBox}>
          <Typography>Employee Manager</Typography>
        </Box>
        <Container className={styles.content}>
          <Component {...props} />
        </Container>
      </Container>
    );
  };
  return WithLayout;
};
