import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./counter/slice";

export const store = configureStore({
    reducer: {
        // contains all the reducers
        ...rootReducer,
    },
})