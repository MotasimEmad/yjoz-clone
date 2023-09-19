import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sendFilterRequest = createAsyncThunk('filter_products/sendFilterRequest', async (filterData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch('https://dev.yjoz.com/api/v3/filter_product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(filterData), // Replace with your request data
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  });

const filterProductsSlice = createSlice({
    name: "filter_products",
    initialState: { products: [], isLoading: false, error: null },
    extraReducers: {
        [sendFilterRequest.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [sendFilterRequest.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.products = action.payload.data;
        },
        [sendFilterRequest.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export default filterProductsSlice.reducer;