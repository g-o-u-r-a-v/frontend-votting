// reducers/authReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
  },
});

export const { setAuthToken } = authSlice.actions;

export default authSlice.reducer;
