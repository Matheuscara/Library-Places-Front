import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'sim',
  status: 'undefined',
}

export const InputSlice = createSlice({
  name: 'input',
  initialState,

  // Reducers
  reducers: {
    // actions
    changeaDress: (state, action) => {
      state.value = action.payload
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getInputApi.pending, (state) => {
  //       state.status = 'loading'
  //     })
  //     .addCase(getInputApi.fulfilled, (state, action) => {
  //       state.status = 'complete'
  //       state.value = action.payload
  //     })
  // },
})

//exportando as actions
export const { changeaDress } = InputSlice.actions

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAdress = (state) => state.input.value

// // We can also write thunks by hand, which may contain both sync and async logic.
// // Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default InputSlice.reducer
