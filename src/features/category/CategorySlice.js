import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const getCategoriesApi = createAsyncThunk(
  'categorySlice/requestCategory',
  async ({ latitude, longitude }) => {
    return fetch(
      `${
        process.env.GOOGLE_PLACES_API || 'http://localhost:3001'
      }/places/categories/${latitude.toString()}/${longitude.toString()}/${5000}`
    ).then((res) => res.json())
  }
)

export const categorySlice = createSlice({
  name: 'category',
  initialState,

  // Reducers
  reducers: {
    // actions
    changeCategory: (state, action) => {
      state.value = action.payload
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesApi.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getCategoriesApi.fulfilled, (state, action) => {
        state.status = 'complete'
        state.value = action.payload
      })
  },
})

//exportando as actions
export const { changeCategory } = categorySlice.actions

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCategory = (state) => state.category.value

// // We can also write thunks by hand, which may contain both sync and async logic.
// // Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default categorySlice.reducer
