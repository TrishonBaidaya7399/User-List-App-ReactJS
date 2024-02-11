import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Fetch users async thunk
export const fetchUsersAsync = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
});

// Add user async thunk
export const addUserAsync = createAsyncThunk('users/addUser', async (newUser) => {
  try {
    const response = await fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    const createdUser = await response.json();
    console.log(createdUser);

    return createdUser;
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
      .addCase(addUserAsync.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'succeeded';

        // Add the newly created user to the users array
        state.users.push(action.payload);
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
