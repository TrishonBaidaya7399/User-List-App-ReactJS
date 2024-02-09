import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../../Features/Users/UsersSlice";



const store = configureStore({
    reducer: {
        usersReducer: usersReducer
    }
})

export default store;