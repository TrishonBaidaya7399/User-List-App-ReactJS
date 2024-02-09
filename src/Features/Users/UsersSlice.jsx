// UserSlice.jsx
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsersAsync = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await axios.get('https://dummyjson.com/users');
    console.log(response);
    return response.data.users;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
});

const initialState = {
  users: [],
  isLoading: false,
  status: null,
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
const usersReducer = usersSlice.reducer;

export default usersReducer;
export const { fetchUsers } = usersSlice.actions;
