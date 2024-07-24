import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slice';
import userReducer from './user';

export const Store = configureStore({
  reducer: {
    tasks: tasksReducer,
    user: userReducer
  }
});
