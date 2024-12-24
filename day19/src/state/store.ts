import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice"
import postsReducer from "./posts/postsSlice"
import usersReducer from "./users/userSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer, 
        users: usersReducer,
    }
})

export type RootState = ReturnType<typeof store.getState >;
export type AppDispatch = typeof store.dispatch;