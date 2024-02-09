// UserSlice.jsx
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch users async thunk
export const fetchUsersAsync = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await axios.get('https://user-list-app-react-js-server.vercel.app/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
});

// Add user async thunk
export const addUserAsync = createAsyncThunk('users/addUser', async (newUser) => {
  try {
    const response = await axios.post('https://user-list-app-react-js-server.vercel.app/users', newUser);
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
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
      // Fetch users reducer cases
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
      })
      // Add user reducer cases
      .addCase(addUserAsync.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
      })
      .addCase(addUserAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.status = 'succeeded';
      })
      .addCase(addUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

const usersReducer = usersSlice.reducer;

export default usersReducer;
export const { fetchUsers } = usersSlice.actions;
