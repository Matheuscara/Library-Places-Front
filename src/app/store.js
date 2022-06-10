import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import InputSlice from '../features/Input/InputSlice'
import CategorySlice from '../features/category/CategorySlice'
import SelectCategory from '../features/selectCategory/selectCategory'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    input: InputSlice,
    category: CategorySlice,
    SelectCategory: SelectCategory,
  },
})
