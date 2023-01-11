import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  password: '',
  error: null,
  isSubmitting: false
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    }
  }
});

export const { updateName, updateEmail, updatePassword, setError, setIsSubmitting } = formSlice.actions;

export default formSlice.reducer;
