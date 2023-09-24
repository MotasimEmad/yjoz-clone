import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const calculateSummary = createAsyncThunk('order/sendFilterRequest', async (calculateSummaryData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch('https://dev.yjoz.com/api/v3/calculate_summery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(calculateSummaryData), // Replace with your request data
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

const ordersSlice = createSlice({
    name: "order",
    initialState: { order_data: null, isLoading: false, error: null },
    extraReducers: {
        [calculateSummary.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [calculateSummary.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.order_data = action.payload.data;
        },
        [calculateSummary.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export default ordersSlice.reducer;