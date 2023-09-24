import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch('https://dev.yjoz.com/api/v3/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(userData), // Replace with your request data
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }
        const token = response.headers.get('Authorization');
            
        const data = await response.json();
        return {data, token};
        } catch (error) {
            return rejectWithValue(error);
        }
  });

  export const signUp = createAsyncThunk('auth/signUp', async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch('https://dev.yjoz.com/api/v3/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(userData), // Replace with your request data
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }
        const token = response.headers.get('Authorization');
            
        const data = await response.json();
        return {data, token};
        } catch (error) {
            return rejectWithValue(error);
        }
  });

const authSlice = createSlice({
    name: "auth",
    initialState: { user: JSON.parse(localStorage.getItem('user')) || {}, token: localStorage.getItem('token') || null, isLoading: false, error: null },
    extraReducers: {
        [login.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [login.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.user = action.payload.data.data;
            state.token = action.payload.token;

            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user', JSON.stringify(action.payload.data.data));
        },
        [login.rejected]: (state, action) => {
            state.isLoading = false;
            login.error = action.payload.error;
        },


      [signUp.pending]: (state, action) => {
          state.isLoading = true;
          state.error = null;
      },
      [signUp.fulfilled]: (state, action) => {
          state.isLoading = false;
          state.user = action.payload.data.data;
          state.token = action.payload.token;

          localStorage.setItem('token', action.payload.token);
          localStorage.setItem('user', JSON.stringify(action.payload.data.data));
      },
      [signUp.rejected]: (state, action) => {
          state.isLoading = false;
          login.error = action.payload.error;
      },
    }
});

export default authSlice.reducer;