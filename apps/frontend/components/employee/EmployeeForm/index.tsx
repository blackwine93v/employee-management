import {
  Box,
  Button,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { Form, Field } from 'react-final-form';
import {
  composeValidators,
  maxLength,
  minLength,
  mustBeAlphabets,
  mustBeEmail,
  mustBeLKPhone,
  required,
} from 'apps/frontend/helpers/formValidation';
import styles from './styles.module.scss';

export type EmployeeFormStateValues = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  number: string;
  gender: string;
}

interface Props {
  buttonText: string;
  onSubmit: (values: EmployeeFormStateValues) => void
}

const renderTextField = (fieldName: keyof EmployeeFormStateValues, fieldLabel: string, validate) => (
  <Field name={fieldName} validate={validate}>
    {({ input, meta }) => (
      <Box className={styles.fieldBox}>
        <Typography className={styles.label}>{fieldLabel}</Typography>
        <Box className={styles.field}>
          <TextField className={styles.input} variant="filled" {...input} />
          {meta.touched && meta.error && (
            <Typography className={styles.error}>{meta.error}</Typography>
          )}
        </Box>
      </Box>
    )}
  </Field>
);

const renderDropdownField = (fieldName, fieldLabel, validate) => (
  <Field name={fieldName} validate={validate}>
    {({ input, meta }) => (
      <Box className={styles.fieldBox}>
        <Typography className={styles.label}>{fieldLabel}</Typography>
        <Box className={styles.field}>
          <Select className={styles.input} {...input}>
            <MenuItem value="M">Male</MenuItem>
            <MenuItem value="F">Female</MenuItem>
          </Select>
          {meta.touched && meta.error && (
            <Typography className={styles.error}>{meta.error}</Typography>
          )}
        </Box>
      </Box>
    )}
  </Field>
);

function EmployeeForm({ buttonText, onSubmit }: Props) {
  return (
    <Paper className={styles.container}>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          gender: 'M',
          // lastname: 'lastname',
          // firstname: 'firstname',
          // email: 'aaaaaa@aaa.ccc',
          // phone: '+94776633222'
        } as EmployeeFormStateValues}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {renderTextField(
              'firstname',
              'First name',
              composeValidators(
                required,
                minLength(6),
                maxLength(10),
                mustBeAlphabets
              )
            )}
            {renderTextField(
              'lastname',
              'Last name',
              composeValidators(
                required,
                minLength(6),
                maxLength(10),
                mustBeAlphabets
              )
            )}
            {renderTextField(
              'email',
              'Email',
              composeValidators(required, mustBeEmail)
            )}
            {renderTextField(
              'phone',
              'Phone',
              composeValidators(required, mustBeLKPhone)
            )}
            {renderDropdownField(
              'gender',
              'Gender',
              composeValidators(required)
            )}

            <Button
              className={styles.submitButton}
              variant="outlined"
              type="submit"
            >
              {buttonText || 'Submit'}
            </Button>
          </form>
        )}
      />
    </Paper>
  );
}

export default EmployeeForm;
