import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, content } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) {
        task.content = content;
      }
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    }
  }
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
