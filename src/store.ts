import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../src/slice/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
