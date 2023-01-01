import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  user: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInWithOtp(state, action) {
      state.isAuth = true;
      state.user = action.payload;
    },

    signOut(state) {
      state.isAuth = false;
    },
  },
});

export const { signInWithOtp, signOut } = authSlice.actions;
export default authSlice.reducer;
