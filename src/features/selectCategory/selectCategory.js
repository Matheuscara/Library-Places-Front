import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const SelectCategorySlice = createSlice({
  name: 'selectCategory',
  initialState,

  // Reducers
  reducers: {
    // actions
    changeSelectCategory: (state, action) => {
      state.value = action.payload
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getSelectCategoryApi.pending, (state) => {
  //       state.status = 'loading'
  //     })
  //     .addCase(getSelectCategoryApi.fulfilled, (state, action) => {
  //       state.status = 'complete'
  //       state.value = action.payload
  //     })
  // },
})

//exportando as actions
export const { changeSelectCategory } = SelectCategorySlice.actions

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const SelectCategory = (state) => state.selectCategory.value

// // We can also write thunks by hand, which may contain both sync and async logic.
// // Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default SelectCategorySlice.reducer
