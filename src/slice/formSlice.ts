import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface submitState {
  isSubmitting: string
}
const initialState:submitState = {
  isSubmitting: ""
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setIsSubmitting: (state, action: PayloadAction<string>) => {
      state.isSubmitting = action.payload;
    },
  }
});

export const {setIsSubmitting } = formSlice.actions;

export default formSlice.reducer;
