import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPopularProducts = createAsyncThunk('popular/getPopularProducts', async(_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await fetch('https://dev.yjoz.com/api/v3/get_popular_products');
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const getProductDetails = createAsyncThunk('popular/getProductDetails', async(id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await fetch('https://dev.yjoz.com/api/v3/get_product_details/'+id);
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const getSuggestedProducts = createAsyncThunk('popular/getSuggestedProducts', async (bodyData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch('https://dev.yjoz.com/api/v3/get_suggested_products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(bodyData), // Replace with your request data
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

const popularProductsSlice = createSlice({
    name: "popular",
    initialState: { popular_products: [], isLoading: false, error: null,
        product_details: {}, isLoadingProductDetails: false, errorProductDetails: null,
        suggested_products: [], isLoadingSuggestedProducts: false, errorSuggestedProducts: null, },

    extraReducers: {
        [getPopularProducts.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getPopularProducts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.popular_products = action.payload.data;
        },
        [getPopularProducts.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },


        [getProductDetails.pending]: (state, action) => {
            state.isLoadingProductDetails = true;
            state.errorProductDetails = null;
        },
        [getProductDetails.fulfilled]: (state, action) => {
            state.isLoadingProductDetails = false;
            state.product_details = action.payload.data;
        },
        [getProductDetails.rejected]: (state, action) => {
            state.isLoadingProductDetails = false;
            state.errorProductDetails = action.payload;
        },
        

        [getSuggestedProducts.pending]: (state, action) => {
            state.isLoadingSuggestedProducts = true;
            state.errorSuggestedProducts = null;
        },
        [getSuggestedProducts.fulfilled]: (state, action) => {
            state.isLoadingSuggestedProducts = false;
            state.suggested_products = action.payload.data;
        },
        [getSuggestedProducts.rejected]: (state, action) => {
            state.isLoadingSuggestedProducts = false;
            state.errorSuggestedProducts = action.payload;
        },
    }
});

export default popularProductsSlice.reducer;