// src/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { name: '', email: '' },
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    }
  }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
