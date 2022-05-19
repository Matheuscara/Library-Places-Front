import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import InputSlice from '../features/Input/InputSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    input: InputSlice,
  },
})
