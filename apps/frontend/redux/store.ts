import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../pages/employee/reduxSlice';

const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
