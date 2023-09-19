import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk('category/getCategories', async(_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await fetch('https://dev.yjoz.com/api/v3/get_available_categories');
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const categoriesSlice = createSlice({
    name: "category",
    initialState: { categories: [], isLoading: false, error: null },
    extraReducers: {
        [getCategories.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getCategories.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.categories = action.payload.data;
        },
        [getCategories.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export default categoriesSlice.reducer;