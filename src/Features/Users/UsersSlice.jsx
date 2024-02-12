import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";


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

    if (!response.ok) {
      console.error('Error in network request:', response.status, response.statusText);
      throw new Error('Network request failed');
    }

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
console.log(initialState);
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
        console.log('State before adding new user:', state.users);
        // state.users = [...state.users, action.payload];
        // state.users.push(action.payload);
        state.users = produce(state.users, (draft) => {
          draft.push(action.payload);
        });
        console.log('State after adding new user:', state.users);
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
