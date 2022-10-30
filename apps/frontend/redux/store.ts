import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../pages/employee/reduxSlice';

export default configureStore({
  reducer: {
    employee: employeeReducer,
  },
});
