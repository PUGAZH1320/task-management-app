import { createSlice,PayloadAction  } from "@reduxjs/toolkit";

interface UserState {
    name: string;
    email: string;
    password: string;
    password2: string;
  }
  
  const initialState: UserState = {
    name: '',
    email: '',
    password: '',
    password2:''
  };
  
  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      updateName: (state, action: PayloadAction<string>) => {
        state.name = action.payload;
      },
      updateEmail: (state, action: PayloadAction<string>) => {
        state.email = action.payload;
      },
      updatePassword: (state, action: PayloadAction<string>) => {
        state.password = action.payload;
      },
      updatePassword2: (state, action: PayloadAction<string>) => {
        state.password2 = action.payload;
      },
    },
  });
  
  export const { updateName, updateEmail, updatePassword, updatePassword2 } = userSlice.actions;
  
  export default userSlice.reducer;