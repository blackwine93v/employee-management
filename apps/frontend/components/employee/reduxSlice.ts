import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  CreateEmployeeDto,
  EmployeeEntity,
  UpdateEmployeeDto,
} from 'apps/frontend/openapi';
import { apiClient } from 'apps/frontend/services/apiClient';

export const fetchAllEmployee = createAsyncThunk(
  'employee/fetchAll',
  async () => {
    const response = await apiClient.employee.employeeControllerFindAll();
    return response;
  }
);

export const addEmployee = createAsyncThunk(
  'employee/add',
  async (data: CreateEmployeeDto) => {
    const response = await apiClient.employee.employeeControllerCreate(data);
    return response;
  }
);

export const updateEmployee = createAsyncThunk(
  'employee/update',
  async (data: { employeeId: number; updateFields: UpdateEmployeeDto }) => {
    const response = await apiClient.employee.employeeControllerUpdate(
      data.employeeId,
      data.updateFields
    );
    return response;
  }
);

export const deleteEmployee = createAsyncThunk(
  'employee/delete',
  async (employeeId: number) => {
    await apiClient.employee.employeeControllerRemove(employeeId);
    return employeeId;
  }
);

const initialState: {
  employees: EmployeeEntity[];
  isFetchingAll: boolean;
} = {
  employees: [],
  isFetchingAll: false,
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEmployee.pending, (state) => {
        state.isFetchingAll = true;
      })
      .addCase(fetchAllEmployee.fulfilled, (state, action) => {
        state.employees = action.payload;
        state.isFetchingAll = false;
      })
      .addCase(fetchAllEmployee.rejected, (state) => {
        state.isFetchingAll = false;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        if (action.payload.id) {
          state.employees = [...state.employees, action.payload];
        }
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        if (action.payload.id) {
          const employeeIndex = state.employees.findIndex(
            (emp) => emp.id === action.payload.id
          );
          if (employeeIndex !== -1) {
            const newList = [...state.employees];
            newList[employeeIndex] = action.payload;
            state.employees = newList;
          }
        }
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        if (action.payload) {
          const employeeIndex = state.employees.findIndex(
            (emp) => emp.id === action.payload
          );
          if (employeeIndex !== -1) {
            const newList = [...state.employees];
            newList.splice(employeeIndex, 1);
            state.employees = newList;
          }
        }
      });
  },
});

export default employeeSlice.reducer;
