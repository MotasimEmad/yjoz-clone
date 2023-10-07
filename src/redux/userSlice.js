import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserProfile = createAsyncThunk('user/getUserProfile', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await fetch('https://dev.yjoz.com/api/v3/get_user_profile', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
  });

  export const getUserProducts = createAsyncThunk('user/getUserProducts', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(`https://dev.yjoz.com/api/v3/user_products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
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

const userSlice = createSlice({
    name: "user",
    initialState: { user: {}, isLoading: false, error: null , user_products: [], pagination: {}},
    extraReducers: {
        [getUserProfile.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getUserProfile.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.user = action.payload.data;
        },
        [getUserProfile.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
        },


      [getUserProducts.pending]: (state, action) => {
          state.isLoading = true;
          state.error = null;
      },
      [getUserProducts.fulfilled]: (state, action) => {
          state.isLoading = false;
          state.user_products = action.payload.data;
          state.pagination = action.payload.pagination;
      },
      [getUserProducts.rejected]: (state, action) => {
          state.isLoading = false;
          state.error = action.payload.error;
      },
    }
});

export default userSlice.reducer;