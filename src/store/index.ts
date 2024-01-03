import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import bookSlice from "./bookSlice";

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        books: bookSlice.reducer
    },
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(bookSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export default store;
